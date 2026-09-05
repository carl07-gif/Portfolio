import { useEffect, useRef, useState, useCallback } from 'react';

const LERP_TAU = 8;
const SNAP = 0.002;
const LRU_MAX = 24;
const LEAD = 24;
const WATCHDOG = 60000;

interface FrameItem {
  ts: number; // in microseconds
  blob: Blob;
}

// Robust helper to load MP4Box in browser
async function getMP4Box(): Promise<any> {
  if (typeof window !== 'undefined' && (window as any).MP4Box) {
    return (window as any).MP4Box;
  }

  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject('No window');
    if ((window as any).MP4Box) return resolve((window as any).MP4Box);

    const existing = document.querySelector('script[src*="mp4box"]');
    if (existing) {
      existing.addEventListener('load', () => resolve((window as any).MP4Box));
      existing.addEventListener('error', () => reject('Failed to load MP4Box script'));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mp4box@0.5.2/dist/mp4box.all.min.js';
    script.onload = () => {
      if ((window as any).MP4Box) {
        resolve((window as any).MP4Box);
      } else {
        reject('MP4Box not loaded from CDN');
      }
    };
    script.onerror = () => reject('Failed to load MP4Box script');
    document.head.appendChild(script);
  });
}


export function useVideoScrub(videoSrc: string) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [canvasLive, setCanvasLive] = useState(false);

  const bankRef = useRef<FrameItem[]>([]);
  const lruRef = useRef<Map<number, ImageBitmap | null>>(new Map());
  const lruOrderRef = useRef<number[]>([]);

  const readyRef = useRef(false);
  const revertedRef = useRef(false);
  const durRef = useRef(0);
  const currentTimeRef = useRef(0);
  const targetTimeRef = useRef(0);

  // Binary search for nearest frame in bank
  const getNearestIndex = useCallback((timeMicroseconds: number): number => {
    const bank = bankRef.current;
    if (bank.length === 0) return -1;
    if (timeMicroseconds <= bank[0].ts) return 0;
    if (timeMicroseconds >= bank[bank.length - 1].ts) return bank.length - 1;

    let low = 0;
    let high = bank.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (bank[mid].ts === timeMicroseconds) return mid;
      if (bank[mid].ts < timeMicroseconds) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    if (low >= bank.length) return bank.length - 1;
    if (high < 0) return 0;

    const diffLow = Math.abs(bank[low].ts - timeMicroseconds);
    const diffHigh = Math.abs(bank[high].ts - timeMicroseconds);
    return diffLow < diffHigh ? low : high;
  }, []);

  // LRU cache management
  const requestBitmap = useCallback((index: number): ImageBitmap | null => {
    if (index < 0 || index >= bankRef.current.length) return null;

    const lru = lruRef.current;
    const lruOrder = lruOrderRef.current;

    if (lru.has(index)) {
      const orderIdx = lruOrder.indexOf(index);
      if (orderIdx > -1) {
        lruOrder.splice(orderIdx, 1);
        lruOrder.push(index);
      }
      return lru.get(index) || null;
    }

    lru.set(index, null);
    lruOrder.push(index);

    const item = bankRef.current[index];
    createImageBitmap(item.blob)
      .then((bitmap) => {
        lru.set(index, bitmap);
      })
      .catch(() => {
        lru.delete(index);
        const idx = lruOrder.indexOf(index);
        if (idx > -1) lruOrder.splice(idx, 1);
      });

    while (lruOrder.length > LRU_MAX) {
      const oldestIndex = lruOrder.shift();
      if (oldestIndex !== undefined) {
        const oldBmp = lru.get(oldestIndex);
        if (oldBmp) oldBmp.close();
        lru.delete(oldestIndex);
      }
    }

    return null;
  }, []);

  const warmLRU = useCallback(
    (centerIndex: number) => {
      if (centerIndex < 0) return;
      for (let offset = -1; offset <= 2; offset++) {
        const idx = centerIndex + offset;
        if (idx >= 0 && idx < bankRef.current.length) {
          requestBitmap(idx);
        }
      }
    },
    [requestBitmap]
  );

  const computeProgress = useCallback((): number => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return 0;
    return Math.min(1, Math.max(0, scrollY / totalHeight));
  }, []);

  // -------------------------------------------------------------
  // Frame Extraction via WebCodecs & MP4Box
  // -------------------------------------------------------------
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof window.VideoDecoder === 'undefined') {
      revertedRef.current = true;
      return;
    }

    let isCancelled = false;
    let decoder: VideoDecoder | null = null;
    let pendingFrames = 0;
    let totalSamples = 0;
    let decodedCount = 0;

    const watchdogTimer = setTimeout(() => {
      if (!readyRef.current && !isCancelled) {
        console.warn('[VideoScrub] Watchdog reached 60s; reverting to video fallback');
        revertedRef.current = true;
      }
    }, WATCHDOG);

    async function startExtraction(hwAcceleration: HardwareAcceleration = 'prefer-hardware') {
      try {
        const mp4boxLib = await getMP4Box();
        if (isCancelled) return;

        const response = await fetch(videoSrc);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const buffer = await response.arrayBuffer();
        if (isCancelled) return;

        const mp4boxfile = mp4boxLib.createFile();

        const offCanvas = new OffscreenCanvas(1920, 1080);
        const offCtx = offCanvas.getContext('2d', { alpha: false });

        mp4boxfile.onError = (e: any) => {
          console.warn('[MP4Box] Error:', e);
          if (hwAcceleration === 'prefer-hardware' && !isCancelled) {
            startExtraction('prefer-software');
          } else {
            revertedRef.current = true;
          }
        };

        mp4boxfile.onReady = (info: any) => {
          if (isCancelled) return;
          const vTrack = info.videoTracks[0];
          if (!vTrack) {
            revertedRef.current = true;
            return;
          }

          durRef.current = info.duration / info.timescale;
          totalSamples = vTrack.nb_samples;

          function getExtradata(track: any) {
            const DataStream = mp4boxLib.DataStream;
            if (track.avcC && DataStream) {
              const stream = new DataStream();
              stream.endianness = DataStream.BIG_ENDIAN;
              track.avcC.write(stream);
              return new Uint8Array(stream.buffer, 8);
            }
            if (track.hvcC && DataStream) {
              const stream = new DataStream();
              stream.endianness = DataStream.BIG_ENDIAN;
              track.hvcC.write(stream);
              return new Uint8Array(stream.buffer, 8);
            }
            return undefined;
          }

          const description = getExtradata(vTrack);

          try {
            decoder = new VideoDecoder({
              output: async (frame: VideoFrame) => {
                if (isCancelled) {
                  frame.close();
                  return;
                }

                pendingFrames++;
                const ts = frame.timestamp;

                if (offCtx) {
                  offCtx.drawImage(frame, 0, 0, 1920, 1080);
                }
                frame.close();

                if (offCanvas.convertToBlob) {
                  const blob = await offCanvas.convertToBlob({ type: 'image/webp', quality: 0.82 });
                  bankRef.current.push({ ts, blob });
                }

                pendingFrames--;
                decodedCount++;

                if (decodedCount >= totalSamples && pendingFrames === 0) {
                  bankRef.current.sort((a, b) => a.ts - b.ts);
                  readyRef.current = true;
                  clearTimeout(watchdogTimer);
                }
              },
              error: (e) => {
                console.warn('[VideoDecoder] Error:', e);
                if (hwAcceleration === 'prefer-hardware' && !isCancelled) {
                  startExtraction('prefer-software');
                } else {
                  revertedRef.current = true;
                }
              },
            });

            decoder.configure({
              codec: vTrack.codec,
              description,
              hardwareAcceleration: hwAcceleration,
            });

            mp4boxfile.setExtractionOptions(vTrack.id, null, { nbSamples: LEAD });
            mp4boxfile.start();
          } catch (err) {
            console.warn('[VideoDecoder Init Failed]', err);
            if (hwAcceleration === 'prefer-hardware' && !isCancelled) {
              startExtraction('prefer-software');
            } else {
              revertedRef.current = true;
            }
          }
        };

        mp4boxfile.onSamples = (_id: number, _user: any, samples: any[]) => {
          if (isCancelled || !decoder || decoder.state !== 'configured') return;

          for (const sample of samples) {
            const chunk = new EncodedVideoChunk({
              type: sample.is_sync ? 'key' : 'delta',
              timestamp: (1e6 * sample.cts) / sample.timescale,
              duration: (1e6 * sample.duration) / sample.timescale,
              data: sample.data,
            });
            decoder.decode(chunk);
          }
        };

        (buffer as any).fileStart = 0;
        mp4boxfile.appendBuffer(buffer as any);
        mp4boxfile.flush();
      } catch (err) {
        console.warn('[Frame Extraction Error, fallback to video]', err);
        revertedRef.current = true;
      }
    }

    startExtraction();

    return () => {
      isCancelled = true;
      clearTimeout(watchdogTimer);
      if (decoder && decoder.state !== 'closed') {
        try {
          decoder.close();
        } catch (_) {}
      }
      lruRef.current.forEach((bmp) => bmp?.close());
      lruRef.current.clear();
      lruOrderRef.current = [];
    };
  }, [videoSrc]);

  // -------------------------------------------------------------
  // Video Metadata Listener
  // -------------------------------------------------------------
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.duration && !durRef.current) {
        durRef.current = video.duration;
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    if (video.readyState >= 1 && video.duration) {
      durRef.current = video.duration;
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // -------------------------------------------------------------
  // rAF Render Loop (Lerp + Canvas Draw + Video Seeking Fallback)
  // -------------------------------------------------------------
  useEffect(() => {
    let rafId: number;
    let lastTime = performance.now();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: false });

    function loop(now: number) {
      rafId = requestAnimationFrame(loop);

      const dt = Math.min(0.1, (now - lastTime) / 1000);
      lastTime = now;

      const p = computeProgress();
      setScrollProgress(p);

      const dur = durRef.current || (videoRef.current?.duration ?? 0);

      if (dur > 0) {
        targetTimeRef.current = p * dur;

        if (prefersReducedMotion) {
          currentTimeRef.current = targetTimeRef.current;
        } else {
          currentTimeRef.current +=
            (targetTimeRef.current - currentTimeRef.current) * (1 - Math.exp(-dt * LERP_TAU));
          if (Math.abs(targetTimeRef.current - currentTimeRef.current) < SNAP) {
            currentTimeRef.current = targetTimeRef.current;
          }
        }

        if (readyRef.current && bankRef.current.length > 0 && ctx && canvas) {
          const targetMicro = currentTimeRef.current * 1e6;
          const nearestIdx = getNearestIndex(targetMicro);

          if (nearestIdx >= 0) {
            warmLRU(nearestIdx);
            const bitmap = requestBitmap(nearestIdx);

            if (bitmap) {
              ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
              setCanvasLive(true);
            }
          }
        } else if (videoRef.current) {
          const video = videoRef.current;
          if (!video.seeking && Math.abs(video.currentTime - currentTimeRef.current) > 0.01) {
            video.currentTime = currentTimeRef.current;
          }
        }
      }
    }

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [computeProgress, getNearestIndex, requestBitmap, warmLRU]);

  return {
    videoRef,
    canvasRef,
    scrollProgress,
    canvasLive,
  };
}

/**
 * glass-card.js
 *
 * Drives the liquid-glass refraction effect on the card.
 *
 * Key design decisions encoded in this file:
 *
 * 1. The duplicate canvas is sized to the VIEWPORT, not to the card.
 *    The SVG filter displaces each colour channel by a different amount.
 *    If the canvas matched the card exactly, those channel-separation bands
 *    would land on the card's own edges and produce hard colour fringing.
 *    At viewport size the bands fall outside the card and only smooth
 *    refraction is visible within the clipped region.
 *
 * 2. The duplicate stays at 1× even on high-DPI displays.
 *    The SVG filter cost scales with pixel count, and what shows through
 *    is a soft, blurry refraction where 4× the filter work buys nothing
 *    perceptible through a 48px-radius frosted border.
 */

const DUP_PIXEL_RATIO = 1;

const video     = document.getElementById('bg-video');
const card      = document.querySelector('[data-glass-card]');
const container = document.getElementById('dup-video-container');
const canvas    = document.getElementById('dup-image');
const ctx       = canvas.getContext('2d');

let lastW = 0;
let lastH = 0;

function syncDuplicate() {
  // ── 1. Measure the card's position in the viewport ──
  const rect = card.getBoundingClientRect();

  // bail early if the card has no rendered size yet
  if (rect.width === 0 || rect.height === 0) {
    requestAnimationFrame(syncDuplicate);
    return;
  }

  // bail if the video frame isn't available yet
  if (video.videoWidth === 0 || video.videoHeight === 0) {
    requestAnimationFrame(syncDuplicate);
    return;
  }

  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;

  // ── 2. Position the container so its top-left aligns with the viewport origin.
  //       Because it lives inside the card (overflow:hidden + border-radius),
  //       only the intersection of the container and the card border-radius is
  //       visible — the card acts as a window onto the full-viewport frame.
  container.style.left   = `${-rect.left}px`;
  container.style.top    = `${-rect.top}px`;
  container.style.width  = `${vw}px`;
  container.style.height = `${vh}px`;

  // ── 3. Resize the canvas only when the viewport size actually changes.
  //       Resizing every frame is expensive and also clears the canvas.
  const w = Math.round(vw * DUP_PIXEL_RATIO);
  const h = Math.round(vh * DUP_PIXEL_RATIO);

  if (w !== lastW || h !== lastH) {
    canvas.width  = w;
    canvas.height = h;
    canvas.style.width  = `${vw}px`;
    canvas.style.height = `${vh}px`;
    lastW = w;
    lastH = h;
  }

  // ── 4. Draw the current video frame with object-fit: cover math.
  //       We reproduce what the browser does for .bg-video so the duplicate
  //       is pixel-identical to the underlying video element.
  try {
    const vVideo = video.videoWidth;
    const hVideo = video.videoHeight;

    // Scale that makes the video cover the viewport (the larger of the two ratios)
    const cover = Math.max(w / vVideo, h / hVideo);

    // Source crop: centre-crop the video to the viewport's aspect ratio
    const sw = w / cover;   // source width  in video pixels
    const sh = h / cover;   // source height in video pixels
    const sx = (vVideo - sw) / 2;
    const sy = (hVideo - sh) / 2;

    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, w, h);
  } catch (_) {
    // Frame may not be decodable yet (e.g. before first decode).
    // Silently skip — the next rAF will try again.
  }

  requestAnimationFrame(syncDuplicate);
}

// Start the loop as soon as the module loads.
requestAnimationFrame(syncDuplicate);

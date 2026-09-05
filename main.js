document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // Space Galaxy Starfield + Edge Code Particles
  // mix-blend-mode:screen → stars only glow in dark video areas
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // Full-screen Cyber Star Numbers & Sparkling Starfield Canvas
  // -------------------------------------------------------------
  (function initGalaxyCanvas() {
    const canvas = document.getElementById('galaxyCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const CODE_CHARS = ['0', '1', '8', '9', '6', '5', '3', '7', '4', '2', 'S', '#', '$', '%', '&', 'X', 'B', 'O', 'e', '8', '0'];
    let W = 0, H = 0;
    let starNumbers = [];
    let microStars = [];
    let shootingStars = [];

    function rand(min, max) { return Math.random() * (max - min) + min; }
    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    function spawnShootingStar() {
      const startX = rand(W * 0.05, W * 0.95);
      const startY = rand(-10, H * 0.22);
      const speed = rand(20, 30);
      const angle = rand(Math.PI * 0.20, Math.PI * 0.35); // falling diagonally downward
      const length = rand(160, 280);
      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: length,
        life: 1.0,
        decay: rand(0.015, 0.024),
        size: rand(1.8, 3.2)
      });
    }

    function buildStars() {
      starNumbers = [];
      microStars = [];
      shootingStars = [];

      // Bright, crisp floating star numbers matrix field
      const numCount = Math.max(130, Math.floor((W * H) / 7000));
      for (let i = 0; i < numCount; i++) {
        const z = rand(0.5, 2.2);
        const isBright = z > 1.1;
        starNumbers.push({
          x: rand(0, W),
          y: rand(0, H),
          z: z,
          char: pick(CODE_CHARS),
          fontSize: Math.max(8, Math.round(9.5 * z)),
          baseOpacity: rand(0.4, 0.9) * (z > 1.2 ? 1.0 : 0.8),
          twinkleSpeed: rand(0.6, 2.8),
          twinklePhase: rand(0, Math.PI * 2),
          driftX: rand(-0.15, 0.15) * z,
          driftY: rand(-0.18, 0.18) * z,
          mutateInterval: Math.floor(rand(90, 260)),
          mutateTimer: Math.floor(rand(0, 150)),
          isGlow: isBright
        });
      }

      // 1. Dense overall starry field
      const dotCount = Math.max(750, Math.floor((W * H) / 1300));
      for (let i = 0; i < dotCount; i++) {
        const isSuperStar = Math.random() > 0.8;
        microStars.push({
          x: rand(0, W),
          y: rand(0, H),
          r: isSuperStar ? rand(1.4, 2.4) : rand(0.6, 1.4),
          opacity: isSuperStar ? rand(0.7, 1.0) : rand(0.4, 0.85),
          twinkleSpeed: rand(0.6, 3.0),
          twinklePhase: rand(0, Math.PI * 2),
          isGlow: isSuperStar
        });
      }

      // 2. Extra TOP Bright Stars cluster (across the top sky above and around navbar)
      const topCount = Math.max(180, Math.floor(W / 7));
      for (let i = 0; i < topCount; i++) {
        const isBright = Math.random() > 0.5;
        microStars.push({
          x: rand(0, W),
          y: rand(0, H * 0.32),
          r: isBright ? rand(1.6, 2.8) : rand(0.9, 1.6),
          opacity: rand(0.65, 1.0),
          twinkleSpeed: rand(0.8, 3.2),
          twinklePhase: rand(0, Math.PI * 2),
          isGlow: isBright
        });
      }

      // Spawn initial shooting stars
      spawnShootingStar();
      spawnShootingStar();
    }

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    }

    let lastGalaxyTime = 0;
    let shootTimer = 0;

    function draw(ts) {
      const delta = Math.min((ts - lastGalaxyTime) / 16.67, 3);
      lastGalaxyTime = ts;
      ctx.clearRect(0, 0, W, H);
      const t = ts * 0.001;

      // 1. Render micro dot stars
      for (const s of microStars) {
        const twinkle = 0.45 + 0.55 * Math.sin(t * s.twinkleSpeed + s.twinklePhase);
        const op = Math.min(1.0, s.opacity * (0.4 + 0.6 * twinkle));
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        
        if (s.isGlow) {
          ctx.save();
          ctx.shadowColor = 'rgba(255, 255, 255, 1)';
          ctx.shadowBlur = 6;
          ctx.fillStyle = `rgba(255, 255, 255, ${op})`;
          ctx.fill();
          ctx.restore();
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${op})`;
          ctx.fill();
        }
      }

      // 2. Render Star Numbers Matrix Field
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (const sn of starNumbers) {
        sn.x += sn.driftX * delta;
        sn.y += sn.driftY * delta;

        if (sn.x < -30) sn.x = W + 20;
        if (sn.x > W + 30) sn.x = -20;
        if (sn.y < -30) sn.y = H + 20;
        if (sn.y > H + 30) sn.y = -20;

        sn.mutateTimer += delta;
        if (sn.mutateTimer >= sn.mutateInterval) {
          sn.mutateTimer = 0;
          sn.char = pick(CODE_CHARS);
        }

        const drawX = sn.x;
        const drawY = sn.y;

        const twinkle = 0.5 + 0.5 * Math.sin(t * sn.twinkleSpeed + sn.twinklePhase);
        const op = Math.min(1.0, sn.baseOpacity * (0.45 + 0.55 * twinkle));

        if (op < 0.02) continue;

        if (W < 768) {
          const inHeroX = Math.abs(drawX - W / 2) < (W * 0.44);
          const inHeroY = drawY > (H * 0.22) && drawY < (H * 0.79);
          if (inHeroX && inHeroY) continue;
        }

        ctx.font = `${sn.fontSize}px "BubbledotICG-FinePos", "Geist Pixel Circle", "Courier New", monospace`;

        if (sn.isGlow) {
          ctx.save();
          ctx.shadowColor = 'rgba(255, 255, 255, 1)';
          ctx.shadowBlur = Math.round(8 * sn.z);
          ctx.fillStyle = `rgba(255, 255, 255, ${op})`;
          ctx.fillText(sn.char, drawX, drawY);
          ctx.restore();
        } else {
          ctx.fillStyle = `rgba(240, 246, 255, ${op})`;
          ctx.fillText(sn.char, drawX, drawY);
        }
      }

      // 3. Periodic Shooting Stars Engine (frequent & luminous)
      shootTimer += delta;
      if (shootTimer > rand(60, 130)) {
        shootTimer = 0;
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx * delta;
        ss.y += ss.vy * delta;
        ss.life -= ss.decay * delta;

        if (ss.life <= 0 || ss.x > W + 150 || ss.y > H + 150) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - (ss.vx / Math.hypot(ss.vx, ss.vy)) * ss.length;
        const tailY = ss.y - (ss.vy / Math.hypot(ss.vx, ss.vy)) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(0.5, `rgba(200, 235, 255, ${ss.life * 0.5})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${ss.life * 1.0})`);

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = ss.size;
        ctx.lineCap = 'round';
        ctx.shadowColor = 'rgba(255, 255, 255, 1)';
        ctx.shadowBlur = 14;

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${ss.life})`;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(draw);
  })();


  // -------------------------------------------------------------
  // Outer-Flanks 3D Matrix Stream Flow Canvas (Frames Center Cleanly)
  // -------------------------------------------------------------
  function initBinaryStreamCanvas() {
    const canvas = document.getElementById('binaryStreamCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let drops = [];
    const CHAR_POOL = ['0', '8', '8', '0', '0', '8', '8', '8', '0', '8', '8', '9', '0', '8', '3', '0', '8', '8', '1', 'B', '#', '0', '8'];
    const BASE_FONT_SIZE = 12.5;
    const BASE_LINE_HEIGHT = 15;
    const COLUMN_SPACING = 15;

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      drops = [];
      const numCols = Math.floor((width * 1.1) / COLUMN_SPACING);

      const isMobile = width < 768;
      const leftThreshold = isMobile ? 0.12 : 0.32;
      const rightThreshold = isMobile ? 0.88 : 0.68;

      for (let i = 0; i < numCols; i++) {
        const normX = i / numCols;
        const isLeftFlank = normX < leftThreshold;
        const isRightFlank = normX > rightThreshold;
        const isTopCross = !isMobile && normX >= 0.32 && normX <= 0.68 && (i % 2 === 0);

        if (!isLeftFlank && !isRightFlank && !isTopCross) continue;

        const x3d = (i - numCols / 2) * COLUMN_SPACING;
        const z3d = -60 + (i % 7) * 45 + (Math.random() * 25 - 12);

        const dropsInCol = (isLeftFlank || isRightFlank) ? 2 : 1;

        for (let d = 0; d < dropsInCol; d++) {
          let speed = 1.8 + Math.random() * 2.4;
          const sequenceLength = (isLeftFlank || isRightFlank) ? (16 + Math.floor(Math.random() * 20)) : (9 + Math.floor(Math.random() * 12));
          const initialY = -Math.random() * (height * 1.3) - d * (height * 0.45);

          const chars = [];
          for (let k = 0; k < sequenceLength; k++) {
            chars.push(CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)]);
          }

          const distFromEdge = Math.min(normX, 1 - normX) * 2;
          const flankAlpha = Math.max(0.28, 0.75 * (1 - distFromEdge));

          drops.push({
            x3d: x3d,
            y3d: initialY,
            z3d: z3d,
            speed: speed,
            isFast: speed > 2.6,
            length: sequenceLength,
            chars: chars,
            baseOpacity: flankAlpha + Math.random() * 0.15,
            isEdge: isLeftFlank || isRightFlank,
            mutationTick: 0
          });
        }
      }
    }

    resizeCanvas();
    window.addEventListener('resize', () => {
      clearTimeout(window._canvasResizeTimer);
      window._canvasResizeTimer = setTimeout(resizeCanvas, 150);
    });

    let lastTime = performance.now();

    function render(now) {
      const delta = Math.min((now - lastTime) / 16.66, 2.5);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      const fov = 480;
      const centerX = width / 2;
      const centerY = height * 0.35;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';

      for (let drop of drops) {
        drop.y3d += drop.speed * delta;

        drop.mutationTick++;
        if (drop.mutationTick > (drop.isFast ? 4 : 8)) {
          drop.mutationTick = 0;
          const randIdx = Math.floor(Math.random() * drop.chars.length);
          drop.chars[randIdx] = CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)];
        }

        for (let i = 0; i < drop.length; i++) {
          const charY3d = drop.y3d - i * BASE_LINE_HEIGHT;
          const depthZ = Math.max(drop.z3d + fov, 60);
          const scale = fov / depthZ;

          const projX = centerX + drop.x3d * scale;
          const projY = centerY + charY3d * scale;

          if (projY >= -20 && projY <= height + 20 && projX >= -40 && projX <= width + 40) {
            // Mask out central core zone so text and buttons are framed cleanly without any overlap
            const isMobile = width < 768;
            const distFromCenterX = Math.abs(projX - width / 2) / (width / 2);
            const maskThresholdX = isMobile ? 0.78 : 0.46;
            const maskTopY = isMobile ? height * 0.08 : height * 0.28;
            const maskBottomY = isMobile ? height * 0.98 : height * 0.75;

            if (distFromCenterX < maskThresholdX && projY > maskTopY && projY < maskBottomY) {
              continue;
            }

            const isHead = (i === 0);
            const isNearHead = (i === 1);

            const tailFade = Math.pow(1 - (i / drop.length), 1.15);
            const depthFade = Math.min(1.2, Math.max(0.3, scale * 1.1));

            const fontSize = Math.max(8, Math.round(BASE_FONT_SIZE * scale));
            ctx.font = `${fontSize}px "BubbledotICG-FinePos", "Geist Pixel Circle", "Courier New", monospace`;

            if (isHead) {
              const headAlpha = Math.min(1, 0.95 * depthFade * (drop.isEdge ? 1.0 : 0.6));
              if (headAlpha > 0.02) {
                ctx.save();
                ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
                ctx.shadowBlur = Math.round(8 * scale);
                ctx.fillStyle = `rgba(255, 255, 255, ${headAlpha})`;
                ctx.fillText(drop.chars[i], projX, projY);
                ctx.restore();
              }
            } else if (isNearHead) {
              const nearHeadAlpha = Math.min(1, 0.75 * depthFade * (drop.isEdge ? 1.0 : 0.6));
              if (nearHeadAlpha > 0.02) {
                ctx.fillStyle = `rgba(255, 255, 255, ${nearHeadAlpha})`;
                ctx.fillText(drop.chars[i], projX, projY);
              }
            } else {
              const finalAlpha = tailFade * drop.baseOpacity * depthFade;
              if (finalAlpha > 0.01) {
                ctx.fillStyle = `rgba(235, 242, 255, ${finalAlpha})`;
                ctx.fillText(drop.chars[i], projX, projY);
              }
            }
          }
        }

        if (drop.y3d - drop.length * BASE_LINE_HEIGHT > height * 1.2) {
          drop.y3d = -Math.random() * 100 - 20;
          drop.speed = 1.3 + Math.random() * 1.8;
          drop.isFast = drop.speed > 2.2;

          for (let k = 0; k < drop.length; k++) {
            drop.chars[k] = CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)];
          }
        }
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  initBinaryStreamCanvas();

  // -------------------------------------------------------------
  // Mobile Navigation Drawer Toggle
  // -------------------------------------------------------------
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-signin-btn');

  function openMenu() {
    if (!burgerBtn || !mobileMenu || !mobileOverlay) return;
    burgerBtn.setAttribute('aria-expanded', 'true');
    burgerBtn.setAttribute('aria-label', 'Close menu');
    mobileOverlay.removeAttribute('hidden');
    mobileMenu.removeAttribute('hidden');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!burgerBtn || !mobileMenu || !mobileOverlay) return;
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Open menu');
    mobileOverlay.setAttribute('hidden', '');
    mobileMenu.setAttribute('hidden', '');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    const isExpanded = burgerBtn?.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  burgerBtn?.addEventListener('click', toggleMenu);
  mobileOverlay?.addEventListener('click', closeMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });

  // -------------------------------------------------------------
  // Stats Count-Up Animation
  // -------------------------------------------------------------
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateStatCard(card, index) {
    const valueEl = card.querySelector('.stat-value');
    if (!valueEl) return;

    // Skip animation for static (non-numeric) stat cards
    if (card.getAttribute('data-static') === 'true' || !card.hasAttribute('data-target')) return;

    const target = parseFloat(card.getAttribute('data-target') || '0');
    const prefix = card.getAttribute('data-prefix') || '';
    const suffix = card.getAttribute('data-suffix') || '';
    const decimals = parseInt(card.getAttribute('data-decimals') || '0', 10);

    const duration = 1500 + index * 80;
    const startOffset = 480 + index * 90;

    setTimeout(() => {
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentVal = easedProgress * target;

        if (decimals > 0) {
          valueEl.textContent = prefix + currentVal.toFixed(decimals) + suffix;
        } else {
          valueEl.textContent = prefix + Math.round(currentVal) + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          if (decimals > 0) {
            valueEl.textContent = prefix + target.toFixed(decimals) + suffix;
          } else {
            valueEl.textContent = prefix + Math.round(target) + suffix;
          }
        }
      }

      requestAnimationFrame(step);
    }, startOffset);
  }

  const statCards = document.querySelectorAll('.stat-item, .stat-card');
  let statsAnimated = false;

  if ('IntersectionObserver' in window && statCards.length > 0) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            statCards.forEach((card, idx) => {
              animateStatCard(card, idx);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    const statsContainer = document.querySelector('.stats-footer') || statCards[0];
    observer.observe(statsContainer);
  } else {
    statCards.forEach((card, idx) => {
      animateStatCard(card, idx);
    });
  }

  // -------------------------------------------------------------
  // Typewriter Text Rotation Animation for Subtitle (Same font as name)
  // -------------------------------------------------------------
  (function initTypewriterSubtitle() {
    const subtitleEl = document.getElementById('typewriterSubtitle');
    if (!subtitleEl) return;

    const texts = [
      "Research Intern @ National Institute of Technology (NIT) Trichy",
      "Research Intern at Alagappa University",
      "Full Stack Developer Intern — VDart"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentTarget = texts[textIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          charIndex--;
          subtitleEl.textContent = currentTarget.substring(0, charIndex);
          const deleteSpeed = 28 + Math.random() * 15;
          setTimeout(typeLoop, deleteSpeed);
        } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeLoop, 400);
        }
      } else {
        if (charIndex < currentTarget.length) {
          charIndex++;
          subtitleEl.textContent = currentTarget.substring(0, charIndex);
          const typeSpeed = 48 + Math.random() * 28;
          setTimeout(typeLoop, typeSpeed);
        } else {
          isDeleting = true;
          setTimeout(typeLoop, 2200);
        }
      }
    }

    typeLoop();
  })();

  // -------------------------------------------------------------
  // Active Navigation Links State Handling
  // -------------------------------------------------------------
  const desktopLinks = document.querySelectorAll('.nav-link');
  desktopLinks.forEach((link) => {
    link.addEventListener('click', () => {
      desktopLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // -------------------------------------------------------------
  // Fixed Static Wave & Cosmic Layer
  // -------------------------------------------------------------
  (function initFixedWave() {
    const wrapper = document.getElementById('bg3dWrapper');
    if (wrapper) {
      wrapper.style.transform = 'none';
    }
  })();

  // -------------------------------------------------------------
  // Scroll Down → Navigate to about.html
  // -------------------------------------------------------------
  (function initScrollToAbout() {
    let triggered = false;
    let wheelAccum = 0;

    window.addEventListener('wheel', (e) => {
      if (triggered) return;
      if (e.deltaY > 0) {
        wheelAccum += e.deltaY;
        if (wheelAccum > 80) {
          triggered = true;
          window.location.href = 'about.html';
        }
      }
    }, { passive: true });

    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (triggered) return;
      // Do not trigger page transition if user is touching a link, button, or control
      if (e.target && e.target.closest && e.target.closest('a, button, input, select, textarea, .resume-btn, .cta-resume')) {
        return;
      }
      if (e.changedTouches && e.changedTouches[0] && (touchStartY - e.changedTouches[0].clientY > 50)) {
        triggered = true;
        window.location.href = 'about.html';
      }
    }, { passive: true });
  })();

  // -------------------------------------------------------------
  // Direct Universal Resume PDF Downloader (Instant & Frictionless)
  // -------------------------------------------------------------
  window.executeResumeDownload = function () {
    const resumeUrl = '/assets/resume.pdf';
    const fileName = 'Naveen_Carlin_A_Resume.pdf';

    fetch(resumeUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
          if (link.parentNode) link.parentNode.removeChild(link);
        }, 1500);
      })
      .catch(() => {
        const fallback = document.createElement('a');
        fallback.href = resumeUrl;
        fallback.download = fileName;
        document.body.appendChild(fallback);
        fallback.click();
        setTimeout(() => {
          if (fallback.parentNode) fallback.parentNode.removeChild(fallback);
        }, 1000);
      });
  };

  window.downloadResumeDirect = function (e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.executeResumeDownload();
  };

  document.querySelectorAll('.resume-btn, .cta-resume, .bento-resume-btn, a[href*="resume.pdf"]').forEach((el) => {
    el.addEventListener('click', window.downloadResumeDirect);
    el.addEventListener('touchend', window.downloadResumeDirect, { passive: false });
  });
});

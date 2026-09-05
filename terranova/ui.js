/**
 * ui.js
 *
 * Handles the slide-in fullscreen menu: open / close, focus management,
 * keyboard trap, scrim click, and Escape key.
 */

const menu       = document.getElementById('menu');
const backdrop   = document.getElementById('menu-backdrop');
const openBtn    = document.getElementById('menu-open');
const closeBtn   = document.getElementById('menu-close');
const menuLinks  = menu.querySelectorAll('.menu__link');

// ── Focus trap helpers ────────────────────────────────────────
function getFocusable() {
  return Array.from(
    menu.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter(el => !el.closest('[inert]'));
}

// ── Core open / close ─────────────────────────────────────────
function setMenu(open) {
  menu.classList.toggle('is-open', open);
  openBtn.setAttribute('aria-expanded', String(open));

  if (open) {
    // Move focus to the close button when menu opens
    closeBtn.focus({ preventScroll: true });
  } else {
    // Return focus to the hamburger when menu closes
    openBtn.focus({ preventScroll: true });
  }
}

// ── Keyboard trap ─────────────────────────────────────────────
menu.addEventListener('keydown', e => {
  if (!menu.classList.contains('is-open')) return;

  if (e.key === 'Escape') {
    setMenu(false);
    return;
  }

  if (e.key === 'Tab') {
    const focusable = getFocusable();
    if (!focusable.length) return;

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
});

// ── Wire up controls ──────────────────────────────────────────
openBtn.addEventListener('click', () => setMenu(true));
closeBtn.addEventListener('click', () => setMenu(false));
backdrop.addEventListener('click', () => setMenu(false));

// Each nav link closes the menu after selection
menuLinks.forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

// Global Escape listener (outside the menu, e.g. if focus slips)
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.classList.contains('is-open')) {
    setMenu(false);
  }
});

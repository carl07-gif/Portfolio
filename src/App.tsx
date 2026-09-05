import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, ChevronUp, X } from 'lucide-react';
import { useVideoScrub } from './useVideoScrub';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260821_114821_a8ca298f-be2c-4613-a4dd-51b69e16bbde.mp4';

const DARK = '#1D3045';

const NAV_LINKS = [
  { label: 'HOME', active: false, href: 'index.html' },
  { label: 'ABOUT', active: true, href: '#about' },
  { label: 'CASE STUDIES', active: false, href: '#case-studies' },
  { label: 'CONTACT', active: false, href: '#contact' },
];

interface StaggerProps {
  children: React.ReactNode;
  visible: boolean;
  delayMs?: number;
  className?: string;
}

function Stagger({ children, visible, delayMs = 0, className = '' }: StaggerProps) {
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(24px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const { videoRef, canvasRef, scrollProgress, canvasLive } = useVideoScrub(VIDEO_URL);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navEntered, setNavEntered] = useState(false);

  // Nav entrance delay on initial load
  useEffect(() => {
    const timer = setTimeout(() => setNavEntered(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Color flip at p > 0.55 (dark text on light cloud frames, white text on dark later frames)
  const isLight = scrollProgress > 0.55;
  const navColor = isLight ? '#ffffff' : DARK;

  // -------------------------------------------------------------
  // Sequential Section Opacities
  // -------------------------------------------------------------
  const p = scrollProgress;

  // Section 1
  const s1Opacity = p < 0.2 ? 1 : Math.max(0, 1 - (p - 0.2) / 0.08);

  // Section 2
  const s2Opacity =
    p < 0.32 ? 0 : p < 0.4 ? (p - 0.32) / 0.08 : p < 0.55 ? 1 : Math.max(0, 1 - (p - 0.55) / 0.08);

  // Section 3
  const s3Opacity = p < 0.67 ? 0 : p < 0.75 ? (p - 0.67) / 0.08 : 1;

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative h-[500vh] w-full bg-black font-sans">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 1) Underlying Video Element */}
        <video
          ref={videoRef}
          src={VIDEO_URL}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* 2) Canvas Layer (Decoded Frames from WebCodecs + MP4Box) */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className={`absolute inset-0 h-full w-full object-cover pointer-events-none transition-opacity duration-300 ${
            canvasLive ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* 3) Overlay: Navbar + 3 Sequential Text Sections */}
        <div className="absolute inset-0 pointer-events-none">
          {/* ========================================================= */}
          {/* NAVBAR */}
          {/* ========================================================= */}
          <header
            className="absolute top-0 left-0 right-0 z-50 pointer-events-auto px-6 sm:px-8 md:px-12 pt-8 sm:pt-12 pb-6 flex items-center justify-between transition-colors duration-500"
            style={{ color: navColor }}
          >
            {/* Desktop Navigation Links (lg+) */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main Navigation">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-xs tracking-[0.15em] uppercase font-medium hover:opacity-70 transition-all duration-300"
                  style={{
                    opacity: navEntered ? 1 : 0,
                    transform: navEntered ? 'translateY(0)' : 'translateY(-12px)',
                    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 80 + 100}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 80 + 100}ms, color 0.5s ease`,
                  }}
                >
                  {link.label}
                  {link.active && (
                    <span
                      className="absolute -bottom-3 left-0 right-0 h-[2px] transition-colors duration-500"
                      style={{ backgroundColor: navColor }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger (<lg) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] p-2 pointer-events-auto group focus:outline-none"
              aria-label="Open Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className="block w-6 h-[2px] transition-colors duration-500"
                style={{ backgroundColor: navColor }}
              />
              <span
                className="block w-6 h-[2px] transition-colors duration-500"
                style={{ backgroundColor: navColor }}
              />
              <span
                className="block w-4 h-[2px] transition-colors duration-500"
                style={{ backgroundColor: navColor }}
              />
            </button>

            {/* Right Cluster — Back to Home */}
            <div
              className="hidden sm:flex items-center gap-6"
              style={{
                opacity: navEntered ? 1 : 0,
                transform: navEntered ? 'translateY(0)' : 'translateY(-12px)',
                transition:
                  'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 500ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 500ms, color 0.5s ease',
              }}
            >
              <a
                href="index.html"
                className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity"
              >
                ← HOME
              </a>
            </div>
          </header>

          {/* ========================================================= */}
          {/* SECTION 1: HERO (Left aligned, Vertically centered) */}
          {/* ========================================================= */}
          <section
            className="absolute inset-0 flex items-center px-6 sm:px-8 md:px-20 lg:px-32"
            style={{
              opacity: s1Opacity,
              transition: 'opacity 0.1s ease-out',
              pointerEvents: s1Opacity > 0.3 ? 'auto' : 'none',
            }}
          >
            <div className="max-w-4xl text-left">
              <Stagger visible={s1Opacity > 0.3} delayMs={0}>
                <h1
                  className="text-[clamp(2rem,5vw,5rem)] font-light uppercase leading-[1.2] tracking-tight"
                  style={{ color: DARK }}
                >
                  Advancing resources for a cleaner future
                </h1>
              </Stagger>

              <Stagger visible={s1Opacity > 0.3} delayMs={150}>
                <p
                  className="mt-6 text-sm tracking-[0.3em] uppercase font-medium"
                  style={{ color: 'rgba(29, 48, 69, 0.9)' }}
                >
                  Sustainable power with purpose
                </p>
              </Stagger>
            </div>

            {/* Bottom-right circle button */}
            <div className="absolute bottom-12 right-6 sm:right-8 md:right-12 pointer-events-auto">
              <Stagger visible={s1Opacity > 0.3} delayMs={300}>
                <button
                  onClick={handleScrollDown}
                  className="w-12 h-12 rounded-full border flex items-center justify-center hover:opacity-70 transition-all duration-300 focus:outline-none"
                  style={{ borderColor: 'rgba(29, 48, 69, 0.5)', color: DARK }}
                  aria-label="Scroll down"
                >
                  <ArrowRight size={18} />
                </button>
              </Stagger>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 2: PARTNERSHIPS (Center aligned) */}
          {/* ========================================================= */}
          <section
            className="absolute inset-0 flex items-center justify-center px-6 sm:px-8"
            style={{
              opacity: s2Opacity,
              transition: 'opacity 0.1s ease-out',
              pointerEvents: s2Opacity > 0.3 ? 'auto' : 'none',
            }}
          >
            <div className="max-w-[900px] w-full text-center">
              <Stagger visible={s2Opacity > 0.3} delayMs={0}>
                <h2
                  className="text-[clamp(1.5rem,4.5vw,4.5rem)] font-extralight tracking-wide leading-[1.3] text-center uppercase"
                  style={{ color: DARK }}
                >
                  We build lasting partnerships with vision{' '}
                  <span style={{ color: 'rgba(29, 48, 69, 0.8)' }}>and precision</span>{' '}
                  <span style={{ color: 'rgba(29, 48, 69, 0.5)' }}>across every frontier</span>
                </h2>
              </Stagger>
            </div>

            {/* Right Column Indicators */}
            <div className="absolute bottom-16 right-6 sm:right-8 md:right-12 flex flex-col items-center gap-4 pointer-events-auto">
              <Stagger visible={s2Opacity > 0.3} delayMs={200}>
                <button
                  onClick={handleScrollDown}
                  className="w-12 h-12 rounded-full border flex items-center justify-center hover:opacity-70 transition-all duration-300 focus:outline-none"
                  style={{ borderColor: 'rgba(29, 48, 69, 0.4)', color: DARK }}
                  aria-label="Scroll next"
                >
                  <ArrowDown size={18} />
                </button>
              </Stagger>

              {/* Three dots */}
              <Stagger visible={s2Opacity > 0.3} delayMs={350} className="mt-4 flex flex-col items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ backgroundColor: DARK }}
                />
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(29, 48, 69, 0.4)' }}
                />
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(29, 48, 69, 0.4)' }}
                />
              </Stagger>

              {/* Scroll to Top Chevron */}
              <Stagger visible={s2Opacity > 0.3} delayMs={500} className="mt-2">
                <button
                  onClick={handleScrollTop}
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-70 transition-all duration-300 focus:outline-none"
                  style={{ borderColor: 'rgba(29, 48, 69, 0.3)', color: 'rgba(29, 48, 69, 0.8)' }}
                  aria-label="Scroll to top"
                >
                  <ChevronUp size={16} />
                </button>
              </Stagger>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 3: FUELING AMBITION (Right aligned, White text) */}
          {/* ========================================================= */}
          <section
            className="absolute inset-0 flex items-center justify-end px-6 sm:px-8 md:px-20 lg:px-32"
            style={{
              opacity: s3Opacity,
              transition: 'opacity 0.1s ease-out',
              pointerEvents: s3Opacity > 0.3 ? 'auto' : 'none',
            }}
          >
            <div className="max-w-2xl text-left">
              <Stagger visible={s3Opacity > 0.3} delayMs={0}>
                <div className="text-white/60 text-lg tracking-wide mb-4 uppercase">
                  Halder | Nordvik
                </div>
              </Stagger>

              <Stagger visible={s3Opacity > 0.3} delayMs={150}>
                <h2 className="text-[clamp(2rem,4vw,4rem)] font-light text-white leading-[1.2] uppercase tracking-wide mb-8">
                  Fueling ambition,
                  <br />
                  shaping tomorrow.
                </h2>
              </Stagger>

              <Stagger visible={s3Opacity > 0.3} delayMs={300}>
                <div
                  onClick={() => alert('Contact Nordvik')}
                  className="inline-flex items-center gap-4 pointer-events-auto cursor-pointer group"
                >
                  <span className="text-sm tracking-[0.3em] text-white/80 uppercase group-hover:text-white transition-colors duration-300">
                    Contact Nordvik
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Stagger>
            </div>
          </section>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE FULL-SCREEN MENU OVERLAY */}
      {/* ========================================================= */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ backgroundColor: DARK }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={`flex flex-col justify-between h-full w-full transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          {/* Close button at top right */}
          <div className="flex justify-end px-6 sm:px-8 pt-8 sm:pt-12">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-white/30 hover:border-white text-white flex items-center justify-center transition-colors duration-300 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links centered vertically */}
          <nav className="flex flex-col px-8 sm:px-12 my-auto" aria-label="Mobile Menu Navigation">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 text-2xl sm:text-3xl font-light tracking-wide uppercase transition-all duration-300 ${
                  link.active ? 'text-white font-normal' : 'text-white/60 hover:text-white'
                }`}
                style={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${idx * 60}ms, transform 0.5s ease ${idx * 60}ms, color 0.2s ease`,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Footer Info */}
          <div className="flex items-center justify-between px-8 sm:px-12 pb-10 text-xs tracking-[0.2em] uppercase text-white/60">
            <span>NEWS</span>
            <span>CONTACT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#081116] text-[#f2eee4] pt-32 pb-12 overflow-hidden">
      {/* Huge Watermark Text */}
      <div
        className="absolute -left-[2vw] -top-[3vw] text-[clamp(7rem,21vw,24rem)] font-bold tracking-[-0.08em] leading-none text-white/[0.025] select-none pointer-events-none"
        aria-hidden="true"
      >
        FLORIA
      </div>

      {/* Decorative Botanical Accent */}
      <img
        src="https://floria-landing-page.vercel.app/hero-accent.webp"
        alt=""
        className="absolute -right-[12vw] -bottom-[4vw] w-[min(65vw,900px)] opacity-20 filter saturate-75 brightness-75 select-none pointer-events-none"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        data-parallax-speed="0.12"
        data-pointer-weight="0.10"
      />

      <div className="relative z-10 w-[min(92vw,1500px)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-20 border-b border-white/15">
          {/* Brand Intro */}
          <div className="lg:col-span-2 pr-6">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white">Floria.</h2>
            <p className="font-serif italic text-xl text-[#d2ba85] mt-2 mb-4">
              Architecture of Nature
            </p>
            <p className="text-[0.92rem] leading-relaxed text-white/55 font-light max-w-sm">
              An independent floral styling studio for modern, sculptural living. Sourced locally,
              curated globally.
            </p>
          </div>

          {/* Archive Links */}
          <div className="space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-medium">
              Archive
            </h3>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Spring Collection
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-white transition-colors">
                  The Wedding Edit
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-white transition-colors">
                  Corporate Spaces
                </a>
              </li>
              <li>
                <a href="#archive" className="hover:text-white transition-colors">
                  Ikebana Vessels
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Links */}
          <div className="space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-medium">
              Studio
            </h3>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Sourcing Ethos
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-white transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-white transition-colors">
                  Private Folios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-medium">
              Contact
            </h3>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li>
                <a href="mailto:studio@floria.com" className="hover:text-white transition-colors">
                  studio@floria.com
                </a>
              </li>
              <li>
                <a href="tel:+13105550824" className="hover:text-white transition-colors">
                  +1 (310) 555-0824
                </a>
              </li>
              <li className="pt-2 text-[12px] text-white/40">
                Studio Hours: Tue—Sat 09:00—18:00 PST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.14em] text-white/45">
          <p>© 2026 Floria Studio. All rights reserved.</p>
          <p className="tracking-[0.2em] text-white/35">Powered by ORVIA Botanical Physics.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pinterest
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Are.na
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

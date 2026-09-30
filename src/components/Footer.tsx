import React from 'react';
import { ArrowUp, Sparkles, MapPin, Thermometer, Droplets, SunMedium } from 'lucide-react';

interface FooterProps {
  onScrollToTop?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="relative bg-[#081116] text-[#f2eee4] pt-24 md:pt-36 pb-12 overflow-hidden border-t border-white/10">
      {/* Huge Watermark Text */}
      <div
        className="absolute -left-[2vw] -top-[3vw] text-[clamp(6rem,20vw,22rem)] font-bold tracking-[-0.08em] leading-none text-white/[0.025] select-none pointer-events-none"
        aria-hidden="true"
      >
        FLORIA
      </div>

      {/* Decorative Botanical Accent */}
      <img
        src="https://floria-landing-page.vercel.app/hero-accent.webp"
        alt=""
        className="absolute -right-[12vw] -bottom-[4vw] w-[min(65vw,900px)] opacity-15 filter saturate-75 brightness-75 select-none pointer-events-none"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        data-parallax-speed="0.12"
        data-pointer-weight="0.10"
      />

      <div className="relative z-10 w-[min(92vw,1500px)] mx-auto">
        {/* ========================================================================= */}
        {/* RESPONSIVE FEATURED BANNER: "Blooming in ORVIA GARDENS"                   */}
        {/* ========================================================================= */}
        <div className="mb-20 md:mb-28 pb-16 md:pb-24 border-b border-white/15">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12">
            <div className="max-w-3xl">
              {/* Garden Coordinates & Status */}
              <div className="flex flex-wrap items-center gap-3 mb-5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#d2ba85]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sanctuary
                </span>
                <span className="text-white/30">·</span>
                <span className="flex items-center gap-1 text-white/80">
                  <MapPin className="w-3 h-3 text-[#d2ba85]" />
                  Pakistan Sanctuary · 33.6844° N, 73.0479° E
                </span>
                <span className="text-white/30 hidden sm:inline">·</span>
                <span className="text-white/60 hidden sm:inline">Atmospheric Botanical Glasshouse</span>
              </div>

              {/* Prominent Responsive Header */}
              <h2 className="font-serif text-[clamp(2.8rem,7.2vw,6.8rem)] leading-[0.92] tracking-[-0.04em] font-normal text-white text-balance">
                Blooming in <em className="italic text-[#f4eee0]">ORVIA GARDENS</em>
              </h2>

              <p className="mt-6 text-[1.05rem] md:text-[1.2rem] leading-relaxed text-white/75 font-light max-w-2xl">
                Where rare, site-specific flora is conditioned in atmospheric coastal glasshouses.
                Every stem is nourished by maritime fog, mineral rain, and circadian solar cycles.
              </p>
            </div>

            {/* Live Microclimate Telemetry Bar */}
            <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm self-start lg:self-auto w-full lg:w-auto shrink-0">
              <div className="flex items-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-widest text-[#d2ba85]">
                <Sparkles className="w-3 h-3" />
                <span>Atmospheric Chamber #03</span>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-[11px] text-white/50 mb-1">
                    <Thermometer className="w-3 h-3" />
                    <span>Air</span>
                  </div>
                  <span className="font-mono text-base md:text-lg text-white font-medium">
                    18.4°C
                  </span>
                </div>

                <div className="flex flex-col items-center border-x border-white/10 px-3">
                  <div className="flex items-center gap-1 text-[11px] text-white/50 mb-1">
                    <Droplets className="w-3 h-3" />
                    <span>Mist</span>
                  </div>
                  <span className="font-mono text-base md:text-lg text-emerald-400 font-medium">
                    68% RH
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-[11px] text-white/50 mb-1">
                    <SunMedium className="w-3 h-3" />
                    <span>Solar</span>
                  </div>
                  <span className="font-mono text-base md:text-lg text-[#d2ba85] font-medium">
                    Diffused
                  </span>
                </div>
              </div>

              {/* Current Botanical Cultivars list */}
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-white/60 flex items-center justify-between gap-3">
                <span>Active Bloom:</span>
                <span className="text-white/90 truncate">Coral Peony · Midnight Vanda · Gunni</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE DIRECTORY GRID                                                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/15">
          {/* Brand Intro */}
          <div className="sm:col-span-2 lg:col-span-2 pr-6">
            <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-white">Floria.</h3>
            <p className="font-serif italic text-lg text-[#d2ba85] mt-1 mb-3">
              Architecture of Nature
            </p>
            <p className="text-[0.92rem] leading-relaxed text-white/55 font-light max-w-sm">
              An independent floral styling studio for modern, sculptural living. Grown in ORVIA
              Gardens, curated globally.
            </p>

            {/* Back to top slow scroll button */}
            {onScrollToTop && (
              <button
                onClick={onScrollToTop}
                type="button"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white/60 text-[11px] uppercase tracking-[0.14em] text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <span>Return to Canopy</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Archive Links */}
          <div className="space-y-3.5">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-medium">
              Archive
            </h4>
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
          <div className="space-y-3.5">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-medium">
              Studio
            </h4>
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
          <div className="space-y-3.5">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#d2ba85] font-medium">
              Contact &amp; Atelier
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li>
                <a href="mailto:studio@hadidigitalcraft.com" className="hover:text-white transition-colors truncate block">
                  studio@hadidigitalcraft.com
                </a>
              </li>
              <li>
                <a href="tel:+923706515710" className="hover:text-white transition-colors font-mono">
                  +92 370 6515 710
                </a>
              </li>
              <li className="pt-1 text-[12px] text-white/90 flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#d2ba85]" />
                <span>Location: Pakistan</span>
              </li>
              <li className="pt-1 text-[11px] text-white/40 leading-relaxed">
                Studio Hours: Mon—Sat 09:00—19:00 PKT
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.14em] text-white/45">
          <p>© 2026 Floria Studio. All rights reserved.</p>
          <p className="tracking-[0.2em] text-white/40">Blooming in ORVIA GARDENS · Pakistan Sanctuary</p>
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

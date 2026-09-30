import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/floriaData';

interface ArchitectureProcessProps {
  onOpenIkebana: () => void;
  onOpenBespoke: () => void;
}

export const ArchitectureProcess: React.FC<ArchitectureProcessProps> = ({
  onOpenIkebana,
  onOpenBespoke,
}) => {
  return (
    <section
      id="architecture"
      className="relative pt-20 pb-28 md:py-36 bg-[#0c1720] text-[#f5f1e8] overflow-hidden"
      aria-labelledby="architecture-title"
    >
      {/* Botanical Corner / Top Floral Study */}
      <div
        className="w-full h-[45vh] md:h-[65vh] max-h-[750px] overflow-hidden relative"
        data-depth-index="2"
        data-parallax-speed="0.16"
        data-pointer-weight="0.12"
      >
        <img
          src="https://floria-landing-page.vercel.app/d1.webp"
          alt="Atmospheric sculptural floral study with dark red dahlias, lilies, and foliage"
          className="w-full h-[120%] object-cover object-[center_52%] filter brightness-75 contrast-105 select-none"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1720] via-transparent to-transparent opacity-90" />
      </div>

      <div className="w-[min(92vw,1500px)] mx-auto pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 items-start">
          {/* Left Column: Heading & Philosophy */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#d2ba85] font-medium">
                Process / 01—03
              </span>
              <span className="w-6 h-[1px] bg-[#d2ba85]/40" />
            </div>

            <h2
              id="architecture-title"
              className="font-serif text-[clamp(3.6rem,7.5vw,7.8rem)] leading-[0.9] tracking-[-0.045em] font-normal text-white text-balance"
            >
              The Architecture
              <br />
              of <em className="italic text-[#f4eee0]">Nature.</em>
            </h2>

            <p className="mt-8 max-w-lg text-[1.05rem] leading-relaxed text-white/70 font-light">
              Our process is a deliberate rejection of mass-market floristry. Every commission is
              treated as a site-specific installation that harmonizes negative space, architectural
              light, and botanical longevity.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenIkebana}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 text-[11px] uppercase tracking-[0.14em] text-white transition-all cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-[#d2ba85]" />
                <span>Examine Ikebana Mathematics</span>
              </button>

              <button
                onClick={onOpenBespoke}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#d2ba85]/40 hover:border-[#d2ba85] bg-[#d2ba85]/10 text-[11px] uppercase tracking-[0.14em] text-[#e8d5aa] transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d2ba85]" />
                <span>Commission Studio</span>
              </button>
            </div>
          </div>

          {/* Right Column: Process Register Timeline */}
          <div className="relative pl-4 md:pl-8 border-l border-white/15 space-y-12">
            {PROCESS_STEPS.map((step, idx) => (
              <article key={step.step} className="relative group">
                {/* Step Node Dot / Number */}
                <div className="absolute -left-[25px] md:-left-[41px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0c1720] border border-white/30 flex items-center justify-center text-[10px] md:text-[11px] font-mono text-[#d2ba85] transition-colors group-hover:border-[#d2ba85]">
                  {step.step}
                </div>

                <div className="pl-6">
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-white group-hover:text-[#f4eee0] transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-white/60 font-light max-w-xl">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

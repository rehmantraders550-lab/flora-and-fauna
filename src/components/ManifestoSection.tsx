import React from 'react';
import { Leaf } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="relative min-h-[85vh] flex items-center justify-center bg-[#0d161c] text-white overflow-hidden py-32"
      aria-labelledby="manifesto-title"
    >
      {/* Background Image with Depth Parallax */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        data-depth-index="1"
        data-parallax-speed="0.14"
        data-pointer-weight="0.10"
      >
        <img
          src="https://floria-landing-page.vercel.app/d2.webp"
          alt=""
          className="w-full h-[125%] object-cover object-center filter brightness-[0.45] saturate-80"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060a0c]/85 via-[#060a0c]/50 to-[#060a0c]/85" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-[min(92vw,1200px)] mx-auto text-center px-4">
        {/* Leaf Icon in Center */}
        <div className="mx-auto w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-8 backdrop-blur-sm">
          <Leaf className="w-6 h-6 text-[#d2ba85]" />
        </div>

        <p className="text-[11px] uppercase tracking-[0.24em] text-[#d2ba85] font-semibold mb-4">
          Sourcing / Manifesto
        </p>

        <h2
          id="manifesto-title"
          className="font-serif text-[clamp(3.8rem,8.5vw,8.5rem)] leading-[0.92] tracking-[-0.04em] text-white font-normal max-w-4xl mx-auto text-balance"
        >
          Never a generic
          <br />
          <em className="italic text-[#f4eee0]">arrangement.</em>
        </h2>

        <p className="mt-8 text-[1.1rem] md:text-[1.25rem] leading-relaxed text-white/80 font-light max-w-2xl mx-auto">
          Floria works exclusively with independent growers within a 50-mile radius, ensuring
          every stem possesses a wild, architectural intent that mass floristry strips away.
        </p>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-[11px] uppercase tracking-[0.18em] text-white/50">
          <span>Zero Monoculture Farms</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d2ba85]" />
          <span>Cold-Chain Direct Transport</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d2ba85]" />
          <span>Compostable Botanical Wire</span>
        </div>
      </div>
    </section>
  );
};

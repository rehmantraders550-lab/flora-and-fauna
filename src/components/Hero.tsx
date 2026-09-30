import React from 'react';
import { ArrowDownRight } from 'lucide-react';

interface HeroProps {
  onExploreCollections: () => void;
  onExploreManifesto: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollections, onExploreManifesto }) => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0c1720] text-[#f8f5ed] isolate flex items-center"
      aria-labelledby="hero-title"
    >
      {/* Background Gradients & Ambience */}
      <div
        className="absolute inset-0 -z-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 75% 40%, rgba(76, 100, 106, 0.28), transparent 35%),
            radial-gradient(circle at 20% 85%, rgba(37, 55, 60, 0.5), transparent 40%),
            linear-gradient(135deg, #101a23 0%, #0a131b 65%, #081119 100%)
          `,
        }}
      />

      {/* Hero Vignette */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(90deg, rgba(3, 7, 10, 0.8) 0%, rgba(3, 7, 10, 0.25) 45%, rgba(3, 7, 10, 0) 70%),
            linear-gradient(0deg, rgba(3, 7, 10, 0.45) 0%, transparent 40%)
          `,
        }}
      />

      {/* Celestial / Geometric Orbit Lines */}
      <div
        className="absolute inset-0 -z-20 opacity-30 pointer-events-none"
        data-depth-index="1"
        data-parallax-speed="0.12"
        data-pointer-weight="0.10"
        aria-hidden="true"
      >
        <span className="absolute w-[44vw] aspect-square right-[6vw] top-[8vh] border border-white/15 rounded-full" />
        <span className="absolute w-[20vw] aspect-square right-[18vw] top-[30vh] border border-white/15 rounded-full" />
      </div>

      {/* Rear Flora Layer: Deep Botanical Structure */}
      <img
        src="https://floria-landing-page.vercel.app/hero-bg.webp"
        alt=""
        width={2000}
        height={1100}
        decoding="async"
        fetchPriority="high"
        data-depth-index="2"
        data-parallax-speed="0.18"
        data-pointer-weight="0.15"
        className="absolute -z-10 right-[-8vw] bottom-[-2vh] w-[112vw] max-w-none opacity-30 mix-blend-screen pointer-events-none select-none filter saturate-75 brightness-75"
        aria-hidden="true"
      />

      {/* Front Dominant Flora Layer: Tactile Sculptural Floral Mass */}
      <div
        data-depth-index="5"
        data-parallax-speed="0.48"
        data-pointer-weight="0.78"
        className="absolute z-10 right-[-4vw] md:right-[-2vw] bottom-[-2vh] md:bottom-[-1.5vw] w-[85vw] sm:w-[75vw] lg:w-[min(76vw,1260px)] pointer-events-none select-none"
      >
        <img
          src="https://floria-landing-page.vercel.app/hero-accent.webp"
          alt="Sculptural botanical arrangement of coral anthuriums, pincushion protea, deep blue iris, lilies and architectural branches"
          width={2000}
          height={1100}
          decoding="async"
          fetchPriority="high"
          className="w-full h-auto drop-shadow-[0_34px_65px_rgba(0,0,0,0.65)]"
        />
      </div>

      {/* Hero Primary Copy (Motion-stable, depth index 0) */}
      <div
        className="relative z-20 w-full max-w-[1500px] mx-auto px-6 md:px-12 pt-32 pb-24 md:py-36"
        data-depth-index="0"
        data-parallax-speed="0"
        data-pointer-weight="0"
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#d2ba85] font-semibold">
              Studio &amp; Archive
            </span>
            <span className="w-8 h-[1px] bg-[#d2ba85]/40" />
            <span className="text-[10px] uppercase tracking-[0.16em] text-white/50">
              Autumn / Winter 2026
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="font-serif text-[clamp(4.2rem,9.2vw,9.6rem)] leading-[0.88] tracking-[-0.055em] font-normal text-white text-balance"
          >
            Botanic
            <br />
            <em className="italic font-normal text-[#f4eee0]">Architecture.</em>
          </h1>

          {/* Subtitle / Intro */}
          <p className="mt-8 max-w-lg text-[clamp(0.95rem,1.2vw,1.15rem)] leading-relaxed text-white/80 font-light">
            We design spaces and moments using rare, sculptural flora. Rejecting the generic
            bouquet for atmospheric living sculptures.
          </p>

          {/* CTA Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <button
              onClick={onExploreCollections}
              type="button"
              className="inline-flex items-center justify-center min-h-[48px] px-8 bg-[#f4f0e7] text-[#111] hover:bg-transparent hover:text-white border border-[#f4f0e7] text-[11px] uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer"
            >
              View Collections
            </button>

            <button
              onClick={onExploreManifesto}
              type="button"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/90 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Our Manifesto</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Index indicator */}
      <p
        className="absolute z-20 right-6 md:right-12 bottom-8 text-[11px] font-mono tracking-[0.16em] text-white/50 select-none"
        aria-hidden="true"
      >
        01 / 07
      </p>

      {/* Scroll cue */}
      <div
        className="absolute z-20 left-6 md:left-12 bottom-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-white/50 select-none"
        aria-hidden="true"
      >
        <span className="w-10 h-[1px] bg-white/30 relative overflow-hidden inline-block">
          <span className="absolute inset-0 bg-white animate-cue" />
        </span>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

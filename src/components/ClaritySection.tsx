import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/floriaData';

export const ClaritySection: React.FC = () => {
  return (
    <section className="py-28 md:py-40 bg-[#080d11] text-[#f8f5ed] overflow-hidden">
      <div className="w-[min(92vw,1500px)] mx-auto">
        {/* Title */}
        <div className="text-center pb-20">
          <h2 className="font-serif italic text-[clamp(4.8rem,11vw,10.5rem)] leading-none tracking-[-0.04em] text-white">
            Clarity.
          </h2>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#d2ba85] font-semibold">
            Client Notes / Voices of Distinction
          </p>
        </div>

        {/* Staggered Masonry Testimonials matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Card 1: Amara Osei */}
          <div className="p-7 md:p-8 rounded-2xl bg-[#0f171d]/80 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex gap-1 text-[#d2ba85] mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-[1.05rem] leading-relaxed text-white/90 font-light mb-8">
              “{TESTIMONIALS[0].quote}”
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[11px] font-medium text-[#d2ba85]">
                {TESTIMONIALS[0].initial}
              </div>
              <div>
                <h4 className="text-[12px] uppercase tracking-wider font-semibold text-white">
                  {TESTIMONIALS[0].name}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-white/50">
                  {TESTIMONIALS[0].role}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Markus Vance (staggered slightly) */}
          <div className="p-7 md:p-8 rounded-2xl bg-[#0f171d]/80 border border-white/10 hover:border-white/20 transition-all duration-300 md:translate-y-8">
            <div className="flex gap-1 text-[#d2ba85] mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-[1.05rem] leading-relaxed text-white/90 font-light mb-8">
              “{TESTIMONIALS[1].quote}”
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[11px] font-medium text-[#d2ba85]">
                {TESTIMONIALS[1].initial}
              </div>
              <div>
                <h4 className="text-[12px] uppercase tracking-wider font-semibold text-white">
                  {TESTIMONIALS[1].name}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-white/50">
                  {TESTIMONIALS[1].role}
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Elena Rostova */}
          <div className="p-7 md:p-8 rounded-2xl bg-[#0f171d]/80 border border-white/10 hover:border-white/20 transition-all duration-300 lg:translate-y-16">
            <div className="flex gap-1 text-[#d2ba85] mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-[1.05rem] leading-relaxed text-white/90 font-light mb-8">
              “{TESTIMONIALS[3].quote}”
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[11px] font-medium text-[#d2ba85]">
                {TESTIMONIALS[3].initial}
              </div>
              <div>
                <h4 className="text-[12px] uppercase tracking-wider font-semibold text-white">
                  {TESTIMONIALS[3].name}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-white/50">
                  {TESTIMONIALS[3].role}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Julian Thorne */}
          <div className="p-7 md:p-8 rounded-2xl bg-[#0f171d]/80 border border-white/10 hover:border-white/20 transition-all duration-300 md:-translate-y-4 lg:translate-y-6">
            <div className="flex gap-1 text-[#d2ba85] mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-[1.05rem] leading-relaxed text-white/90 font-light mb-8">
              “{TESTIMONIALS[2].quote}”
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[11px] font-medium text-[#d2ba85]">
                {TESTIMONIALS[2].initial}
              </div>
              <div>
                <h4 className="text-[12px] uppercase tracking-wider font-semibold text-white">
                  {TESTIMONIALS[2].name}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-white/50">
                  {TESTIMONIALS[2].role}
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: David Kim */}
          <div className="p-7 md:p-8 rounded-2xl bg-[#0f171d]/80 border border-white/10 hover:border-white/20 transition-all duration-300 md:col-span-2 lg:col-span-2 lg:translate-y-20">
            <div className="flex gap-1 text-[#d2ba85] mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-[1.08rem] leading-relaxed text-white/90 font-light mb-8">
              “{TESTIMONIALS[4].quote}”
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[11px] font-medium text-[#d2ba85]">
                {TESTIMONIALS[4].initial}
              </div>
              <div>
                <h4 className="text-[12px] uppercase tracking-wider font-semibold text-white">
                  {TESTIMONIALS[4].name}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-white/50">
                  {TESTIMONIALS[4].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

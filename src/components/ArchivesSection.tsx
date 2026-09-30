import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ARCHIVE_ITEMS } from '../data/floriaData';
import { ArchiveItem } from '../types/floria';

interface ArchivesSectionProps {
  onSelectArchive: (item: ArchiveItem) => void;
}

export const ArchivesSection: React.FC<ArchivesSectionProps> = ({ onSelectArchive }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Studies' },
    { id: 'installations', label: 'Ceremonial & Weddings' },
    { id: 'residential', label: 'Subscriptions' },
    { id: 'permanent', label: 'Permanent & Dried' },
    { id: 'commercial', label: 'Corporate Atriums' },
  ];

  return (
    <section
      id="archive"
      className="relative py-24 md:py-36 bg-[#f4f1e8]/82 backdrop-blur-2xl backdrop-saturate-150 text-[#111411] border-y border-white/60 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
    >
      {/* Frosted Glass Specular Ambient Light Reflection */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.8), transparent 60%),
            radial-gradient(circle at 85% 90%, rgba(112, 128, 107, 0.15), transparent 45%)
          `,
        }}
      />

      <div className="relative z-10 w-[min(92vw,1500px)] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <h2 className="font-serif text-[clamp(3.6rem,7.5vw,7.8rem)] leading-[0.9] tracking-[-0.045em] font-normal text-[#111411]">
              The <em className="italic">Archives.</em>
            </h2>
            <p className="mt-4 text-[1.05rem] text-[#111411]/65 font-light">
              Explore our categorical studies in floral architecture.
            </p>
          </div>

          {/* Clean Segmented Filter Controls with frosted styling */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/50 backdrop-blur-md rounded-xl border border-white/70 shadow-xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-3.5 py-1.5 text-[11px] font-medium tracking-wider rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#111411] shadow-xs'
                    : 'text-[#111411]/60 hover:text-[#111411]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Archives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 pt-4">
          {/* Card 1: The Wedding Archive (Col span 7 or 8) */}
          <div
            onClick={() => onSelectArchive(ARCHIVE_ITEMS[0])}
            className="md:col-span-8 group relative aspect-[16/10] md:aspect-auto md:min-h-[460px] overflow-hidden rounded-[26px] bg-[#1a2123] cursor-pointer"
          >
            <img
              src={ARCHIVE_ITEMS[0].image}
              alt={ARCHIVE_ITEMS[0].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] filter brightness-90 group-hover:brightness-95"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between text-white">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 mb-1.5">
                  Study 01 · {ARCHIVE_ITEMS[0].category}
                </p>
                <h3 className="font-serif text-3xl md:text-5xl font-normal tracking-tight">
                  {ARCHIVE_ITEMS[0].title}
                </h3>
                <p className="mt-2 text-[12px] md:text-[13px] text-white/70 max-w-md hidden sm:block font-light">
                  {ARCHIVE_ITEMS[0].summary}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0 ml-4 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: Weekly Studio Subs (Col span 4) */}
          <div
            onClick={() => onSelectArchive(ARCHIVE_ITEMS[1])}
            className="md:col-span-4 group relative aspect-[4/3] md:aspect-auto md:min-h-[460px] overflow-hidden rounded-[26px] bg-[#1a2123] cursor-pointer"
          >
            <img
              src={ARCHIVE_ITEMS[1].image}
              alt={ARCHIVE_ITEMS[1].title}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] filter brightness-90"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between text-white">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 mb-1.5">
                  Study 02
                </p>
                <h3 className="font-serif text-2xl md:text-4xl font-normal tracking-tight">
                  {ARCHIVE_ITEMS[1].title}
                </h3>
              </div>
              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shrink-0 ml-2 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Row 2: 3 Cards (Col span 4 each) */}
          {ARCHIVE_ITEMS.slice(2).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectArchive(item)}
              className="md:col-span-4 group relative aspect-[4/3] md:min-h-[380px] overflow-hidden rounded-[26px] bg-[#1a2123] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] filter brightness-90"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 mb-1">
                    Study {item.number}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shrink-0 ml-2 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

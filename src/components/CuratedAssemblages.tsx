import React, { useState } from 'react';
import { ArrowUpRight, Plus, Eye, Sparkles, Calendar } from 'lucide-react';
import { Product } from '../types/floria';
import { getSeasonalAvailability } from '../utils/seasonalAvailability';

interface CuratedAssemblagesProps {
  products: Product[];
  onQuickAdd: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onOpenBespoke: () => void;
  onViewArchive: () => void;
}

const MONTH_OPTIONS = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September (Current)' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

export const CuratedAssemblages: React.FC<CuratedAssemblagesProps> = ({
  products,
  onQuickAdd,
  onSelectProduct,
  onOpenBespoke,
  onViewArchive,
}) => {
  // Defaults to the actual current month
  const actualMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState<number>(actualMonth);
  const [showMonthSelector, setShowMonthSelector] = useState<boolean>(false);

  return (
    <section
      id="shop"
      className="relative py-24 md:py-36 bg-[#f4f1e8]/80 backdrop-blur-2xl backdrop-saturate-150 text-[#111411] border-y border-white/60 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
    >
      {/* Frosted Glass Specular Ambient Light Reflection */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.8), transparent 60%),
            radial-gradient(circle at 10% 85%, rgba(210, 186, 133, 0.15), transparent 45%),
            radial-gradient(circle at 90% 20%, rgba(112, 128, 107, 0.15), transparent 45%)
          `,
        }}
      />

      <div className="relative z-10 w-[min(92vw,1500px)] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 lg:gap-16 items-end pb-12 border-b border-[#111411]/15">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#111411]/60 font-semibold">
                Seasonal Edit / 2026
              </p>
              <span className="text-[#111411]/30">·</span>
              
              {/* Seasonal Calendar Month Selector Trigger */}
              <div className="relative inline-block">
                <button
                  onClick={() => setShowMonthSelector(!showMonthSelector)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider px-2 py-0.5 rounded-md bg-[#111411]/5 hover:bg-[#111411]/10 text-[#111411]/80 transition-colors cursor-pointer"
                  title="Filter botanical availability by month"
                >
                  <Calendar className="w-3 h-3 text-[#70806b]" />
                  <span>
                    Month: {MONTH_OPTIONS.find((m) => m.value === selectedMonth)?.label.split(' ')[0]}
                  </span>
                  {selectedMonth === actualMonth && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {showMonthSelector && (
                  <div className="absolute left-0 top-full mt-2 z-30 w-52 p-1.5 bg-[#0c1720] text-[#f8f5ed] rounded-xl shadow-xl border border-white/15">
                    <p className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#d2ba85]">
                      Simulate Bloom Month
                    </p>
                    <div className="max-h-56 overflow-y-auto space-y-0.5">
                      {MONTH_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => {
                            setSelectedMonth(opt.value);
                            setShowMonthSelector(false);
                          }}
                          className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                            selectedMonth === opt.value
                              ? 'bg-white/15 text-white font-medium'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {opt.value === actualMonth && (
                            <span className="text-[9px] font-mono text-emerald-400">NOW</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h2 className="font-serif text-[clamp(3.4rem,7vw,7.5rem)] leading-[0.92] tracking-[-0.04em] font-normal text-balance">
              Curated <em className="italic">Assemblages.</em>
            </h2>
          </div>

          <div className="flex flex-col gap-5 justify-between">
            <p className="text-[0.98rem] leading-relaxed text-[#111411]/70 font-light max-w-md">
              Living art pieces designed for atmospheric presence. Sourced within their natural
              biological windows to ensure architectural posture.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={onViewArchive}
                type="button"
                className="inline-flex items-center gap-2 pb-1 border-b border-[#111411] text-[11px] uppercase tracking-[0.16em] font-medium hover:opacity-70 transition-opacity cursor-pointer"
              >
                <span>View Complete Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenBespoke}
                type="button"
                className="inline-flex items-center gap-1.5 pb-1 border-b border-[#70806b] text-[11px] uppercase tracking-[0.16em] font-medium text-[#4f5c4c] hover:text-[#111411] transition-colors cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-[#d2ba85]" />
                <span>Custom Commission</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-10 pt-16 items-start">
          {products.map((product, idx) => {
            const isOffset = idx === 1;
            const seasonal = getSeasonalAvailability(product.id, selectedMonth);

            return (
              <article
                key={product.id}
                className={`group flex flex-col ${isOffset ? 'md:pt-10' : ''}`}
              >
                {/* Media Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl md:rounded-3xl bg-[#d9d5ca]/80 backdrop-blur-md border border-white/80 shadow-[0_14px_35px_rgba(0,0,0,0.05)] transition-all duration-700">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.opacity = '0.9';
                    }}
                  />

                  {/* Study Sheet Inspector badge */}
                  <button
                    onClick={() => onSelectProduct(product)}
                    type="button"
                    title="Examine botanical stems & seasonal availability"
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/70 backdrop-blur-md text-[#111] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Seasonal Availability Badge / Strip on Card */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0c1720]/80 backdrop-blur-md border border-white/20 text-[#f8f5ed] text-[10px] font-mono tracking-wider shadow-md">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          seasonal.status === 'peak'
                            ? 'bg-emerald-400 animate-pulse'
                            : seasonal.status === 'moderate'
                            ? 'bg-amber-400'
                            : 'bg-slate-400'
                        }`}
                      />
                      <span>{seasonal.monthName}: {seasonal.status === 'peak' ? 'Prime Bloom' : seasonal.status === 'moderate' ? 'Limited Crop' : 'Climate Reserve'}</span>
                    </div>
                  </div>

                  {/* Quick Add Bottom Bar */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-3 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <button
                      onClick={() => onQuickAdd(product)}
                      type="button"
                      className="w-full min-h-[48px] px-5 bg-[#090e10]/85 hover:bg-[#090e10] backdrop-blur-md text-white text-[11px] uppercase tracking-[0.14em] font-medium rounded-xl flex items-center justify-between transition-colors cursor-pointer border border-white/20"
                    >
                      <span>Quick Add</span>
                      <span className="flex items-center gap-1">
                        ${product.price}
                        <Plus className="w-4 h-4 ml-1" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Product Meta */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="pt-4 flex flex-col gap-1.5 cursor-pointer group-hover:opacity-90 transition-opacity"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-[#111411]">
                      {product.name}
                    </h3>
                    <span className="text-[14px] font-mono tracking-wider text-[#111411]/75">
                      ${product.price}
                    </span>
                  </div>

                  <p className="text-[12px] text-[#111411]/55 uppercase tracking-[0.1em]">
                    {product.stems.slice(0, 2).join(' · ')}
                  </p>

                  {/* Seasonal Availability Informational Text Line (Zero-Pill Discipline) */}
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-[#111411]/65 font-light">
                    <span className="font-medium text-[#4f5c4c]">
                      {seasonal.statusLabel.split(' · ')[0]}
                    </span>
                    <span aria-hidden="true" className="text-[#111411]/25">·</span>
                    <span className="text-[#111411]/55">{seasonal.harvestWindow}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

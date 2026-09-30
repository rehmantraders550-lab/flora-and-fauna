import React, { useState } from 'react';
import { X, Sparkles, Clock, Compass, Wind, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { Product } from '../types/floria';
import { getSeasonalAvailability } from '../utils/seasonalAvailability';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const actualMonth = new Date().getMonth() + 1;
  const [activeMonth, setActiveMonth] = useState<number>(actualMonth);

  if (!product) return null;

  const seasonal = getSeasonalAvailability(product.id, activeMonth);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0c1720] text-[#f8f5ed] rounded-3xl overflow-hidden shadow-2xl border border-white/15 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Media Column */}
          <div className="relative aspect-[3/4] md:aspect-auto md:h-full bg-[#15242d] overflow-hidden flex flex-col justify-between">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1720] via-transparent to-transparent md:hidden" />

            {/* Float badge over image */}
            <div className="absolute top-5 left-5 z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c1720]/85 backdrop-blur-md border border-white/20 text-[11px] font-mono tracking-wider text-white shadow-lg">
                <span
                  className={`w-2 h-2 rounded-full ${
                    seasonal.status === 'peak'
                      ? 'bg-emerald-400 animate-pulse'
                      : seasonal.status === 'moderate'
                      ? 'bg-amber-400'
                      : 'bg-slate-400'
                  }`}
                />
                <span>{seasonal.monthName} Status: {seasonal.status === 'peak' ? 'Peak Bloom' : seasonal.status === 'moderate' ? 'Limited' : 'Reserve'}</span>
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d2ba85]">
                  {product.subtitle}
                </span>
                <span className="font-mono text-xl text-white font-medium">
                  ${product.price}
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-white font-normal mt-1 mb-2">
                {product.name}
              </h2>

              <p className="text-[13px] text-white/75 leading-relaxed font-light mb-4">
                {product.description}
              </p>

              {/* SEASONAL AVAILABILITY DEDICATED SECTION */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/15 space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#d2ba85]" />
                    <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#d2ba85] font-semibold">
                      Seasonal Availability ({seasonal.monthName})
                    </h4>
                  </div>
                  {activeMonth === actualMonth && (
                    <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Current Month
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      seasonal.status === 'peak'
                        ? 'bg-emerald-400'
                        : seasonal.status === 'moderate'
                        ? 'bg-amber-400'
                        : 'bg-slate-400'
                    }`}
                  />
                  <strong className="text-white font-medium">{seasonal.statusLabel}</strong>
                </div>

                {/* 12-Month Micro Bloom Calendar Visualizer */}
                <div className="pt-2">
                  <div className="flex justify-between items-center text-[9px] font-mono text-white/40 mb-1.5">
                    <span>12-MONTH HARVEST TIMELINE</span>
                    <span>ACTIVE: {seasonal.harvestWindow}</span>
                  </div>
                  <div className="grid grid-cols-12 gap-1 bg-black/40 p-1.5 rounded-lg border border-white/10">
                    {seasonal.monthlySchedule.map((m) => {
                      const isCurrent = m.monthIndex === activeMonth;
                      return (
                        <button
                          key={m.monthIndex}
                          onClick={() => setActiveMonth(m.monthIndex)}
                          title={`Month: ${m.shortName} (${m.status}) - Click to inspect`}
                          type="button"
                          className={`relative flex flex-col items-center py-1 rounded transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-white/20 ring-1 ring-white/60'
                              : 'hover:bg-white/10'
                          }`}
                        >
                          <span className="text-[9px] font-mono text-white/70">{m.shortName[0]}</span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-1 ${
                              m.status === 'peak'
                                ? 'bg-emerald-400'
                                : m.status === 'moderate'
                                ? 'bg-amber-400'
                                : 'bg-white/15'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Field & Region Notes */}
                <div className="space-y-1.5 pt-1 text-[11px] text-white/70">
                  <div className="flex items-center gap-1.5 text-white/90">
                    <MapPin className="w-3 h-3 text-[#d2ba85] shrink-0" />
                    <span className="font-medium text-[11px]">{seasonal.growerRegion}</span>
                  </div>
                  <p className="text-[11px] text-white/65 leading-relaxed pl-4 font-light">
                    {seasonal.harvestNote}
                  </p>
                </div>
              </div>

              {/* Stems Composition */}
              <div className="space-y-3 pt-2 border-t border-white/10 text-xs">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.16em] text-white/45 mb-1.5 font-medium">
                    Botanical Stems Included
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-white/80">
                    {product.stems.map((stem, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d2ba85] shrink-0" />
                        <span className="truncate">{stem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-1 text-[10px] text-[#d2ba85] uppercase tracking-wider mb-0.5">
                      <Clock className="w-3 h-3" />
                      <span>Longevity</span>
                    </div>
                    <p className="text-[11px] text-white/80">{product.longevityDays}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-1 text-[10px] text-[#d2ba85] uppercase tracking-wider mb-0.5">
                      <Wind className="w-3 h-3" />
                      <span>Scent Profile</span>
                    </div>
                    <p className="text-[11px] text-white/80 truncate">{product.scentProfile}</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1 text-[10px] text-[#d2ba85] uppercase tracking-wider mb-0.5">
                    <Compass className="w-3 h-3" />
                    <span>Vessel &amp; Dimensions</span>
                  </div>
                  <p className="text-[11px] text-white/80">
                    {product.dimensions} · {product.vaseType}
                  </p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full min-h-[48px] bg-[#f4f0e7] hover:bg-white text-[#111] text-[11px] uppercase tracking-[0.16em] font-medium rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#a88d4c]" />
                <span>Acquire This Assemblage (${product.price})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

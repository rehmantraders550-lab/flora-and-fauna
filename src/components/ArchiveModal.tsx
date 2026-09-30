import React from 'react';
import { X, Check } from 'lucide-react';
import { ArchiveItem } from '../types/floria';

interface ArchiveModalProps {
  item: ArchiveItem | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ArchiveModal: React.FC<ArchiveModalProps> = ({ item, onClose, onInquire }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-[#0c1720] text-[#f8f5ed] rounded-3xl overflow-hidden shadow-2xl border border-white/15 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Media Column */}
          <div className="relative min-h-[340px] md:min-h-[500px] bg-[#15242d] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1720] via-transparent to-transparent md:hidden" />
          </div>

          {/* Details Column */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d2ba85]">
                  Archival Study {item.number}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                  {item.category}
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-5xl text-white font-normal mt-1 mb-3">
                {item.title}
              </h2>

              <p className="text-[13px] text-white/80 leading-relaxed font-light mb-6">
                {item.details}
              </p>

              {/* Specifications */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="text-[10px] uppercase tracking-[0.16em] text-white/45 font-medium">
                  Curatorial Specifications
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#d2ba85]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  onInquire(item.title);
                  onClose();
                }}
                className="w-full min-h-[48px] bg-[#f4f0e7] hover:bg-white text-[#111] text-[11px] uppercase tracking-[0.16em] font-medium rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Request Commission for {item.title}</span>
              </button>
              <p className="text-[11px] text-center text-white/45">
                Site-specific consultations require 14 days lead time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

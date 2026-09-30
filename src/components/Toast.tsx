import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#090e10]/95 backdrop-blur-md text-[#f8f5ed] border border-white/20 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-300 pointer-events-none"
    >
      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
        <Check className="w-3 h-3" />
      </div>
      <p className="text-xs uppercase tracking-[0.08em] font-medium">{message}</p>
    </div>
  );
};

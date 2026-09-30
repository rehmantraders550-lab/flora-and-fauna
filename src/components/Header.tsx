import React, { useState, useEffect } from 'react';
import { ShoppingBag, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { soundscape } from '../utils/audioAmbience';

interface HeaderProps {
  bagCount: number;
  onOpenBag: () => void;
  onOpenBespoke: () => void;
}

export const Header: React.FC<HeaderProps> = ({ bagCount, onOpenBag, onOpenBespoke }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 140 && currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleToggleSound = () => {
    const active = soundscape.toggle();
    setIsAudioActive(active);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="w-full px-6 md:px-12 py-5 flex items-center justify-between mix-blend-difference text-[#f8f5ed]">
        {/* Brand Zone */}
        <a
          href="#top"
          className="font-serif text-2xl md:text-3xl tracking-tight hover:opacity-85 transition-opacity"
          aria-label="Floria Home"
        >
          Floria.
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em] font-medium opacity-85">
          <a href="#shop" className="hover:opacity-100 transition-opacity">
            Collections
          </a>
          <a href="#architecture" className="hover:opacity-100 transition-opacity">
            Process
          </a>
          <a href="#archive" className="hover:opacity-100 transition-opacity">
            Archive
          </a>
          <button
            onClick={onOpenBespoke}
            className="flex items-center gap-1.5 hover:opacity-100 transition-opacity cursor-pointer text-[#e2dec9]"
          >
            <Sparkles className="w-3 h-3 text-[#d2ba85]" />
            Bespoke Studio
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Soundscape Ambient Audio Surprise */}
          <button
            onClick={handleToggleSound}
            title={isAudioActive ? 'Mute Greenhouse Soundscape' : 'Play Greenhouse Acoustic Soundscape'}
            className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] px-2.5 py-1.5 rounded border border-white/20 hover:border-white/50 transition-colors cursor-pointer"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span className="hidden sm:inline text-emerald-300">Ambience</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 opacity-60" />
                <span className="hidden sm:inline opacity-60">Sound</span>
              </>
            )}
          </button>

          {/* Bag Button */}
          <button
            onClick={onOpenBag}
            type="button"
            aria-label={`Shopping bag with ${bagCount} items`}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] hover:opacity-100 transition-opacity cursor-pointer group"
          >
            <span className="hidden sm:inline">Bag</span>
            <div className="relative w-7 h-7 rounded-full border border-current flex items-center justify-center text-[10px] font-medium transition-transform group-hover:scale-105">
              <ShoppingBag className="w-3 h-3 sm:hidden" />
              <span className="hidden sm:inline">{bagCount}</span>
              {bagCount > 0 && (
                <span className="sm:hidden absolute -top-1 -right-1 w-3.5 h-3.5 bg-white text-black text-[9px] rounded-full flex items-center justify-center font-bold">
                  {bagCount}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

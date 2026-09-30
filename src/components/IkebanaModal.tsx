import React, { useState } from 'react';
import { X, Compass, RefreshCw } from 'lucide-react';

interface IkebanaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IkebanaModal: React.FC<IkebanaModalProps> = ({ isOpen, onClose }) => {
  const [shinAngle, setShinAngle] = useState(15); // angle from vertical
  const [soeAngle, setSoeAngle] = useState(45);
  const [hikaeAngle, setHikaeAngle] = useState(75);

  if (!isOpen) return null;

  const resetAngles = () => {
    setShinAngle(15);
    setSoeAngle(45);
    setHikaeAngle(75);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xs transition-opacity"
      />

      <div className="relative z-10 w-full max-w-3xl bg-[#0c1720] text-[#f8f5ed] rounded-3xl overflow-hidden shadow-2xl border border-white/20 my-8">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#d2ba85]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d2ba85]">
                Geometric Principles
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-white">
                The Ikebana Triad Matrix
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* SVG Geometric Ikebana Balance Visualizer */}
          <div className="relative aspect-square w-full rounded-2xl bg-[#080d11] border border-white/10 flex flex-col items-center justify-center p-4 overflow-hidden">
            <svg viewBox="0 0 300 300" className="w-full h-full max-w-[280px]">
              {/* Radial Degree Guidelines */}
              <circle cx="150" cy="240" r="180" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <circle cx="150" cy="240" r="120" fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
              <circle cx="150" cy="240" r="60" fill="none" stroke="rgba(255,255,255,0.12)" />

              {/* Base Kenzan/Vessel */}
              <rect x="110" y="240" width="80" height="22" rx="4" fill="#1b2a33" stroke="#d2ba85" strokeWidth="1.5" />
              <text x="150" y="254" textAnchor="middle" fill="#d2ba85" fontSize="8" fontFamily="monospace">KENZAN</text>

              {/* 1. Shin (Heaven / Lead Line) */}
              <line
                x1="150"
                y1="240"
                x2={150 + Math.sin((shinAngle * Math.PI) / 180) * 190}
                y2={240 - Math.cos((shinAngle * Math.PI) / 180) * 190}
                stroke="#f4f0e7"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle
                cx={150 + Math.sin((shinAngle * Math.PI) / 180) * 190}
                cy={240 - Math.cos((shinAngle * Math.PI) / 180) * 190}
                r="6"
                fill="#f4f0e7"
              />
              <text
                x={150 + Math.sin((shinAngle * Math.PI) / 180) * 205}
                y={240 - Math.cos((shinAngle * Math.PI) / 180) * 205}
                textAnchor="middle"
                fill="#f4f0e7"
                fontSize="10"
                fontFamily="serif"
              >
                Shin ({shinAngle}°)
              </text>

              {/* 2. Soe (Human / Secondary Line) */}
              <line
                x1="150"
                y1="240"
                x2={150 - Math.sin((soeAngle * Math.PI) / 180) * 140}
                y2={240 - Math.cos((soeAngle * Math.PI) / 180) * 140}
                stroke="#d2ba85"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx={150 - Math.sin((soeAngle * Math.PI) / 180) * 140}
                cy={240 - Math.cos((soeAngle * Math.PI) / 180) * 140}
                r="5"
                fill="#d2ba85"
              />
              <text
                x={150 - Math.sin((soeAngle * Math.PI) / 180) * 155}
                y={240 - Math.cos((soeAngle * Math.PI) / 180) * 155}
                textAnchor="middle"
                fill="#d2ba85"
                fontSize="10"
                fontFamily="serif"
              >
                Soe ({soeAngle}°)
              </text>

              {/* 3. Hikae (Earth / Tertiary Ground Line) */}
              <line
                x1="150"
                y1="240"
                x2={150 + Math.sin((hikaeAngle * Math.PI) / 180) * 95}
                y2={240 - Math.cos((hikaeAngle * Math.PI) / 180) * 95}
                stroke="#70806b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx={150 + Math.sin((hikaeAngle * Math.PI) / 180) * 95}
                cy={240 - Math.cos((hikaeAngle * Math.PI) / 180) * 95}
                r="4"
                fill="#70806b"
              />
              <text
                x={150 + Math.sin((hikaeAngle * Math.PI) / 180) * 110}
                y={240 - Math.cos((hikaeAngle * Math.PI) / 180) * 110}
                textAnchor="middle"
                fill="#70806b"
                fontSize="10"
                fontFamily="serif"
              >
                Hikae ({hikaeAngle}°)
              </text>
            </svg>
            <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
              Live Asymmetric Tension Vector
            </span>
          </div>

          {/* Interactive Controls & Philosophy */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                In classical Sogetsu and Moribana schools, nature is never symmetrical. Beauty
                emerges from the calibrated tension between three primary botanical vectors:
              </p>
            </div>

            {/* Sliders */}
            <div className="space-y-4">
              {/* Shin */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-medium text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f4f0e7]" />
                    Shin (Heaven / Subject)
                  </span>
                  <span className="font-mono text-[#d2ba85]">{shinAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="45"
                  value={shinAngle}
                  onChange={(e) => setShinAngle(Number(e.target.value))}
                  className="w-full accent-white h-1.5 bg-white/20 rounded cursor-pointer"
                />
              </div>

              {/* Soe */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-medium text-[#d2ba85] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#d2ba85]" />
                    Soe (Man / Secondary Counterbalance)
                  </span>
                  <span className="font-mono text-[#d2ba85]">{soeAngle}°</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="70"
                  value={soeAngle}
                  onChange={(e) => setSoeAngle(Number(e.target.value))}
                  className="w-full accent-[#d2ba85] h-1.5 bg-white/20 rounded cursor-pointer"
                />
              </div>

              {/* Hikae */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-medium text-[#8da386] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#70806b]" />
                    Hikae (Earth / Anchoring Depth)
                  </span>
                  <span className="font-mono text-[#d2ba85]">{hikaeAngle}°</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="90"
                  value={hikaeAngle}
                  onChange={(e) => setHikaeAngle(Number(e.target.value))}
                  className="w-full accent-[#70806b] h-1.5 bg-white/20 rounded cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={resetAngles}
                type="button"
                className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset to Classical 15° / 45° / 75° Rule</span>
              </button>

              <button
                onClick={onClose}
                type="button"
                className="px-5 py-2.5 rounded-lg bg-[#f4f0e7] hover:bg-white text-black text-xs uppercase tracking-wider font-medium cursor-pointer"
              >
                Apply to Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

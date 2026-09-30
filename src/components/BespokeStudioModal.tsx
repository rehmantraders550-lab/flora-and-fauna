import React, { useState } from 'react';
import { X, Sparkles, Check, Layers } from 'lucide-react';
import { Product } from '../types/floria';

interface BespokeStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomToCart: (product: Product) => void;
}

const VESSELS = [
  { id: 'travertine', name: 'Raw Travertine Cylinder', price: 65, desc: 'Honed Italian porous limestone, heavy base' },
  { id: 'raku', name: 'Raku Charcoal Ceramic', price: 50, desc: 'Smoked Japanese crackle glaze, matte unsealed' },
  { id: 'glass', name: 'Mouth-Blown Fluted Glass', price: 45, desc: 'Optically clear ribbed glass from Murano' },
  { id: 'bronze', name: 'Patinated Cast Bronze', price: 95, desc: 'Hand-cast architectural bronze with verdi finish' },
];

const PRIMARY_STEMS = [
  { id: 'anthurium', name: 'Coral Anthurium Obake', price: 40, height: '70cm', mood: 'Architectural / Exotic' },
  { id: 'protea', name: 'King Pincushion Protea', price: 55, height: '60cm', mood: 'Dramatic / Sculptural' },
  { id: 'vanda', name: 'Midnight Vanda Orchid', price: 65, height: '45cm', mood: 'Enigmatic / Minimalist' },
  { id: 'iris', name: 'Japanese Deep Blue Iris', price: 35, height: '55cm', mood: 'Serene / Dynamic' },
];

const FOLIAGES = [
  { id: 'eucalyptus', name: 'Silver Dollar Eucalyptus', price: 20, desc: 'Aromatic blue-grey disc leaves' },
  { id: 'ruscus', name: 'Bleached Ruscus Stems', price: 25, desc: 'Ghostly ivory textural branches' },
  { id: 'fern', name: 'Monochromatic Leather Fern', price: 18, desc: 'Deep jade geometric fronds' },
  { id: 'olive', name: 'Wild Tuscan Olive Branch', price: 22, desc: 'Silvery undersides with organic twists' },
];

export const BespokeStudioModal: React.FC<BespokeStudioModalProps> = ({
  isOpen,
  onClose,
  onAddCustomToCart,
}) => {
  const [selectedVessel, setSelectedVessel] = useState(VESSELS[0]);
  const [selectedStem, setSelectedStem] = useState(PRIMARY_STEMS[0]);
  const [selectedFoliage, setSelectedFoliage] = useState(FOLIAGES[0]);
  const [spatialLight, setSpatialLight] = useState('diffused');

  if (!isOpen) return null;

  const totalPrice = selectedVessel.price + selectedStem.price + selectedFoliage.price + 35; // base curation fee

  const handleCreateCommission = () => {
    const customProduct: Product = {
      id: `bespoke-${Date.now()}`,
      name: `Bespoke: ${selectedStem.name.split(' ')[0]} in ${selectedVessel.name.split(' ')[0]}`,
      subtitle: 'Custom Studio Commission',
      price: totalPrice,
      image: 'https://floria-landing-page.vercel.app/bouquet-2.webp',
      stems: [selectedStem.name, selectedFoliage.name, 'Ikebana Kenzan Support'],
      dimensions: `${selectedStem.height} H × 35cm W`,
      vaseType: selectedVessel.name,
      longevityDays: '14–21 days in ' + spatialLight + ' lighting',
      scentProfile: 'Custom botanical blend of crushed stem and fresh sap',
      description: `A custom-commissioned living sculpture designed for ${spatialLight} interior lighting. Anchored in a ${selectedVessel.name} with ${selectedStem.name} and ${selectedFoliage.name}.`,
    };

    onAddCustomToCart(customProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-[#0c1720] text-[#f8f5ed] rounded-3xl overflow-hidden shadow-2xl border border-white/20 my-8">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#d2ba85]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Commission Lab</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mt-1">
              Curate Bespoke Assemblage
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Builder Content */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Vessel */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.16em] text-white/50 mb-3 font-medium">
                1. Foundation Vessel
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VESSELS.map((vessel) => {
                  const isSelected = selectedVessel.id === vessel.id;
                  return (
                    <button
                      key={vessel.id}
                      onClick={() => setSelectedVessel(vessel)}
                      type="button"
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#d2ba85] bg-[#d2ba85]/10'
                          : 'border-white/10 bg-white/5 hover:border-white/30'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">{vessel.name}</span>
                        <span className="text-[11px] font-mono text-[#d2ba85]">${vessel.price}</span>
                      </div>
                      <p className="text-[10px] text-white/50 mt-1 line-clamp-1">{vessel.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Primary Architectural Stem */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.16em] text-white/50 mb-3 font-medium">
                2. Dominant Architectural Stem (Shin)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIMARY_STEMS.map((stem) => {
                  const isSelected = selectedStem.id === stem.id;
                  return (
                    <button
                      key={stem.id}
                      onClick={() => setSelectedStem(stem)}
                      type="button"
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#d2ba85] bg-[#d2ba85]/10'
                          : 'border-white/10 bg-white/5 hover:border-white/30'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">{stem.name}</span>
                        <span className="text-[11px] font-mono text-[#d2ba85]">${stem.price}</span>
                      </div>
                      <p className="text-[10px] text-white/50 mt-1">
                        {stem.height} · {stem.mood}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Companion Foliage */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.16em] text-white/50 mb-3 font-medium">
                3. Subordinate Botanical Texture (Soe)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FOLIAGES.map((foliage) => {
                  const isSelected = selectedFoliage.id === foliage.id;
                  return (
                    <button
                      key={foliage.id}
                      onClick={() => setSelectedFoliage(foliage)}
                      type="button"
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#d2ba85] bg-[#d2ba85]/10'
                          : 'border-white/10 bg-white/5 hover:border-white/30'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">{foliage.name}</span>
                        <span className="text-[11px] font-mono text-[#d2ba85]">${foliage.price}</span>
                      </div>
                      <p className="text-[10px] text-white/50 mt-1 line-clamp-1">{foliage.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Spatial Light Calibration */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.16em] text-white/50 mb-2 font-medium">
                4. Destination Interior Light Profile
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'diffused', label: 'Diffused Morning / North Light' },
                  { id: 'direct', label: 'Sunlit Skylight / Atrium' },
                  { id: 'dim', label: 'Nocturnal / Ambient Dining' },
                ].map((light) => (
                  <button
                    key={light.id}
                    onClick={() => setSpatialLight(light.id)}
                    type="button"
                    className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                      spatialLight === light.id
                        ? 'bg-white text-black font-medium'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {light.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Studio Ledger Preview */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-[#15242d] border border-white/10">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#d2ba85] mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Live Composition</span>
              </div>
              <h3 className="font-serif text-2xl text-white">Commission Blueprint</h3>

              <div className="mt-6 space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Vessel Base</span>
                  <span className="text-white font-medium">{selectedVessel.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Lead Stem</span>
                  <span className="text-white font-medium">{selectedStem.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Companion</span>
                  <span className="text-white font-medium">{selectedFoliage.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Ikebana Proportion</span>
                  <span className="text-emerald-400 font-mono">1 : 1.618 (Golden)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Studio Curation</span>
                  <span className="text-white font-mono">$35</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/15 flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider text-white/50">Total Est.</span>
                <span className="font-mono text-3xl text-[#d2ba85] font-semibold">${totalPrice}</span>
              </div>
            </div>

            <button
              onClick={handleCreateCommission}
              className="mt-6 w-full min-h-[48px] bg-[#f4f0e7] hover:bg-white text-[#111] text-[11px] uppercase tracking-[0.16em] font-medium rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Check className="w-4 h-4" />
              <span>Add Custom Commission (${totalPrice})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

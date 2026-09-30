import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle2, Gift } from 'lucide-react';
import { CartItem } from '../types/floria';

interface BagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearBag: () => void;
}

export const BagDrawer: React.FC<BagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag,
}) => {
  const [giftNote, setGiftNote] = useState('');
  const [showGiftInput, setShowGiftInput] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? (subtotal > 200 ? 0 : 25) : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      setTimeout(() => {
        onClearBag();
        setOrderComplete(false);
        onClose();
      }, 3500);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0c1720] text-[#f8f5ed] shadow-2xl flex flex-col justify-between border-l border-white/10">
          {/* Drawer Header */}
          <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d2ba85]">
                Curated Bag
              </p>
              <h2 className="font-serif text-2xl text-white mt-0.5">
                Your Botanical Assemblage
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
            {orderComplete ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-serif text-3xl text-white mb-2">Commission Recorded</h3>
                <p className="text-[13px] text-white/70 max-w-xs font-light">
                  Our floral artisans are preparing your site-specific stems. Dispatch notice sent to
                  your studio ledger.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 opacity-60">
                <p className="font-serif text-2xl mb-2">Your Bag is Empty</p>
                <p className="text-[12px] uppercase tracking-wider">
                  Select a seasonal assemblage or custom commission to begin.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-20 object-cover rounded-lg bg-black/40 shrink-0"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-serif text-lg font-normal text-white truncate">
                            {item.product.name}
                          </h4>
                          <span className="text-[13px] font-mono text-[#d2ba85] shrink-0">
                            ${item.product.price * item.quantity}
                          </span>
                        </div>

                        <p className="text-[11px] text-white/50 truncate">
                          {item.product.vaseType}
                        </p>

                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/10">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="w-6 h-6 rounded border border-white/20 flex items-center justify-center hover:border-white transition-colors cursor-pointer text-white/70 hover:text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-mono w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="w-6 h-6 rounded border border-white/20 flex items-center justify-center hover:border-white transition-colors cursor-pointer text-white/70 hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-white/40 hover:text-rose-400 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gift Note Accordion */}
                <div className="pt-2 border-t border-white/10">
                  <button
                    onClick={() => setShowGiftInput(!showGiftInput)}
                    className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#d2ba85] hover:opacity-80 transition-opacity"
                  >
                    <Gift className="w-3.5 h-3.5" />
                    <span>{showGiftInput ? 'Hide Handwritten Note' : 'Add Handwritten Studio Note'}</span>
                  </button>

                  {showGiftInput && (
                    <div className="mt-3 space-y-2">
                      <textarea
                        value={giftNote}
                        onChange={(e) => setGiftNote(e.target.value)}
                        placeholder="Inscribe a personal sentiment on hot-pressed cotton paper..."
                        rows={2}
                        className="w-full text-xs p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#d2ba85]"
                      />
                      {giftNote && (
                        <p className="font-serif italic text-sm text-[#d2ba85]/90 px-1">
                          Preview: “{giftNote}”
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer / Summary */}
          {items.length > 0 && !orderComplete && (
            <div className="p-6 md:p-8 border-t border-white/10 space-y-4 bg-[#0a131b]">
              <div className="space-y-1.5 text-xs text-white/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Courier Surcharge (Cold-chain)</span>
                  <span className="font-mono text-white">
                    {deliveryFee === 0 ? 'Complimentary' : `$${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-medium text-white">
                  <span>Total</span>
                  <span className="font-mono text-lg text-[#d2ba85]">${total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full min-h-[50px] bg-[#f4f0e7] hover:bg-white text-[#111] text-[11px] uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-2 rounded-xl transition-all cursor-pointer shadow-lg disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Securing Cold Delivery...</span>
                ) : (
                  <>
                    <span>Proceed to Delivery &amp; Reserve</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CuratedAssemblages } from './components/CuratedAssemblages';
import { ArchitectureProcess } from './components/ArchitectureProcess';
import { ArchivesSection } from './components/ArchivesSection';
import { ClaritySection } from './components/ClaritySection';
import { ManifestoSection } from './components/ManifestoSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

import { BagDrawer } from './components/BagDrawer';
import { ProductModal } from './components/ProductModal';
import { ArchiveModal } from './components/ArchiveModal';
import { BespokeStudioModal } from './components/BespokeStudioModal';
import { IkebanaModal } from './components/IkebanaModal';
import { Toast } from './components/Toast';

import { PRODUCTS } from './data/floriaData';
import { Product, ArchiveItem, CartItem } from './types/floria';
import { useParallax } from './hooks/useParallax';
import { useSlowScroll } from './hooks/useSlowScroll';
import { Pause, Sparkles } from 'lucide-react';

export default function App() {
  // Initialize ORVIA physical parallax engine
  useParallax();

  // Initialize dynamic slow-scroll engine and ambient drift
  const { isDrifting, toggleDrift, scrollToTarget } = useSlowScroll();

  const [bagItems, setBagItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 },
  ]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArchive, setSelectedArchive] = useState<ArchiveItem | null>(null);
  const [isBespokeOpen, setIsBespokeOpen] = useState(false);
  const [isIkebanaOpen, setIsIkebanaOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const totalBagCount = bagItems.reduce((acc, item) => acc + item.quantity, 0);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleQuickAdd = (product: Product) => {
    setBagItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    triggerToast(`Added “${product.name}” to your bag.`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setBagItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setBagItems((prev) => prev.filter((item) => item.product.id !== productId));
    triggerToast('Item removed from bag.');
  };

  const handleClearBag = () => {
    setBagItems([]);
  };

  const handleAddCustomToCart = (customProduct: Product) => {
    setBagItems((prev) => [...prev, { product: customProduct, quantity: 1 }]);
    triggerToast(`Bespoke commission added to your bag.`);
    setIsBagOpen(true);
  };

  const handleInquireArchive = (title: string) => {
    setIsBespokeOpen(true);
    triggerToast(`Initialized commission workspace for “${title}”.`);
  };

  return (
    <div className="relative min-h-screen bg-[#0c1720] selection:bg-[#c7d3c2] selection:text-[#101510] text-[#111411]">
      {/* Underlying atmospheric botanical depth field that diffuses through translucent frosted ivory glass */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(circle at 18% 30%, rgba(112, 128, 107, 0.26), transparent 45%),
            radial-gradient(circle at 82% 65%, rgba(210, 186, 133, 0.20), transparent 42%),
            radial-gradient(circle at 50% 88%, rgba(26, 44, 55, 0.45), transparent 50%),
            linear-gradient(180deg, #0c1720 0%, #101c24 35%, #0d1720 70%, #081116 100%)
          `,
        }}
      />

      {/* Primary Site Navigation with Dynamic Slow Scroll control */}
      <Header
        bagCount={totalBagCount}
        onOpenBag={() => setIsBagOpen(true)}
        onOpenBespoke={() => setIsBespokeOpen(true)}
        onNavigate={(id) => scrollToTarget(id, 1800)}
        isDrifting={isDrifting}
        onToggleDrift={toggleDrift}
      />

      <main id="main">
        {/* Hero Section with slow-scrolling actions */}
        <Hero
          onExploreCollections={() => scrollToTarget('shop', 1800)}
          onExploreManifesto={() => scrollToTarget('architecture', 1900)}
          onScrollCueClick={() => scrollToTarget('shop', 1800)}
        />

        {/* Curated Assemblages */}
        <CuratedAssemblages
          products={PRODUCTS}
          onQuickAdd={handleQuickAdd}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onOpenBespoke={() => setIsBespokeOpen(true)}
          onViewArchive={() => scrollToTarget('archive', 2000)}
        />

        {/* Architecture & Process */}
        <ArchitectureProcess
          onOpenIkebana={() => setIsIkebanaOpen(true)}
          onOpenBespoke={() => setIsBespokeOpen(true)}
        />

        {/* The Archives */}
        <ArchivesSection onSelectArchive={(item) => setSelectedArchive(item)} />

        {/* Clarity / Testimonials */}
        <ClaritySection />

        {/* Manifesto */}
        <ManifestoSection />

        {/* Newsletter / Studio Notes */}
        <NewsletterSection />
      </main>

      {/* Responsive Footer with "Blooming in ORVIA GARDENS" */}
      <Footer onScrollToTop={() => scrollToTarget(0, 2200)} />

      {/* Floating Slow-Scroll Active Indicator HUD */}
      {isDrifting && (
        <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0c1720]/90 backdrop-blur-md border border-white/20 text-[#f8f5ed] shadow-2xl animate-in fade-in duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-white/90">
            Botanical Drift Active
          </span>
          <button
            onClick={toggleDrift}
            className="ml-1 p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
            title="Pause slow drift"
          >
            <Pause className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Interactive Drawers & Modals */}
      <BagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={bagItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleQuickAdd}
      />

      <ArchiveModal
        item={selectedArchive}
        onClose={() => setSelectedArchive(null)}
        onInquire={handleInquireArchive}
      />

      <BespokeStudioModal
        isOpen={isBespokeOpen}
        onClose={() => setIsBespokeOpen(false)}
        onAddCustomToCart={handleAddCustomToCart}
      />

      <IkebanaModal
        isOpen={isIkebanaOpen}
        onClose={() => setIsIkebanaOpen(false)}
      />

      {/* Real-time feedback toast */}
      <Toast message={toastMessage} />
    </div>
  );
}

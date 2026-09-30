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

export default function App() {
  // Initialize ORVIA physical parallax engine
  useParallax();

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f2efe6] selection:bg-[#c7d3c2] selection:text-[#101510] text-[#111411]">
      {/* Primary Site Navigation */}
      <Header
        bagCount={totalBagCount}
        onOpenBag={() => setIsBagOpen(true)}
        onOpenBespoke={() => setIsBespokeOpen(true)}
      />

      <main id="main">
        {/* Hero Section */}
        <Hero
          onExploreCollections={() => scrollToSection('shop')}
          onExploreManifesto={() => scrollToSection('architecture')}
        />

        {/* Curated Assemblages */}
        <CuratedAssemblages
          products={PRODUCTS}
          onQuickAdd={handleQuickAdd}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onOpenBespoke={() => setIsBespokeOpen(true)}
          onViewArchive={() => scrollToSection('archive')}
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

      {/* Footer */}
      <Footer />

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

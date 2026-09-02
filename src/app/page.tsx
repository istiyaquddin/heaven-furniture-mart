'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarqueeTicker from '@/components/MarqueeTicker';
import Philosophy from '@/components/Philosophy';
import Collections from '@/components/Collections';
import Estimator from '@/components/Estimator';
import WhyHeaven from '@/components/WhyHeaven';
import Milestones from '@/components/Milestones';
import Showroom from '@/components/Showroom';
import Footer from '@/components/Footer';
import FloatingConcierge from '@/components/FloatingConcierge';
import ProductModal from '@/components/ProductModal';
import QuoteModal from '@/components/QuoteModal';
import { Product } from '@/data/products';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-ivory text-brown-deep font-sans selection:bg-teal-deep selection:text-ivory">
      {/* 1. Sticky Editorial Navigation Header */}
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 2. Full-Viewport Hero Grand Entrance */}
      <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 3. Luxury Infinite Marquee Ticker (Anchoring Hero to Brand Story) */}
      <MarqueeTicker />

      {/* 4. Philosophy & Founder's Vision (Diptych Framing, Embossed Quote Card) */}
      <Philosophy />

      {/* 5. Curated Signature Collections (9-item initial grid + 22-item expansion) */}
      <Collections onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* 6. Interactive Bespoke Atelier Budget Estimator */}
      <Estimator />

      {/* 7. Why Discerning Clients Choose Us (4 Craft Pillars) */}
      <WhyHeaven />

      {/* 8. Brand Milestones (2020 Foundation Timeline) */}
      <Milestones />

      {/* 9. Visit the Studio & Interactive Vignette Gallery */}
      <Showroom />

      {/* 10. Architectural Footer */}
      <Footer />

      {/* 11. Floating WhatsApp Concierge */}
      <FloatingConcierge />

      {/* Specification Sheet Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Commission Consultation Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </main>
  );
}

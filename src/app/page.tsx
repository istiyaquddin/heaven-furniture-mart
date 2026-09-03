"use client";

import Collections from "@/components/Collections";
import FloatingConcierge from "@/components/FloatingConcierge";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import Milestones from "@/components/Milestones";
import Philosophy from "@/components/Philosophy";
import ProductModal from "@/components/ProductModal";
import QuoteModal from "@/components/QuoteModal";
import Showroom from "@/components/Showroom";
import { Product } from "@/data/products";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <main
      id="top"
      className="min-h-screen bg-[#f2eee4] text-[#173331] font-editorial-sans relative flex flex-col gap-6 sm:gap-8"
    >
      {/* 1. Minimal Editorial Navigation Header */}
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 2. Beloved Dark Atmospheric Hero Entrance (Preserved As Before) */}
      <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 3. Luxury Infinite Marquee Ticker (Preserved As Before) */}
      <MarqueeTicker />

      {/* 4. Curated Selected Spaces (Product Info & Collections with Specs) */}
      <Collections onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* 5. Studio Philosophy, 6 Craft Pillars & The Bespoke Way */}
      <Philosophy onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 6. Brand Milestones & BFIOA National Recognition Banner */}
      <Milestones />

      {/* 7. Agrabad Flagship Studio & Multi-Vignette Gallery (#showroom & #visit) */}
      <Showroom />

      {/* 8. Architectural Dark Editorial Footer */}
      <Footer />

      {/* 9. Floating WhatsApp Concierge */}
      <FloatingConcierge />

      {/* 10. Specification Sheet Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* 11. Consultation Request Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}

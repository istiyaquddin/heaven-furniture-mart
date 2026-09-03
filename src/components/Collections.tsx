'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { products, Product } from '@/data/products';

interface CollectionsProps {
  onSelectProduct: (product: Product) => void;
}

export default function Collections({ onSelectProduct }: CollectionsProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'living' | 'bedroom' | 'dining' | 'office' | 'accents'>('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const filterTabs = [
    { id: 'all', label: 'All Works (22)' },
    { id: 'living', label: 'Living Suites' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining', label: 'Dining & Marble' },
    { id: 'office', label: 'Executive' },
    { id: 'accents', label: 'Swings & Curios' },
  ] as const;

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const displayedProducts =
    activeCategory === 'all' && !isExpanded
      ? filteredProducts.slice(0, 9)
      : filteredProducts;

  const toggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id="collections" className="py-16 sm:py-24 lg:py-36 bg-ivory-soft border-y border-gold-hairline/40 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-dark font-bold">
                Signature Portfolios
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium text-teal-deep">
              Curated Collections
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-brown-soft max-w-md">
            Each commission is tailored to your preferred dimensions, timber species, upholstery textures, and hand-finished details.
          </p>
        </div>

        {/* Category Filter Tabs with Smooth Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  if (tab.id !== 'all') setIsExpanded(true);
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold whitespace-nowrap transition-all duration-300 border active:scale-95 ${
                  isActive
                    ? 'bg-teal-deep text-ivory border-teal-deep shadow-md scale-[1.02]'
                    : 'bg-transparent text-brown-charcoal border-transparent hover:border-gold/40 hover:text-gold-dark'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Collections Grid with Card Lift Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {displayedProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectProduct(p)}
              className="card-lift bg-ivory border border-gold-hairline/40 hover:border-gold flex flex-col group cursor-pointer overflow-hidden active:scale-[0.99]"
            >
              <div className="relative aspect-[4/3] bg-teal-deep overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                />
                <div className="absolute top-3 left-3 bg-teal-deep/90 backdrop-blur-md border border-gold/40 text-gold-light text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 font-semibold z-10">
                  {p.tag}
                </div>
                {/* Hover Reveal Action */}
                <div className="absolute inset-0 bg-teal-deep/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-ivory text-teal-deep font-sans font-semibold text-[11px] uppercase tracking-widest px-4 py-2.5 shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-teal-deep font-medium group-hover:text-gold transition-colors line-clamp-1 mb-2">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs text-brown-soft line-clamp-2 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-gold/20 flex items-center justify-between text-[11px] text-brown-charcoal">
                  <span className="font-semibold text-gold-dark truncate pr-2">{p.wood.split('(')[0]}</span>
                  <span className="text-[10px] uppercase tracking-wider text-teal-deep font-bold flex items-center gap-1.5 flex-shrink-0 group-hover:translate-x-1 transition-transform">
                    Inquire <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Collections Expansion Toggle */}
        {activeCategory === 'all' && (
          <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={toggleExpand}
              className="btn-luxury-shimmer inline-flex items-center gap-3 bg-teal-deep hover:bg-gold text-ivory hover:text-teal-deep px-8 py-4 text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-xl border border-gold/40 active:scale-95"
            >
              <span>{isExpanded ? 'Show Curated Selection (9 Works)' : 'View All Collections (22 Works)'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

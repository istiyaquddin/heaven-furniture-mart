'use client';

import React from 'react';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center bg-teal-deep text-ivory overflow-hidden border-b border-gold-hairline/30">
      {/* Ambient Background Visual with Parallax Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-sofa.png"
          alt="Heaven Furniture Mart Bespoke Curved Velvet Sofa and Marble Suite"
          className="w-full h-full object-cover object-center scale-100 animate-subtle-zoom opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-transparent to-teal-deep/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Editorial Eyebrow Badge with Pulse Glow */}
          <div className="inline-flex items-center gap-2.5 border border-gold/40 px-3.5 py-1.5 bg-teal-card/60 backdrop-blur-sm mb-6 sm:mb-8 transition-all duration-300 hover:border-gold hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-light font-medium">
              Bespoke Luxury & Interior Styling · Chattogram
            </span>
          </div>

          {/* Main Architectural Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight mb-6 sm:mb-8 text-ivory">
            Furniture,<br />
            <span className="italic font-normal text-gold-light">Crafted Around You.</span>
          </h1>

          {/* Value Proposition Subtext */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-ivory-muted font-light leading-relaxed max-w-2xl mb-8 sm:mb-12">
            Step into a luxury interior studio experience. We design and handcraft custom living, bedroom, dining, and executive suites tailored precisely to your spatial proportions and aesthetic taste.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <button
              onClick={onOpenQuote}
              className="btn-luxury-shimmer bg-gold hover:bg-gold-light text-teal-deep px-8 py-4 sm:py-4.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 text-center group cursor-pointer"
            >
              <span>Book Free Design Consultation</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1.5">arrow_forward</span>
            </button>
            <a
              href="#collections"
              className="border border-gold/40 hover:border-gold text-ivory hover:text-gold px-8 py-4 sm:py-4.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 text-center bg-teal-deep/40 backdrop-blur-sm hover:bg-teal-deep/80 hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] active:scale-98"
            >
              Explore Collections
            </a>
          </div>

          {/* Brand Trust Metrics with Hover Lift */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gold-hairline/25">
            <div className="group cursor-default transition-transform duration-300 hover:-translate-y-1">
              <span className="font-display text-xl sm:text-2xl md:text-3xl text-gold font-bold block group-hover:text-gold-light transition-colors">100%</span>
              <span className="text-[9px] sm:text-[11px] font-sans uppercase tracking-wider text-ivory/70 mt-0.5 block group-hover:text-ivory transition-colors">Bespoke Builds</span>
            </div>
            <div className="group cursor-default transition-transform duration-300 hover:-translate-y-1">
              <span className="font-display text-xl sm:text-2xl md:text-3xl text-gold font-bold block group-hover:text-gold-light transition-colors">Seasoned</span>
              <span className="text-[9px] sm:text-[11px] font-sans uppercase tracking-wider text-ivory/70 mt-0.5 block group-hover:text-ivory transition-colors">Burma Teak Wood</span>
            </div>
            <div className="group cursor-default transition-transform duration-300 hover:-translate-y-1">
              <span className="font-display text-xl sm:text-2xl md:text-3xl text-gold font-bold block group-hover:text-gold-light transition-colors">500+</span>
              <span className="text-[9px] sm:text-[11px] font-sans uppercase tracking-wider text-ivory/70 mt-0.5 block group-hover:text-ivory transition-colors">Homes Styled</span>
            </div>
            <div className="group cursor-default transition-transform duration-300 hover:-translate-y-1">
              <span className="font-display text-xl sm:text-2xl md:text-3xl text-gold font-bold block group-hover:text-gold-light transition-colors">Agrabad</span>
              <span className="text-[9px] sm:text-[11px] font-sans uppercase tracking-wider text-ivory/70 mt-0.5 block group-hover:text-ivory transition-colors">Flagship Studio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Visual Indicator */}
      <div className="absolute bottom-6 right-12 hidden lg:flex items-center gap-3 text-gold/70 text-xs uppercase tracking-widest">
        <span>Agrabad Access Road · Chattogram</span>
        <span className="w-12 h-[1px] bg-gold/40" />
      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  const toggleMobile = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header
        id="main-header"
        className={`sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-gold-hairline/30 transition-all duration-400 ease-out ${
          isScrolled ? 'shadow-md py-1' : ''
        }`}
      >
        <div
          id="header-container"
          className={`max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-4 transition-all duration-400 ${
            isScrolled ? 'h-16 sm:h-18 lg:h-20' : 'h-18 sm:h-20 lg:h-24'
          }`}
        >
          {/* Brand Logo & Identity */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0 cursor-pointer" aria-label="Heaven Furniture Mart Home">
            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 border border-gold/40 p-1 bg-teal-deep flex items-center justify-center transition-all duration-500 group-hover:border-gold group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(197,160,89,0.4)] flex-shrink-0">
              <img
                src="/assets/images/logo.png"
                alt="Heaven Furniture Mart Monogram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-display font-bold tracking-[0.25em] text-teal-deep uppercase text-base sm:text-lg md:text-xl lg:text-2xl leading-none group-hover:text-gold transition-colors duration-300">
                HEAVEN
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.32em] text-gold-dark uppercase font-semibold mt-1">
                FURNITURE MART
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Expanding Gold Hairline Underline */}
          <nav className="hidden xl:flex items-center gap-7 2xl:gap-9 text-xs uppercase tracking-[0.18em] font-semibold text-brown-charcoal">
            <a href="#philosophy" className="nav-link-luxury hover:text-gold transition-colors py-1">Philosophy</a>
            <a href="#collections" className="nav-link-luxury hover:text-gold transition-colors py-1">Collections</a>
            <a href="#bespoke-atelier" className="nav-link-luxury hover:text-gold transition-colors py-1 flex items-center gap-1.5 group">
              <span>Bespoke Atelier</span>
              <span className="text-[9px] bg-gold/20 text-gold-dark border border-gold/40 px-1.5 py-0.2 uppercase tracking-widest font-bold group-hover:bg-gold group-hover:text-teal-deep transition-colors">Custom</span>
            </a>
            <a href="#why-heaven" className="nav-link-luxury hover:text-gold transition-colors py-1">The Standard</a>
            <a href="#milestones" className="nav-link-luxury hover:text-gold transition-colors py-1">Milestones</a>
            <a href="#showroom" className="nav-link-luxury hover:text-gold transition-colors py-1">Showroom</a>
          </nav>

          {/* Header Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <button
              onClick={onOpenQuote}
              className="btn-luxury-shimmer bg-teal-deep text-ivory hover:bg-gold hover:text-teal-deep px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 border border-gold/40 shadow-sm flex items-center gap-2 group cursor-pointer"
            >
              <span>Request a Quote</span>
              <span className="material-symbols-outlined text-[15px] hidden xs:inline transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={toggleMobile}
              className="xl:hidden p-2 text-teal-deep hover:text-gold focus:outline-none transition-colors"
              aria-label="Toggle Navigation Drawer"
            >
              <span className="material-symbols-outlined text-2xl sm:text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        onClick={toggleMobile}
        className={`fixed inset-0 z-50 bg-teal-deep/80 backdrop-blur-md transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Slide-Out Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-teal-deep text-ivory p-6 sm:p-8 flex flex-col justify-between border-l border-gold/30 shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-gold/20">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 border border-gold/40 p-1 bg-teal-card flex items-center justify-center">
                <img src="/assets/images/logo.png" alt="Heaven Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold tracking-[0.2em] text-ivory uppercase text-sm">
                HEAVEN
              </span>
            </div>
            <button onClick={toggleMobile} className="text-ivory/70 hover:text-gold p-1 text-xl">✕</button>
          </div>

          <nav className="mt-8 space-y-5">
            <a href="#philosophy" onClick={toggleMobile} className="font-display text-lg tracking-wider text-ivory hover:text-gold transition-colors block">
              01. Philosophy
            </a>
            <a href="#collections" onClick={toggleMobile} className="font-display text-lg tracking-wider text-ivory hover:text-gold transition-colors block">
              02. Curated Collections
            </a>
            <a href="#bespoke-atelier" onClick={toggleMobile} className="font-display text-lg tracking-wider text-ivory hover:text-gold transition-colors flex items-center justify-between">
              <span>03. Bespoke Atelier</span>
              <span className="text-[9px] bg-gold text-teal-deep px-1.5 py-0.5 font-bold uppercase tracking-widest">Custom</span>
            </a>
            <a href="#why-heaven" onClick={toggleMobile} className="font-display text-lg tracking-wider text-ivory hover:text-gold transition-colors block">
              04. The Heaven Standard
            </a>
            <a href="#milestones" onClick={toggleMobile} className="font-display text-lg tracking-wider text-ivory hover:text-gold transition-colors block">
              05. Milestones of Craft
            </a>
            <a href="#showroom" onClick={toggleMobile} className="font-display text-lg tracking-wider text-ivory hover:text-gold transition-colors block">
              06. Agrabad Showroom
            </a>
          </nav>

          <div className="mt-8 pt-6 border-t border-gold/20 space-y-2 text-xs text-ivory-muted/70">
            <p className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gold text-[16px]">location_on</span>
              <a href="https://maps.app.goo.gl/pwe2VJWeLeTdTw6v9" target="_blank" rel="noopener noreferrer" className="text-ivory hover:text-gold underline">
                Agrabad Access Road, Chattogram
              </a>
            </p>
            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-gold text-[16px]">schedule</span> 10:00 AM – 9:00 PM (Daily)</p>
            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-gold text-[16px]">call</span> <a href="tel:+8801960481983" className="text-ivory hover:text-gold">+880 1960-481983</a></p>
          </div>
        </div>

        <div className="pt-6 border-t border-gold/20 space-y-3 mt-6">
          <button
            onClick={() => { toggleMobile(); onOpenQuote(); }}
            className="btn-luxury-shimmer w-full bg-gold hover:bg-gold-light text-teal-deep py-3.5 font-semibold uppercase tracking-[0.2em] text-xs transition-colors shadow-md"
          >
            Request a Quote
          </button>
          <a
            href="https://wa.me/8801960481983?text=Hello%20Heaven%20Furniture%20Mart,%20I%20would%20like%20to%20consult%20on%20custom%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3.5 font-semibold uppercase tracking-[0.18em] text-xs text-center flex items-center justify-center gap-2 transition-colors"
          >
            WhatsApp Concierge
          </a>
        </div>
      </aside>
    </>
  );
}

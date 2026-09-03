'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Trees, Ruler, MapPin, ArrowRight, Store } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 sm:py-28 lg:py-36 bg-ivory text-brown-deep relative overflow-hidden border-b border-gold-hairline/30">
      {/* Architectural Section Guideline & Background Number */}
      <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px bg-gold/15 pointer-events-none hidden sm:block" />
      <div className="absolute -top-6 right-6 sm:right-12 font-display text-gold/10 text-8xl sm:text-[160px] font-bold select-none pointer-events-none tracking-tighter">
        01
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Gallery Diptych */}
          <div className="lg:col-span-6 relative pb-8 sm:pb-12 lg:pb-0">
            {/* Top-Left Brass Heritage Seal */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-30 bg-[#0A1616] text-gold border border-gold/40 px-3.5 py-1.5 shadow-xl flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <Award className="w-4 h-4 text-gold" />
              <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-semibold text-ivory">
                Est. 2020 · Chattogram
              </span>
            </div>

            {/* Primary MD Portrait Frame with Deep Glow */}
            <div className="relative bg-teal-deep p-1.5 sm:p-2 border border-gold/35 shadow-2xl transition-all duration-500 hover:border-gold hover:shadow-[0_25px_60px_-15px_rgba(12,28,28,0.3)]">
              <div className="relative overflow-hidden aspect-[16/9] bg-teal-deep group">
                <Image
                  src="/assets/images/md-portrait.jpg"
                  alt="Abul Kalam Bhuiyan, Managing Director and Founder of Heaven Furniture Mart at the Chittagong Furniture Fair"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1616]/70 via-transparent to-transparent pointer-events-none" />

                {/* Subtle In-Frame Label */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-10 flex items-end justify-between">
                  <div className="bg-teal-deep/85 backdrop-blur-md border border-gold/30 px-3 py-1.5 shadow-lg">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-gold font-bold block">Founder & Managing Director</span>
                    <h3 className="font-display text-xs sm:text-base text-ivory font-medium leading-tight">Abul Kalam Bhuiyan</h3>
                  </div>
                  <span className="text-[8px] sm:text-[9px] bg-teal-deep/90 border border-gold/40 text-gold-light px-2.5 py-1 uppercase tracking-widest font-sans font-semibold backdrop-blur-md shadow-lg hidden sm:inline-block">
                    Chattogram Fair Keynote
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Workshop Joinery Inset (Docked Neatly at Bottom-Right without obscuring podium) */}
            <div className="card-lift absolute -bottom-6 right-3 sm:-bottom-8 sm:right-6 w-40 sm:w-52 bg-ivory p-1.5 sm:p-2 border border-gold/40 shadow-2xl z-20">
              <div className="relative overflow-hidden aspect-[16/11]">
                <Image
                  src="/assets/images/craftsman.jpg"
                  alt="Master artisan hand joinery in Heaven Furniture Mart Chattogram workshop"
                  fill
                  sizes="(max-width: 640px) 160px, 210px"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="bg-teal-deep text-ivory p-2 mt-1.5 flex items-center justify-between text-[9px] uppercase tracking-wider">
                <span className="text-gold font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Master Joinery
                </span>
                <span className="text-ivory-muted/70 text-[8px]">Solid Teak</span>
              </div>
            </div>
          </div>

          {/* Right Column: MD Pull Quote & Atelier Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-7 h-[1.5px] bg-gold" />
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-dark font-bold">
                The Atelier Philosophy · Est. 2020
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[42px] font-medium text-teal-deep leading-[1.18] mb-6">
              &ldquo;Designed. Crafted.<br />
              <span className="italic font-serif text-gold-dark">Customized for You.&rdquo;</span>
            </h2>

            {/* Luxury Embossed Pull Quote Card with Gold Border Glow */}
            <div className="relative bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border-l-[3px] border-gold p-5 sm:p-6 mb-6 shadow-sm border-y border-r border-gold/20 transition-all duration-400 hover:border-r-gold/50 hover:shadow-md">
              <span className="font-serif text-gold/30 text-5xl sm:text-6xl absolute -top-3 left-3 select-none pointer-events-none leading-none">“</span>
              <blockquote className="font-display text-base sm:text-lg md:text-xl italic text-brown-deep leading-relaxed relative z-10 mb-4 pl-4 sm:pl-6">
                &ldquo;At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.&rdquo;
              </blockquote>
              
              <div className="flex items-center justify-between border-t border-gold/20 pt-3.5 pl-4 sm:pl-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-deep border border-gold flex items-center justify-center text-gold font-display font-bold text-xs flex-shrink-0">
                    AK
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-teal-deep uppercase tracking-wider leading-none">Abul Kalam Bhuiyan</h4>
                    <p className="font-sans text-[10px] sm:text-[11px] text-brown-soft mt-0.5">Managing Director & Founder</p>
                  </div>
                </div>
                <span className="font-display italic text-gold-dark text-sm sm:text-base hidden sm:inline select-none opacity-85">
                  Abul Kalam Bhuiyan
                </span>
              </div>
            </div>

            {/* Narrative Paragraph */}
            <p className="font-sans text-xs sm:text-sm text-brown-soft leading-relaxed mb-6">
              Unlike online mass-market stores with rigid catalog items, Heaven Furniture Mart operates as an intimate bespoke design atelier. Based along Agrabad Access Road, our master craftsmen transform premium seasoned hardwoods, Italian leathers, and rich textiles into generational heirlooms built around your floor plan.
            </p>

            {/* 3 Architectural Pillar Badges with Interactive Lift */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="card-lift border border-gold/25 bg-white/70 p-3 hover:border-gold hover:bg-white transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-1 text-gold-dark">
                  <Trees className="w-4 h-4" />
                  <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-teal-deep">Seasoned Timber</span>
                </div>
                <p className="text-[11px] text-brown-soft leading-snug">Burma Teak & Gamari seasoned to 8–12% moisture.</p>
              </div>

              <div className="card-lift border border-gold/25 bg-white/70 p-3 hover:border-gold hover:bg-white transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-1 text-gold-dark">
                  <Ruler className="w-4 h-4" />
                  <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-teal-deep">Custom Scale</span>
                </div>
                <p className="text-[11px] text-brown-soft leading-snug">Built to your architectural blueprints & room dimensions.</p>
              </div>

              <div className="card-lift border border-gold/25 bg-white/70 p-3 hover:border-gold hover:bg-white transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-1 text-gold-dark">
                  <MapPin className="w-4 h-4" />
                  <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-teal-deep">Agrabad Studio</span>
                </div>
                <p className="text-[11px] text-brown-soft leading-snug">Full-scale room vignettes opposite RAK Ceramics.</p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#bespoke-atelier"
                className="btn-luxury-shimmer inline-flex items-center gap-2 bg-teal-deep text-ivory hover:bg-gold hover:text-teal-deep px-5 sm:px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>Explore the Bespoke Process</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#showroom"
                className="inline-flex items-center gap-2 border border-teal-deep/30 hover:border-gold text-teal-deep hover:text-gold px-4 sm:px-5 py-3 text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 bg-white/50 hover:bg-white shadow-xs group"
              >
                <Store className="w-4 h-4 text-gold transition-transform group-hover:scale-110" />
                <span>Visit Showroom</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

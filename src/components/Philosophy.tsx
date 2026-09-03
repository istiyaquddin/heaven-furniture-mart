'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Trees, Ruler, MapPin, ArrowRight, Store, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 sm:py-28 lg:py-36 bg-ivory text-brown-deep relative overflow-hidden border-b border-gold-hairline/30">
      {/* Architectural Section Guideline & Subtle Watermark Number */}
      <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px bg-gold/15 pointer-events-none hidden sm:block" />
      <div className="absolute -top-6 right-6 sm:right-12 font-display text-gold/[0.07] text-8xl sm:text-[160px] font-bold select-none pointer-events-none tracking-tighter">
        01
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column: Visual Atelier Diptych (Keynote + Workshop Craft) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* 1. Primary Feature: MD Keynote Address Frame */}
            <div className="relative bg-teal-deep p-2 sm:p-2.5 border border-gold/40 shadow-2xl transition-all duration-500 hover:border-gold hover:shadow-[0_20px_50px_-10px_rgba(12,28,28,0.35)]">
              {/* Heritage Tag */}
              <div className="absolute top-4 left-4 z-20 bg-[#0A1616]/90 backdrop-blur-md text-gold border border-gold/40 px-3 py-1 shadow-lg flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-gold" />
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold text-ivory">
                  Est. 2020 · Chattogram
                </span>
              </div>

              {/* Landscape 16:9 Keynote Photo Container */}
              <div className="relative overflow-hidden aspect-[16/9] bg-teal-deep group">
                <Image
                  src="/assets/images/md-portrait.jpg"
                  alt="Abul Kalam Bhuiyan, Managing Director of Heaven Furniture Mart addressing the 14th Chittagong Furniture Fair"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1616]/80 via-transparent to-transparent pointer-events-none" />

                {/* In-Frame Editorial Caption */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-end justify-between gap-2">
                  <div className="bg-[#0A1616]/85 backdrop-blur-md border border-gold/30 px-3.5 py-2 shadow-lg max-w-[280px] sm:max-w-xs">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-gold font-bold block mb-0.5">Founder & Managing Director</span>
                    <h3 className="font-display text-sm sm:text-base text-ivory font-medium leading-tight">Abul Kalam Bhuiyan</h3>
                  </div>
                  <span className="text-[8px] sm:text-[9px] bg-teal-deep/90 border border-gold/40 text-gold-light px-2.5 py-1.5 uppercase tracking-widest font-sans font-semibold backdrop-blur-md shadow-lg flex-shrink-0 hidden xs:inline-block">
                    Chattogram Fair Keynote
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Secondary Feature: BFIOA Award & National Recognition Card */}
            <div className="card-lift bg-white border border-gold-hairline/60 hover:border-gold p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-5 transition-all duration-400">
              <div className="relative aspect-[4/3] w-full sm:w-48 lg:w-52 bg-teal-deep overflow-hidden flex-shrink-0 border border-gold/30">
                <Image
                  src="/assets/images/bfioa-recognition.jpg"
                  alt="Managing Director Abul Kalam Bhuiyan receiving 1st Prize at the Chittagong Furniture Fair BFIOA"
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-108"
                />
                <div className="absolute top-2 left-2 bg-[#0A1616]/90 text-gold text-[8px] uppercase tracking-widest px-2 py-0.5 font-bold border border-gold/40 flex items-center gap-1 shadow-sm">
                  <Award className="w-3 h-3 text-gold" />
                  1st Prize
                </div>
              </div>

              <div className="flex-1 space-y-2 text-left w-full">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-[0.22em] text-gold-dark">
                    Nationwide Honor · BFIOA
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-teal-deep font-semibold">
                    <Sparkles className="w-3 h-3 text-gold" /> Fair 2024
                  </span>
                </div>
                <h4 className="font-display text-base sm:text-lg text-teal-deep font-medium leading-snug">
                  1st Prize for Bespoke Mastery
                </h4>
                <p className="font-sans text-xs text-brown-soft leading-relaxed">
                  Honored with the prestigious 1st Prize Award at the 14th Chittagong Furniture Fair by BFIOA and distinguished dignitaries for outstanding craftsmanship and architectural styling.
                </p>
                <div className="pt-1.5 flex flex-wrap items-center gap-2.5 text-[10px] text-brown-charcoal font-semibold">
                  <span className="inline-flex items-center gap-1 text-teal-deep bg-ivory-soft border border-gold/20 px-2 py-0.5">
                    <CheckCircle2 className="w-3 h-3 text-gold" /> 1st Prize Winner
                  </span>
                  <span className="inline-flex items-center gap-1 text-teal-deep bg-ivory-soft border border-gold/20 px-2 py-0.5">
                    <CheckCircle2 className="w-3 h-3 text-gold" /> BFIOA Recognized
                  </span>
                  <span className="inline-flex items-center gap-1 text-teal-deep bg-ivory-soft border border-gold/20 px-2 py-0.5">
                    <CheckCircle2 className="w-3 h-3 text-gold" /> Industry Acclaim
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Founder's Vision, Narrative & Organized Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            
            {/* Section Eyebrow */}
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="w-8 h-[1.5px] bg-gold" />
                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-dark font-bold">
                  The Atelier Philosophy · Est. 2020
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-medium text-teal-deep leading-[1.14] tracking-tight">
                &ldquo;Designed. Crafted.<br />
                <span className="italic font-serif text-gold-dark">Customized for You.&rdquo;</span>
              </h2>
            </div>

            {/* Luxury Embossed Pull Quote Card */}
            <div className="relative bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border-l-[3px] border-gold p-5 sm:p-6 shadow-sm border-y border-r border-gold/20 transition-all duration-400 hover:border-r-gold/50 hover:shadow-md">
              <span className="font-serif text-gold/30 text-5xl sm:text-6xl absolute -top-3 left-3 select-none pointer-events-none leading-none">“</span>
              <blockquote className="font-display text-sm sm:text-base md:text-lg italic text-brown-deep leading-relaxed relative z-10 mb-4 pl-4 sm:pl-6">
                &ldquo;At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.&rdquo;
              </blockquote>
              
              <div className="flex items-center justify-between border-t border-gold/20 pt-3.5 pl-4 sm:pl-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-deep border border-gold flex items-center justify-center text-gold font-display font-bold text-xs flex-shrink-0">
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
            <p className="font-sans text-xs sm:text-sm text-brown-soft leading-relaxed">
              Unlike online mass-market stores with rigid catalog items, Heaven Furniture Mart operates as an intimate bespoke design atelier. Based along Agrabad Access Road, our master craftsmen transform premium seasoned hardwoods, Italian leathers, and rich textiles into generational heirlooms built around your floor plan.
            </p>

            {/* 3 Architectural Pillar Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="card-lift border border-gold/25 bg-white/70 p-3.5 hover:border-gold hover:bg-white transition-all duration-300">
                <div className="flex items-center gap-2 mb-1.5 text-gold-dark">
                  <Trees className="w-4 h-4" />
                  <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-teal-deep">Seasoned Timber</span>
                </div>
                <p className="text-[11px] text-brown-soft leading-snug">Burma Teak & Gamari seasoned to 8–12% moisture.</p>
              </div>

              <div className="card-lift border border-gold/25 bg-white/70 p-3.5 hover:border-gold hover:bg-white transition-all duration-300">
                <div className="flex items-center gap-2 mb-1.5 text-gold-dark">
                  <Ruler className="w-4 h-4" />
                  <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-teal-deep">Custom Scale</span>
                </div>
                <p className="text-[11px] text-brown-soft leading-snug">Built to your architectural blueprints & room dimensions.</p>
              </div>

              <div className="card-lift border border-gold/25 bg-white/70 p-3.5 hover:border-gold hover:bg-white transition-all duration-300">
                <div className="flex items-center gap-2 mb-1.5 text-gold-dark">
                  <MapPin className="w-4 h-4" />
                  <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-teal-deep">Agrabad Studio</span>
                </div>
                <p className="text-[11px] text-brown-soft leading-snug">Full-scale room vignettes opposite RAK Ceramics.</p>
              </div>
            </div>

            {/* Organized & Perfectly Aligned Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#bespoke-atelier"
                className="btn-luxury-shimmer inline-flex items-center justify-center gap-3 bg-teal-deep text-ivory hover:bg-gold hover:text-teal-deep px-7 py-4 text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-md group cursor-pointer border border-gold/40 text-center"
              >
                <span>Explore the Bespoke Process</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#showroom"
                className="inline-flex items-center justify-center gap-2.5 border border-teal-deep/30 hover:border-gold text-teal-deep hover:text-gold px-7 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 bg-white/60 hover:bg-white shadow-xs group text-center"
              >
                <Store className="w-4 h-4 text-gold transition-transform duration-300 group-hover:scale-110" />
                <span>Visit Showroom</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


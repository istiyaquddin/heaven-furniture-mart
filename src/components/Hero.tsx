"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0C1C1C] text-[#FAF7F2] overflow-hidden border-b border-[#C5A059]/25">
      {/* Ambient Background Visual with Parallax Slow Zoom */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/images/hero-sofa.png"
          alt="Heaven Furniture Mart Bespoke Curved Velvet Sofa and Marble Suite"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1C1C] via-[#0C1C1C]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1C1C] via-transparent to-[#0C1C1C]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-20 sm:py-24 lg:py-36">
        <div className="max-w-3xl">
          {/* Main Architectural Headline matching exact typography and line breaks */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-normal leading-[1.06] tracking-tight mb-6 sm:mb-8 text-[#FAF7F2]">
            Furniture,
            <br />
            <span className="italic font-normal text-[#DFC488]">
              Crafted Around
              <br />
              You.
            </span>
          </h1>

          {/* Value Proposition Subtext */}
          <p className="font-editorial-sans text-sm sm:text-base md:text-lg text-[#F2ECE4]/80 font-light leading-relaxed max-w-2xl mb-8 sm:mb-12">
            Step into a luxury interior studio experience. We design and
            handcraft custom living, bedroom, dining, and executive suites
            tailored precisely to your spatial proportions and aesthetic taste.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <button
              onClick={onOpenQuote}
              className="btn-luxury-shimmer bg-[#C5A059] hover:bg-[#DFC488] text-[#0C1C1C] px-8 py-4 sm:py-4.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 text-center group cursor-pointer"
            >
              <span>Book Free Design Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
            <a
              href="#collections"
              className="border border-[#C5A059]/40 hover:border-[#C5A059] text-[#FAF7F2] hover:text-[#DFC488] px-8 py-4 sm:py-4.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 text-center bg-[#0C1C1C]/40 backdrop-blur-sm hover:bg-[#0C1C1C]/80 active:scale-98"
            >
              Explore Collections
            </a>
          </div>

          {/* Brand Trust Metrics with Exact Color Scheme */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#FAF7F2]/20">
            <div className="group cursor-default transition-transform duration-300 hover:-translate-y-1">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-[#C5A059] font-normal block group-hover:text-[#DFC488] transition-colors leading-none mb-1">
                100%
              </span>
              <span className="text-[9px] sm:text-[11px] font-editorial-mono uppercase tracking-wider text-[#FAF7F2]/70 block group-hover:text-[#FAF7F2] transition-colors">
                Bespoke Builds
              </span>
            </div>
            <div className="group cursor-default transition-transform duration-300 hover:-translate-y-1">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-[#C5A059] font-normal block group-hover:text-[#DFC488] transition-colors leading-none mb-1">
                Seasoned
              </span>
              <span className="text-[9px] sm:text-[11px] font-editorial-mono uppercase tracking-wider text-[#FAF7F2]/70 block group-hover:text-[#FAF7F2] transition-colors">
                Burma Teak Wood
              </span>
            </div>
            <div className="group cursor-default transition-transform duration-300 hover:-translate-y-1">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-[#C5A059] font-normal block group-hover:text-[#DFC488] transition-colors leading-none mb-1">
                500+
              </span>
              <span className="text-[9px] sm:text-[11px] font-editorial-mono uppercase tracking-wider text-[#FAF7F2]/70 block group-hover:text-[#FAF7F2] transition-colors">
                Homes Styled
              </span>
            </div>
            <div className="group cursor-default transition-transform duration-300 hover:-translate-y-1">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl text-[#C5A059] font-normal block group-hover:text-[#DFC488] transition-colors leading-none mb-1">
                Agrabad
              </span>
              <span className="text-[9px] sm:text-[11px] font-editorial-mono uppercase tracking-wider text-[#FAF7F2]/70 block group-hover:text-[#FAF7F2] transition-colors">
                Flagship Studio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

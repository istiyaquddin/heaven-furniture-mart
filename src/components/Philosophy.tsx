'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface PhilosophyProps {
  onOpenQuote?: () => void;
}

export default function Philosophy({ onOpenQuote }: PhilosophyProps) {
  const craftSteps = [
    {
      num: '01',
      title: 'Listen & Measure',
      desc: 'Your architectural floor plan and lifestyle rituals become our starting point.',
    },
    {
      num: '02',
      title: 'Design & Refine',
      desc: 'Hardwood species, European damasks, and joinery details curated together.',
    },
    {
      num: '03',
      title: 'Craft & Install',
      desc: 'Handcrafted in-house in Chattogram and assembled white-glove on site.',
    },
  ];

  const trustPillars = [
    { label: 'Free Consultation', detail: 'Spatial planning & guidance' },
    { label: '100% Bespoke', detail: 'Built to your room dimensions' },
    { label: 'Seasoned Timber', detail: 'Burma Teak & Gamari' },
    { label: 'In-House Craft', detail: 'Master artisan joinery' },
    { label: 'White-Glove Delivery', detail: 'Nationwide installation' },
    { label: 'Milestone Terms', detail: 'Flexible payment options' },
  ];

  return (
    <div className="overflow-hidden">
      
      {/* 1. THE BESPOKE WAY SECTION (#craft) */}
      <section id="craft" className="bg-[#f2eee4] text-[#173331] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 border-t border-[#173331]/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left: Artisan Workshop Imagery */}
            <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] bg-[#0e2322] overflow-hidden group shadow-xl border border-[#173331]/10">
              <Image
                src="/assets/images/craftsman.jpg"
                alt="Master wood craftsman carving seasoned timber joinery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2322]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quality Tag */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-10 bg-[#0e2322]/90 backdrop-blur-sm border-l-2 border-[#b69151] px-3.5 sm:px-4 py-2 text-[#f2eee4]">
                <strong className="font-display text-xs sm:text-sm block font-normal text-[#f2eee4]">
                  In-House Joinery Atelier
                </strong>
                <span className="font-editorial-mono text-[8.5px] sm:text-[9px] uppercase tracking-wider text-[#d6bf8d]">
                  Seasoned Burma Teak & Gamari
                </span>
              </div>
            </div>

            {/* Right: The Bespoke Way Editorial Copy & Steps */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="font-editorial-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#7d5c27] mb-2 sm:mb-3 block">
                The Bespoke Way
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173331] leading-[1.08] tracking-tight mb-4 sm:mb-5">
                There is no<br />
                <em className="text-[#7d5c27] not-italic font-normal">standard room.</em>
              </h2>
              <p className="font-editorial-sans text-xs sm:text-sm text-[#563f2b] leading-relaxed max-w-lg mb-6 sm:mb-8">
                Bring us a floor plan, a saved photo, or an architectural sketch. We shape proportions, timber seasonings, and upholstery textures around how you truly live.
              </p>

              {/* Minimal 3-Step Sequential List */}
              <ol className="border-t border-[#173331]/15 divide-y divide-[#173331]/15 list-none p-0 mb-6 sm:mb-8">
                {craftSteps.map((step) => (
                  <li key={step.num} className="py-3.5 sm:py-4 flex items-start gap-3.5 sm:gap-4 group">
                    <span className="font-editorial-mono text-xs text-[#7d5c27] font-semibold mt-0.5 group-hover:text-[#b69151] transition-colors">
                      {step.num}
                    </span>
                    <div className="flex flex-col">
                      <strong className="font-editorial-sans text-sm font-semibold text-[#173331] group-hover:text-[#7d5c27] transition-colors">
                        {step.title}
                      </strong>
                      <p className="font-editorial-sans text-xs text-[#563f2b] mt-0.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Consultation Action */}
              <button
                onClick={onOpenQuote}
                className="w-max group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#173331] pb-1 border-b border-[#173331] hover:text-[#7d5c27] hover:border-[#7d5c27] transition-colors cursor-pointer"
              >
                <span>Request a consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#b69151] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FOUNDER'S VISION & ATELIER PHILOSOPHY (#philosophy) */}
      <section id="philosophy" className="bg-[#e8dfcc] text-[#173331] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 border-t border-[#173331]/10">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left: Founder Portrait with Accolade Tag */}
            <div className="lg:col-span-5 relative aspect-[4/5] bg-[#0e2322] overflow-hidden group shadow-xl border border-[#173331]/10">
              <Image
                src="/assets/images/md-portrait.jpg"
                alt="Abul Kalam Bhuiyan, Managing Director of Heaven Furniture Mart"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104 filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2322]/90 via-[#0e2322]/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 z-10 text-[#f2eee4]">
                <span className="font-editorial-mono text-[8.5px] sm:text-[9px] uppercase tracking-wider text-[#d6bf8d] block mb-1">
                  Est. 2020 · Chattogram
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-normal leading-snug">
                  Abul Kalam Bhuiyan
                </h3>
                <p className="font-editorial-sans text-xs text-[#cfd8d2]/80 mt-0.5">
                  Managing Director & Founder
                </p>
                <div className="inline-flex items-center gap-1 text-[9.5px] sm:text-[10px] font-editorial-mono text-[#f2eee4] bg-[#b69151]/30 px-2.5 py-1 border border-[#b69151]/40 mt-2.5">
                  <CheckCircle2 className="w-3 h-3 text-[#d6bf8d]" />
                  <span>1st Prize · 14th Furniture Fair</span>
                </div>
              </div>
            </div>

            {/* Right: Founder Vision Pull Quote & Craft Standards */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-editorial-serif text-[#b69151]/40 text-5xl sm:text-6xl lg:text-7xl leading-none select-none -mb-4 sm:-mb-6 block">
                “
              </span>
              <blockquote className="font-display text-xl sm:text-2xl lg:text-[32px] italic text-[#173331] leading-relaxed mb-6 sm:mb-8">
                Furniture is more than function. It is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.
              </blockquote>

              {/* 6 Minimal Trust Tags in a Clean 2x3 Grid */}
              <div className="border-t border-[#173331]/15 pt-5 sm:pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-5">
                {trustPillars.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <strong className="font-editorial-sans text-xs sm:text-[13px] font-semibold text-[#173331]">
                      {item.label}
                    </strong>
                    <span className="font-editorial-sans text-[10.5px] sm:text-[11px] text-[#563f2b] mt-0.5">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

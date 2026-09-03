'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock, Phone, Navigation, Calendar } from 'lucide-react';
import { studioVignettes } from '@/data/vignettes';

export default function Showroom() {
  const [activeKey, setActiveKey] = useState<string>('living');
  const [isFading, setIsFading] = useState<boolean>(false);

  const currentVignette = studioVignettes[activeKey] || studioVignettes.living;

  const handleSwitch = (key: string) => {
    if (key === activeKey) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveKey(key);
      setIsFading(false);
    }, 180);
  };

  return (
    <section id="showroom" className="relative bg-[#f2eee4] text-[#173331] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 border-t border-[#173331]/10">
      {/* Backward-compatible anchor for #visit */}
      <span id="visit" className="absolute -top-24 left-0 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 lg:mb-20 gap-4 sm:gap-6">
          <div>
            <p className="font-editorial-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#7d5c27] mb-2 sm:mb-3">
              Make it personal
            </p>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.02] tracking-tight text-[#173331]">
              Come sit with<br />
              <em className="text-[#7d5c27] not-italic font-normal">the possibilities.</em>
            </h2>
          </div>
          <p className="font-editorial-sans text-xs sm:text-sm text-[#563f2b] max-w-sm leading-relaxed">
            Bring your floor plans, sketches, or ideas to our Agrabad studio. A conversation is the best place to begin.
          </p>
        </div>

        {/* Gallery & Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left: Interactive Multi-Vignette Gallery (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-3.5">
            {/* Main Stage Image */}
            <div className="relative aspect-[16/10] bg-[#0e2322] overflow-hidden shadow-xl border border-[#173331]/10 group">
              <Image
                src={currentVignette.img}
                alt={currentVignette.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={`object-cover transition-all duration-500 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100 ${
                  isFading ? 'opacity-25 scale-[0.98]' : 'opacity-100 scale-100'
                }`}
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-[#0e2322]/90 backdrop-blur-md border border-[#b69151]/40 text-[#d6bf8d] font-editorial-mono text-[8px] sm:text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 font-semibold">
                {currentVignette.badge}
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-[#0e2322] via-[#0e2322]/70 to-transparent text-[#f2eee4]">
                <h3 className="font-display text-lg sm:text-2xl font-normal mb-0.5 text-[#f2eee4]">
                  {currentVignette.title}
                </h3>
                <p className="font-editorial-sans text-xs text-[#cfd8d2]/80 line-clamp-1">
                  {currentVignette.subtitle}
                </p>
              </div>
            </div>

            {/* Thumbnail Switcher (4 Vignettes) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {Object.values(studioVignettes).map((v) => {
                const isActive = v.key === activeKey;
                return (
                  <button
                    key={v.key}
                    type="button"
                    onClick={() => handleSwitch(v.key)}
                    className={`relative aspect-[16/10] overflow-hidden bg-[#0e2322] transition-all duration-300 text-left cursor-pointer ${
                      isActive
                        ? 'border-2 border-[#b69151] shadow-md scale-[1.02]'
                        : 'border border-[#173331]/15 opacity-60 hover:opacity-100 hover:border-[#b69151]/50'
                    }`}
                  >
                    <Image
                      src={v.img}
                      alt={v.label}
                      fill
                      sizes="(max-width: 640px) 25vw, 150px"
                      className="object-cover transition-transform duration-500 hover:scale-110 filter brightness-90"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-[#0e2322]/90 text-[#f2eee4] text-[7.5px] sm:text-[9px] font-editorial-mono uppercase tracking-wider py-1 px-1 text-center font-medium truncate block z-10">
                      {v.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Studio Location & Concierge Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#e8dfcc] border border-[#173331]/10 p-5 sm:p-7 lg:p-8 shadow-lg flex flex-col gap-4 sm:gap-5">
            <div>
              <span className="font-editorial-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-[#7d5c27] font-semibold block mb-1">
                Flagship Studio
              </span>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#173331] font-normal">
                Heaven Furniture Mart
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-3.5 font-editorial-sans text-xs sm:text-[13px] text-[#563f2b] border-t border-[#173331]/15 pt-3.5 sm:pt-4">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="w-4 h-4 text-[#b69151] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#173331] block font-semibold mb-0.5">Flagship Gallery Address:</strong>
                  <a
                    href="https://maps.app.goo.gl/pwe2VJWeLeTdTw6v9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#563f2b] hover:text-[#7d5c27] underline decoration-[#b69151]/40 transition-colors"
                  >
                    Agrabad Access Road (Opposite RAK Ceramics), Chattogram, Bangladesh
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <Clock className="w-4 h-4 text-[#b69151] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#173331] block font-semibold mb-0.5">Studio Visiting Hours:</strong>
                  <p className="m-0">10:00 AM – 9:00 PM (Open 7 Days a Week)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <Phone className="w-4 h-4 text-[#b69151] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#173331] block font-semibold mb-0.5">Concierge & Designer Hotline:</strong>
                  <p className="m-0">
                    <a href="tel:+8801960481983" className="hover:text-[#7d5c27] font-medium transition-colors">
                      +880 1960-481983
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 border-t border-[#173331]/15 flex flex-col gap-2 sm:gap-2.5">
              <a
                href={`https://wa.me/8801960481983?text=${encodeURIComponent(currentVignette.wa)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-shimmer bg-[#25D366] hover:bg-[#1DA851] text-white py-3 sm:py-3.5 px-3.5 font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[11px] sm:text-xs text-center flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
              >
                <span>Schedule VIP Studio Appointment</span>
                <Calendar className="w-4 h-4" />
              </a>

              <a
                href="https://maps.app.goo.gl/pwe2VJWeLeTdTw6v9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#173331]/30 hover:border-[#173331] text-[#173331] hover:text-[#7d5c27] py-2.5 sm:py-3 px-3.5 font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[11px] sm:text-xs transition-colors bg-transparent hover:bg-white/40 cursor-pointer text-center"
              >
                <span>Get Directions (Google Maps)</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

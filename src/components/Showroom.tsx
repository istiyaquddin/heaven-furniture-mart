'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock, Phone, Calendar, Navigation } from 'lucide-react';
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
    <section id="showroom" className="py-16 sm:py-24 lg:py-36 bg-ivory-soft text-brown-deep relative overflow-hidden border-t border-gold-hairline/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-4 sm:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-dark font-bold">
                Visit the Studio
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium text-teal-deep">
              Experience the Craft in Person
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-brown-soft max-w-md">
            Step into our Agrabad flagship studio to feel the weight of solid seasoned timbers, touch Italian velvets, and consult with our master interior designers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Interactive Multi-Vignette Studio Showcase */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-[16/10] bg-teal-deep border border-gold shadow-2xl overflow-hidden group">
              <Image
                src={currentVignette.img}
                alt={currentVignette.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={`object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
                  isFading ? 'opacity-20 scale-[0.98]' : 'opacity-100 scale-100'
                }`}
              />
              <div className="absolute top-4 left-4 z-10 bg-teal-deep/90 backdrop-blur-md border border-gold/40 text-gold-light text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-semibold">
                {currentVignette.badge}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-teal-deep via-teal-deep/80 to-transparent text-ivory">
                <h3 className="font-display text-lg sm:text-2xl font-medium mb-1 text-ivory">
                  {currentVignette.title}
                </h3>
                <p className="font-sans text-xs text-ivory-muted/80">
                  {currentVignette.subtitle}
                </p>
              </div>
            </div>

            {/* Thumbnail Vignette Switcher with Smooth Indicators */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
              {Object.values(studioVignettes).map((v) => {
                const isActive = v.key === activeKey;
                return (
                  <button
                    key={v.key}
                    type="button"
                    onClick={() => handleSwitch(v.key)}
                    className={`relative aspect-[16/10] overflow-hidden bg-teal-deep transition-all duration-300 text-left active:scale-95 ${
                      isActive
                        ? 'border-2 border-gold ring-2 ring-gold/40 shadow-xl scale-[1.03]'
                        : 'border border-gold/20 opacity-60 hover:opacity-100 hover:border-gold/60'
                    }`}
                  >
                    <Image src={v.img} alt={v.label} fill sizes="(max-width: 640px) 25vw, 150px" className="object-cover transition-transform duration-500 hover:scale-110" />
                    <span className="absolute bottom-0 inset-x-0 bg-teal-deep/90 text-ivory text-[8px] sm:text-[9px] uppercase tracking-wider py-1 px-1 text-center font-semibold truncate block z-10">
                      {v.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Information & Location Card */}
          <div className="lg:col-span-5 bg-ivory border border-gold-hairline p-6 sm:p-10 shadow-xl space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-bold block mb-2">
                Flagship Studio
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-teal-deep font-medium">
                Heaven Furniture Mart
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-brown-soft border-t border-gold/20 pt-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-teal-deep block font-semibold">Flagship Gallery Address:</strong>
                  <a
                    href="https://maps.app.goo.gl/pwe2VJWeLeTdTw6v9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown-soft hover:text-gold transition-colors underline decoration-gold/40"
                  >
                    Agrabad Access Road (Opposite RAK Ceramics), Chattogram, Bangladesh
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-teal-deep block font-semibold">Studio Visiting Hours:</strong>
                  <p>10:00 AM – 9:00 PM (Open 7 Days a Week)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-teal-deep block font-semibold">Concierge & Designer Hotline:</strong>
                  <p><a href="tel:+8801960481983" className="hover:text-gold transition-colors">+880 1960-481983</a></p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gold/20 flex flex-col gap-3">
              <a
                href={`https://wa.me/8801960481983?text=${encodeURIComponent(currentVignette.wa)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-shimmer w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3.5 font-semibold uppercase tracking-[0.2em] text-xs text-center flex items-center justify-center gap-2 transition-colors shadow-md active:scale-95"
              >
                <span>Schedule VIP Studio Appointment</span>
                <Calendar className="w-4 h-4" />
              </a>
              <a
                href="https://maps.app.goo.gl/pwe2VJWeLeTdTw6v9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-teal-deep hover:bg-gold text-ivory hover:text-teal-deep py-3.5 font-semibold uppercase tracking-[0.2em] text-xs text-center flex items-center justify-center gap-2 transition-colors border border-gold/40 active:scale-95"
              >
                <span>Get Directions (Google Maps)</span>
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

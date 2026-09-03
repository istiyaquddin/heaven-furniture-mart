'use client';

import React from 'react';
import { ExternalLink, Phone } from 'lucide-react';

export default function MarqueeTicker() {
  const content = (
    <div className="flex items-center gap-8 sm:gap-12 px-6 sm:px-8 flex-shrink-0">
      {/* Showroom Link */}
      <a
        href="https://maps.app.goo.gl/pwe2VJWeLeTdTw6v9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gold-light hover:text-ivory transition-colors group"
      >
        <span className="relative flex h-2 w-2 flex-shrink-0 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
        </span>
        <span className="font-semibold text-ivory">FLAGSHIP SHOWROOM:</span>
        <span className="underline decoration-gold/40 underline-offset-2 group-hover:decoration-gold">
          AGRABAD ACCESS ROAD (OPPOSITE RAK CERAMICS), CHATTOGRAM
        </span>
        <ExternalLink className="w-3 h-3 text-gold inline-block" />
      </a>

      <span className="inline-block w-1.5 h-1.5 rotate-45 border border-gold/50 bg-gold/20 flex-shrink-0"></span>

      {/* Direct Phone */}
      <a href="tel:+8801960481983" className="inline-flex items-center gap-1.5 text-ivory-muted hover:text-gold transition-colors">
        <Phone className="w-3 h-3 text-gold inline-block" />
        <span>STUDIO CONCIERGE: <strong className="text-ivory font-semibold">+880 1960-481983</strong></span>
      </a>

      <span className="inline-block w-1.5 h-1.5 rotate-45 border border-gold/50 bg-gold/20 flex-shrink-0"></span>

      {/* WhatsApp */}
      <a
        href="https://wa.me/8801960481983?text=Hello%20Heaven%20Furniture%20Mart,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20furniture%20commission."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        <span>WHATSAPP VIP INQUIRIES · 7 DAYS A WEEK</span>
      </a>

      <span className="inline-block w-1.5 h-1.5 rotate-45 border border-gold/50 bg-gold/20 flex-shrink-0"></span>

      {/* Tagline */}
      <span className="text-ivory-muted tracking-[0.18em]">
        BESPOKE COMMISSIONS: <span className="text-gold font-semibold">DESIGNED · CRAFTED · CUSTOMIZED</span>
      </span>

      <span className="inline-block w-1.5 h-1.5 rotate-45 border border-gold/50 bg-gold/20 flex-shrink-0"></span>

      {/* Quality Pillar */}
      <span className="text-ivory-muted">
        SEASONED BURMA TEAK & GAMARI <span className="text-gold font-semibold">(8–12% KILN-DRIED MOISTURE)</span>
      </span>

      <span className="inline-block w-1.5 h-1.5 rotate-45 border border-gold/50 bg-gold/20 flex-shrink-0"></span>

      {/* Founder Story */}
      <span className="text-ivory-muted">
        FOUNDED 2020 BY <span className="text-ivory font-semibold">MD ABUL KALAM BHUIYAN</span> · CHATTOGRAM
      </span>

      <span className="inline-block w-1.5 h-1.5 rotate-45 border border-gold/50 bg-gold/20 flex-shrink-0"></span>
    </div>
  );

  return (
    <div className="ticker-container relative overflow-hidden bg-[#0A1616] text-ivory border-y border-gold-hairline/30 h-10 sm:h-12 flex items-center text-[10px] sm:text-[11.5px] tracking-[0.16em] uppercase font-medium select-none shadow-lg z-20">
      {/* Edge Fading Vignettes */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#0A1616] via-[#0A1616]/85 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#0A1616] via-[#0A1616]/85 to-transparent z-10" />

      {/* Scrolling Track (Duplicated 2x for seamless infinite loop) */}
      <div className="ticker-track flex items-center">
        {content}
        <div aria-hidden="true" className="flex items-center">
          {content}
        </div>
      </div>
    </div>
  );
}

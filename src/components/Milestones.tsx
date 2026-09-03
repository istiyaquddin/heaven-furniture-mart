'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Milestones() {
  const milestones = [
    {
      year: '2020',
      badge: '01 Genesis',
      title: 'Founded in Chattogram',
      desc: 'Founded by Managing Director Abul Kalam Bhuiyan with a mission to bring true bespoke luxury and architectural craft to Chattogram homes.',
      extra: 'Established our initial woodworking atelier focusing exclusively on custom client commissions.'
    },
    {
      year: '2021',
      badge: '02 Expansion',
      title: 'Agrabad Flagship Showroom',
      desc: 'Opened our expansive physical showroom along Agrabad Access Road opposite RAK Ceramics, creating a curated interior studio destination.',
      extra: 'Enabled clients to touch premium fabrics, inspect joinery, and consult with in-house designers in person.'
    },
    {
      year: '2024–2025',
      badge: '03 Exhibition',
      title: 'International Furniture Fair',
      desc: 'Prominently exhibited signature bespoke collections at the International Furniture Fair, Chattogram to acclaim from leading architects and developers.',
      extra: 'Showcased curved velvet suites and solid teak architectural dining masterpieces.'
    },
    {
      year: '2025',
      badge: '04 Prestige',
      title: 'Chamber of Commerce Induction',
      desc: 'Formally inducted as an esteemed member of the Chattogram Chamber of Commerce & Industry (CCCI), reinforcing trade excellence.',
      extra: 'Strengthened institutional partnerships for corporate and commercial bespoke fit-outs.'
    },
    {
      year: '2026',
      badge: '★ National Honor',
      title: 'BFIOA Nationwide Recognition',
      desc: 'Awarded prestigious nationwide recognition from the Bangladesh Furniture Industry Owners Association (BFIOA) for artisanal mastery.',
      extra: 'Solidified status as one of Bangladesh’s premier luxury bespoke furniture brands.'
    }
  ];

  return (
    <section id="milestones" className="py-16 sm:py-24 lg:py-36 bg-teal-deep text-ivory relative overflow-hidden border-t border-gold-hairline/30">
      {/* Background Architectural Watermark */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 font-display text-gold/[0.04] text-[180px] lg:text-[260px] font-bold select-none pointer-events-none tracking-tighter">
        CRAFT
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 border border-gold/40 px-3.5 py-1.5 bg-teal-card/60 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-light font-medium">
              The Journey
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4 text-ivory">
            Milestones of Craftsmanship
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory-muted leading-relaxed">
            From our founding workshop to nationwide recognition as one of Bangladesh&apos;s premier bespoke furniture ateliers.
          </p>
        </div>

        {/* 5-Column Responsive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="card-lift bg-teal-surface border border-gold-hairline/40 hover:border-gold p-6 flex flex-col justify-between group shadow-xl relative"
            >
              <div>
                {/* Year & Badge Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gold/20 mb-4">
                  <span className="font-display text-lg sm:text-xl font-bold text-gold tracking-tight">
                    {m.year}
                  </span>
                  <span className="text-[9px] bg-gold/15 text-gold-light border border-gold/40 px-2 py-0.5 uppercase tracking-wider font-semibold">
                    {m.badge}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="font-display text-base sm:text-lg text-ivory font-medium mb-3 group-hover:text-gold transition-colors leading-snug">
                  {m.title}
                </h3>

                {/* Main Description */}
                <p className="font-sans text-xs text-ivory-muted/90 leading-relaxed mb-4">
                  {m.desc}
                </p>

                {/* Extra Bullet Highlight */}
                <div className="pt-3 border-t border-gold/15 flex items-start gap-2 text-[11px] text-ivory-muted/70">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <p className="leading-snug">{m.extra}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

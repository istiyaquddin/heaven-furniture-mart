'use client';

import React from 'react';

interface WhyHeavenProps {
  onScheduleVisit?: () => void;
}

export default function WhyHeaven({ onScheduleVisit }: WhyHeavenProps) {
  const pillars = [
    {
      icon: 'design_services',
      title: 'Free Design Consultation',
      desc: 'Sit down with our interior design specialists for complimentary spatial planning, color harmony guidance, and material mood boards.',
      tag: 'Spatial Planning'
    },
    {
      icon: 'straighten',
      title: '100% Fully Bespoke',
      desc: 'Never pulled off a shelf. Every bed, sofa, dining table, and wardrobe is built specifically to your floor layout, lifestyle, and aesthetic preference.',
      tag: 'Custom Proportions'
    },
    {
      icon: 'carpenter',
      title: 'Seasoned Timber & In-House Craft',
      desc: 'We exclusively use seasoned Burma Teak, Chittagong Gamari, and kiln-dried Oak shaped by our generational in-house wood artisans.',
      tag: 'Generational Timber'
    },
    {
      icon: 'storefront',
      title: 'Large Agrabad Showroom',
      desc: 'Visit our physical flagship gallery on Agrabad Access Road to touch fabrics, feel timber weights, and experience ergonomic finishes firsthand.',
      tag: 'Touch & Feel Gallery'
    },
    {
      icon: 'local_shipping',
      title: 'Delivery & Installation Included',
      desc: 'Enjoy seamless white-glove transport and on-site expert assembly across Chattogram and nationwide, with zero hidden setup fees.',
      tag: 'White-Glove Transport'
    },
    {
      icon: 'credit_card',
      title: 'Flexible Payment Options',
      desc: 'Transparent milestone-based commissioning terms and convenient payment schedules designed for hassle-free home transformations.',
      tag: 'Milestone Payments'
    }
  ];

  return (
    <section id="why-heaven" className="py-16 sm:py-24 lg:py-36 bg-ivory text-brown-deep relative overflow-hidden border-t border-gold-hairline/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-4 sm:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-[1.5px] bg-gold" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-dark font-bold">
                The Heaven Standard
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium text-teal-deep">
              Why Discerning Clients Choose Us
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-brown-soft max-w-lg leading-relaxed">
            Why discerning homeowners, architects, and interior designers throughout Chattogram trust Heaven Furniture Mart with their living spaces.
          </p>
        </div>

        {/* 6-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((p, idx) => (
            <div
              key={p.title}
              className="card-lift bg-ivory-soft border border-gold-hairline/40 hover:border-gold p-6 sm:p-8 flex flex-col justify-between group shadow-sm transition-all duration-400"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-teal-deep/5 border border-gold/30 flex items-center justify-center text-teal-deep group-hover:bg-teal-deep group-hover:text-gold transition-colors duration-400">
                    <span className="material-symbols-outlined text-2xl">
                      {p.icon}
                    </span>
                  </div>
                  <span className="text-[10px] font-sans font-bold text-gold-dark/60 tracking-wider">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl text-teal-deep font-medium mb-3 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brown-soft leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-gold/20 flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.2em] text-gold-dark font-semibold">
                  {p.tag}
                </span>
                <span className="material-symbols-outlined text-teal-deep/30 group-hover:text-gold group-hover:translate-x-1 transition-all text-base">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 500+ Trusted Homeowners Banner Callout */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-teal-deep via-teal-surface to-teal-deep text-ivory border-2 border-gold p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold/15 border border-gold flex items-center justify-center flex-shrink-0">
              <span className="font-display text-2xl sm:text-3xl font-bold text-gold">500+</span>
            </div>
            <div>
              <h4 className="font-display text-lg sm:text-2xl text-ivory font-medium mb-1">
                Trusted by Hundreds of Happy Homeowners
              </h4>
              <p className="font-sans text-xs sm:text-sm text-ivory-muted max-w-2xl leading-relaxed">
                From luxury villas in <strong className="text-gold-light">Khulshi & Nasirabad</strong> to contemporary apartments in <strong className="text-gold-light">Agrabad & Panchlaish</strong>.
              </p>
            </div>
          </div>

          <a
            href="#showroom"
            onClick={onScheduleVisit}
            className="btn-luxury-shimmer bg-gold hover:bg-gold-light text-teal-deep px-8 py-4 font-semibold uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-lg whitespace-nowrap flex-shrink-0 flex items-center gap-2"
          >
            <span>Schedule Studio Visit</span>
            <span className="material-symbols-outlined text-sm">calendar_today</span>
          </a>
        </div>
      </div>
    </section>
  );
}

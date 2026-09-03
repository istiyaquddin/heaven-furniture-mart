'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Milestones() {
  const [activeIdx, setActiveIdx] = useState<number>(4);

  const timeline = [
    {
      year: '2020',
      title: 'Founded in Chattogram',
      desc: 'Established by Managing Director Abul Kalam Bhuiyan with an artisan vision for custom luxury furniture.',
    },
    {
      year: '2021',
      title: 'Agrabad Showroom',
      desc: 'Opened the flagship physical studio and experience gallery on Agrabad Access Road.',
    },
    {
      year: '2024–25',
      title: 'Furniture Fair 1st Prize',
      desc: 'Exhibited bespoke residential collections at the premier expo, winning 1st Prize honors.',
    },
    {
      year: '2025',
      title: 'Chamber of Commerce',
      desc: 'Inducted as an esteemed member of the Chattogram Chamber of Commerce & Industry.',
    },
    {
      year: '2026',
      title: 'National BFIOA Acclaim',
      desc: 'Honored with nationwide recognition by the Bangladesh Furniture Industry Owners Association.',
    },
  ];

  return (
    <section id="journey" className="bg-[#f2eee4] text-[#173331] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 border-t border-[#173331]/10">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 lg:mb-20 gap-4 sm:gap-6">
          <div>
            <p className="font-editorial-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#7d5c27] mb-2 sm:mb-3">
              Proven pedigree
            </p>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.02] tracking-tight text-[#173331]">
              Milestones of trust.
            </h2>
          </div>
          <p className="font-editorial-sans text-xs sm:text-sm text-[#563f2b] max-w-sm leading-relaxed">
            From a single craftsman bench in 2020 to nationwide BFIOA acclaim, our timeline is defined by unwavering dedication to bespoke interior luxury.
          </p>
        </div>

        {/* Interactive 5-Year Horizontal Timeline */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20">
          {/* Continuous Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-[28px] inset-x-10 h-px bg-[#173331]/15 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {timeline.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`flex flex-col cursor-pointer group transition-all duration-300 rounded-[1.25rem] sm:rounded-[1.5rem] border p-4 sm:p-5 lg:p-6 bg-[#fffaf3]/70 backdrop-blur-sm relative hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(40,24,13,0.06)] ${
                    isActive
                      ? 'border-[#b69151]/70 shadow-[0_10px_25px_rgba(197,160,89,0.14)]'
                      : 'border-[#173331]/12'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span
                      className={`font-editorial-mono text-xs tracking-wider font-semibold transition-colors ${
                        isActive ? 'text-[#b69151]' : 'text-[#7d5c27]/70 group-hover:text-[#b69151]'
                      }`}
                    >
                      {item.year}
                    </span>

                    {/* Node Indicator */}
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ring-4 ring-[#fffaf3] ${
                        isActive
                          ? 'bg-[#b69151] scale-125 shadow-md shadow-[#b69151]/30'
                          : 'bg-[#173331]/30 group-hover:bg-[#b69151]'
                      }`}
                    />
                  </div>

                  <h3
                    className={`font-display text-base sm:text-lg lg:text-xl font-normal mb-1 sm:mb-2 transition-colors ${
                      isActive ? 'text-[#173331]' : 'text-[#173331]/80 group-hover:text-[#173331]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="font-editorial-sans text-xs leading-relaxed text-[#563f2b]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* BFIOA Nationwide Recognition Card */}
        <div className="bg-[#0e2322] text-[#f2eee4] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl border border-[#b69151]/40 rounded-[1.5rem] sm:rounded-[2rem]">
          
          {/* Recognition Trophy Photo */}
          <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[280px] lg:min-h-[340px] bg-[#173331]">
            <Image
              src="/assets/images/bfioa-recognition.jpg"
              alt="Managing Director Abul Kalam Bhuiyan receiving nationwide BFIOA recognition"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center filter saturate-[0.9] contrast-[1.05]"
            />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 bg-[#0e2322]/90 backdrop-blur-md border-l-2 border-[#b69151] px-3 py-1 sm:px-3.5 sm:py-1.5 text-[#d6bf8d] font-editorial-mono text-[8.5px] sm:text-[9px] tracking-wider uppercase">
              National Recognition · 2026
            </div>
          </div>

          {/* Accolade Content */}
          <div className="lg:col-span-7 flex flex-col justify-center p-5 sm:p-8 lg:p-14">
            <span className="font-editorial-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] text-[#b69151] mb-1.5 sm:mb-2.5">
              Industry Accolade
            </span>
            <h3 className="font-display text-xl sm:text-3xl lg:text-4xl text-[#f2eee4] mb-2 sm:mb-3 font-normal tracking-tight">
              Nationwide BFIOA Recognition
            </h3>
            <p className="font-editorial-sans text-xs sm:text-sm leading-relaxed text-[#cfd8d2] max-w-lg mb-6 sm:mb-8">
              Honored by the Bangladesh Furniture Industry Owners Association for exceptional standards in bespoke fabrication, seasoned hardwood integrity, and architectural interior styling across Bangladesh.
            </p>

            <div className="border-t border-[#f2eee4]/15 pt-5 sm:pt-6 grid grid-cols-3 gap-3 sm:gap-8 font-editorial-mono">
              <div>
                <strong className="font-display text-2xl sm:text-3xl text-[#b69151] block font-normal leading-none">
                  500+
                </strong>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#cfd8d2]/70 mt-1 block">
                  Homes Styled
                </span>
              </div>
              <div>
                <strong className="font-display text-2xl sm:text-3xl text-[#b69151] block font-normal leading-none">
                  100%
                </strong>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#cfd8d2]/70 mt-1 block">
                  In-House Craft
                </span>
              </div>
              <div>
                <strong className="font-display text-2xl sm:text-3xl text-[#b69151] block font-normal leading-none">
                  6+ Yrs
                </strong>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#cfd8d2]/70 mt-1 block">
                  Dedicated Excellence
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

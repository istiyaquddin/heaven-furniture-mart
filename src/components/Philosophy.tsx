"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface PhilosophyProps {
  onOpenQuote?: () => void;
}

export default function Philosophy({ onOpenQuote }: PhilosophyProps) {
  const craftSteps = [
    {
      num: "01",
      title: "Understand & Measure",
      desc: "We begin with your floor plan, daily rhythms, and the way you move through your home.",
    },
    {
      num: "02",
      title: "Shape & Select",
      desc: "Together, we refine the form, timber, upholstery, and joinery that bring the idea to life.",
    },
    {
      num: "03",
      title: "Build & Place",
      desc: "Our Chattogram atelier crafts each piece before our team delivers and installs it with care.",
    },
  ];

  const trustPillars = [
    { label: "Free Consultation", detail: "Spatial planning & guidance" },
    { label: "100% Bespoke", detail: "Built to your room dimensions" },
    { label: "Seasoned Timber", detail: "Burma Teak & Gamari" },
    { label: "In-House Craft", detail: "Master artisan joinery" },
    { label: "White-Glove Delivery", detail: "Nationwide installation" },
    { label: "Milestone Terms", detail: "Flexible payment options" },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. THE BESPOKE WAY SECTION (#craft) */}
      <section
        id="craft"
        className="bg-[#f2eee4] text-[#173331] py-20 sm:py-28 lg:py-32 px-5 sm:px-8 md:px-12 border-t border-[#173331]/10"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
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
              <div className="absolute bottom-5 left-5 z-10 bg-[#0e2322]/90 backdrop-blur-sm border-l-2 border-[#b69151] px-4 py-2 text-[#f2eee4]">
                <strong className="font-display text-sm block font-normal text-[#f2eee4]">
                  In-House Joinery Atelier
                </strong>
                <span className="font-editorial-mono text-[9px] uppercase tracking-wider text-[#d6bf8d]">
                  Seasoned Burma Teak & Gamari
                </span>
              </div>
            </div>

            {/* Right: The Bespoke Way Editorial Copy & Steps */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#7d5c27] mb-3 block">
                The Bespoke Way
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173331] leading-[1.08] tracking-tight mb-5">
                No two rooms are
                <br />
                <em className="text-[#7d5c27] not-italic font-normal">
                  ever quite alike.
                </em>
              </h2>
              <p className="font-editorial-sans text-xs sm:text-sm text-[#563f2b] leading-relaxed max-w-lg mb-8">
                Start with a floor plan, a reference image, or a simple sketch.
                We tailor every proportion, timber finish, and upholstery detail
                to your way of living.
              </p>

              {/* Minimal 3-Step Sequential List */}
              <ol className="border-t border-[#173331]/15 divide-y divide-[#173331]/15 list-none p-0 mb-8">
                {craftSteps.map((step) => (
                  <li
                    key={step.num}
                    className="py-4 flex items-start gap-4 group"
                  >
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
                <span>Begin your design conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#b69151] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER'S VISION & ATELIER PHILOSOPHY (#philosophy) */}
      <section
        id="philosophy"
        className="bg-[#e8dfcc] text-[#173331] py-20 sm:py-28 lg:py-32 px-5 sm:px-8 md:px-12 border-t border-[#173331]/10"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
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

              <div className="absolute bottom-6 left-6 right-6 z-10 text-[#f2eee4]">
                <span className="font-editorial-mono text-[9px] uppercase tracking-wider text-[#d6bf8d] block mb-1">
                  Est. 2020 · Chattogram
                </span>
                <h3 className="font-display text-2xl font-normal leading-snug">
                  Abul Kalam Bhuiyan
                </h3>
                <p className="font-editorial-sans text-xs text-[#cfd8d2]/80 mt-0.5">
                  Managing Director & Founder
                </p>
                <div className="inline-flex items-center gap-1 text-[10px] font-editorial-mono text-[#f2eee4] bg-[#b69151]/30 px-2.5 py-1 border border-[#b69151]/40 mt-3">
                  <CheckCircle2 className="w-3 h-3 text-[#d6bf8d]" />
                  <span>1st Prize · 14th Furniture Fair</span>
                </div>
              </div>
            </div>

            {/* Right: Founder Vision Pull Quote & Craft Standards */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-editorial-serif text-[#b69151]/45 text-7xl sm:text-8xl leading-none select-none -mb-7 block">
                “
              </span>
              <blockquote className="max-w-2xl border-l border-[#b69151]/60 pl-5 sm:pl-7 font-display text-3xl sm:text-4xl lg:text-[3.25rem] italic text-[#173331] leading-[1.18] tracking-[0.005em] mb-8">
                Furniture is more than function. It is a reflection of
                lifestyle, taste, and comfort. Every piece we create is designed
                to bring lasting elegance into the homes of our clients.
              </blockquote>

              {/* 6 Minimal Trust Tags in a Clean 2x3 Grid */}
              <div className="border-t border-[#173331]/15 pt-6 grid grid-cols-2 sm:grid-cols-3 gap-5">
                {trustPillars.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <strong className="font-editorial-sans text-xs sm:text-[13px] font-semibold text-[#173331]">
                      {item.label}
                    </strong>
                    <span className="font-editorial-sans text-[11px] text-[#563f2b] mt-0.5">
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

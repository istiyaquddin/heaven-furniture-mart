'use client';

import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C1C1C] text-[#FAF7F2] pt-12 sm:pt-16 pb-8 px-4 sm:px-8 md:px-12 border-t border-[#C5A059]/20">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-14 border-b border-[#FAF7F2]/10">
          
          {/* Brand Identity */}
          <div className="sm:col-span-2 lg:col-span-4 flex items-start gap-3">
            <span className="w-8 h-8 sm:w-9 sm:h-9 border border-[#C5A059] text-[#C5A059] font-editorial-serif text-xl sm:text-2xl flex items-center justify-center leading-none shrink-0">
              H
            </span>
            <div className="flex flex-col">
              <strong className="tracking-[0.18em] text-base sm:text-lg font-semibold font-editorial-sans text-[#FAF7F2] leading-tight">
                HEAVEN
              </strong>
              <small className="font-editorial-mono text-[8px] sm:text-[9px] tracking-[0.2em] text-[#DFC488] uppercase mt-0.5 sm:mt-1">
                FURNITURE MART
              </small>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-3 font-editorial-sans text-xs text-[#F2ECE4]/75">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>
                Opposite of RAK Ceramics<br />
                Agrabad Access Road, Chattogram, Bangladesh
              </span>
            </div>

            <a
              href="tel:+8801960481983"
              className="flex items-center gap-2.5 hover:text-[#DFC488] transition-colors w-max"
            >
              <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>+880 1960-481983</span>
            </a>

            <a
              href="mailto:heavenfurnituremart@gmail.com"
              className="flex items-center gap-2.5 hover:text-[#DFC488] transition-colors w-max"
            >
              <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>heavenfurnituremart@gmail.com</span>
            </a>
          </div>

          {/* Social Channels */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 font-editorial-sans text-xs text-[#F2ECE4]/75">
            <a
              href="https://www.facebook.com/HeavenFurnitureMart"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#DFC488] transition-colors w-max py-0.5"
            >
              Facebook ↗
            </a>
            <a
              href="https://www.instagram.com/heaven_furniture_ltd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#DFC488] transition-colors w-max py-0.5"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.youtube.com/@HeavenFurnitureMart"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#DFC488] transition-colors w-max py-0.5"
            >
              YouTube ↗
            </a>
          </div>

          {/* Back to Top */}
          <div className="lg:col-span-1 flex justify-start lg:justify-end">
            <button
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-[#C5A059]/40 text-[#C5A059] hover:border-[#C5A059] hover:text-[#DFC488] hover:bg-[#C5A059]/10 flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 font-editorial-mono text-[9.5px] sm:text-[10px] text-[#FAF7F2]/50">
          <span>© 2026 Heaven Furniture Mart. Crafted in Chattogram, Bangladesh.</span>
          <span>Designed. Crafted. Customized.</span>
        </div>

      </div>
    </footer>
  );
}

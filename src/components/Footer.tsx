"use client";

import { ArrowUp, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-teal-deep text-ivory pt-16 pb-8 px-5 sm:px-8 md:px-12 border-t border-gold/20">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-ivory/10">
          {/* Brand Identity */}
          <div className="lg:col-span-4 flex items-start gap-3">
            <span className="relative w-9 h-9 border border-gold rounded-full text-gold font-editorial-serif text-xl sm:text-2xl flex items-center justify-center leading-none shrink-0">
              <span className="relative z-10">H</span>
              <span
                aria-hidden="true"
                className="absolute -top-1 -right-1 w-2 h-2 rotate-45 bg-gold border-2 border-teal-deep"
              />
            </span>
            <div className="flex flex-col">
              <strong className="tracking-[0.18em] text-base sm:text-lg font-semibold font-editorial-sans text-ivory leading-tight">
                HEAVEN
              </strong>
              <small className="font-editorial-mono text-[8.5px] sm:text-[9px] tracking-[0.2em] text-gold-light uppercase mt-1">
                FURNITURE MART
              </small>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 font-editorial-sans text-xs text-ivory-muted/75">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>
                Opposite of RAK Ceramics
                <br />
                Agrabad Access Road, Chattogram, Bangladesh
              </span>
            </div>

            <a
              href="tel:+8801960481983"
              className="flex items-center gap-2.5 hover:text-gold-light transition-colors w-max"
            >
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>+880 1960-481983</span>
            </a>

            <a
              href="mailto:heavenfurnituremart@gmail.com"
              className="flex items-center gap-2.5 hover:text-gold-light transition-colors w-max"
            >
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span>heavenfurnituremart@gmail.com</span>
            </a>
          </div>

          {/* Social Channels */}
          <div className="lg:col-span-3 flex flex-col gap-3 font-editorial-sans text-xs text-ivory-muted/75">
            <a
              href="https://www.facebook.com/HeavenFurnitureMart"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-gold-light transition-colors w-max"
            >
              <ExternalLink className="w-4 h-4 text-gold" aria-hidden="true" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/heaven_furniture_ltd"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-gold-light transition-colors w-max"
            >
              <ExternalLink className="w-4 h-4 text-gold" aria-hidden="true" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@HeavenFurnitureMart"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-gold-light transition-colors w-max"
            >
              <ExternalLink className="w-4 h-4 text-gold" aria-hidden="true" />
              <span>YouTube</span>
            </a>
          </div>

          {/* Back to Top */}
          <div className="lg:col-span-1 flex justify-start lg:justify-end">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 border border-gold/40 text-gold hover:border-gold hover:text-gold-light hover:bg-gold/10 flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-editorial-mono text-[10px] text-ivory/50">
          <span>
            © 2026 Heaven Furniture Mart. Crafted in Chattogram, Bangladesh.
          </span>
          <span>Designed. Crafted. Customized.</span>
        </div>
      </div>
    </footer>
  );
}

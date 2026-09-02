'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0A1616] text-ivory pt-16 sm:pt-24 pb-12 border-t border-gold/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-gold-hairline/25">
          {/* Col 1: Identity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-gold/40 p-1 bg-teal-card flex items-center justify-center">
                <img src="/assets/images/logo.png" alt="Heaven Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-[0.25em] text-ivory uppercase text-lg sm:text-xl leading-none">
                  HEAVEN
                </span>
                <span className="font-sans text-[9px] tracking-[0.3em] text-gold-light uppercase font-semibold mt-1">
                  FURNITURE MART
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-ivory-muted/80 leading-relaxed max-w-md">
              Chattogram's premier bespoke furniture atelier and architectural interior styling studio. Every collection is designed, handcrafted, and customized around your floor plan.
            </p>

            <div className="flex items-center gap-4 text-gold">
              <a
                href="https://www.facebook.com/HeavenFurnitureMart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-teal-deep transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/heaven_furniture_ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-teal-deep transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@HeavenFurnitureMart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-teal-deep transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="https://wa.me/8801960481983"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-teal-deep transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-bold block">
              Atelier Collections
            </span>
            <ul className="space-y-2.5 text-xs text-ivory-muted/80">
              <li><a href="#collections" className="hover:text-gold transition-colors">Living Room Royal Lounges</a></li>
              <li><a href="#collections" className="hover:text-gold transition-colors">Master Bedroom Sanctuaries</a></li>
              <li><a href="#collections" className="hover:text-gold transition-colors">Imperial Marble Dining Tables</a></li>
              <li><a href="#collections" className="hover:text-gold transition-colors">Director Executive Suites</a></li>
              <li><a href="#collections" className="hover:text-gold transition-colors">Curio Cabinets & Veranda Swings</a></li>
            </ul>
          </div>

          {/* Col 3: Studio Coordinates */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-bold block">
              Studio Coordinates
            </span>
            <div className="space-y-2.5 text-xs text-ivory-muted/80">
              <p>
                <strong className="text-ivory block font-semibold">Agrabad Flagship Studio:</strong>
                <a
                  href="https://maps.app.goo.gl/pwe2VJWeLeTdTw6v9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors underline decoration-gold/40"
                >
                  Opposite of RAK Ceramics, Agrabad Access Road, Chattogram, Bangladesh
                </a>
              </p>
              <p>
                <strong className="text-ivory block font-semibold">Direct Concierge:</strong>
                <a href="tel:+8801960481983" className="hover:text-gold transition-colors">+880 1960-481983</a>
              </p>
              <p>
                <strong className="text-ivory block font-semibold">Direct Email:</strong>
                <a href="mailto:heavenfurnituremart@gmail.com" className="hover:text-gold transition-colors">heavenfurnituremart@gmail.com</a>
              </p>
              <p>
                <strong className="text-ivory block font-semibold">Studio Hours:</strong>
                <span>10:00 AM – 9:00 PM (Everyday)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory-muted/60">
          <p>© 2020–2026 Heaven Furniture Mart. All Rights Reserved. Founded by MD Abul Kalam Bhuiyan.</p>
          <p className="tracking-wider">Designed & Crafted with Pride in Chattogram, Bangladesh.</p>
        </div>
      </div>
    </footer>
  );
}

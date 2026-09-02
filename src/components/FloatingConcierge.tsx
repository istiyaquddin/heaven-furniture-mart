'use client';

import React, { useState } from 'react';

export default function FloatingConcierge() {
  const [showPopover, setShowPopover] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Popover Prompt */}
      {showPopover && (
        <div className="hidden md:flex items-center gap-3 bg-teal-deep text-ivory border border-gold p-2.5 px-3.5 shadow-2xl mb-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-left">
            <p className="font-sans text-[10px] font-bold text-gold uppercase tracking-wider">Heaven Studio</p>
            <p className="font-sans text-[9px] text-ivory-muted">Chat with our Agrabad designers</p>
          </div>
          <button
            onClick={() => setShowPopover(false)}
            className="text-ivory/60 hover:text-ivory ml-1 text-xs"
            aria-label="Close Popover"
          >
            ✕
          </button>
        </div>
      )}

      {/* WhatsApp Floating Pill */}
      <a
        href="https://wa.me/8801960481983?text=Hello%20Heaven%20Furniture%20Mart,%20I%20am%20interested%20in%20a%20bespoke%20furniture%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1DA851] text-white p-3 sm:px-4 sm:py-3 shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group border border-white/20"
        aria-label="Direct WhatsApp Chat"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        <span className="hidden sm:inline font-sans text-xs font-semibold uppercase tracking-wider">WhatsApp Studio</span>
      </a>
    </div>
  );
}

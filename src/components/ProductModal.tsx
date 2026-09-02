'use client';

import React, { useEffect } from 'react';
import { Product } from '@/data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-teal-deep/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-ivory border border-gold shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-teal-deep text-ivory hover:bg-gold hover:text-teal-deep flex items-center justify-center transition-colors shadow-md"
          aria-label="Close Modal"
        >
          ✕
        </button>

        {/* Modal Image */}
        <div className="md:w-1/2 aspect-[4/3] md:aspect-auto bg-teal-deep relative overflow-hidden flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-teal-deep/90 backdrop-blur-md border border-gold/40 text-gold-light text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-semibold">
            {product.tag}
          </div>
        </div>

        {/* Modal Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-bold block mb-1">
              Bespoke Specification Sheet
            </span>
            <h3 className="font-display text-xl sm:text-2xl text-teal-deep font-medium mb-4">
              {product.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-brown-soft leading-relaxed mb-6">
              {product.desc}
            </p>

            <div className="space-y-3 text-xs border-t border-gold/20 pt-4 mb-6">
              <div className="flex justify-between py-1 border-b border-gold/10">
                <span className="text-brown-charcoal/70">Timber Species:</span>
                <span className="font-semibold text-teal-deep">{product.wood}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gold/10">
                <span className="text-brown-charcoal/70">Upholstery Textile:</span>
                <span className="font-semibold text-teal-deep">{product.fabric}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gold/10">
                <span className="text-brown-charcoal/70">Standard Footprint:</span>
                <span className="font-semibold text-teal-deep">{product.size}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-brown-charcoal/70">Custom Sizing:</span>
                <span className="font-semibold text-emerald-700">100% Tailored to Floor Plan</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-gold/20">
            <a
              href={`https://wa.me/8801960481983?text=${encodeURIComponent(product.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3.5 font-semibold uppercase tracking-[0.2em] text-xs text-center flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <span>Inquire on WhatsApp</span>
              <span className="material-symbols-outlined text-sm">chat</span>
            </a>
            <p className="text-[10px] text-center text-brown-soft/70">
              Direct response from our Agrabad senior bespoke furniture consultant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

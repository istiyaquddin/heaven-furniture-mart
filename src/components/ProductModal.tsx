'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { MessageSquare, X } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0e2322]/85 backdrop-blur-sm transition-opacity cursor-pointer"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#f2eee4] border border-[#b69151] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200 text-[#173331]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#173331] text-[#f2eee4] hover:bg-[#b69151] hover:text-[#0e2322] flex items-center justify-center transition-colors shadow-md cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Image */}
        <div className="md:w-1/2 aspect-[4/3] md:aspect-auto bg-[#173331] relative overflow-hidden flex-shrink-0 min-h-[260px] md:min-h-[400px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#0e2322]/90 backdrop-blur-md border border-[#b69151]/40 text-[#d6bf8d] font-editorial-mono text-[9px] uppercase tracking-[0.18em] px-3 py-1 font-semibold z-10">
            {product.tag}
          </div>
        </div>

        {/* Modal Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
          <div>
            <span className="font-editorial-mono text-[9px] uppercase tracking-[0.2em] text-[#7d5c27] font-bold block mb-1">
              Bespoke Specification Sheet
            </span>
            <h3 className="font-editorial-serif text-2xl sm:text-3xl text-[#173331] font-normal mb-3 leading-snug">
              {product.title}
            </h3>
            <p className="font-editorial-sans text-xs sm:text-[13px] text-[#563f2b] leading-relaxed mb-6">
              {product.desc}
            </p>

            <div className="space-y-2.5 text-xs font-editorial-sans border-t border-[#173331]/15 pt-4 mb-6">
              <div className="flex justify-between py-1 border-b border-[#173331]/10">
                <span className="text-[#563f2b]">Timber Species:</span>
                <span className="font-semibold text-[#173331]">{product.wood}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#173331]/10">
                <span className="text-[#563f2b]">Upholstery Textile:</span>
                <span className="font-semibold text-[#173331]">{product.fabric}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#173331]/10">
                <span className="text-[#563f2b]">Standard Footprint:</span>
                <span className="font-semibold text-[#173331]">{product.size}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#563f2b]">Custom Sizing:</span>
                <span className="font-semibold text-[#173331]">100% Tailored to Floor Plan</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#173331]/15">
            <a
              href={`https://wa.me/8801960481983?text=${encodeURIComponent(product.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3.5 font-semibold uppercase tracking-[0.18em] text-xs text-center flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
            >
              <span>Inquire on WhatsApp</span>
              <MessageSquare className="w-4 h-4" />
            </a>
            <p className="font-editorial-sans text-[10px] text-center text-[#563f2b]/70">
              Direct response from our Agrabad senior bespoke furniture consultant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useId } from 'react';
import { Receipt } from 'lucide-react';

export default function Estimator() {
  const [categoryName, setCategoryName] = useState('Living Sofa Suite (3+2+1 / Curved L-Shape)');
  const [basePrice, setBasePrice] = useState(85000);
  const [woodFactor, setWoodFactor] = useState(1.0);
  const [woodName, setWoodName] = useState('Seasoned Chittagong Gamari');
  const [fabricName, setFabricName] = useState('Premium Imported Velvet');
  const [lengthVal, setLengthVal] = useState(16);

  const lengthInputId = useId();
  const woodSelectId = useId();
  const fabricSelectId = useId();

  const scaleFactor = 1 + (lengthVal - 10) * 0.02;
  const minEstimate = Math.round((basePrice * woodFactor * scaleFactor) / 1000) * 1000;
  const maxEstimate = Math.round((minEstimate * 1.35) / 1000) * 1000;

  const categories = [
    { label: 'Living Sofa Suite', name: 'Living Sofa Suite (3+2+1 / Curved L-Shape)', base: 85000 },
    { label: 'Master Bedroom', name: 'Master Bed + 2 Nightstands', base: 65000 },
    { label: 'Imperial Dining', name: '8-Seater Dining Suite + Marble', base: 95000 },
    { label: 'Executive Suite', name: 'Director Desk + Credenza', base: 75000 },
  ];

  const woods = [
    { name: 'Seasoned Chittagong Gamari', factor: 1.0, label: 'Seasoned Chittagong Gamari (Kiln-Dried)' },
    { name: 'Solid Burma Teak (Grade A)', factor: 1.45, label: 'Solid Burma Teak (Grade A, Hand-Carved)' },
    { name: 'American White Oak', factor: 1.30, label: 'American White Oak / Walnut' },
    { name: 'Chittagong Mahogany', factor: 1.15, label: 'Chittagong Mahogany (Rich Lustre)' },
  ];

  const fabrics = [
    'Premium Imported Velvet (Turkish / Italian)',
    'Royal Damask & Silk Brocade',
    'Full-Grain Genuine Leather (European)',
    'Textured Linen-Cotton Blend (Breathable)',
  ];

  const handleWhatsAppQuote = () => {
    const message = `Hello Heaven Furniture Mart!\nI just configured a bespoke commission on your website:\n\n• Commission: ${categoryName}\n• Timber Species: ${woodName}\n• Textile & Accents: ${fabricName}\n• Space Scale: ${lengthVal} ft Spatial Footprint\n• Estimated Budget: BDT ${minEstimate.toLocaleString()} – ${maxEstimate.toLocaleString()}\n\nI would like to discuss next steps with your design team.`;
    const url = `https://wa.me/8801960481983?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="bespoke-atelier" className="py-16 sm:py-24 lg:py-36 bg-teal-deep text-ivory relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#132828_1px,transparent_1px),linear-gradient(to_bottom,#132828_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 border border-gold/40 px-3.5 py-1.5 bg-teal-card/60 backdrop-blur-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-light font-medium">
              Interactive Estimator
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
            Bespoke Atelier Engine
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory-muted leading-relaxed">
            Select your room requirements to generate an approximate investment range. Every commission includes 3D spatial renders, timber moisture verification, and white-glove installation across Bangladesh.
          </p>
        </div>

        {/* The Two-Column Configuration Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Controls */}
          <div className="lg:col-span-7 bg-teal-surface border border-gold-hairline/40 p-6 sm:p-10 shadow-2xl space-y-8">
            {/* Step 1: Category */}
            <div>
              <label className="font-sans text-xs uppercase tracking-[0.18em] text-gold block font-semibold mb-3">
                1. Select Commission Type
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {categories.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => {
                      setCategoryName(c.name);
                      setBasePrice(c.base);
                    }}
                    className={`text-left p-3.5 sm:p-4 border text-xs sm:text-sm transition-all duration-300 active:scale-95 ${
                      categoryName === c.name
                        ? 'border-gold bg-gold/20 text-ivory font-semibold shadow-lg scale-[1.01]'
                        : 'border-gold-hairline/40 bg-teal-deep text-ivory-muted hover:border-gold/60 hover:text-ivory'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Wood Species */}
            <div>
              <label htmlFor={woodSelectId} className="font-sans text-xs uppercase tracking-[0.18em] text-gold block font-semibold mb-3">
                2. Hardwood Timber Selection
              </label>
              <select
                id={woodSelectId}
                value={woodName}
                onChange={(e) => {
                  const selected = woods.find((w) => w.name === e.target.value);
                  if (selected) {
                    setWoodName(selected.name);
                    setWoodFactor(selected.factor);
                  }
                }}
                className="w-full bg-teal-deep border border-gold-hairline/40 text-ivory text-xs sm:text-sm p-3.5 focus:border-gold focus:outline-none transition-colors cursor-pointer"
              >
                {woods.map((w) => (
                  <option key={w.name} value={w.name}>
                    {w.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Fabric & Textile Tier */}
            <div>
              <label htmlFor={fabricSelectId} className="font-sans text-xs uppercase tracking-[0.18em] text-gold block font-semibold mb-3">
                3. Upholstery & Finish Tier
              </label>
              <select
                id={fabricSelectId}
                value={fabricName}
                onChange={(e) => setFabricName(e.target.value)}
                className="w-full bg-teal-deep border border-gold-hairline/40 text-ivory text-xs sm:text-sm p-3.5 focus:border-gold focus:outline-none transition-colors cursor-pointer"
              >
                {fabrics.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 4: Scale Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={lengthInputId} className="font-sans text-xs uppercase tracking-[0.18em] text-gold font-semibold">
                  4. Approximate Room / Piece Scale
                </label>
                <span className="font-sans text-xs text-gold-light font-bold bg-teal-deep px-2.5 py-1 border border-gold/30">
                  {lengthVal} Feet Total Length
                </span>
              </div>
              <input
                id={lengthInputId}
                type="range"
                min="10"
                max="26"
                value={lengthVal}
                onChange={(e) => setLengthVal(parseInt(e.target.value))}
                className="w-full h-2 bg-teal-card appearance-none cursor-pointer accent-gold rounded-full"
              />
              <div className="flex justify-between text-[10px] text-ivory-muted/60 mt-1.5 uppercase tracking-wider">
                <span>Compact (10 ft)</span>
                <span>Standard (18 ft)</span>
                <span>Grand Villa (26 ft)</span>
              </div>
            </div>
          </div>

          {/* Right Live Quotation Card */}
          <div className="lg:col-span-5 bg-teal-surface border-2 border-gold p-6 sm:p-10 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-gold/20">
              <Receipt className="w-10 h-10" />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light font-bold block mb-2">
                Live Specification Summary
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-ivory font-medium mb-6">
                Custom Commission Blueprint
              </h3>

              <div className="space-y-4 text-xs sm:text-sm border-t border-gold/20 pt-6">
                <div className="flex justify-between items-center py-1">
                  <span className="text-ivory-muted">Type:</span>
                  <span className="font-semibold text-ivory text-right max-w-[200px] truncate">{categoryName}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-ivory-muted">Selected Timber:</span>
                  <span className="font-semibold text-gold-light text-right">{woodName}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-ivory-muted">Textile Accents:</span>
                  <span className="font-semibold text-ivory text-right max-w-[200px] truncate">{fabricName}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-ivory-muted">Dimension Scale:</span>
                  <span className="font-semibold text-ivory">{lengthVal} ft Spatial Footprint</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-ivory-muted">Moisture Guarantee:</span>
                  <span className="font-semibold text-emerald-400">8% – 12% (Kiln-Dried)</span>
                </div>
              </div>

              {/* Price Calculation Display with Smooth Value Feedback */}
              <div className="bg-teal-deep p-6 mt-8 border border-gold/30 text-center transition-all duration-300">
                <span className="text-[10px] uppercase tracking-[0.2em] text-ivory-muted block mb-1">
                  Estimated Investment Range
                </span>
                <div className="font-display text-2xl sm:text-3xl text-gold font-bold tracking-tight">
                  BDT {minEstimate.toLocaleString()} – {maxEstimate.toLocaleString()}
                </div>
                <span className="text-[9px] text-ivory-muted/60 block mt-1">
                  *Excludes bespoke hand-embroidery or imported marble premium. Exact quote provided post spatial consultation.
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Quote Export */}
            <div className="mt-8 space-y-3">
              <button
                onClick={handleWhatsAppQuote}
                className="btn-luxury-shimmer w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-4 font-semibold uppercase tracking-[0.2em] text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group active:scale-95"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>Export Configuration to WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

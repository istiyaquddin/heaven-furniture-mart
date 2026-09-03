'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '@/data/products';

interface CollectionsProps {
  onSelectProduct: (product: Product) => void;
}

interface SpaceCategory {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  items: Product[];
}

const spacesData: SpaceCategory[] = [
  {
    id: 'living',
    index: '01',
    title: 'Living room',
    subtitle: 'Sofas · tables · TV units',
    items: [
      {
        id: 'living-royal',
        title: 'The Royal Living Suite',
        category: 'living',
        image: '/assets/images/sofa-royal-blue-gold.jpg',
        desc: 'Handcrafted solid seasoned Burma Teak paired with Italian royal blue velvet and 24k gold leaf carvings.',
        wood: 'Solid Burma Teak (Grade A)',
        fabric: 'Imported Royal Velvet & Damask',
        size: '18 ft × 14 ft Room Footprint',
        tag: 'Living Salon',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about The Royal Living Suite.'
      },
      {
        id: 'living-flagship',
        title: 'Grand Flagship Salon Suite',
        category: 'living',
        image: '/assets/images/showroom-flagship.jpg',
        desc: 'Curved contemporary sofa suite with floating marble cocktail table and fluted hardwood joinery.',
        wood: 'Seasoned Chittagong Gamari',
        fabric: 'Champagne Italian Linen-Velvet',
        size: '16 ft × 12 ft Spatial Footprint',
        tag: 'Living Salon',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Grand Flagship Salon Suite.'
      },
      {
        id: 'living-teak-cream',
        title: 'Heritage Teak Cream Suite',
        category: 'living',
        image: '/assets/images/living-suite-teak-cream.jpg',
        desc: 'Classic Burma teak framed 3+2+1 seating with high-density ergonomic cushioning and cream damask.',
        wood: 'Burma Teak (Natural Matte)',
        fabric: 'Textured Ivory Damask',
        size: '15 ft × 12 ft Spatial Footprint',
        tag: 'Living Salon',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Heritage Teak Cream Suite.'
      },
      {
        id: 'living-sapphire',
        title: 'Sapphire Curved Sectional',
        category: 'living',
        image: '/assets/images/sofa-sapphire-sectional.jpg',
        desc: 'Deep modular curved sectional engineered for expansive architectural living rooms with brass trim.',
        wood: 'Kiln-Dried Hardwood Frame',
        fabric: 'Sapphire Performance Velvet',
        size: '14 ft Curved Perimeter',
        tag: 'Living Salon',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Sapphire Curved Sectional.'
      }
    ]
  },
  {
    id: 'bedroom',
    index: '02',
    title: 'Bedroom',
    subtitle: 'Beds · wardrobes · vanities',
    items: [
      {
        id: 'bed-emerald',
        title: 'Sovereign Emerald Bed',
        category: 'bedroom',
        image: '/assets/images/bed-emerald-velvet.jpg',
        desc: 'Deep-fluted emerald Turkish velvet headboard framing seasoned Chittagong Gamari with floating nightstands.',
        wood: 'Seasoned Chittagong Gamari',
        fabric: 'Turkish Fluted Velvet',
        size: 'King 6.5 ft × 7 ft Platform',
        tag: 'Master Sanctuary',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Sovereign Emerald Bed.'
      },
      {
        id: 'bed-heritage',
        title: 'Heritage Burma Teak Bed',
        category: 'bedroom',
        image: '/assets/images/bed-heritage-teak.jpg',
        desc: 'Artisanal hand-carved Burma Teak headboard reflecting imperial heirloom craftsmanship and lasting durability.',
        wood: 'Solid Burma Teak (Grade A)',
        fabric: 'Optional Upholstered Panels',
        size: 'King 6.5 ft × 7 ft Platform',
        tag: 'Master Sanctuary',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Heritage Burma Teak Bed.'
      },
      {
        id: 'bed-master-suite',
        title: 'Imperial Master Sanctuary',
        category: 'bedroom',
        image: '/assets/images/bedroom.jpg',
        desc: 'Complete architectural bedroom ensemble with integrated wardrobe wall, illuminated vanity, and floating bench.',
        wood: 'Seasoned Gamari & Teak',
        fabric: 'European Neutral Bouclé',
        size: 'Full Master Suite Layout',
        tag: 'Master Sanctuary',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Imperial Master Sanctuary.'
      },
      {
        id: 'bed-studio-vignette',
        title: 'Studio Sanctuary Vignette',
        category: 'bedroom',
        image: '/assets/images/studio-vignette-bedroom.jpg',
        desc: 'Bespoke floating king platform bed with integrated LED perimeter cove lighting and bedside consoles.',
        wood: 'Kiln-Dried Hardwood & Brass',
        fabric: 'Italian Velvet & Leather',
        size: 'King 6.5 ft × 7 ft Platform',
        tag: 'Master Sanctuary',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Studio Sanctuary Vignette.'
      }
    ]
  },
  {
    id: 'dining',
    index: '03',
    title: 'Dining',
    subtitle: 'Tables · chairs · cabinets',
    items: [
      {
        id: 'dining-champagne',
        title: 'Imperial Champagne Dining',
        category: 'dining',
        image: '/assets/images/dining-champagne-carved.jpg',
        desc: '8-seater hand-carved dining suite with imported coral marble tabletop and ergonomically sculpted armchairs.',
        wood: 'Seasoned Teak & Italian Marble',
        fabric: 'Champagne Brocade Textile',
        size: '8-Seater (8 ft × 4 ft Table)',
        tag: 'Dining Suite',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Imperial Champagne Dining Suite.'
      },
      {
        id: 'dining-coral',
        title: 'Coral Marble Feast Suite',
        category: 'dining',
        image: '/assets/images/dining-coral-marble.jpg',
        desc: 'Bookmatched coral marble slab supported by fluted Burma Teak pedestal pillars with 8 matching chairs.',
        wood: 'Burma Teak & Coral Marble',
        fabric: 'Stain-Resistant Neutral Velvet',
        size: '8-Seater (8.5 ft × 4.2 ft)',
        tag: 'Dining Suite',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Coral Marble Feast Suite.'
      },
      {
        id: 'dining-cream',
        title: 'Royal Cream Marble Dining',
        category: 'dining',
        image: '/assets/images/dining-cream-marble.jpg',
        desc: 'Sculptural cream marble top dining table framed by gold-leaf carved crown chairs and matching server.',
        wood: 'Solid Hardwood & Marble',
        fabric: 'Royal Blue Velvet',
        size: '6 to 8 Seater Custom Options',
        tag: 'Dining Suite',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Royal Cream Marble Dining.'
      },
      {
        id: 'dining-mahogany',
        title: 'Heritage Mahogany Dining',
        category: 'dining',
        image: '/assets/images/dining-mahogany-leather.jpg',
        desc: 'High-lustre seasoned Chittagong Mahogany table paired with full-grain leather upholstered armchairs.',
        wood: 'Seasoned Mahogany Hardwood',
        fabric: 'Full-Grain Leather',
        size: '8-Seater (8 ft × 4 ft Table)',
        tag: 'Dining Suite',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Heritage Mahogany Dining.'
      }
    ]
  },
  {
    id: 'office',
    index: '04',
    title: 'Office & study',
    subtitle: 'Executive pieces · workstations',
    items: [
      {
        id: 'office-director',
        title: 'Director Executive Desk',
        category: 'office',
        image: '/assets/images/office-director-desk.jpg',
        desc: 'Kiln-dried American Oak paired with matte charcoal architectural steel and concealed cable management.',
        wood: 'Kiln-Dried American Oak',
        fabric: 'Full-Grain Black Leather Trim',
        size: '7 ft × 3.5 ft Executive Desk',
        tag: 'Executive Workspace',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Director Executive Desk.'
      },
      {
        id: 'office-boardroom',
        title: 'Imperial Conference Boardroom',
        category: 'office',
        image: '/assets/images/office-conference-boardroom.jpg',
        desc: '12-seat executive conference table with integrated connectivity ports and ergonomic leather high-backs.',
        wood: 'Burma Teak & Stainless Accents',
        fabric: 'Perforated Executive Leather',
        size: '14 ft × 4.5 ft Conference Table',
        tag: 'Executive Workspace',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Imperial Conference Boardroom.'
      },
      {
        id: 'office-pod',
        title: 'Executive Workstation Suite',
        category: 'office',
        image: '/assets/images/office-workstation-pod.jpg',
        desc: 'Dual executive desk suite with matching acoustic sound-dampening panels and floating credenza storage.',
        wood: 'Chittagong Gamari Hardwood',
        fabric: 'Acoustic Textile & Leather',
        size: 'Custom Office Footprint',
        tag: 'Executive Workspace',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Executive Workstation Suite.'
      },
      {
        id: 'office-vignette',
        title: 'Studio Executive Office',
        category: 'office',
        image: '/assets/images/studio-vignette-office.jpg',
        desc: 'Hand-rubbed walnut director suite featuring concealed biometric lock drawers and soft-closing book cabinets.',
        wood: 'American Walnut & Brass',
        fabric: 'Hand-Stitched European Leather',
        size: '8 ft × 4 ft Workstation',
        tag: 'Executive Workspace',
        waText: 'Hi Heaven Furniture Mart, I would like to inquire about the Studio Executive Office.'
      }
    ]
  }
];

export default function Collections({ onSelectProduct }: CollectionsProps) {
  // Independent image rotation index for each space
  const [imageIndices, setImageIndices] = useState<Record<string, number>>({
    living: 0,
    bedroom: 0,
    dining: 0,
    office: 0
  });

  // Staggered automatic shuffle/rotation timer (every 4.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndices((prev) => ({
        living: (prev.living + 1) % spacesData[0].items.length,
        bedroom: (prev.bedroom + 1) % spacesData[1].items.length,
        dining: (prev.dining + 1) % spacesData[2].items.length,
        office: (prev.office + 1) % spacesData[3].items.length,
      }));
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const livingSpace = spacesData[0];
  const bedroomSpace = spacesData[1];
  const diningSpace = spacesData[2];
  const officeSpace = spacesData[3];

  const currentLivingItem = livingSpace.items[imageIndices.living];
  const currentBedItem = bedroomSpace.items[imageIndices.bedroom];
  const currentDiningItem = diningSpace.items[imageIndices.dining];
  const currentOfficeItem = officeSpace.items[imageIndices.office];

  return (
    <section id="collections" className="bg-[#173331] text-[#f2eee4] py-20 sm:py-28 lg:py-32 px-5 sm:px-8 md:px-12 border-t border-[#b69151]/20">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header matching exact live site */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="font-editorial-mono text-[10px] uppercase tracking-[0.2em] text-[#a8b2ab] mb-3">
              Selected spaces
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.02] tracking-tight text-[#f2eee4]">
              The pieces that<br />
              <em className="text-[#d6bf8d] not-italic font-normal">set a room apart.</em>
            </h2>
          </div>
          <p className="font-editorial-sans text-xs sm:text-sm text-[#cfd8d2] max-w-sm leading-relaxed">
            Choose a starting point. We’ll make it entirely your own. Shuffling through our signature handcrafted commissions.
          </p>
        </div>

        {/* Exact Live Site Grid Layout:
            - Desktop (lg): 3 columns (1.2fr 1fr 1fr), 2 rows of strictly 260px each, gap 1.2rem
            - Living room spans 2 rows (260px + 260px + gap = ~539px, perfectly proportionate)
            - Tablet (md): 2 columns, 3 rows
            - Mobile: single column stack
        */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:grid-rows-[260px_260px] gap-[1.2rem]"
          style={{ gridAutoFlow: 'dense' }}
        >
          
          {/* 01 Living Room (collection-large: spans 2 rows) */}
          <div
            onClick={() => onSelectProduct(currentLivingItem)}
            className="lg:row-span-2 relative h-[380px] md:h-[390px] lg:h-full bg-[#0d1d1b] overflow-hidden group cursor-pointer flex flex-col justify-end p-6 sm:p-7 border border-transparent hover:border-[#b69151]/50 transition-all duration-300"
          >
            {/* Shuffling Background Images with Smooth Cross-fade */}
            {livingSpace.items.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === imageIndices.living ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.82] group-hover:brightness-[0.92]"
                />
              </div>
            ))}

            {/* Live Site Linear Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d1b]/92 via-[#0d1d1b]/30 to-transparent pointer-events-none" />

            {/* Top Index */}
            <span className="absolute top-5 left-6 z-10 font-editorial-mono text-[11px] text-[#b69151] font-semibold">
              {livingSpace.index}
            </span>

            {/* Content Meta */}
            <div className="relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl text-[#f2eee4] font-normal leading-tight group-hover:text-[#d6bf8d] transition-colors">
                {livingSpace.title}
              </h3>
              <p className="font-editorial-sans text-xs text-[#a8b2ab] mt-1">
                {livingSpace.subtitle}
              </p>
            </div>

            {/* Action */}
            <b className="absolute bottom-6 right-6 z-10 flex items-center gap-1 text-[11px] font-semibold text-[#f2eee4] group-hover:text-[#d6bf8d] transition-colors">
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </b>

            {/* Mini Progress Dots */}
            <div className="absolute top-5 right-6 z-10 flex items-center gap-1">
              {livingSpace.items.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    dotIdx === imageIndices.living ? 'w-3.5 bg-[#b69151]' : 'w-1 bg-[#f2eee4]/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 02 Bedroom (row 1, col 2, height: 260px) */}
          <div
            onClick={() => onSelectProduct(currentBedItem)}
            className="relative h-[260px] md:h-[300px] lg:h-[260px] bg-[#0d1d1b] overflow-hidden group cursor-pointer flex flex-col justify-end p-6 border border-transparent hover:border-[#b69151]/50 transition-all duration-300"
          >
            {bedroomSpace.items.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === imageIndices.bedroom ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.82] group-hover:brightness-[0.92]"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d1b]/92 via-[#0d1d1b]/30 to-transparent pointer-events-none" />

            <span className="absolute top-5 left-6 z-10 font-editorial-mono text-[11px] text-[#b69151] font-semibold">
              {bedroomSpace.index}
            </span>

            <div className="relative z-10">
              <h3 className="font-display text-2xl text-[#f2eee4] font-normal leading-tight group-hover:text-[#d6bf8d] transition-colors">
                {bedroomSpace.title}
              </h3>
              <p className="font-editorial-sans text-xs text-[#a8b2ab] mt-1">
                {bedroomSpace.subtitle}
              </p>
            </div>

            <b className="absolute bottom-6 right-6 z-10 flex items-center gap-1 text-[11px] font-semibold text-[#f2eee4] group-hover:text-[#d6bf8d] transition-colors">
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </b>

            <div className="absolute top-5 right-6 z-10 flex items-center gap-1">
              {bedroomSpace.items.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    dotIdx === imageIndices.bedroom ? 'w-3.5 bg-[#b69151]' : 'w-1 bg-[#f2eee4]/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 03 Dining (row 1, col 3, height: 260px) */}
          <div
            onClick={() => onSelectProduct(currentDiningItem)}
            className="relative h-[260px] md:h-[300px] lg:h-[260px] bg-[#0d1d1b] overflow-hidden group cursor-pointer flex flex-col justify-end p-6 border border-transparent hover:border-[#b69151]/50 transition-all duration-300"
          >
            {diningSpace.items.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === imageIndices.dining ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.82] group-hover:brightness-[0.92]"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d1b]/92 via-[#0d1d1b]/30 to-transparent pointer-events-none" />

            <span className="absolute top-5 left-6 z-10 font-editorial-mono text-[11px] text-[#b69151] font-semibold">
              {diningSpace.index}
            </span>

            <div className="relative z-10">
              <h3 className="font-display text-2xl text-[#f2eee4] font-normal leading-tight group-hover:text-[#d6bf8d] transition-colors">
                {diningSpace.title}
              </h3>
              <p className="font-editorial-sans text-xs text-[#a8b2ab] mt-1">
                {diningSpace.subtitle}
              </p>
            </div>

            <b className="absolute bottom-6 right-6 z-10 flex items-center gap-1 text-[11px] font-semibold text-[#f2eee4] group-hover:text-[#d6bf8d] transition-colors">
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </b>

            <div className="absolute top-5 right-6 z-10 flex items-center gap-1">
              {diningSpace.items.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    dotIdx === imageIndices.dining ? 'w-3.5 bg-[#b69151]' : 'w-1 bg-[#f2eee4]/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 04 Office & Study (collection-work: row 2, spans 2 columns, height: 260px) */}
          <div
            onClick={() => onSelectProduct(currentOfficeItem)}
            className="md:col-span-2 lg:col-span-2 relative h-[260px] md:h-[300px] lg:h-[260px] bg-[#0d1d1b] overflow-hidden group cursor-pointer flex flex-col justify-end p-6 border border-transparent hover:border-[#b69151]/50 transition-all duration-300"
          >
            {officeSpace.items.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === imageIndices.office ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.82] group-hover:brightness-[0.92]"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d1b]/92 via-[#0d1d1b]/30 to-transparent pointer-events-none" />

            <span className="absolute top-5 left-6 z-10 font-editorial-mono text-[11px] text-[#b69151] font-semibold">
              {officeSpace.index}
            </span>

            <div className="relative z-10">
              <h3 className="font-display text-2xl text-[#f2eee4] font-normal leading-tight group-hover:text-[#d6bf8d] transition-colors">
                {officeSpace.title}
              </h3>
              <p className="font-editorial-sans text-xs text-[#a8b2ab] mt-1">
                {officeSpace.subtitle}
              </p>
            </div>

            <b className="absolute bottom-6 right-6 z-10 flex items-center gap-1 text-[11px] font-semibold text-[#f2eee4] group-hover:text-[#d6bf8d] transition-colors">
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </b>

            <div className="absolute top-5 right-6 z-10 flex items-center gap-1">
              {officeSpace.items.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    dotIdx === imageIndices.office ? 'w-3.5 bg-[#b69151]' : 'w-1 bg-[#f2eee4]/30'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

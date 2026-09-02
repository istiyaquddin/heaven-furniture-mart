export interface Product {
  id: string;
  tag: string;
  title: string;
  category: 'living' | 'bedroom' | 'dining' | 'office' | 'accents';
  image: string;
  desc: string;
  wood: string;
  fabric: string;
  size: string;
  waText: string;
}

export const products: Product[] = [
  {
    id: "sofa-royal-blue-gold",
    tag: "Living Room · Royal Gilded",
    title: "The Versailles Royal Blue & Gold Settee",
    category: "living",
    image: "/assets/images/sofa-royal-blue-gold.jpg",
    desc: "A true palace statement piece. Hand-carved from seasoned Burma teak by master woodcarvers with elaborate acanthus leaf scrollwork, cabriole legs, and 24k gold leaf gilding. Upholstered in high-durability royal blue jacquard damask with matching lumbar accent cushions.",
    wood: "Seasoned Burma Teak (Gold Leaf Gilded)",
    fabric: "Royal Blue Damask Silk + Jacquard",
    size: "6.5ft (W) x 3.2ft (D) x 3.8ft (H)",
    waText: "Hello Heaven Furniture Mart, I would like to inquire about pricing and customization for The Versailles Royal Blue & Gold Settee."
  },
  {
    id: "bed-heritage-teak",
    tag: "Bedroom Sanctuary · Master Four-Poster",
    title: "The Sovereign Teak Four-Poster Bed",
    category: "bedroom",
    image: "/assets/images/bed-heritage-teak.jpg",
    desc: "An heirloom architectural centerpiece. Handcrafted from seasoned Burma teak posts with 24k gold leaf carved floral crest on the footboard, fluted corner columns, and an upholstered deep cyan velvet tufted headboard.",
    wood: "Solid Burma Teak (Antique Dark Mahogany Finish)",
    fabric: "Cyan Jewel-Tone Velvet (Tufted)",
    size: "King: 6.5ft x 7ft (Mattress Base) x 7.5ft Post Height",
    waText: "Hello Heaven Furniture Mart, I would like to order The Sovereign Teak Four-Poster Master Bed."
  },
  {
    id: "dining-champagne-carved",
    tag: "Dining & Banquets · Imperial 8-Seater",
    title: "The Imperial Champagne Gold Dining Suite",
    category: "dining",
    image: "/assets/images/dining-champagne-carved.jpg",
    desc: "Fit for regal entertaining. The grand dining table features elaborate double-pedestal carved legs finished in champagne gold leaf, paired with eight high-back dining chairs with needlepoint floral embroidery and cushioned velvet seats.",
    wood: "Seasoned Burma Teak (Champagne Gold Leaf)",
    fabric: "Silk Embroidered Oval Back + Velvet Cushion",
    size: "Table: 8.5ft (L) x 4ft (W) x 2.6ft (H)",
    waText: "Hello Heaven Furniture Mart, please provide quotation for The Imperial Champagne Gold 8-Seater Dining Suite."
  },
  {
    id: "office-director-desk",
    tag: "Executive & Office · Director Suite",
    title: "The Executive Director Workspace Suite",
    category: "office",
    image: "/assets/images/office-director-desk.jpg",
    desc: "Engineered for modern corporate leadership. Combines warm natural oak with matte charcoal steel framework, integrated cable ducts, lockable storage pedestals, and executive high-back mesh ergonomics.",
    wood: "American White Oak / Seasoned Gamari",
    fabric: "Ergonomic Breathable Mesh / Leather Seat",
    size: "Desk: 6.5ft x 3ft | Credenza: 7ft x 1.5ft",
    waText: "Hello Heaven Furniture Mart, please quote The Executive Director Workspace Suite for our office."
  },
  {
    id: "sofa-tufted-camelback",
    tag: "Living Room · Classic Chesterfield",
    title: "The Grand Mayfair Tufted Camelback Sofa",
    category: "living",
    image: "/assets/images/sofa-tufted-camelback.jpg",
    desc: "Combining timeless European Chesterfield tailoring with ergonomic curved camelback framing. Built with individual pocket-coil seat suspension, 45D high-density foam, and hand-pleated diamond button tufting. Includes matching curved glass-top coffee table.",
    wood: "Kiln-Dried Chittagong Gamari / Teak",
    fabric: "Champagne High-Grade Textured Velvet",
    size: "8.2ft (W) x 3.5ft (D) x 3.2ft (H)",
    waText: "Hello Heaven Furniture Mart, I am interested in The Grand Mayfair Tufted Camelback Sofa set."
  },
  {
    id: "bed-emerald-velvet",
    tag: "Bedroom Sanctuary · Modern Fluted Majesty",
    title: "The Majesty Emerald Fluted Velvet Bed",
    category: "bedroom",
    image: "/assets/images/bed-emerald-velvet.jpg",
    desc: "Modern luxury meets supreme comfort. Features precision vertical channel-fluting upholstered in rich emerald green velvet, with an integrated padded platform frame that eliminates creaks and offers luxurious tactile softness.",
    wood: "Reinforced Solid Hardwood Framework",
    fabric: "High-Density Emerald Green Micro-Velvet",
    size: "King: 6.8ft x 7.2ft Outer Footprint | 5ft Headboard",
    waText: "Hi Heaven Furniture Mart, I am interested in custom sizing The Majesty Emerald Fluted Velvet Bed."
  },
  {
    id: "dining-cream-marble",
    tag: "Dining & Banquets · Royal Marble Suite",
    title: "The Royal High-Gloss Marble Dining Suite",
    category: "dining",
    image: "/assets/images/dining-cream-marble.jpg",
    desc: "Seamlessly merges classical European silhouettes with natural Italian marble. The tabletop is hand-polished with stain-resistant sealant, supported by an architecturally carved apron and eight cream velvet upholstered chairs.",
    wood: "Seasoned Teak in High-Gloss Antique Cream",
    fabric: "Embossed Floral Cream Damask Velvet",
    size: "Table: 8ft (L) x 3.8ft (W) x 2.6ft (H)",
    waText: "Hi Heaven Furniture Mart, I would like to inquire about The Royal High-Gloss Marble Dining Suite."
  },
  {
    id: "cabinet-french-crockery",
    tag: "Crockery Curios & Accents · French Display",
    title: "The French Rococo 3-Door Arched Curio Cabinet",
    category: "accents",
    image: "/assets/images/cabinet-french-crockery.jpg",
    desc: "An exquisite showcase for fine china and crystal heirlooms. Features triple arched doors with beveled tempered glass, internal LED warm spotlighting, adjustable glass shelves, and hand-carved baroque cresting in antique ivory finish.",
    wood: "Seasoned Burma Teak (Antique Ivory Finish)",
    fabric: "Interior Mirror Backing & Glass Shelving",
    size: "5ft (W) x 1.6ft (D) x 6.5ft (H)",
    waText: "Hello Heaven Furniture Mart, please provide details and price for The French Rococo 3-Door Arched Curio Cabinet."
  },
  {
    id: "swing-ivory-rattan",
    tag: "Outdoor & Veranda · Rattan Swing Lounger",
    title: "The Solarium Teardrop Ivory Rattan Swing Chair",
    category: "accents",
    image: "/assets/images/swing-ivory-rattan.jpg",
    desc: "The ultimate sanctuary relaxation seat for master balconies, verandas, or sunlit reading nooks. Crafted from high-tensile all-weather synthetic rattan over an anti-rust steel frame, complete with washable plush cream cushions.",
    wood: "Powder-Coated Matte Charcoal Steel Stand",
    fabric: "Water-Repellent Tufted Cloud Cushion (Cream)",
    size: "Pod: 3.5ft x 2.8ft | Base: 3.5ft Circular Stand (6.5ft H)",
    waText: "Hello Heaven Furniture Mart, I want to order The Solarium Teardrop Ivory Rattan Swing Chair."
  },
  {
    id: "sofa-sapphire-sectional",
    tag: "Living Room · Royal Sectional",
    title: "The Royal Sapphire Sectional & Gilded Table",
    category: "living",
    image: "/assets/images/sofa-sapphire-sectional.jpg",
    desc: "Custom-built for grand living rooms. Features deep tufted back cushions, high-density feather-topped seat cushions, hand-carved baroque scrolled borders, and an ornate matching glass-top coffee table.",
    wood: "Seasoned Teak Frame (Champagne Gold)",
    fabric: "Imperial Sapphire Performance Velvet",
    size: "10ft x 8ft Modular Sectional",
    waText: "Hi Heaven Furniture Mart, please provide details and quotation for The Royal Sapphire Sectional Suite."
  },
  {
    id: "boucle-bed",
    tag: "Bedroom Sanctuary · Architectural Arch",
    title: "The Aurelia Arch Bed & Floating Nightstands",
    category: "bedroom",
    image: "/assets/images/bedroom.jpg",
    desc: "Curved architectural upholstered headboard cushioned in warm ivory bouclé textile. Features precision mitred solid American walnut frame with cantilevered floating drawer bedside tables and integrated brass lighting conduits.",
    wood: "Solid American Walnut / Teak",
    fabric: "Textured Warm Ivory Bouclé",
    size: "King: 6.5ft x 7ft Base + Floating Nightstands",
    waText: "Hi Heaven Furniture Mart, I would like a quote for the Aurelia Arch Bouclé Bed."
  },
  {
    id: "dining-coral-marble",
    tag: "Dining & Banquets · Contemporary Banquet",
    title: "The Florentine Coral Velvet & Marble Dining",
    category: "dining",
    image: "/assets/images/dining-coral-marble.jpg",
    desc: "A rich warm centerpiece for contemporary homes. Features high-back chairs with diamond-quilted coral velvet upholstery and dark walnut cabriole legs, surrounding a thick white natural marble dining table.",
    wood: "Solid Dark Walnut Hardwood",
    fabric: "Quilted Coral / Rust Velvet",
    size: "Table: 7.5ft (L) x 3.8ft (W) x 2.6ft (H)",
    waText: "Hello Heaven Furniture Mart, I am interested in The Florentine Coral Velvet & Marble Dining set."
  },
  {
    id: "office-conference-boardroom",
    tag: "Executive & Office · Corporate Boardroom",
    title: "The Presidential Boardroom Conference Suite",
    category: "office",
    image: "/assets/images/office-conference-boardroom.jpg",
    desc: "A powerful centerpiece for corporate boardrooms and executive meetings. Built with heavy solid timber top, dual matte-black structural steel trusses, pop-up AV conduits, and twelve ergonomic executive chairs.",
    wood: "Solid Seasoned Hardwood (Natural Matte Finish)",
    fabric: "Commercial-Grade Seafoam Performance Fabric",
    size: "Table: 14ft (L) x 4.5ft (W) x 2.5ft (H)",
    waText: "Hi Heaven Furniture Mart, we need a quote for The Presidential Boardroom Conference Table."
  },
  {
    id: "sofa-silver-floral",
    tag: "Living Room · Embroidered Haute Couture",
    title: "The Chateau Silver Floral Embroidered Lounge",
    category: "living",
    image: "/assets/images/sofa-silver-floral.jpg",
    desc: "Designed for discerning interior styling. The backrest features artisan-embroidered botanical floral bouquets framed by antique gold leaf woodwork. Deep sprung seat cushions offer extraordinary lounge comfort.",
    wood: "Seasoned Gamari & Teak Hardwood",
    fabric: "Silvery Mist Velvet with Silk Thread Embroidery",
    size: "7.8ft (W) x 3.3ft (D) x 3.6ft (H)",
    waText: "Hi Heaven Furniture Mart, I am fascinated by The Chateau Silver Floral Embroidered Lounge sofa."
  },
  {
    id: "dining-mahogany-leather",
    tag: "Dining & Banquets · Executive Banquet",
    title: "The Grand Regency Mahogany & Leather Dining",
    category: "dining",
    image: "/assets/images/dining-mahogany-leather.jpg",
    desc: "Epitomizes traditional prestige. Handcrafted from heavy seasoned mahogany with carved scrolled pedestal bases, polished white marble slab, and eight executive dining chairs clad in brass-studded burgundy leather.",
    wood: "Solid Red Mahogany (High-Gloss Finish)",
    fabric: "Full-Grain Burgundy Leather with Antique Brass Studs",
    size: "Table: 9ft (L) x 4.2ft (W) x 2.6ft (H)",
    waText: "Hi Heaven Furniture Mart, please provide details for The Grand Regency Mahogany & Leather Dining Suite."
  },
  {
    id: "office-workstation-pod",
    tag: "Executive & Office · Collaborative Workstation",
    title: "The Collaborative Open-Plan Workstation Pod",
    category: "office",
    image: "/assets/images/office-workstation-pod.jpg",
    desc: "Optimized for high-productivity corporate offices and agency environments. Features heavy-duty scratch-resistant white tops, frosted privacy dividers, seamless power raceways, and full modular scalability.",
    wood: "High-Pressure Solid Core Composite + Steel Frame",
    fabric: "Ergonomic White Mesh Chairs",
    size: "12ft (L) x 4ft (W) 6-Person Cluster",
    waText: "Hello Heaven Furniture Mart, please provide pricing for the 6-Person Collaborative Workstation Pods."
  },
  {
    id: "living-suite-teak-cream",
    tag: "Living Room · Heritage Woodwork",
    title: "The Heritage Teak & Cream 3+1+1 Suite",
    category: "living",
    image: "/assets/images/living-suite-teak-cream.jpg",
    desc: "Rooted in traditional Bengali craftsmanship with contemporary comfort. The solid teak frame features smooth hand-routed profiles, deep rich wood stain, and supportive high-density foam cushions in warm cream textured fabric.",
    wood: "Grade-A Chittagong Teak (Hand-Rubbed Polish)",
    fabric: "Breathable Cotton-Linen Blend (Cream)",
    size: "3-Seater: 6.8ft | Chairs: 3ft | Table: 4x2.5ft",
    waText: "Hello Heaven Furniture Mart, please send me details about The Heritage Teak & Cream 3+1+1 Living Suite."
  },
  {
    id: "table-mahogany-tea",
    tag: "Dining & Accents · Afternoon Tea Suite",
    title: "The Victorian Fluted Mahogany Tea Set",
    category: "dining",
    image: "/assets/images/table-mahogany-tea.jpg",
    desc: "Designed for intimate morning tea and veranda conversations. Features a hand-turned mahogany pedestal table with bevelled glass top and two matching armchairs with striped golden upholstery and padded armrests.",
    wood: "Hand-Turned Solid Mahogany",
    fabric: "Gold & Ivory Striped Brocade",
    size: "Table: 3ft Diameter | Chairs: Standard Armchair",
    waText: "Hello Heaven Furniture Mart, I would like to purchase The Victorian Fluted Mahogany Tea Set."
  },
  {
    id: "office-lounge-table",
    tag: "Executive & Office · Meeting Lounge",
    title: "The Executive Reception & Lounge Table Suite",
    category: "office",
    image: "/assets/images/office-lounge-table.jpg",
    desc: "Designed for casual executive meetings and client receptions. Features a durable beveled circular tabletop supported by an architectural pedestal base and four contoured modern bucket chairs with padded seats.",
    wood: "Solid White Oak Legs + Beveled Matte Top",
    fabric: "Molded Composite Shell with Upholstered Seat Cushion",
    size: "Table: 3.5ft Diameter x 2.5ft Height",
    waText: "Hi Heaven Furniture Mart, I would like to order The Executive Reception & Lounge Table Suite."
  },
  {
    id: "credenza-black-brass",
    tag: "Crockery Curios & Accents · Modern Bar Credenza",
    title: "The Oslo Matte Black & Brass Bar Credenza",
    category: "accents",
    image: "/assets/images/credenza-black-brass.jpg",
    desc: "Contemporary architectural storage for dining rooms, living spaces, or executive offices. Features two soft-close utensil drawers, double cabinet storage, display cubbies, and custom brushed champagne brass linear hardware.",
    wood: "High-Density Seasoned Hardwood (Matte Black)",
    fabric: "Brushed Champagne Brass Pulls",
    size: "4.5ft (W) x 1.4ft (D) x 3.2ft (H)",
    waText: "Hi Heaven Furniture Mart, I would like to inquire about The Oslo Matte Black & Brass Bar Credenza."
  },
  {
    id: "swing-black-geo",
    tag: "Outdoor & Veranda · Geometric Swing Pod",
    title: "The Geo-Lattice Black & Gold Balcony Swing",
    category: "accents",
    image: "/assets/images/swing-black-geo.jpg",
    desc: "Bold geometric styling meets suspended comfort. Features a spherical pod with black and golden-yellow contrast lattice weave, heavy-duty suspension spring, and an ergonomic curved support stand rated for 160kg.",
    wood: "Heavy-Gauge Anti-Rust Steel Cantilever",
    fabric: "High-Density Outdoor Upholstered Cushion",
    size: "Pod: 3.6ft x 3ft | Base: 3.5ft Circular Stand (6.5ft H)",
    waText: "Hi Heaven Furniture Mart, I would like to buy The Geo-Lattice Black & Gold Balcony Swing."
  },
  {
    id: "emerald-curve",
    tag: "Living Room · Architectural Curve",
    title: "The Elysian Curved Velvet Modular Sofa",
    category: "living",
    image: "/assets/images/hero-sofa.png",
    desc: "A masterwork in organic curves and jewel-tone velvet. Built with an internal seasoned Burma teak hardwood skeleton, multi-density high-resilience memory cushioning, and hand-fitted brushed brass pedestal feet.",
    wood: "Burma Teak / Chittagong Gamari",
    fabric: "Royal Performance Velvet / Bouclé",
    size: "Custom Spatial Footprint (10ft to 16ft Arc)",
    waText: "Hi Heaven Furniture Mart, I would like to inquire about commissioning The Elysian Curved Velvet Sofa."
  }
];

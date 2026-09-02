export interface StudioVignette {
  key: string;
  label: string;
  img: string;
  badge: string;
  title: string;
  subtitle: string;
  wa: string;
}

export const studioVignettes: Record<string, StudioVignette> = {
  living: {
    key: 'living',
    label: 'Living Salon',
    img: '/assets/images/showroom-flagship.jpg',
    badge: 'Live Studio Vignette · Flagship Salon',
    title: 'The Architectural Flagship Salon Gallery',
    subtitle: 'Agrabad Access Road, Chattogram · Full-Scale Display',
    wa: 'Hi Heaven Furniture Mart, I would like to visit your Agrabad studio to view The Architectural Flagship Salon.'
  },
  royal: {
    key: 'royal',
    label: 'Royal Gold',
    img: '/assets/images/real-showroom-gold.jpg',
    badge: 'Live Showroom Piece · Royal Heritage',
    title: 'Grand Royal Gold Leaf Carved Sofa',
    subtitle: 'Handcrafted Burma Teak · 24k Gold Leaf Finish',
    wa: 'Hi Heaven Furniture Mart, I would like to view the Grand Royal Gold Leaf Carved Sofa in your Agrabad showroom.'
  },
  bedroom: {
    key: 'bedroom',
    label: 'Master Bedroom',
    img: '/assets/images/studio-vignette-bedroom.jpg',
    badge: 'Live Studio Vignette · Master Sanctuary',
    title: 'The Sovereign Master Bedroom Sanctuary',
    subtitle: 'Architectural Timber Headboard · Floating Nightstands',
    wa: 'Hi Heaven Furniture Mart, I would like to see the Master Bedroom Sanctuary setups at your Agrabad studio.'
  },
  office: {
    key: 'office',
    label: 'Executive Office',
    img: '/assets/images/studio-vignette-office.jpg',
    badge: 'Live Studio Vignette · Executive Suite',
    title: 'The Director Executive Workspace Suite',
    subtitle: 'Natural Oak · Matte Charcoal Steel · Ergonomic Mesh',
    wa: 'Hi Heaven Furniture Mart, I would like to discuss the Director Executive Workspace Suite at your Agrabad studio.'
  }
};

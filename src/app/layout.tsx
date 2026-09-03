import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Heaven Furniture Mart | Bespoke Luxury Furniture & Interior Styling | Chattogram',
  description: "Chattogram's leading bespoke furniture atelier. We design, craft, and customize solid wood living, bedroom, dining, and executive suites around your floor plan. Agrabad Access Road.",
  keywords: 'Heaven Furniture Mart, bespoke furniture Chattogram, luxury interior design Chittagong, custom sofas, teak wood beds, royal dining table, office executive furniture Agrabad',
  authors: [{ name: 'Abul Kalam Bhuiyan, Managing Director' }],
  metadataBase: new URL('https://heaven-furniture-e-mart.vercel.app'),
  openGraph: {
    type: 'website',
    url: 'https://heaven-furniture-mart.vercel.app',
    title: 'Heaven Furniture Mart | Designed. Crafted. Customized.',
    description: 'Enter a luxury furniture and interior studio. Bespoke furniture crafted around you in Agrabad, Chattogram.',
    images: [{ url: '/assets/images/hero-sofa.png', width: 1200, height: 630, alt: 'Heaven Furniture Mart Hero' }],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/images/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "name": "Heaven Furniture Mart",
  "image": "https://heaven-furniture-mart.vercel.app/assets/images/hero-sofa.png",
  "description": "Chattogram's premier bespoke luxury furniture and interior styling studio. Designed, crafted, and customized solid wood furniture.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Agrabad Access Road (Opposite RAK Ceramics)",
    "addressLocality": "Chattogram",
    "addressRegion": "Chittagong Division",
    "postalCode": "4100",
    "addressCountry": "BD"
  },
  "hasMap": "https://maps.app.goo.gl/pwe2VJWeLeTdTw6v9",
  "telephone": "+8801960481983",
  "email": "heavenfurnituremart@gmail.com",
  "priceRange": "$$$$",
  "founder": {
    "@type": "Person",
    "name": "Abul Kalam Bhuiyan"
  },
  "foundingDate": "2020",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "10:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://www.facebook.com/HeavenFurnitureMart",
    "https://www.instagram.com/heaven_furniture_ltd",
    "https://www.youtube.com/@HeavenFurnitureMart"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ivory text-brown-deep font-sans antialiased overflow-x-hidden selection:bg-teal-deep selection:text-ivory">
        {children}
      </body>
    </html>
  );
}


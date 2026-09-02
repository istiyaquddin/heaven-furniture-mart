---
name: Atelier Curate
colors:
  surface: '#fff8f5'
  surface-dim: '#f2d4c2'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ea'
  surface-container: '#ffeade'
  surface-container-high: '#ffe3d2'
  surface-container-highest: '#fbddca'
  on-surface: '#28180d'
  on-surface-variant: '#424848'
  inverse-surface: '#3f2c20'
  inverse-on-surface: '#ffede4'
  outline: '#727878'
  outline-variant: '#c2c8c7'
  surface-tint: '#4d6262'
  primary: '#051a1a'
  on-primary: '#ffffff'
  primary-container: '#1a2f2f'
  on-primary-container: '#819797'
  inverse-primary: '#b4cbca'
  secondary: '#5f5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2dd'
  on-secondary-container: '#656461'
  tertiary: '#211500'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a2800'
  on-tertiary-container: '#b18d48'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e7e6'
  primary-fixed-dim: '#b4cbca'
  on-primary-fixed: '#091f1f'
  on-primary-fixed-variant: '#354b4a'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fff8f5'
  on-background: '#28180d'
  surface-variant: '#fbddca'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 20px
  section-gap: 160px
---

## Brand & Style
The design system is anchored in an **Editorial Minimalist** aesthetic, designed to evoke the feeling of a high-end physical gallery or a bespoke interior design studio. The target audience consists of affluent clients and architects who value intentionality, craft, and quiet luxury over mass-market trends.

The visual narrative prioritizes "the breath between objects"—utilizing expansive whitespace (Warm Ivory) to frame high-resolution photography. The emotional response should be one of calm authority, timelessness, and meticulous attention to detail. Transitions should be fluid and paced, avoiding the frantic energy of typical e-commerce interfaces.

## Colors
The palette is a sophisticated interplay of depth and warmth.
- **Deep Charcoal-Teal (#1A2F2F):** Used for immersive sections, footers, or primary call-to-action backgrounds to provide a grounding architectural weight.
- **Warm Ivory (#FAF7F2):** The primary canvas color. It replaces pure white to avoid digital harshness, providing a soft, paper-like quality to the interface.
- **Muted Gold/Brass (#C5A059):** Used sparingly for interactive accents, subtle dividers, and high-level signifiers of luxury.
- **Deep Brown (#3D2B1F):** The primary typeface color. It offers high contrast against the Ivory while maintaining a softer, more organic feel than pure black.

## Typography
The typographic hierarchy relies on the contrast between the expressive, high-contrast strokes of **Playfair Display** and the geometric, architectural clarity of **Montserrat**.

Headlines should utilize generous leading to emphasize the editorial feel. For large display moments, use slightly tighter letter spacing to create a sense of refined tension. All labels and secondary navigation elements should use Montserrat with increased letter spacing and uppercase styling to denote "Captions" or "Technical Details," mimicking the labels found in an art gallery.

## Layout & Spacing
This design system employs a **Fixed Content Grid** within a fluid outer container to ensure readability on ultra-wide displays. 

The rhythm is intentionally slow. While a standard 12-column grid is used for alignment, elements are often offset or centered with significant horizontal margins (80px+) to create a "curated" rather than "packed" appearance. Vertical spacing between major sections is aggressive (160px), forcing the user to focus on one story or furniture piece at a time.

## Elevation & Depth
Depth is conveyed through **Ambient Tonal Layers** rather than heavy shadows. Surfaces should feel like stacked premium paper or layered architectural materials.

- **Soft Shadows:** When used (primarily for floating navigation or cards), shadows must be extremely diffused with a 10% opacity of the Deep Brown (#3D2B1F), creating a soft "lift" rather than a hard drop.
- **Layering:** Use the Warm Ivory as the base, with Deep Charcoal-Teal containers used to create "recessed" sections that pull the eye inward.
- **Glassmorphism:** Reserved exclusively for high-level overlays (e.g., a mobile menu or a product detail modal), using a subtle backdrop blur (12px) to maintain the sense of light passing through the space.

## Shapes
The shape language is **Strictly Architectural (Sharp)**. 

To reflect the precision of high-end furniture and interior structural lines, all buttons, input fields, and image containers utilize 0px border-radii. This sharp-edged approach reinforces the "Studio" aesthetic. The only exception to this rule is the use of circular decorative elements or specific product photography; the UI framework itself remains perfectly rectilinear.

## Components
- **Buttons:** Primary buttons are solid Deep Charcoal-Teal with Warm Ivory text. Secondary buttons are outlined in Deep Brown with no fill. All buttons use 0px border-radius and uppercase Montserrat (Label-LG) for text. Hover states should involve a subtle shift to the Muted Gold (#C5A059) for the border or text.
- **Input Fields:** Minimalist design featuring only a bottom border in Deep Brown (1px). Labels float above the line in Montserrat (Label-SM). 
- **Cards:** Used for product listings or project portfolios. Cards should have no visible borders or shadows by default. The image occupies 100% of the card width, with typography centered or left-aligned underneath with generous padding.
- **Lists:** Used for material specifications or dimensions. Items are separated by thin, low-opacity Brass (#C5A059) lines.
- **Curated Accents:** Vertical text labels (rotated 90 degrees) may be used on the edges of the screen to denote collection names or page numbers, reinforcing the editorial magazine layout.
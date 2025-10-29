# Bali Tours Transportation Website - Project Brief for Claude Code

## Project Overview

You are building a modern, SEO-optimized website for a Bali-based transportation company that offers tour packages with private drivers. The website must be optimized for both traditional search engines (Google, Bing) and generative AI engines (ChatGPT, Claude, Perplexity).

## Tech Stack Requirements

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **SEO**: next-seo, structured data (JSON-LD)
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel-ready configuration

## Core Business Model

### Tour Products

**Half-Day Tours** (4-5 hours)
- Duration: 4-5 hours
- Typical start: 8 AM or 1 PM
- Covers 2-3 destinations
- Price range: IDR 500,000 - 800,000

**Full-Day Tours** (8-10 hours)
- Duration: 8-10 hours
- Start: 8 AM
- Covers 4-6 destinations
- Lunch included
- Price range: IDR 800,000 - 1,500,000

**Custom Tours**
- Flexible itinerary
- Custom duration
- Personalized destinations
- Price: quoted based on requirements

### Vehicle Fleet

| Type | Capacity | Base Vehicle | Price Multiplier |
|------|----------|--------------|------------------|
| Small Car | 1-4 pax | Toyota Avanza | 1.0x |
| Medium Car | 5-6 pax | Toyota Innova | 1.3x |
| Large Van | 7-12 pax | Toyota Hiace | 1.8x |
| Luxury | 1-4 pax | Premium | 2.5x |

All vehicles include: AC, professional English-speaking driver, fuel, parking fees, toll fees, insurance.

### Sample Tours to Create

1. **Ubud Cultural Tour** (Full Day)
   - Destinations: Tegalalang Rice Terrace, Ubud Monkey Forest, Ubud Palace, Tirta Empul Temple, Coffee Plantation
   - Duration: 10 hours
   - Highlights: Culture, nature, temples

2. **Uluwatu Sunset Tour** (Half Day)
   - Destinations: Uluwatu Temple, Kecak Dance, Jimbaran Beach
   - Duration: 5 hours
   - Highlights: Sunset, culture, seafood dinner

3. **Instagram Bali Tour** (Full Day)
   - Destinations: Handara Gate, Ulun Danu Temple, Wanagiri Hidden Hills, Jatiluwih Rice Terrace
   - Duration: 10 hours
   - Highlights: Photo spots, scenic views

4. **Waterfall Adventure** (Full Day)
   - Destinations: Tegenungan, Tibumana, Tukad Cepung Waterfalls
   - Duration: 8 hours
   - Highlights: Nature, swimming, adventure

5. **East Bali Discovery** (Full Day)
   - Destinations: Lempuyang Temple (Gates of Heaven), Tirta Gangga, Taman Ujung, Virgin Beach
   - Duration: 12 hours
   - Highlights: Iconic views, royal palaces, beach

## Required Pages & Routes

```
src/app/
├── layout.tsx                 # Root layout with header/footer
├── page.tsx                   # Homepage
├── tours/
│   ├── page.tsx              # Tours listing with filters
│   └── [slug]/
│       └── page.tsx          # Individual tour detail
├── destinations/
│   ├── page.tsx              # Destinations listing
│   └── [slug]/
│       └── page.tsx          # Destination detail
├── fleet/
│   └── page.tsx              # Vehicle fleet showcase
├── about/
│   └── page.tsx              # About company
├── contact/
│   └── page.tsx              # Contact form + map
├── booking/
│   └── page.tsx              # Booking flow
└── api/
    ├── contact/
    │   └── route.ts          # Contact form handler
    └── booking/
        └── route.ts          # Booking form handler
```

## Component Structure Required

```
src/components/
├── layout/
│   ├── Header.tsx            # Navigation, logo, WhatsApp CTA
│   ├── Footer.tsx            # Links, contact info, social
│   └── MobileMenu.tsx        # Responsive mobile navigation
├── home/
│   ├── Hero.tsx              # Hero with search/CTA
│   ├── FeaturedTours.tsx     # 3-4 popular tours
│   ├── HowItWorks.tsx        # 3-step process
│   ├── WhyChooseUs.tsx       # USPs with icons
│   ├── Testimonials.tsx      # Customer reviews
│   └── CTASection.tsx        # Bottom CTA to book
├── tours/
│   ├── TourCard.tsx          # Reusable tour card
│   ├── TourGrid.tsx          # Grid layout for tours
│   ├── TourFilters.tsx       # Filter by duration/price/type
│   ├── TourGallery.tsx       # Image gallery for tour detail
│   ├── TourItinerary.tsx     # Timeline of stops
│   ├── PricingTable.tsx      # Pricing by vehicle type
│   └── BookingWidget.tsx     # Sticky booking widget
├── booking/
│   ├── BookingForm.tsx       # Multi-step form
│   ├── TourSelector.tsx      # Choose tour
│   ├── VehicleSelector.tsx   # Choose vehicle with pricing
│   ├── DateTimePicker.tsx    # Date and time selection
│   └── CustomerInfoForm.tsx  # Contact details
├── shared/
│   ├── Button.tsx            # Primary/secondary/ghost variants
│   ├── Card.tsx              # Reusable card component
│   ├── Input.tsx             # Form input with validation
│   ├── Badge.tsx             # For tags/labels
│   └── LoadingSpinner.tsx    # Loading state
└── seo/
    ├── StructuredData.tsx    # JSON-LD schema
    └── BreadcrumbSchema.tsx  # Breadcrumb markup
```

## Data Structure

### Tour Type Definition

```typescript
interface Tour {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  duration: 'half-day' | 'full-day' | 'custom'
  durationHours: number
  category: string[] // e.g., ['culture', 'nature', 'adventure']
  
  itinerary: {
    time: string
    location: string
    activity: string
    duration: string
    description?: string
  }[]
  
  highlights: string[]
  included: string[]
  excluded: string[]
  
  pricing: {
    smallCar: number      // Base price
    mediumCar: number
    largeVan: number
    luxury?: number
  }
  
  images: {
    main: string
    gallery: string[]
    alt: string[]
  }
  
  destinations: string[] // Related destination slugs
  
  // SEO fields
  metaTitle: string
  metaDescription: string
  keywords: string[]
  
  // Social proof
  rating: number
  reviewCount: number
  popularRank?: number
  
  // Practical info
  pickupIncluded: boolean
  minParticipants: number
  maxParticipants: number
  difficulty: 'easy' | 'moderate' | 'challenging'
  suitableFor: string[] // ['families', 'couples', 'solo', 'groups']
}
```

### Vehicle Type Definition

```typescript
interface Vehicle {
  id: string
  type: 'small' | 'medium' | 'large' | 'luxury'
  name: string
  model: string
  capacity: {
    passengers: number
    luggage: number
  }
  features: string[]
  image: string
  available: boolean
  priceMultiplier: number
}
```

### Booking Type Definition

```typescript
interface Booking {
  id: string
  tourId: string
  vehicleType: string
  date: string
  time: string
  
  customer: {
    name: string
    email: string
    phone: string
    nationality: string
    hotel?: string
  }
  
  participants: number
  pickupLocation: string
  specialRequests?: string
  
  pricing: {
    basePrice: number
    vehicleMultiplier: number
    totalPrice: number
    currency: 'IDR'
  }
  
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
}
```

## SEO Requirements (CRITICAL)

### 1. Meta Tags (Every Page)

Each page must have:
```typescript
export const metadata: Metadata = {
  title: 'Specific Page Title | Bali Tours',
  description: 'Compelling 150-160 char description with keywords',
  keywords: ['relevant', 'keywords', 'here'],
  
  openGraph: {
    title: 'Page Title',
    description: 'Description',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
    url: 'https://yourdomain.com/page-url'
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Description',
    images: ['/twitter-image.jpg'],
  },
  
  alternates: {
    canonical: 'https://yourdomain.com/page-url'
  }
}
```

### 2. Structured Data (JSON-LD)

**Organization Schema** (in layout.tsx):
```json
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Bali Tours Transportation",
  "description": "Professional private tour services in Bali",
  "url": "https://yourdomain.com",
  "telephone": "+62-XXX-XXXX-XXXX",
  "email": "info@yourdomain.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Denpasar",
    "addressRegion": "Bali",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://facebook.com/yourpage",
    "https://instagram.com/yourpage"
  ]
}
```

**Tour Product Schema** (on tour detail pages):
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Tour Name",
  "description": "Tour description",
  "image": ["image1.jpg", "image2.jpg"],
  
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "500000",
    "highPrice": "1500000",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock"
  },
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },
  
  "provider": {
    "@type": "TravelAgency",
    "name": "Bali Tours Transportation"
  }
}
```

**Breadcrumb Schema**:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://yourdomain.com"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Tours",
    "item": "https://yourdomain.com/tours"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Ubud Cultural Tour",
    "item": "https://yourdomain.com/tours/ubud-cultural-tour"
  }]
}
```

### 3. Sitemap & Robots.txt

Create `sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/tours',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Add all tour pages dynamically
    // Add all destination pages dynamically
  ]
}
```

Create `robots.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

### 4. Image Optimization

Always use Next.js Image component:
```typescript
import Image from 'next/image'

<Image
  src="/tours/ubud-tour.jpg"
  alt="Tegalalang Rice Terrace in Ubud Bali with tourists taking photos"
  width={1200}
  height={800}
  priority={false} // true only for above-fold images
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/..." // optional
/>
```

## Design Requirements - Elegant & Minimalistic

### Tailwind Configuration

Create `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tours: {
          // Primary - Sophisticated Navy/Slate
          primary: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
          // Secondary - Warm Terracotta/Earth
          secondary: {
            50: '#fdf8f6',
            100: '#f2e8e5',
            200: '#eaddd7',
            300: '#e0cec7',
            400: '#d2bab0',
            500: '#bfa094',
            600: '#a18072',
            700: '#977669',
            800: '#846358',
            900: '#43302b',
          },
          // Accent - Refined Gold
          accent: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
          },
          // Neutral - Extended Grays
          neutral: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
            950: '#0a0a0a',
          },
          // Success - Subtle Green
          success: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          // Error - Muted Red
          error: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'elegant': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'elegant-md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'elegant-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        'elegant-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

### Typography System

**Fonts to Import** (in `app/layout.tsx`):

```typescript
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Apply to body: className={`${inter.variable} ${playfair.variable} font-sans`}
```

**Typography Usage**:
- **Display Headings**: `font-display` (Playfair Display) - for hero titles, section headers
- **Body Text**: `font-sans` (Inter) - for paragraphs, UI elements
- **Headings Hierarchy**:
  - H1: `text-display-lg md:text-display-xl font-display font-semibold`
  - H2: `text-display-md md:text-display-lg font-display font-semibold`
  - H3: `text-2xl md:text-3xl font-display font-medium`
  - H4: `text-xl md:text-2xl font-sans font-semibold`
  - Body: `text-base md:text-lg font-sans leading-relaxed`
  - Small: `text-sm md:text-base font-sans`

### Minimalist Component Patterns

**Buttons**:
```typescript
// Primary Button
className="
  bg-tours-primary-900 
  text-white 
  px-8 py-3.5
  rounded-lg
  font-medium
  transition-all duration-300
  hover:bg-tours-primary-800
  hover:shadow-elegant-md
  active:scale-[0.98]
"

// Secondary Button
className="
  bg-white
  text-tours-primary-900
  border border-tours-neutral-300
  px-8 py-3.5
  rounded-lg
  font-medium
  transition-all duration-300
  hover:border-tours-primary-900
  hover:shadow-elegant
  active:scale-[0.98]
"

// Ghost Button
className="
  text-tours-primary-900
  px-6 py-2.5
  rounded-lg
  font-medium
  transition-all duration-300
  hover:bg-tours-neutral-100
  active:scale-[0.98]
"

// Accent Button (CTA)
className="
  bg-tours-accent-600
  text-tours-primary-950
  px-8 py-3.5
  rounded-lg
  font-semibold
  transition-all duration-300
  hover:bg-tours-accent-500
  hover:shadow-elegant-lg
  active:scale-[0.98]
"
```

**Cards** (Minimalist Elevation):
```typescript
// Standard Card
className="
  bg-white
  rounded-2xl
  border border-tours-neutral-200
  p-6
  transition-all duration-300
  hover:border-tours-neutral-300
  hover:shadow-elegant-md
"

// Featured Card
className="
  bg-white
  rounded-2xl
  overflow-hidden
  shadow-elegant
  transition-all duration-300
  hover:shadow-elegant-lg
  hover:-translate-y-1
"

// Subtle Card (No border)
className="
  bg-tours-neutral-50
  rounded-2xl
  p-6
  transition-all duration-300
  hover:bg-tours-neutral-100
"
```

**Inputs**:
```typescript
className="
  w-full
  px-4 py-3
  border border-tours-neutral-300
  rounded-lg
  bg-white
  text-tours-primary-900
  placeholder:text-tours-neutral-400
  focus:outline-none
  focus:ring-2
  focus:ring-tours-primary-900
  focus:ring-offset-2
  focus:border-transparent
  transition-all duration-200
"
```

**Badges/Tags**:
```typescript
// Primary Badge
className="
  inline-flex items-center
  px-3 py-1
  rounded-full
  bg-tours-primary-100
  text-tours-primary-900
  text-sm font-medium
"

// Accent Badge
className="
  inline-flex items-center
  px-3 py-1
  rounded-full
  bg-tours-accent-100
  text-tours-accent-900
  text-sm font-medium
"
```

### Layout Principles

**Container Widths**:
```typescript
// Standard container
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Narrow content (reading)
className="max-w-4xl mx-auto px-4 sm:px-6"

// Wide layouts
className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
```

**Spacing System** (Generous whitespace):
```typescript
// Section padding
className="py-16 md:py-24 lg:py-32"

// Between sections
className="space-y-16 md:space-y-24 lg:space-y-32"

// Card/Component internal
className="space-y-4 md:space-y-6"
```

**Grid Layouts**:
```typescript
// Tour cards grid
className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-8
  md:gap-10
  lg:gap-12
"

// Features grid
className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  gap-8
  md:gap-10
"
```

### Color Usage Guidelines

**Primary (Navy/Slate)** - Use for:
- Main navigation
- Headings
- Body text (900/800)
- Primary buttons
- Important UI elements

**Secondary (Terracotta)** - Use for:
- Secondary CTAs
- Hover states
- Decorative elements
- Section backgrounds (50/100)

**Accent (Gold)** - Use sparingly for:
- Main CTA buttons
- Star ratings
- Special offers/badges
- Price highlights
- Important notifications

**Neutral** - Use for:
- Backgrounds (50/100)
- Borders (200/300)
- Disabled states
- Subtle text (500/600)

**Semantic Colors**:
- Success: Booking confirmations, success messages
- Error: Form errors, warnings

### Minimalist Design Principles

1. **Generous Whitespace**: Use `space-y-*` and padding liberally
2. **Subtle Shadows**: Prefer `shadow-elegant-*` over heavy shadows
3. **Rounded Corners**: Use `rounded-xl` or `rounded-2xl` for softness
4. **Restrained Animations**: Only use `transition-all duration-300`, avoid flashy effects
5. **Typography Hierarchy**: Clear size differences, max 3-4 font sizes per page
6. **Limited Color Palette**: Stick to primary + accent, use neutrals for rest
7. **Clean Borders**: Use `border-tours-neutral-200/300` for subtle separation
8. **Photography Focus**: Let images breathe with minimal overlays
9. **Consistent Spacing**: Use the 8px grid system (multiples of 4)
10. **Functional Decoration**: Every element serves a purpose

### Example Component Styling

**Hero Section**:
```typescript
<section className="relative bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
    <div className="max-w-3xl">
      <h1 className="text-display-lg md:text-display-2xl font-display font-semibold text-tours-primary-950 mb-6">
        Discover Bali's Hidden Treasures
      </h1>
      <p className="text-lg md:text-xl text-tours-neutral-600 leading-relaxed mb-10">
        Curated private tours with expert local guides. 
        Experience authentic Bali at your own pace.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-tours-primary-900 text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 hover:bg-tours-primary-800 hover:shadow-elegant-md">
          Browse Tours
        </button>
        <button className="bg-white text-tours-primary-900 border border-tours-neutral-300 px-8 py-3.5 rounded-lg font-medium transition-all duration-300 hover:border-tours-primary-900">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</section>
```

**Tour Card**:
```typescript
<div className="group bg-white rounded-2xl overflow-hidden shadow-elegant transition-all duration-300 hover:shadow-elegant-lg hover:-translate-y-1">
  <div className="aspect-[4/3] relative overflow-hidden">
    <Image 
      src="/tour.jpg" 
      alt="Tour name"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute top-4 left-4">
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-tours-primary-900 text-sm font-medium">
        Full Day
      </span>
    </div>
  </div>
  
  <div className="p-6 space-y-4">
    <div>
      <h3 className="text-xl font-display font-semibold text-tours-primary-950 mb-2 group-hover:text-tours-primary-800 transition-colors">
        Ubud Cultural Experience
      </h3>
      <p className="text-tours-neutral-600 text-sm leading-relaxed">
        Explore ancient temples and rice terraces
      </p>
    </div>
    
    <div className="flex items-center justify-between pt-4 border-t border-tours-neutral-200">
      <div>
        <p className="text-sm text-tours-neutral-500">From</p>
        <p className="text-2xl font-semibold text-tours-primary-950">
          IDR 750K
        </p>
      </div>
      <button className="text-tours-primary-900 font-medium hover:text-tours-primary-700 transition-colors">
        View Details →
      </button>
    </div>
  </div>
</div>
```

### Responsive Breakpoints

Follow mobile-first approach:
- **Mobile**: < 640px (base styles, no prefix)
- **Tablet**: 640px+ (`sm:`)
- **Desktop**: 1024px+ (`lg:`)
- **Large Desktop**: 1280px+ (`xl:`)

Example:
```typescript
className="
  text-2xl        // mobile
  md:text-3xl     // tablet
  lg:text-4xl     // desktop
  xl:text-5xl     // large desktop
"
```

## Homepage Structure

### 1. Hero Section
- Full-width background image (Bali scenery)
- Headline: "Explore Bali with Your Private Driver"
- Subheadline: "Customizable tours, professional drivers, unforgettable experiences"
- Primary CTA: "Browse Tours"
- Secondary CTA: WhatsApp button
- Quick search: Duration filter dropdown

### 2. Featured Tours (3-4 cards)
- Image, title, duration, starting price
- Rating stars, review count
- "View Details" button
- Hover effect: slight scale up

### 3. How It Works (3 steps)
- Icons: Search → Book → Enjoy
- Brief description for each
- Simple and clear

### 4. Why Choose Us (4-6 points)
- Professional Drivers
- Flexible Itineraries
- Transparent Pricing
- 24/7 Support
- Clean Vehicles
- Local Expertise

### 5. Testimonials (3-4 reviews)
- Customer photo/avatar
- Star rating
- Quote
- Name, country, tour taken

### 6. CTA Section
- "Ready to Explore Bali?"
- WhatsApp and booking buttons

## Tour Listing Page Requirements

### Filters (Sidebar or Top)
- Duration: All, Half-day, Full-day, Custom
- Price Range: Slider (IDR 0 - 2,000,000)
- Category: Culture, Nature, Adventure, Beach, Temple
- Vehicle Type: (affects displayed price)
- Sort By: Popular, Price (low-high), Price (high-low), Rating

### Tour Cards Grid
- Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop
- Each card shows:
  - Main image
  - Tour name
  - Duration badge
  - Price "From IDR XXX"
  - Rating and review count
  - Quick highlights (2-3 bullet points)
  - "View Details" button

### Empty State
If no tours match filters: "No tours found. Try adjusting your filters."

## Tour Detail Page Requirements

### Layout
1. **Hero Section**: Image gallery (main + thumbnails)
2. **Overview**: Name, rating, duration, price range
3. **Sticky Booking Widget** (desktop sidebar, mobile bottom)
4. **Tabs/Sections**:
   - Overview & Highlights
   - Detailed Itinerary
   - What's Included/Excluded
   - Pricing by Vehicle
   - Reviews
   - FAQ
   - Similar Tours

### Booking Widget
- Tour name
- Date picker (flatpickr or react-datepicker)
- Time selector (dropdown)
- Vehicle selector (radio buttons with images)
- Passenger count (number input)
- Real-time price calculation
- "Book Now" button → goes to booking page with pre-filled data

### Itinerary Display
- Timeline format
- Time → Location → Activity
- Icons for each stop
- Expandable descriptions

### Reviews Section
- Overall rating (large)
- Rating breakdown (5★, 4★, etc.)
- Individual reviews with:
  - Avatar, name, country
  - Star rating
  - Date taken
  - Review text
  - Photos if available

## Booking Page Requirements

### Multi-Step Form
**Step 1: Confirm Tour Details**
- Tour summary card
- Selected vehicle
- Date and time
- Total participants
- Edit buttons for each

**Step 2: Customer Information**
- Full name (required)
- Email (required, validated)
- Phone (required, Indonesian format preferred)
- Nationality (dropdown)
- Hotel/pickup location (required)
- Special requests (textarea, optional)

**Step 3: Review & Submit**
- Summary of everything
- Terms & conditions checkbox
- Total price breakdown
- Submit button → "Confirm Booking"

### After Submission
- Success message
- Booking reference number
- Email confirmation sent
- WhatsApp message option
- "We'll contact you within 24 hours"

## Contact Page Requirements

### Contact Form
- Name (required)
- Email (required)
- Phone (optional)
- Subject (dropdown: General Inquiry, Booking Question, Custom Tour, Complaint, Other)
- Message (required, textarea)
- Submit button

### Contact Information Display
- Phone: +62-XXX-XXXX-XXXX (clickable)
- Email: info@yourdomain.com
- WhatsApp: Large green button with link
- Address: Bali, Indonesia
- Business hours: 8 AM - 8 PM Bali time (WITA)

### Map
- Embed Google Maps (general Bali area)
- Or use placeholder if no specific office

## Performance Requirements

### Target Metrics
- Lighthouse Score: 90+ (all categories)
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- TTI (Time to Interactive): < 3.5s

### Optimization Techniques
- Use Next.js Image with proper sizing
- Lazy load images below fold
- Code splitting (dynamic imports for heavy components)
- Minimize JavaScript bundle
- Enable compression
- Use CDN for static assets
- Optimize fonts (next/font with display: swap)

## Mobile Responsiveness

### Critical Mobile Features
- Hamburger menu (smooth animation)
- Touch-friendly buttons (min 44x44px)
- Sticky WhatsApp button (bottom right)
- Easy-to-tap phone/email links
- Optimized forms (proper input types)
- Swipeable image galleries
- Bottom navigation for booking flow

### Breakpoint Behavior
- **Mobile (< 640px)**: 
  - Single column layouts
  - Stacked navigation
  - Full-width cards
  - Reduced padding/margins

- **Tablet (640px - 1024px)**:
  - 2-column grids
  - Sidebar filters become top filters
  - Touch-optimized

- **Desktop (> 1024px)**:
  - 3-column grids
  - Sidebar layouts
  - Hover effects
  - Larger images

## Accessibility Requirements

- Semantic HTML (header, nav, main, article, footer)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images (descriptive)
- ARIA labels for icons/buttons
- Keyboard navigation support
- Focus states visible
- Color contrast WCAG AA compliant
- Form labels properly associated
- Error messages clear and helpful

## Form Validation

### Client-Side Validation
- Required field indicators (*)
- Real-time validation (on blur)
- Clear error messages below fields
- Disable submit until valid
- Show success states

### Validation Rules
- **Email**: Valid email format
- **Phone**: Minimum 10 digits, optional + prefix
- **Date**: Must be future date, within 1 year
- **Passengers**: Min 1, max based on vehicle capacity
- **Name**: Min 2 characters, max 100
- **Message**: Min 10 characters for contact form

## WhatsApp Integration

Create helper function:
```typescript
export function generateWhatsAppLink(params: {
  tourName?: string
  date?: string
  passengers?: number
  vehicleType?: string
}) {
  const phoneNumber = '62XXXXXXXXX' // Replace with actual number
  const baseUrl = `https://wa.me/${phoneNumber}`
  
  let message = 'Hi, I would like to inquire about '
  
  if (params.tourName) {
    message += `${params.tourName} tour`
    if (params.date) message += ` on ${params.date}`
    if (params.passengers) message += ` for ${params.passengers} people`
    if (params.vehicleType) message += ` with ${params.vehicleType}`
  } else {
    message += 'your Bali tours'
  }
  
  message += '. Could you provide more information?'
  
  return `${baseUrl}?text=${encodeURIComponent(message)}`
}
```

Use floating WhatsApp button on all pages (bottom right, sticky).

## Error Handling

### 404 Page
- Friendly message: "This page doesn't exist"
- Suggestions: "You might be looking for:"
  - Link to tours page
  - Link to homepage
  - Search functionality
- Maintain header/footer

### 500 Page
- "Something went wrong"
- "We're working on it"
- Contact information
- Link to homepage

### Form Errors
- Display inline below field
- Red border on invalid field
- Clear, actionable messages
- Don't clear form on error

## Content Guidelines

### Tour Descriptions
- Start with attention-grabbing headline
- Use sensory language (visual, emotional)
- Include practical information
- Mention what makes it unique
- 300-500 words for full description
- Bullet points for highlights

### Writing Tone
- Friendly but professional
- Enthusiastic about Bali
- Clear and concise
- Avoid jargon
- Use active voice
- Include local insights

### Image Requirements
- High resolution (min 1200px wide)
- Properly compressed (WebP format preferred)
- Descriptive filenames (ubud-rice-terrace.jpg, not IMG_1234.jpg)
- Alt text that describes the scene
- Consistent aspect ratios within sections

## Testing Checklist

### Functionality
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Validation works
- [ ] Mobile menu toggles
- [ ] Image galleries function
- [ ] Filters work on tour listing
- [ ] Price calculations accurate
- [ ] WhatsApp links open correctly
- [ ] Email links work
- [ ] Phone links work on mobile

### SEO
- [ ] All pages have unique titles
- [ ] Meta descriptions present
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Sitemap generates correctly
- [ ] Robots.txt accessible
- [ ] Canonical URLs set
- [ ] Open Graph images present
- [ ] Alt text on all images

### Performance
- [ ] Lighthouse score 90+
- [ ] Images optimized
- [ ] No console errors
- [ ] Fast loading on 3G
- [ ] No layout shift

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast passes
- [ ] Focus indicators visible
- [ ] ARIA labels where needed

## Deployment Checklist

### Before Deploy
- [ ] Environment variables set
- [ ] Contact form recipient configured
- [ ] WhatsApp number updated
- [ ] Google Analytics added
- [ ] Favicon added
- [ ] OG images created
- [ ] Content proofread
- [ ] Links tested
- [ ] Forms tested

### After Deploy
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics
- [ ] Set up Google Tag Manager (if needed)
- [ ] Test contact form in production
- [ ] Test booking flow in production
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate
- [ ] Test from different countries/IPs

## Future Enhancements (Phase 2)

- Multi-language support (Indonesian, Chinese, Japanese)
- User accounts (save bookings, preferences)
- Payment gateway integration (Stripe, PayPal, local)
- Real-time availability calendar
- Admin dashboard for managing tours/bookings
- Email automation (confirmations, reminders)
- Blog section for SEO content
- Customer loyalty program
- Referral system
- Live chat support
- Mobile app (React Native)

## Important Notes

1. **NO localStorage/sessionStorage**: Use React state only
2. **Mobile-first**: Design for mobile, enhance for desktop
3. **SEO-first**: Every page must be fully crawlable
4. **Performance**: Optimize images, minimize JS, lazy load
5. **Accessibility**: Follow WCAG 2.1 AA standards
6. **TypeScript**: Use strict type checking
7. **Comments**: Add JSDoc comments for complex functions
8. **Error Handling**: Graceful degradation, never break the site

## Resources to Use

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Lucide Icons: https://lucide.dev
- React Hook Form: https://react-hook-form.com
- Schema.org: https://schema.org
- Google Rich Results Test: https://search.google.com/test/rich-results

## Questions to Consider While Building

1. How will tours be managed? (Hardcoded data file or CMS?)
2. Do we need a real payment system or just inquiry forms?
3. Should booking be fully automated or require manual confirmation?
4. What's the cancellation/refund policy?
5. Do we need multi-currency support?
6. Should we show real-time availability?
7. Do we need user authentication?
8. How will reviews be collected and moderated?

---


Begin with the foundational structure: layout, homepage, and navigation. Then build out the tours listing and detail pages. Finally, implement the booking flow and contact forms.

Focus on SEO and performance from the start - it's harder to optimize later. Every component should be responsive and accessible by default.

Good luck! 🚀

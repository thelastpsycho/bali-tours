import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import StickyHeader from "@/components/layout/StickyHeader";
import {
  generateOrganizationStructuredData,
  generateWebsiteStructuredData,
  generateLocalBusinessStructuredData,
} from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bali Tours Transportation | Private Driver & Tour Packages",
  description: "Discover Bali with our professional private drivers and curated tour packages. Half-day and full-day tours to Ubud, Uluwatu, and hidden gems. Book your perfect Bali adventure.",
  keywords: ["bali tours", "bali private driver", "bali tour packages", "bali transportation", "ubud tour", "uluwatu tour", "bali day tours"],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: '192x192' },
    ],
    shortcut: '/favicon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "Bali Tours Transportation | Private Driver & Tour Packages",
    description: "Professional private tour services in Bali with experienced drivers. Customizable itineraries and competitive prices.",
    images: ["/og-image.jpg"],
    locale: "en_US",
    type: "website",
    url: "https://balitourstransportation.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Tours Transportation | Private Driver & Tour Packages",
    description: "Professional private tour services in Bali with experienced drivers.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://balitourstransportation.com",
  },
  other: {
    'bali-tours-version': '1.0.0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationStructuredData()),
          }}
        />
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteStructuredData()),
          }}
        />
        <Script
          id="structured-data-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessStructuredData()),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <StickyHeader />

        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="relative bg-slate-900 text-white py-8">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070&auto=format&fit=crop"
              alt="Bali landscape"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
                  {/* Minimalist temple/mountain icon */}
                  <g id="icon">
                    {/* Base mountain */}
                    <path d="M 20 40 L 30 20 L 40 40 Z" fill="#f8fafc" opacity="0.9"/>

                    {/* Middle mountain */}
                    <path d="M 28 40 L 35 25 L 42 40 Z" fill="#f1f5f9" opacity="0.8"/>

                    {/* Front mountain with temple peak */}
                    <path d="M 35 40 L 40 28 L 45 40 Z" fill="#e2e8f0"/>

                    {/* Small temple spire on top */}
                    <circle cx="40" cy="26" r="1.5" fill="#eab308"/>
                    <path d="M 40 26 L 40 22" stroke="#eab308" strokeWidth="1" strokeLinecap="round"/>

                    {/* Sun/circle accent */}
                    <circle cx="25" cy="22" r="3" fill="none" stroke="#eab308" strokeWidth="1.5" opacity="0.7"/>
                  </g>

                  {/* Text: BALI */}
                  <text x="55" y="35" fontFamily="serif" fontSize="24" fontWeight="600" fill="#f8fafc" letterSpacing="1">
                    BALI
                  </text>

                  {/* Text: TOURS */}
                  <text x="55" y="48" fontFamily="sans-serif" fontSize="11" fontWeight="400" fill="#cbd5e1" letterSpacing="3">
                    TOURS
                  </text>
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Bali Tours Transportation</h3>
              <p className="text-neutral-300">Professional private tour services in Bali</p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="/tours" className="text-neutral-300 hover:text-white transition-colors">Tours</a>
                <a href="/destinations" className="text-neutral-300 hover:text-white transition-colors">Destinations</a>
                <a href="/fleet" className="text-neutral-300 hover:text-white transition-colors">Fleet</a>
                <a href="/about" className="text-neutral-300 hover:text-white transition-colors">About</a>
                <a href="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</a>
                <a href="tel:+6281234567890" className="text-neutral-300 hover:text-white transition-colors">Call Us</a>
              </div>
              <p className="text-neutral-400 mt-4 text-sm">© 2024 Bali Tours Transportation. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

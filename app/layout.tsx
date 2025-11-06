import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import "../styles/leaflet.css";
import Script from "next/script";
import SideNavigation from "@/components/layout/SideNavigation";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import {
  generateOrganizationStructuredData,
  generateWebsiteStructuredData,
  generateLocalBusinessStructuredData,
} from "@/lib/structured-data";
import { SOCIAL_MEDIA, CONTACT_INFO } from "@/lib/constants";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

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
  metadataBase: new URL('https://balitourstransportation.com'),
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
        <div className="flex min-h-screen">
          <SideNavigation />

          <main className="flex-1 pt-16 lg:pt-0 lg:ml-72 lg:transition-all lg:duration-300" id="main-content">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
              {children}
            </div>
          </main>
        </div>

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Footer */}
        <footer className="bg-slate-50 border-t border-slate-200 lg:ml-72 lg:transition-all lg:duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center mb-4">
                  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
                    <g id="icon">
                      <path d="M 20 40 L 30 20 L 40 40 Z" fill="#0f172a" opacity="0.9"/>
                      <path d="M 28 40 L 35 25 L 42 40 Z" fill="#334155" opacity="0.8"/>
                      <path d="M 35 40 L 40 28 L 45 40 Z" fill="#1e293b"/>
                      <circle cx="40" cy="26" r="1.5" fill="#eab308"/>
                      <path d="M 40 26 L 40 22" stroke="#eab308" strokeWidth="1" strokeLinecap="round"/>
                      <circle cx="25" cy="22" r="3" fill="none" stroke="#eab308" strokeWidth="1.5" opacity="0.7"/>
                    </g>
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Bali Tours Transportation</h3>
                <p className="text-sm text-slate-600 mb-4">Professional private tours with local experts since 2009.</p>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+6281234567890"
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-medium text-slate-900 mb-4">Explore</h4>
                <ul className="space-y-2">
                  <li><a href="/tours" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">All Tours</a></li>
                  <li><a href="/destinations" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">Destinations</a></li>
                  <li><a href="/guides" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">Travel Guides</a></li>
                  <li><a href="/about" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">About Us</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-medium text-slate-900 mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="/booking" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">Book Tour</a></li>
                  <li><a href="/fleet" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">Our Fleet</a></li>
                  <li><a href="/contact" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">Contact</a></li>
                  <li><a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">WhatsApp</a></li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="font-medium text-slate-900 mb-4">Connect</h4>
                <div className="flex gap-3 mb-4">
                  <a
                    href={SOCIAL_MEDIA.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 transition-all"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href={SOCIAL_MEDIA.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 transition-all"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href={SOCIAL_MEDIA.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 transition-all"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 transition-all"
                    aria-label="Email us"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
                <p className="text-sm text-slate-600">
                  Professional tour services with authentic local experiences.
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-200 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-slate-600">
                  © 2025 Bali Tours Transportation. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <Link href="/privacy" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

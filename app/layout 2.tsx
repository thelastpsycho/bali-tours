import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
        {/* Sticky Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-display font-semibold text-slate-900">
                Bali Tours
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-neutral-700 hover:text-slate-900 transition-colors font-medium">Home</a>
                <a href="/tours" className="text-neutral-700 hover:text-slate-900 transition-colors font-medium">Tours</a>
                <a href="/contact" className="text-neutral-700 hover:text-slate-900 transition-colors font-medium">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

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
              <h3 className="text-xl font-display font-semibold mb-2">Bali Tours Transportation</h3>
              <p className="text-neutral-300">Professional private tour services in Bali</p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="/tours" className="text-neutral-300 hover:text-white transition-colors">Tours</a>
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

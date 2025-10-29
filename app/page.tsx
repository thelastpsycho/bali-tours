'use client'

import Link from 'next/link'
import Button from '@/components/shared/Button'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070&auto=format&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 drop-shadow-2xl">
            Discover the Magic of Bali
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-white/95 drop-shadow-xl font-light">
            Professional Private Driver & Curated Tour Packages
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button as={Link} href="/tours" variant="accent" size="lg" className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Explore Our Tours
            </Button>
            <Button as={Link} href="/contact" variant="secondary" size="lg" className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-tours-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-semibold text-center mb-4">
            Welcome to Bali Tours
          </h2>
          <p className="text-lg text-tours-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Experience the magic of Bali with our professional drivers and carefully crafted tour packages
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-tours-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-tours-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Drivers</h3>
              <p className="text-tours-neutral-600">Experienced, English-speaking drivers with extensive local knowledge</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tours-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-tours-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexible Tours</h3>
              <p className="text-tours-neutral-600">Customizable itineraries to match your interests and schedule</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tours-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-tours-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Safe & Reliable</h3>
              <p className="text-tours-neutral-600">Well-maintained vehicles with comprehensive insurance coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-semibold text-center mb-12">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/tours" className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1887&auto=format&fit=crop"
                  alt="Ubud Rice Terraces"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-display text-xl font-semibold">
                  Ubud Cultural Tour
                </h3>
              </div>
              <p className="text-tours-neutral-600">Traditional villages, rice terraces & art markets</p>
            </Link>
            <Link href="/tours" className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop"
                  alt="Uluwatu Temple"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-display text-xl font-semibold">
                  Uluwatu Temple Tour
                </h3>
              </div>
              <p className="text-tours-neutral-600">Cliff-top temple & Kecak fire dance</p>
            </Link>
            <Link href="/tours" className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop"
                  alt="Tanah Lot Temple"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-display text-xl font-semibold">
                  Beach & Temple Tour
                </h3>
              </div>
              <p className="text-tours-neutral-600">Coastal temples & pristine beaches</p>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Button as={Link} href="/tours" variant="primary" size="lg">
              View All Tours
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-semibold mb-4">
            Ready to Explore Bali?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let us help you create unforgettable memories in the Island of the Gods.
          </p>
          <Button as={Link} href="/contact" variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  )
}

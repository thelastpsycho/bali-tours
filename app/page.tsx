'use client'

import Link from 'next/link'
import Image from 'next/image'
import { tours } from '@/data/tours'
import { getFeaturedGuides } from '@/data/travel-guides'
import Button from '@/components/shared/Button'
import TourCard from '@/components/shared/TourCard'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import { Star, MapPin, Clock, Users, Calendar, ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  const featuredTours = tours.slice(0, 3)
  const featuredGuides = getFeaturedGuides().slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Compact Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.1.0&w=1600&h=900&fit=crop"
            alt="Bali landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge variant="primary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
              Since 2009
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">
            Discover Bali with Local Experts
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto font-light">
            Professional private drivers and curated tours to explore Bali's hidden gems and cultural treasures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as={Link} href="/tours" variant="primary" size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-white/20">
              Explore Tours
            </Button>
            <Button as={Link} href="/contact" variant="secondary" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
              <MapPin className="w-4 h-4 mr-2" />
              Custom Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Expert Guides</h3>
              <p className="text-sm text-slate-600">English-speaking locals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Flexible Time</h3>
              <p className="text-sm text-slate-600">Your schedule matters</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Verified Service</h3>
              <p className="text-sm text-slate-600">500+ happy travelers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">All Bali</h3>
              <p className="text-sm text-slate-600">Complete island coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-slate-900 mb-4">
              Most Popular Tours
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Handpicked experiences that showcase the best of Bali's culture, nature, and adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} variant="compact" />
            ))}
          </div>

          <div className="text-center">
            <Button as={Link} href="/tours" variant="primary" size="lg">
              View All Tours
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-slate-900 mb-4">
              Travel Like a Local
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Insider tips and guides to make your Bali experience unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredGuides.map((guide) => (
              <Link key={guide.id} href={`/guides/${guide.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{guide.category}</Badge>
                      <span className="text-sm text-slate-500">{guide.duration}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{guide.subtitle}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button as={Link} href="/guides" variant="secondary" size="lg">
              Explore All Guides
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-emerald-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2000+</div>
              <div className="text-emerald-100">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Tour Options</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-emerald-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Ready for Your Bali Adventure?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let our local experts create the perfect Bali experience tailored to your interests and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} href="/booking" variant="accent" size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-white">
                Book Your Journey
              </Button>
              <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Calendar className="w-4 h-4 mr-2" />
                Contact First
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

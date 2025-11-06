'use client'

import Image from 'next/image'
import { TravelGuide } from '@/types/travel-guide'
import { guideCategories, travelGuides, getFeaturedGuides, getPopularGuides } from '@/data/travel-guides'
import { GuideGrid } from '@/components/guides/GuideGrid'
import Badge from '@/components/shared/Badge'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import { BookOpen, Filter, Calendar, MapPin } from 'lucide-react'

// Metadata is handled in layout.tsx for client components

export default function GuidesPage() {
  const featuredGuides = getFeaturedGuides()
  const popularGuides = getPopularGuides()

  return (
    <div className="min-h-screen bg-tours-neutral-50">
      {/* Hero section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-display-lg md:text-display-xl font-display font-semibold text-tours-primary-950 mb-6">
              Explore Bali Like a Local
            </h1>
            <p className="text-lg md:text-xl text-tours-neutral-600 leading-relaxed mb-8">
              Discover insider tips, cultural insights, and hidden gems with our comprehensive travel guides.
              From temple etiquette to secret beaches, learn everything you need to know for your Bali adventure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Reading
              </Button>
              <Button variant="secondary">
                <MapPin className="w-5 h-5 mr-2" />
                View All Destinations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured guides */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-tours-primary-950 mb-4">
              Featured Guides
            </h2>
            <p className="text-lg text-tours-neutral-600 max-w-2xl mx-auto">
              Hand-picked guides that will help you make the most of your Bali experience
            </p>
          </div>

          <GuideGrid guides={featuredGuides} />
        </div>
      </section>

      {/* Categories section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-tours-primary-950 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-tours-neutral-600 max-w-2xl mx-auto">
              Find guides that match your interests and travel style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  // This would filter the guides by category
                  document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-left"
              >
                <Card className="p-6 hover:shadow-elegant-md transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                      <span className="text-xl">
                        {category.icon === 'Temple' && '🛕'}
                        {category.icon === 'TreePine' && '🌴'}
                        {category.icon === 'Mountain' && '⛰️'}
                        {category.icon === 'Utensils' && '🍽️'}
                        {category.icon === 'Info' && 'ℹ️'}
                        {category.icon === 'Calendar' && '📅'}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-tours-primary-950 group-hover:text-tours-primary-800 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-tours-neutral-500">
                        {getGuidesByCategory(category.id).length} guides
                      </p>
                    </div>
                  </div>
                  <p className="text-tours-neutral-600 text-sm">
                    {category.description}
                  </p>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category sections */}
      {guideCategories.map((category) => {
        const categoryGuides = getGuidesByCategory(category.id)
        if (categoryGuides.length === 0) return null

        return (
          <section
            key={category.id}
            id={category.id}
            className="py-16 md:py-24 border-t border-tours-neutral-200"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <GuideGrid guides={categoryGuides} category={category} />
            </div>
          </section>
        )
      })}

      {/* Popular guides section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-tours-primary-950 mb-4">
              Most Popular Guides
            </h2>
            <p className="text-lg text-tours-neutral-600 max-w-2xl mx-auto">
              Discover what other travelers are reading about Bali
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularGuides.map((guide, index) => (
              <Card key={guide.id} className="overflow-hidden group hover:shadow-elegant-md transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary">
                      #{index + 1} Popular
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-semibold text-tours-primary-950 mb-2 group-hover:text-tours-primary-800 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-tours-neutral-600 mb-4 line-clamp-2">
                    {guide.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-tours-neutral-500">
                      <Calendar className="w-4 h-4" />
                      {guide.duration}
                    </div>
                    <div className="text-sm text-tours-primary-900 font-medium">
                      {guide.views.toLocaleString()} views
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-tours-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            Ready to Explore Bali?
          </h2>
          <p className="text-lg text-tours-primary-100 mb-8">
            Combine our travel guides with expert-led tours for the ultimate Bali experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent">
              Browse Tours
            </Button>
            <Button variant="ghost" className="border-white text-white hover:bg-white hover:text-tours-primary-900">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper function
function getGuidesByCategory(categoryId: string): TravelGuide[] {
  return travelGuides.filter(guide => guide.category === categoryId)
}
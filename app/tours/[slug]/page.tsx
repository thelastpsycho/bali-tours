import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Star, Clock, Users, MapPin, Check, X, Phone } from 'lucide-react'
import { tours } from '@/data/tours'
import Button from '@/components/shared/Button'
import Badge from '@/components/shared/Badge'
import ReviewSection from '@/components/shared/ReviewSection'
import BookingWidget from '@/components/BookingWidget'
import { formatCurrency } from '@/lib/utils'
import Script from 'next/script'
import { generateTourStructuredData, generateBreadcrumbStructuredData } from '@/lib/structured-data'

interface TourDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: TourDetailPageProps) {
  const { slug } = await params
  const tour = tours.find(t => t.slug === slug)

  if (!tour) {
    return {
      title: 'Tour Not Found',
    }
  }

  return {
    metadataBase: new URL('https://balitourstransportation.com'),
    title: `${tour.name} | Bali Tours Transportation`,
    description: tour.metaDescription,
    keywords: tour.keywords,
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      images: [tour.images.main],
      type: 'article',
      url: `https://balitourstransportation.com/tours/${tour.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: tour.metaTitle,
      description: tour.metaDescription,
      images: [tour.images.main],
    },
    alternates: {
      canonical: `https://balitourstransportation.com/tours/${tour.slug}`,
    },
  }
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params

  const tour = tours.find(t => t.slug === slug)

  if (!tour) {
    notFound()
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50'
      case 'moderate': return 'text-yellow-600 bg-yellow-50'
      case 'challenging': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <>
      <head>
        <Script
          id="structured-data-tour"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateTourStructuredData(tour)),
          }}
        />
        <Script
          id="structured-data-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbStructuredData([
              { name: 'Home', url: 'https://balitourstransportation.com' },
              { name: 'Tours', url: 'https://balitourstransportation.com/tours' },
              { name: tour.name, url: `https://balitourstransportation.com/tours/${tour.slug}` },
            ])),
          }}
        />
      </head>
      <div className="min-h-screen bg-tours-neutral-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-tours-primary-950 to-tours-primary-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <img
            src={tour.images.main}
            alt={tour.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div className="text-white">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="accent">
                #{tour.popularRank} Most Popular
              </Badge>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tour.difficulty)}`}>
                {tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
              {tour.name}
            </h1>
            <div className="flex items-center gap-6 text-lg">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-amber-400 mr-1" fill="currentColor" />
                {tour.rating} ({tour.reviewCount} reviews)
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-1" />
                {tour.durationHours} hours
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-1" />
                Up to {tour.maxParticipants} people
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-display font-semibold mb-4">About This Tour</h2>
              <p className="text-tours-neutral-700 leading-relaxed mb-6">
                {tour.fullDescription}
              </p>

              {/* Photo Gallery */}
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold mb-4">Photo Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tour.images.gallery.map((image, index) => (
                    <div key={index} className="group cursor-pointer overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={tour.images.alt[index] || `${tour.name} photo ${index + 1}`}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <h3 className="text-xl font-display font-semibold mb-3">Tour Highlights</h3>
              <ul className="grid gap-3 mb-6">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-tours-neutral-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-display font-semibold mb-6">Daily Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-tours-primary-100 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-tours-primary-900" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-tours-primary-950">{item.time}</h3>
                        <span className="text-tours-neutral-500">•</span>
                        <span className="text-tours-neutral-600">{item.duration}</span>
                      </div>
                      <h4 className="font-semibold text-tours-primary-900 mb-1">{item.location}</h4>
                      <p className="text-tours-neutral-700">{item.activity}</p>
                      <p className="text-sm text-tours-neutral-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-display font-semibold mb-4 text-green-600">What's Included</h3>
                <ul className="space-y-2">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-tours-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-display font-semibold mb-4 text-red-600">What's Excluded</h3>
                <ul className="space-y-2">
                  {tour.excluded.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="w-4 h-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-tours-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <ReviewSection tourId={tour.id} tourSlug={slug} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Widget */}
            <BookingWidget tour={tour} />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
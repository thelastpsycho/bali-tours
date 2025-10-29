import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDestinationBySlug, getAllDestinations } from '@/data/destinations'
import { getTourBySlug } from '@/data/tours'
import Button from '@/components/shared/Button'
import {
  MapPin,
  Star,
  Calendar,
  Users,
  Camera,
  Activity,
  Clock,
  Sun,
  AlertCircle,
  ArrowLeft
} from 'lucide-react'

// Generate static params for SSG
export async function generateStaticParams() {
  const destinations = getAllDestinations()
  return destinations.map((destination) => ({
    slug: destination.slug,
  }))
}

export default async function DestinationPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    notFound()
  }

  const tours = destination.tours
    .map(tourId => getTourBySlug(tourId))
    .filter((tour): tour is NonNullable<typeof tour> => tour !== undefined)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <Link
                href="/destinations"
                className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Destinations
              </Link>
              <h1 className="text-5xl font-bold text-white mb-2">{destination.name}</h1>
              <div className="flex items-center text-white/90 text-lg">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{destination.location.region}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">About {destination.name}</h2>
              <p className="text-lg text-neutral-600 leading-relaxed whitespace-pre-line">
                {destination.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Star className="h-6 w-6 text-tours-primary-600 mr-3" />
                Top Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center p-4 bg-tours-primary-50 rounded-lg">
                    <Star className="h-5 w-5 text-tours-primary-600 mr-3" />
                    <span className="text-slate-900">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Activity className="h-6 w-6 text-tours-primary-600 mr-3" />
                Popular Activities
              </h3>
              <div className="flex flex-wrap gap-3">
                {destination.activities.map((activity, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-tours-primary-200 text-tours-primary-700"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Camera className="h-6 w-6 text-tours-primary-600 mr-3" />
                Photo Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {destination.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={image}
                      alt={`${destination.name} - Photo ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Tips */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-tours-primary-600 mr-3" />
                Travel Tips
              </h3>
              <div className="space-y-3">
                {destination.travelTips.map((tip, index) => (
                  <div key={index} className="flex items-start p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-800">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Tours */}
            {tours.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Available Tours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tours.map((tour) => (
                    <Link key={tour.id} href={`/tours/${tour.slug}`}>
                      <div className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">{tour.name}</h4>
                        <p className="text-neutral-600 mb-4 line-clamp-2">{tour.shortDescription}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-neutral-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{tour.duration}</span>
                          </div>
                          <Button variant="primary" size="sm">
                            View Tour
                          </Button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-tours-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-700">
                  <Calendar className="h-5 w-5 text-tours-primary-600 mr-3" />
                  <div>
                    <div className="font-medium">Best Time to Visit</div>
                    <div className="text-sm text-neutral-600">{destination.bestTimeToVisit}</div>
                  </div>
                </div>
                <div className="flex items-center text-slate-700">
                  <MapPin className="h-5 w-5 text-tours-primary-600 mr-3" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-neutral-600">{destination.location.region}</div>
                  </div>
                </div>
                <div className="flex items-center text-slate-700">
                  <Activity className="h-5 w-5 text-tours-primary-600 mr-3" />
                  <div>
                    <div className="font-medium">Activities</div>
                    <div className="text-sm text-neutral-600">{destination.activities.length} to choose from</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Tour CTA */}
            <div className="bg-white border border-tours-primary-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Explore?</h3>
              <p className="text-neutral-600 mb-4">
                Book a tour to {destination.name} with our experienced drivers and guides.
              </p>
              <div className="space-y-3">
                <Button variant="primary" className="w-full" href={`/contact?destination=${destination.id}`}>
                  Contact Us
                </Button>
                <Button variant="outline" className="w-full" as="a" href={`https://wa.me/6281234567890?text=Hi! I'm interested in visiting ${destination.name}. Can you tell me more about your tours?`} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Weather Widget */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Sun className="h-5 w-5 text-tours-primary-600 mr-2" />
                Weather Info
              </h3>
              <p className="text-neutral-600 mb-4">
                {destination.bestTimeToVisit} is the best time to visit {destination.name} for optimal weather conditions.
              </p>
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-tours-primary-600">28°C</div>
                <div className="text-sm text-neutral-600">Average Temperature</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
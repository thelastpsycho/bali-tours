import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star } from 'lucide-react'

interface DestinationCardProps {
  destination: {
    id: string
    name: string
    slug: string
    description: string
    image: string
    highlights: string[]
    location: {
      region: string
    }
    tours: string[]
  }
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.slug}`}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
            <div className="flex items-center text-white/90 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{destination.location.region}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-neutral-600 mb-4 line-clamp-2">{destination.description}</p>

          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {destination.highlights.slice(0, 3).map((highlight, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tours-primary-100 text-tours-primary-700"
                >
                  <Star className="h-3 w-3 mr-1" />
                  {highlight}
                </span>
              ))}
              {destination.highlights.length > 3 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600">
                  +{destination.highlights.length - 3} more
                </span>
              )}
            </div>
          </div>

          {destination.tours.length > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-500">
                {destination.tours.length} tour{destination.tours.length > 1 ? 's' : ''} available
              </span>
              <span className="text-tours-primary-600 font-medium text-sm group-hover:text-tours-primary-700">
                Explore →
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
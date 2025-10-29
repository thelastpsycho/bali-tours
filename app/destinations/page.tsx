import Image from 'next/image'
import { getAllDestinations, getDestinationsByRegion } from '@/data/destinations'
import DestinationCard from '@/components/shared/DestinationCard'
import { Search, MapPin } from 'lucide-react'

export default function DestinationsPage() {
  const allDestinations = getAllDestinations()
  const regions = Array.from(new Set(allDestinations.map(d => d.location.region)))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop&crop=entropy"
            alt="Bali Destinations"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Explore Bali's Destinations</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Discover the most beautiful and culturally rich destinations across the Island of the Gods
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-tours-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations by Region */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regions.map((region) => {
            const regionDestinations = getDestinationsByRegion(region)
            return (
              <div key={region} className="mb-16">
                <div className="flex items-center mb-8">
                  <MapPin className="h-6 w-6 text-tours-primary-600 mr-3" />
                  <h2 className="text-3xl font-bold text-tours-primary-950">{region}</h2>
                  <span className="ml-4 px-3 py-1 bg-tours-primary-100 text-tours-primary-700 rounded-full text-sm font-medium">
                    {regionDestinations.length} destination{regionDestinations.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regionDestinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-tours-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-tours-primary-600 mb-2">{allDestinations.length}</div>
              <div className="text-neutral-600">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tours-primary-600 mb-2">
                {regions.length}
              </div>
              <div className="text-neutral-600">Regions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tours-primary-600 mb-2">
                {allDestinations.reduce((sum, d) => sum + d.highlights.length, 0)}
              </div>
              <div className="text-neutral-600">Attractions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tours-primary-600 mb-2">
                {allDestinations.reduce((sum, d) => sum + d.activities.length, 0)}
              </div>
              <div className="text-neutral-600">Activities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
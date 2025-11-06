'use client'

import { Tour } from '@/types/tour'
import { InteractiveMap } from '@/components/maps/InteractiveMap'
import type { LatLngExpression } from 'leaflet'

interface TourMapProps {
  tour: Tour
  height?: string
  showRoute?: boolean
  showStops?: boolean
}

interface TourLocation {
  id: string
  name: string
  position: LatLngExpression
  type: 'start' | 'stop' | 'hotel' | 'restaurant' | 'temple' | 'beach' | 'viewpoint'
  description?: string
  time?: string
}

export function TourMap({ tour, height = '500px', showRoute = true, showStops = true }: TourMapProps) {
  // Convert tour itinerary to map locations
  const tourLocations: TourLocation[] = tour.itinerary.map((item, index) => {
    // Convert location names to coordinates (this would ideally come from your tour data)
    const locationCoords = getLocationCoordinates(item.location)

    return {
      id: `location-${index}`,
      name: item.location,
      position: locationCoords,
      type: index === 0 ? 'start' : index === tour.itinerary.length - 1 ? 'stop' : 'stop',
      description: item.activity,
      time: item.time,
    }
  })

  // Calculate map center based on locations
  const calculateCenter = (): LatLngExpression => {
    if (tourLocations.length === 0) return [-8.3405, 115.0920] // Default to Denpasar

    const lat = tourLocations.reduce((sum, loc) => sum + (loc.position as [number, number])[0], 0) / tourLocations.length
    const lng = tourLocations.reduce((sum, loc) => sum + (loc.position as [number, number])[1], 0) / tourLocations.length

    return [lat, lng]
  }

  // Create route from itinerary locations
  const routes = showRoute && tourLocations.length > 1
    ? [tourLocations.map(loc => loc.position)]
    : []

  return (
    <div className="space-y-4">
      {/* Map title and description */}
      <div className="bg-white rounded-lg border border-tours-neutral-200 p-6">
        <h3 className="text-xl font-display font-semibold text-tours-primary-950 mb-2">
          Tour Route Map
        </h3>
        <p className="text-tours-neutral-600">
          Explore the journey of your {tour.duration} {tour.durationHours}-hour tour through Bali's most beautiful destinations.
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-tours-neutral-600">
              {tour.itinerary.length} destinations
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-tours-neutral-600">
              Approximate {Math.round(tour.durationHours * 1.5)}km route
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-tours-neutral-600">
              {tour.duration} duration
            </span>
          </div>
        </div>
      </div>

      {/* Interactive map */}
      <InteractiveMap
        center={calculateCenter()}
        zoom={10}
        locations={showStops ? tourLocations : []}
        routes={routes}
        height={height}
        showRoute={showRoute}
      />

      {/* Detailed itinerary with map links */}
      {showStops && (
        <div className="bg-white rounded-lg border border-tours-neutral-200 p-6">
          <h4 className="text-lg font-display font-semibold text-tours-primary-950 mb-4">
            Detailed Itinerary
          </h4>
          <div className="space-y-4">
            {tour.itinerary.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-tours-neutral-50 transition-colors"
              >
                {/* Time indicator */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-tours-primary-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-tours-primary-900">
                      {item.time}
                    </span>
                  </div>
                </div>

                {/* Location info */}
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-tours-primary-950 mb-1">
                    {item.location}
                  </h5>
                  <p className="text-tours-neutral-600 mb-2">
                    {item.activity}
                  </p>
                  {item.description && (
                    <p className="text-sm text-tours-neutral-500">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Stop type indicator */}
                <div className="flex-shrink-0">
                  <div className="px-3 py-1 rounded-full bg-tours-neutral-100">
                    <span className="text-sm text-tours-neutral-700">
                      {index === 0 ? 'Start' : index === tour.itinerary.length - 1 ? 'End' : 'Stop'} {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Helper function to get coordinates for known Bali locations
// In a real application, this data should be stored in your tour data
function getLocationCoordinates(location: string): LatLngExpression {
  const locationMap: Record<string, LatLngExpression> = {
    // Ubud Area
    'Tegalalang Rice Terrace': [-8.4194, 115.2898],
    'Ubud Monkey Forest': [-8.5189, 115.2590],
    'Ubud Palace': [-8.5069, 115.2615],
    'Tirta Empul Temple': [-8.4233, 115.3166],
    'Coffee Plantation': [-8.4194, 115.2898],

    // Uluwatu Area
    'Uluwatu Temple': [-8.8406, 115.1036],
    'Kecak Dance': [-8.8406, 115.1036],
    'Jimbaran Beach': [-8.7812, 115.1683],

    // North Bali
    'Handara Gate': [-8.2249, 115.1447],
    'Ulun Danu Temple': [-8.2754, 115.1658],
    'Wanagiri Hidden Hills': [-8.2344, 115.1572],
    'Jatiluwih Rice Terrace': [-8.2795, 115.1338],

    // Waterfalls
    'Tegenungan Waterfall': [-8.5664, 115.3092],
    'Tibumana Waterfall': [-8.5748, 115.3131],
    'Tukad Cepung Waterfall': [-8.5748, 115.3131],

    // East Bali
    'Lempuyang Temple': [-8.3772, 115.5014],
    'Tirta Gangga': [-8.4405, 115.5150],
    'Taman Ujung': [-8.4597, 115.5279],
    'Virgin Beach': [-8.5353, 115.5500],

    // Default fallback
    'Hotel Pickup': [-8.3405, 115.0920],
  }

  return locationMap[location] || [-8.3405, 115.0920] // Default to Denpasar
}
'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import * as L from 'leaflet'
import type { LatLngExpression } from 'leaflet'
import { MapPin, Navigation2 } from 'lucide-react'

// Dynamic import to avoid SSR issues with Leaflet
const MapContainerDynamic = dynamic(
  () => Promise.resolve(({ children, className, center, zoom }: any) => (
    <MapContainer
      center={center}
      zoom={zoom}
      className={className}
      zoomControl={true}
    >
      {children}
    </MapContainer>
  )),
  { ssr: false }
)

// Fix for Leaflet icons
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
})

interface MapLocation {
  id: string
  name: string
  position: LatLngExpression
  type: 'start' | 'stop' | 'hotel' | 'restaurant' | 'temple' | 'beach' | 'viewpoint'
  description?: string
  time?: string
}

interface InteractiveMapProps {
  center?: LatLngExpression
  zoom?: number
  locations?: MapLocation[]
  routes?: LatLngExpression[][]
  height?: string
  showRoute?: boolean
  interactive?: boolean
}

const getColorByType = (type: MapLocation['type']): string => {
  switch (type) {
    case 'start': return '#22c55e'
    case 'stop': return '#3b82f6'
    case 'hotel': return '#8b5cf6'
    case 'restaurant': return '#f59e0b'
    case 'temple': return '#e11d48'
    case 'beach': return '#06b6d4'
    case 'viewpoint': return '#84cc16'
    default: return '#64748b'
  }
}

export function InteractiveMap({
  center = [-8.3405, 115.0920], // Default to Denpasar, Bali
  zoom = 11,
  locations = [],
  routes = [],
  height = '400px',
  showRoute = true,
  interactive = true,
}: InteractiveMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)
  const [map, setMap] = useState<any>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  // Focus map on selected location
  useEffect(() => {
    if (selectedLocation && map) {
      map.setView(selectedLocation.position, 14, {
        animate: true,
        duration: 1
      })
    }
  }, [selectedLocation, map])

  // Create custom icons
  const createCustomIcon = (type: MapLocation['type']) => {
    const color = getColorByType(type)

    return L.divIcon({
      html: `
        <div style="
          background: ${color};
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          position: relative;
        ">
          <div style="
            position: absolute;
            top: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid ${color};
          "></div>
        </div>
      `,
      className: 'custom-marker',
      iconSize: [24, 32],
      iconAnchor: [12, 32],
      popupAnchor: [0, -32],
    })
  }

  if (typeof window === 'undefined') {
    return (
      <div className="bg-tours-neutral-100 rounded-2xl flex items-center justify-center" style={{ height }}>
        <div className="text-tours-neutral-500">Loading map...</div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Location list sidebar */}
      {locations.length > 0 && (
        <div className="bg-white rounded-lg border border-tours-neutral-200 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Navigation2 className="w-5 h-5 text-tours-primary-600" />
            <h3 className="font-semibold text-tours-primary-950">Tour Stops</h3>
          </div>
          <div className="space-y-2">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedLocation?.id === location.id
                    ? 'bg-tours-primary-50 border border-tours-primary-200'
                    : 'hover:bg-tours-neutral-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: getColorByType(location.type) }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-tours-primary-900">
                        {index + 1}. {location.name}
                      </span>
                      {location.time && (
                        <span className="text-xs text-tours-neutral-500">
                          {location.time}
                        </span>
                      )}
                    </div>
                    {location.description && (
                      <p className="text-sm text-tours-neutral-600 truncate">
                        {location.description}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Map container */}
      <div
        ref={mapRef}
        style={{ height }}
        className="rounded-2xl overflow-hidden shadow-elegant"
      >
        <MapContainerDynamic
          center={center}
          zoom={zoom}
          className="h-full w-full"
          whenCreated={setMap}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Draw routes */}
          {showRoute && routes.map((route, index) => (
            <Polyline
              key={index}
              positions={route}
              color="#3b82f6"
              weight={4}
              opacity={0.7}
              dashArray={index > 0 ? '5, 10' : undefined}
            />
          ))}

          {/* Draw direct route between locations */}
          {showRoute && locations.length > 1 && (
            <Polyline
              positions={locations.map(loc => loc.position)}
              color="#3b82f6"
              weight={3}
              opacity={0.5}
              dashArray="10, 10"
            />
          )}

          {/* Location markers */}
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              icon={createCustomIcon(location.type)}
              eventHandlers={{
                click: () => setSelectedLocation(location),
              }}
            >
              <Popup className="tour-map-popup">
                <div className="space-y-2">
                  <h4 className="font-semibold text-tours-primary-950">
                    {location.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getColorByType(location.type) }}
                    />
                    <span className="text-sm text-tours-neutral-600 capitalize">
                      {location.type}
                    </span>
                    {location.time && (
                      <span className="text-sm text-tours-neutral-500">
                        • {location.time}
                      </span>
                    )}
                  </div>
                  {location.description && (
                    <p className="text-sm text-tours-neutral-700">
                      {location.description}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Radius circle for tour coverage */}
          {locations.length > 0 && (
            <CircleMarker
              center={locations[0].position}
              radius={20000} // 20km radius
              fillColor="#3b82f6"
              fillOpacity={0.1}
              color="#3b82f6"
              opacity={0.3}
              weight={2}
              dashArray="5, 10"
            />
          )}
        </MapContainerDynamic>
      </div>

      {/* Map legend */}
      <div className="bg-white rounded-lg border border-tours-neutral-200 p-4">
        <h4 className="font-medium text-tours-primary-950 mb-3">Map Legend</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {([
            { type: 'start', label: 'Start Point' },
            { type: 'stop', label: 'Tour Stop' },
            { type: 'temple', label: 'Temple' },
            { type: 'restaurant', label: 'Restaurant' },
            { type: 'beach', label: 'Beach' },
            { type: 'hotel', label: 'Hotel' },
            { type: 'viewpoint', label: 'Viewpoint' },
          ] as const).map(({ type, label }) => (
            <div key={type} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getColorByType(type) }}
              />
              <span className="text-sm text-tours-neutral-600">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
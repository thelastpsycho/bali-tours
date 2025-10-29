'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'
import { Tour } from '@/types/tour'
import Button from './shared/Button'
import { formatCurrency, generateWhatsAppLink } from '@/lib/utils'

interface BookingWidgetProps {
  tour: Tour
}

export default function BookingWidget({ tour }: BookingWidgetProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<keyof typeof tour.pricing>('smallCar')
  const [participants, setParticipants] = useState(2)

  const vehicleOptions = [
    {
      key: 'smallCar',
      label: 'Small Car',
      capacity: 'Up to 4 passengers',
      description: 'Toyota Avanza or similar',
      icon: '🚗'
    },
    {
      key: 'mediumCar',
      label: 'Medium Car',
      capacity: 'Up to 6 passengers',
      description: 'Toyota Innova or similar',
      icon: '🚙'
    },
    {
      key: 'largeVan',
      label: 'Large Van',
      capacity: 'Up to 12 passengers',
      description: 'Toyota Hiace or similar',
      icon: '🚐'
    },
    {
      key: 'luxury',
      label: 'Luxury Vehicle',
      capacity: 'Up to 4 passengers',
      description: 'Premium luxury car',
      icon: '🏎️'
    }
  ]

  const whatsappLink = generateWhatsAppLink({
    tourName: tour.name,
    vehicleType: vehicleOptions.find(v => v.key === selectedVehicle)?.label || '',
    passengers: participants,
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  })

  const totalPrice = tour.pricing[selectedVehicle] || 0

  return (
    <div className="bg-white rounded-2xl p-6 sticky top-8">
      <h2 className="text-2xl font-display font-semibold mb-4">Book This Tour</h2>

      {/* Vehicle Selection */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Select Vehicle</h3>
        <div className="space-y-3">
          {vehicleOptions.map((vehicle) => (
            <label
              key={vehicle.key}
              className={`relative block cursor-pointer rounded-lg border p-4 transition-all hover:shadow-md ${
                selectedVehicle === vehicle.key
                  ? 'border-tours-primary-900 bg-tours-primary-50'
                  : 'border-tours-neutral-300'
              }`}
            >
              <input
                type="radio"
                name="vehicle"
                value={vehicle.key}
                checked={selectedVehicle === vehicle.key}
                onChange={(e) => setSelectedVehicle(e.target.value as keyof typeof tour.pricing)}
                className="sr-only"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{vehicle.icon}</span>
                  <div>
                    <p className="font-semibold">{vehicle.label}</p>
                    <p className="text-sm text-tours-neutral-600">{vehicle.capacity}</p>
                  </div>
                </div>
                <p className="font-bold text-tours-primary-900">
                  {formatCurrency(tour.pricing[vehicle.key as keyof typeof tour.pricing] || 0)}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Participants */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-tours-primary-900 mb-2">
          Number of Participants
        </label>
        <select
          value={participants}
          onChange={(e) => setParticipants(Number(e.target.value))}
          className="w-full px-4 py-3 border border-tours-neutral-300 rounded-lg bg-white text-tours-primary-900 focus:outline-none focus:ring-2 focus:ring-tours-primary-900 focus:border-transparent"
        >
          {Array.from({ length: tour.maxParticipants }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Person' : 'People'}
            </option>
          ))}
        </select>
      </div>

      {/* Price Summary */}
      <div className="border-t border-tours-neutral-200 pt-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-tours-neutral-600">Vehicle Price</span>
          <span className="font-semibold">{formatCurrency(totalPrice)}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-tours-neutral-600">Duration</span>
          <span className="font-semibold">{tour.durationHours} hours</span>
        </div>
        <div className="flex justify-between items-center text-lg font-bold text-tours-primary-900 pt-2 border-t border-tours-neutral-200">
          <span>Total Price</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        <Button
          as="a"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          size="lg"
          className="w-full"
        >
          <Phone className="w-5 h-5 mr-2" />
          Book via WhatsApp
        </Button>
        <Button variant="secondary" size="lg" className="w-full">
          Ask a Question
        </Button>
      </div>

      <p className="text-xs text-tours-neutral-500 mt-4 text-center">
        No upfront payment required. Pay on the day of the tour.
      </p>
    </div>
  )
}
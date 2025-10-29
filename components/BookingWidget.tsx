'use client'

import { useState } from 'react'
import { Phone, Calendar, Users } from 'lucide-react'
import { Tour } from '@/types/tour'
import Button from './shared/Button'
import { formatCurrency, generateWhatsAppLink, generateWhatsAppLinkWithMessage } from '@/lib/utils'
import { CONTACT_INFO } from '@/lib/constants'

interface BookingWidgetProps {
  tour: Tour
}

export default function BookingWidget({ tour }: BookingWidgetProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<keyof typeof tour.pricing>('smallCar')
  const [participants, setParticipants] = useState(2)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('08:00')

  // Get tomorrow's date as minimum
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  // Get max date (1 year from now)
  const maxDate = new Date()
  maxDate.setFullYear(maxDate.getFullYear() + 1)
  const maxDateString = maxDate.toISOString().split('T')[0]

  const vehicleOptions = [
    {
      key: 'smallCar' as const,
      label: 'Small Car',
      capacity: 'Up to 4 passengers',
      description: 'Toyota Avanza or similar',
      icon: '🚗',
      multiplier: 1.0
    },
    {
      key: 'mediumCar' as const,
      label: 'Medium Car',
      capacity: 'Up to 6 passengers',
      description: 'Toyota Innova or similar',
      icon: '🚙',
      multiplier: 1.3
    },
    {
      key: 'largeVan' as const,
      label: 'Large Van',
      capacity: 'Up to 12 passengers',
      description: 'Toyota Hiace or similar',
      icon: '🚐',
      multiplier: 1.8
    },
    {
      key: 'luxury' as const,
      label: 'Luxury Vehicle',
      capacity: 'Up to 4 passengers',
      description: 'Premium luxury car',
      icon: '🏎️',
      multiplier: 2.5
    }
  ]

  // Calculate total price based on vehicle and participants
  const basePrice = tour.pricing[selectedVehicle] || 0
  const vehicleMultiplier = vehicleOptions.find(v => v.key === selectedVehicle)?.multiplier || 1
  const totalPrice = Math.round(basePrice * vehicleMultiplier)

  const timeOptions = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const whatsappLink = generateWhatsAppLink({
    tourName: tour.name,
    vehicleType: vehicleOptions.find(v => v.key === selectedVehicle)?.label || '',
    passengers: participants,
    date: selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : undefined
  })

  const handleAskQuestion = () => {
    const message = `Hi! I have a question about the ${tour.name} tour. Can you help me?`
    const link = generateWhatsAppLinkWithMessage(message)
    window.open(link, '_blank')
  }

  const handleBookNow = () => {
    if (!selectedDate) {
      alert('Please select a date for your tour.')
      return
    }
    window.open(whatsappLink, '_blank')
  }

  return (
    <div className="bg-white rounded-2xl border border-tours-neutral-200 p-6 sticky top-8 shadow-elegant">
      <h2 className="text-2xl font-display font-semibold text-tours-primary-950 mb-6">Book This Tour</h2>

      {/* Date Selection */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-sm font-medium text-tours-primary-900 mb-2">
          <Calendar className="w-4 h-4" />
          Select Date
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          min={minDate}
          max={maxDateString}
          className="w-full px-4 py-3 border border-tours-neutral-300 rounded-lg bg-white text-tours-primary-900 focus:outline-none focus:ring-2 focus:ring-tours-primary-900 focus:border-transparent transition-colors"
          required
        />
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-tours-primary-900 mb-2">
            <Calendar className="w-4 h-4" />
            Preferred Time
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-4 py-3 border border-tours-neutral-300 rounded-lg bg-white text-tours-primary-900 focus:outline-none focus:ring-2 focus:ring-tours-primary-900 focus:border-transparent transition-colors"
          >
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time} ({time === '08:00' ? 'Morning Start' : time === '13:00' ? 'Afternoon Start' : 'Flexible Time'})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Vehicle Selection */}
      <div className="mb-6">
        <h3 className="font-semibold text-tours-primary-900 mb-3">Select Vehicle</h3>
        <div className="space-y-3">
          {vehicleOptions.map((vehicle) => (
            <label
              key={vehicle.key}
              className={`relative block cursor-pointer rounded-xl border p-4 transition-all duration-200 hover:shadow-md ${
                selectedVehicle === vehicle.key
                  ? 'border-tours-primary-600 bg-tours-primary-50 shadow-sm'
                  : 'border-tours-neutral-300 hover:border-tours-primary-400'
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
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{vehicle.icon}</span>
                  <div>
                    <p className="font-semibold text-tours-primary-900">{vehicle.label}</p>
                    <p className="text-sm text-tours-neutral-600">{vehicle.capacity}</p>
                    <p className="text-xs text-tours-neutral-500">{vehicle.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-tours-primary-900">
                    {formatCurrency(totalPrice)}
                  </p>
                  {vehicle.multiplier > 1 && (
                    <p className="text-xs text-tours-accent-600">
                      {vehicle.multiplier}x multiplier
                    </p>
                  )}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Participants */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-sm font-medium text-tours-primary-900 mb-2">
          <Users className="w-4 h-4" />
          Number of Participants
        </label>
        <select
          value={participants}
          onChange={(e) => setParticipants(Number(e.target.value))}
          className="w-full px-4 py-3 border border-tours-neutral-300 rounded-lg bg-white text-tours-primary-900 focus:outline-none focus:ring-2 focus:ring-tours-primary-900 focus:border-transparent transition-colors"
        >
          {Array.from({ length: tour.maxParticipants }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Person' : 'People'}
            </option>
          ))}
        </select>
      </div>

      {/* Price Summary */}
      <div className="border-t border-tours-neutral-200 pt-4 mb-6 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-tours-neutral-600">Base Price ({vehicleOptions.find(v => v.key === selectedVehicle)?.label})</span>
          <span className="font-semibold">{formatCurrency(basePrice)}</span>
        </div>
        {vehicleMultiplier > 1 && (
          <div className="flex justify-between items-center">
            <span className="text-tours-neutral-600">Vehicle Surcharge ({vehicleMultiplier}x)</span>
            <span className="font-semibold text-tours-accent-600">
              +{formatCurrency(Math.round(basePrice * (vehicleMultiplier - 1)))}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center text-sm text-tours-neutral-600">
          <span>Duration</span>
          <span>{tour.durationHours} hours</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-tours-neutral-200">
          <span className="text-lg font-bold text-tours-primary-900">Total Price</span>
          <span className="text-2xl font-bold text-tours-primary-900">
            {formatCurrency(totalPrice)}
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleBookNow}
          className="w-full bg-tours-accent-600 text-tours-primary-950 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:bg-tours-accent-500 hover:shadow-elegant-md active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Book via WhatsApp
        </button>
        <button
          onClick={handleAskQuestion}
          className="w-full bg-white text-tours-primary-900 border border-tours-neutral-300 px-8 py-3.5 rounded-lg font-medium transition-all duration-300 hover:border-tours-primary-900 hover:shadow-elegant active:scale-[0.98]"
        >
          Ask a Question
        </button>
      </div>

      <div className="mt-6 p-4 bg-tours-neutral-50 rounded-xl">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-tours-accent-500 rounded-full mt-2 flex-shrink-0"></div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-tours-primary-900">
              No upfront payment required
            </p>
            <p className="text-xs text-tours-neutral-600">
              Pay on the day of the tour. Free cancellation up to 24 hours before.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
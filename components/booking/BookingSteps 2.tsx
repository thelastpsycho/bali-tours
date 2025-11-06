'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import BookingWizard from './BookingWizard'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Select from '@/components/shared/Select'
import { getAllTours } from '@/data/tours'
import { getAllVehicles } from '@/data/vehicles'
import {
  Calendar,
  MapPin,
  Users,
  Car,
  CreditCard,
  CheckCircle,
  Loader2
} from 'lucide-react'

const customerSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number is required'),
  country: z.string().min(2, 'Country is required'),
  adults: z.number().min(1, 'At least 1 adult is required'),
  children: z.number().min(0),
  infants: z.number().min(0),
})

const tourSchema = z.object({
  tourId: z.string().min(1, 'Please select a tour'),
  date: z.string().min(1, 'Tour date is required'),
  pickupLocation: z.string().min(5, 'Pickup location is required'),
  specialRequests: z.string().optional(),
})

const vehicleSchema = z.object({
  vehicleId: z.string().min(1, 'Please select a vehicle'),
  additionalServices: z.array(z.string()).optional(),
})

const paymentSchema = z.object({
  method: z.enum(['cash', 'bank-transfer', 'paypal', 'credit-card']),
  agreeTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
})

export default function BookingSteps() {
  const router = useRouter()
  const [bookingData, setBookingData] = useState<any>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const tours = getAllTours()
  const vehicles = getAllVehicles()

  const customerForm = useForm<z.infer<typeof customerSchema>>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      adults: 2,
      children: 0,
      infants: 0,
    },
  })

  const tourForm = useForm<z.infer<typeof tourSchema>>({
    resolver: zodResolver(tourSchema),
    defaultValues: {
      tourId: '',
      date: '',
      pickupLocation: '',
      specialRequests: '',
    },
  })

  const vehicleForm = useForm<z.infer<typeof vehicleSchema>>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      vehicleId: '',
      additionalServices: [],
    },
  })

  const paymentForm = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      method: 'cash',
      agreeTerms: false,
    },
  })

  const steps = [
    {
      id: 'customer',
      title: 'Your Details',
      description: 'Personal information',
    },
    {
      id: 'tour',
      title: 'Tour Selection',
      description: 'Choose your tour',
    },
    {
      id: 'vehicle',
      title: 'Vehicle',
      description: 'Select transportation',
    },
    {
      id: 'payment',
      title: 'Payment',
      description: 'Payment method',
    },
  ]

  const handleStepSubmit = async (step: string) => {
    let formData: any

    switch (step) {
      case 'customer':
        const customerData = customerForm.getValues()
        formData = { customerInfo: customerData }
        break
      case 'tour':
        const tourData = tourForm.getValues()
        const selectedTour = tours.find(t => t.id === tourData.tourId)
        formData = {
          tourInfo: {
            ...tourData,
            tourName: selectedTour?.name,
            duration: selectedTour?.duration,
          }
        }
        break
      case 'vehicle':
        const vehicleData = vehicleForm.getValues()
        const selectedVehicle = vehicles.find(v => v.id === vehicleData.vehicleId)
        formData = {
          vehicleInfo: {
            ...vehicleData,
            vehicleName: selectedVehicle?.name,
            vehicleType: selectedVehicle?.type,
            priceMultiplier: selectedVehicle?.priceMultiplier,
          }
        }
        break
      case 'payment':
        const paymentData = paymentForm.getValues()
        formData = { payment: paymentData }
        break
    }

    setBookingData({ ...bookingData, ...formData })
  }

  const handleCompleteBooking = async () => {
    setIsSubmitting(true)
    try {
      const completeBookingData = {
        ...bookingData,
        pricing: {
          basePrice: bookingData.vehicleInfo?.basePrice || 0,
          additionalServices: 0,
          total: bookingData.vehicleInfo?.basePrice || 0,
          currency: 'USD',
        }
      }

      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(completeBookingData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        console.error('Booking failed:', result.errors)
        alert('Booking failed. Please try again.')
      }
    } catch (error) {
      console.error('Booking error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="mb-6">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Booking Confirmed!</h1>
        <p className="text-lg text-neutral-600 mb-8">
          Thank you for your booking! We will send a confirmation email shortly.
        </p>
        <div className="space-y-3">
          <Button variant="primary" onClick={() => router.push('/')}>
            Back to Home
          </Button>
          <Button variant="outline" onClick={() => router.push('/tours')}>
            Browse More Tours
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your Bali Adventure</h1>
          <p className="text-lg text-neutral-600">
            Follow these simple steps to book your perfect Bali tour experience
          </p>
        </div>

        <BookingWizard
          steps={steps}
          onSubmit={handleCompleteBooking}
        >
          {/* Step 1: Customer Information */}
          <div>
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-tours-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Customer Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                {...customerForm.register('firstName')}
                error={customerForm.formState.errors.firstName?.message}
              />
              <Input
                label="Last Name"
                {...customerForm.register('lastName')}
                error={customerForm.formState.errors.lastName?.message}
              />
              <Input
                label="Email"
                type="email"
                {...customerForm.register('email')}
                error={customerForm.formState.errors.email?.message}
              />
              <Input
                label="Phone"
                {...customerForm.register('phone')}
                error={customerForm.formState.errors.phone?.message}
              />
              <Input
                label="Country"
                {...customerForm.register('country')}
                error={customerForm.formState.errors.country?.message}
              />
              <Input
                label="Adults"
                type="number"
                min="1"
                {...customerForm.register('adults', { valueAsNumber: true })}
                error={customerForm.formState.errors.adults?.message}
              />
              <Input
                label="Children (3-12 years)"
                type="number"
                min="0"
                {...customerForm.register('children', { valueAsNumber: true })}
              />
              <Input
                label="Infants (0-2 years)"
                type="number"
                min="0"
                {...customerForm.register('infants', { valueAsNumber: true })}
              />
            </div>
          </div>

          {/* Step 2: Tour Selection */}
          <div>
            <div className="flex items-center mb-6">
              <Calendar className="h-6 w-6 text-tours-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Tour Selection</h2>
            </div>

            <div className="space-y-4">
              <Select
                label="Select Tour"
                {...tourForm.register('tourId')}
                error={tourForm.formState.errors.tourId?.message}
              >
                <option value="">Choose a tour...</option>
                {tours.map((tour) => (
                  <option key={tour.id} value={tour.id}>
                    {tour.name} - Starting from ${Math.min(...Object.values(tour.pricing))}
                  </option>
                ))}
              </Select>

              <Input
                label="Tour Date"
                type="date"
                {...tourForm.register('date')}
                error={tourForm.formState.errors.date?.message}
              />

              <Input
                label="Pickup Location"
                placeholder="Hotel name, airport, or address"
                {...tourForm.register('pickupLocation')}
                error={tourForm.formState.errors.pickupLocation?.message}
              />

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  {...tourForm.register('specialRequests')}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tours-primary-500 focus:border-tours-primary-500"
                  rows={4}
                  placeholder="Any special requirements or requests..."
                />
              </div>
            </div>
          </div>

          {/* Step 3: Vehicle Selection */}
          <div>
            <div className="flex items-center mb-6">
              <Car className="h-6 w-6 text-tours-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Vehicle Selection</h2>
            </div>

            <div className="space-y-4">
              <Select
                label="Select Vehicle"
                {...vehicleForm.register('vehicleId')}
                error={vehicleForm.formState.errors.vehicleId?.message}
              >
                <option value="">Choose a vehicle...</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.name} ({vehicle.type})
                  </option>
                ))}
              </Select>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Additional Services (Optional)
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="child-seat"
                      {...vehicleForm.register('additionalServices')}
                      className="mr-2"
                    />
                    Child Seat (+$10)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="wifi-router"
                      {...vehicleForm.register('additionalServices')}
                      className="mr-2"
                    />
                    WiFi Router (+$5/day)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="cool-box"
                      {...vehicleForm.register('additionalServices')}
                      className="mr-2"
                    />
                    Cool Box (+$15)
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Payment */}
          <div>
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 text-tours-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Payment Method</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Select Payment Method
                </label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input
                      type="radio"
                      value="cash"
                      {...paymentForm.register('method')}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Cash Payment</div>
                      <div className="text-sm text-neutral-600">Pay in cash on the tour day</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50">
                    <input
                      type="radio"
                      value="bank-transfer"
                      {...paymentForm.register('method')}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Bank Transfer</div>
                      <div className="text-sm text-neutral-600">Transfer to our bank account</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-medium text-amber-900 mb-2">Booking Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Vehicle:</span>
                    <span>{bookingData.vehicleInfo?.vehicleName || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base Price:</span>
                    <span>${bookingData.vehicleInfo?.basePrice || 0}/day</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>${bookingData.vehicleInfo?.basePrice || 0}</span>
                  </div>
                </div>
              </div>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  {...paymentForm.register('agreeTerms')}
                  className="mr-3 mt-1"
                />
                <span className="text-sm text-neutral-600">
                  I agree to the terms and conditions and cancellation policy. I understand that
                  payment will be made on the tour day for cash bookings.
                </span>
              </label>
              {paymentForm.formState.errors.agreeTerms && (
                <p className="text-sm text-red-600">{paymentForm.formState.errors.agreeTerms.message}</p>
              )}
            </div>
          </div>
        </BookingWizard>
      </div>
    </div>
  )
}
import Image from 'next/image'
import { getAllVehicles } from '@/data/vehicles'
import VehicleCard from '@/components/shared/VehicleCard'
import Button from '@/components/shared/Button'
import {
  Car,
  Users,
  Fuel,
  MapPin,
  Star,
  Clock,
  Shield,
  Heart,
  CheckCircle,
  Navigation
} from 'lucide-react'

export default function FleetPage() {
  const vehicles = getAllVehicles()

  const vehicleTypes = Array.from(new Set(vehicles.map(v => v.type)))
  const totalCapacity = vehicles.reduce((sum, v) => sum + v.capacity.passengers, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1674500522724-3d2a371d4c1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1375"
            alt="Vehicle Fleet"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-slate-300">Our Premium Fleet</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Choose from our well-maintained fleet of vehicles, from comfortable sedans to spacious
              SUVs, all equipped with modern amenities and safety features.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                View All Vehicles
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-900">
                Contact for Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-12 bg-tours-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-tours-primary-600 mb-2">{vehicles.length}</div>
              <div className="text-neutral-600">Vehicles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tours-primary-600 mb-2">
                {vehicleTypes.length}
              </div>
              <div className="text-neutral-600">Vehicle Types</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tours-primary-600 mb-2">
                {totalCapacity}
              </div>
              <div className="text-neutral-600">Total Seats</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tours-primary-600 mb-2">24/7</div>
              <div className="text-neutral-600">Service Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Vehicle Categories</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We offer a variety of vehicle types to suit your travel needs, from solo travelers to large groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          {/* Fleet Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Why Choose Our Fleet?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tours-primary-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-tours-primary-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Well-Maintained</h4>
                  <p className="text-sm text-neutral-600">Regular maintenance and cleaning schedules</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tours-primary-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-tours-primary-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Safety First</h4>
                  <p className="text-sm text-neutral-600">Equipped with safety features and insurance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tours-primary-100 rounded-lg flex items-center justify-center">
                    <Car className="h-6 w-6 text-tours-primary-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Modern Amenities</h4>
                  <p className="text-sm text-neutral-600">AC, WiFi, charging ports, and comfortable seating</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tours-primary-100 rounded-lg flex items-center justify-center">
                    <Navigation className="h-6 w-6 text-tours-primary-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">GPS Navigation</h4>
                  <p className="text-sm text-neutral-600">Real-time navigation and traffic updates</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tours-primary-100 rounded-lg flex items-center justify-center">
                    <Fuel className="h-6 w-6 text-tours-primary-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Fuel Included</h4>
                  <p className="text-sm text-neutral-600">All packages include fuel for your journey</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-tours-primary-100 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-tours-primary-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Child-Friendly</h4>
                  <p className="text-sm text-neutral-600">Child seats available upon request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 bg-tours-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Book Your Ride?</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our professional drivers are ready to take you on your Bali adventure. Whether you need
                airport transfers, city tours, or custom itineraries, we've got you covered.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-tours-primary-600 mr-3" />
                  <span className="text-neutral-700">24/7 Availability</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-tours-primary-600 mr-3" />
                  <span className="text-neutral-700">Door-to-Door Service</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-tours-primary-600 mr-3" />
                  <span className="text-neutral-700">Professional English-speaking Drivers</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" as="a" href="/contact">
                  Get Quote
                </Button>
                <Button variant="outline" size="lg" as="a" href="https://wa.me/6281234567890?text=Hi! I'm interested in booking a vehicle for my Bali tour." target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661306646017-c3f9293fdbd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                alt="Professional Driver"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-semibold">4.9/5 Customer Rating</span>
                  </div>
                  <p className="text-sm">Join thousands of satisfied customers who chose Bali Tours Transportation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
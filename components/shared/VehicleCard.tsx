import Image from 'next/image'
import { Users, Briefcase, Star } from 'lucide-react'
import { Vehicle } from '@/types/tour'

interface VehicleCardProps {
  vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-tours-primary-600 text-white rounded-full text-sm font-medium">
            {vehicle.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{vehicle.name}</h3>
            <p className="text-neutral-600">{vehicle.model}</p>
          </div>
        </div>

        {/* Vehicle Specs */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center p-3 bg-slate-50 rounded-lg">
            <Users className="h-5 w-5 text-tours-primary-600 mx-auto mb-1" />
            <div className="text-xs text-neutral-600">Seats</div>
            <div className="font-semibold text-slate-900">{vehicle.capacity.passengers}</div>
          </div>
          <div className="text-center p-3 bg-slate-50 rounded-lg">
            <Briefcase className="h-5 w-5 text-tours-primary-600 mx-auto mb-1" />
            <div className="text-xs text-neutral-600">Luggage</div>
            <div className="font-semibold text-slate-900">{vehicle.capacity.luggage}</div>
          </div>
          <div className="text-center p-3 bg-slate-50 rounded-lg">
            <Star className="h-5 w-5 text-tours-primary-600 mx-auto mb-1" />
            <div className="text-xs text-neutral-600">Available</div>
            <div className="font-semibold text-slate-900">
              {vehicle.available ? 'Yes' : 'No'}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {vehicle.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tours-primary-100 text-tours-primary-700"
              >
                {feature}
              </span>
            ))}
            {vehicle.features.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600">
                +{vehicle.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center pt-4 border-t border-neutral-200">
          <a href="/contact" className="px-6 py-2 bg-tours-primary-600 text-white rounded-lg hover:bg-tours-primary-700 transition-colors text-sm font-medium text-center">
            Inquire About This Vehicle
          </a>
        </div>
      </div>
    </div>
  )
}
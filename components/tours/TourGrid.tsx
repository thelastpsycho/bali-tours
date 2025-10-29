import TourCard from './TourCard'
import { Tour } from '@/types/tour'

interface TourGridProps {
  tours: Tour[]
  className?: string
}

export default function TourGrid({ tours, className }: TourGridProps) {
  if (tours.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-tours-neutral-600 text-lg">No tours found. Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
            className="animate-fade-in"
          />
        ))}
      </div>
    </div>
  )
}
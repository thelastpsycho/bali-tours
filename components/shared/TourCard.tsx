import Link from 'next/link'
import { Star, Clock, Users } from 'lucide-react'
import { Tour } from '@/types/tour'
import Card from './Card'
import Badge from './Badge'
import Button from './Button'
import { formatCurrency } from '@/lib/utils'

interface TourCardProps {
  tour: Tour
  variant?: 'standard' | 'featured'
}

export default function TourCard({ tour, variant = 'standard' }: TourCardProps) {
  const minPrice = Math.min(...Object.values(tour.pricing))

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50'
      case 'moderate': return 'text-yellow-600 bg-yellow-50'
      case 'challenging': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  if (variant === 'featured') {
    return (
      <Card variant="featured" className="overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Tour Image */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="aspect-video md:aspect-square bg-tours-neutral-200 relative overflow-hidden">
              <img
                src={tour.images.main}
                alt={tour.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Tour Content */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant={tour.popularRank <= 3 ? 'accent' : 'primary'}>
                    #{tour.popularRank} Most Popular
                  </Badge>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tour.difficulty)}`}>
                    {tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-tours-primary-950 mb-2">
                  {tour.name}
                </h3>
              </div>
            </div>

            <p className="text-tours-neutral-700 mb-4 leading-relaxed">
              {tour.shortDescription}
            </p>

            {/* Tour Details */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-tours-neutral-600 mb-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {tour.durationHours} hours
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                Up to {tour.maxParticipants} people
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-amber-500" />
                {tour.rating} ({tour.reviewCount} reviews)
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tour.category.map((cat) => (
                <Badge key={cat} variant="secondary" className="text-xs">
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Badge>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-tours-neutral-200">
              <div>
                <p className="text-sm text-tours-neutral-600">Starting from</p>
                <p className="text-2xl font-bold text-tours-primary-900">
                  {formatCurrency(minPrice)}
                </p>
              </div>
              <Button as={Link} href={`/tours/${tour.slug}`} variant="primary">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card variant="standard" className="overflow-hidden">
      {/* Tour Image */}
      <div className="aspect-video bg-tours-neutral-200 relative overflow-hidden">
        <img
          src={tour.images.main}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant={tour.popularRank <= 3 ? 'accent' : 'primary'}>
            #{tour.popularRank} Most Popular
          </Badge>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tour.difficulty)}`}>
            {tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}
          </span>
        </div>

        <h3 className="text-lg font-display font-semibold text-tours-primary-950 mb-2">
          {tour.name}
        </h3>

        <p className="text-tours-neutral-700 mb-4 text-sm leading-relaxed">
          {tour.shortDescription}
        </p>

        {/* Tour Details */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-tours-neutral-600 mb-4">
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {tour.durationHours}h
          </div>
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            {tour.maxParticipants} people
          </div>
          <div className="flex items-center">
            <Star className="w-3 h-3 mr-1 text-amber-500" />
            {tour.rating} ({tour.reviewCount})
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tour.category.slice(0, 3).map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Badge>
          ))}
          {tour.category.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{tour.category.length - 3}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-tours-neutral-200">
          <div>
            <p className="text-xs text-tours-neutral-600">From</p>
            <p className="text-lg font-bold text-tours-primary-900">
              {formatCurrency(minPrice)}
            </p>
          </div>
          <Button as={Link} href={`/tours/${tour.slug}`} variant="primary" size="sm">
            View Tour
          </Button>
        </div>
      </div>
    </Card>
  )
}
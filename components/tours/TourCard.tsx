import Link from 'next/link'
import Image from 'next/image'
import { Star, Clock, Users } from 'lucide-react'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'
import Button from '@/components/shared/Button'
import { formatCurrency } from '@/lib/utils'
import { Tour } from '@/types/tour'

interface TourCardProps {
  tour: Tour
  className?: string
}

export default function TourCard({ tour, className }: TourCardProps) {
  const { id, slug, name, shortDescription, duration, rating, reviewCount, pricing, images } = tour

  return (
    <Card variant="featured" className={className}>
      <div className="group">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={images.main}
            alt={images.alt[0] || name}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="primary">
              {duration === 'half-day' ? 'Half Day' : duration === 'full-day' ? 'Full Day' : 'Custom'}
            </Badge>
          </div>
          {tour.popularRank && tour.popularRank <= 3 && (
            <div className="absolute top-4 right-4">
              <Badge variant="accent">
                #{tour.popularRank} Popular
              </Badge>
            </div>
          )}
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-display font-semibold text-tours-primary-950 mb-2 group-hover:text-tours-primary-800 transition-colors">
              {name}
            </h3>
            <p className="text-tours-neutral-600 text-sm leading-relaxed line-clamp-2">
              {shortDescription}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-tours-neutral-600">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{tour.durationHours} hours</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{tour.minParticipants}-{tour.maxParticipants} people</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-tours-accent-500 text-tours-accent-500" />
              <span className="font-medium text-tours-primary-950">{rating}</span>
              <span className="text-tours-neutral-500">({reviewCount} reviews)</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-tours-neutral-200">
            <div>
              <p className="text-sm text-tours-neutral-500">From</p>
              <p className="text-2xl font-semibold text-tours-primary-950">
                {formatCurrency(pricing.smallCar)}
              </p>
            </div>
            <Button
              as={Link}
              href={`/tours/${slug}`}
              variant="ghost"
              size="sm"
            >
              View Details →
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
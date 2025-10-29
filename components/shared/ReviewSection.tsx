'use client'

import { useState } from 'react'
import { getReviewsByTourId, calculateReviewStats } from '@/data/reviews'
import { getTourBySlug } from '@/data/tours'
import ReviewCard from './ReviewCard'
import Button from './Button'
import {
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  MessageCircle
} from 'lucide-react'

interface ReviewSectionProps {
  tourId: string
  tourSlug?: string
}

export default function ReviewSection({ tourId, tourSlug }: ReviewSectionProps) {
  const [sortOption, setSortOption] = useState<'recent' | 'rating-high' | 'rating-low' | 'helpful'>('recent')
  const [showFilters, setShowFilters] = useState(false)

  const reviews = getReviewsByTourId(tourId)
  const stats = calculateReviewStats(reviews)
  const tour = tourSlug ? getTourBySlug(tourSlug) : null

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortOption) {
      case 'rating-high':
        return b.rating - a.rating
      case 'rating-low':
        return a.rating - b.rating
      case 'helpful':
        return b.helpful - a.helpful
      case 'recent':
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  const renderRatingBar = (rating: number, count: number, total: number) => {
    const percentage = (count / total) * 100
    return (
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <span className="text-sm font-medium text-neutral-700 w-3">{rating}</span>
          <Star className="h-3 w-3 text-yellow-400 fill-current ml-1" />
        </div>
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className="bg-tours-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm text-neutral-600 w-10 text-right">{count}</span>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-baseline space-x-4 mb-2">
              <div className="text-4xl font-bold text-slate-900">{stats.averageRating}</div>
              <div>
                <div className="flex">{renderStars(Math.round(stats.averageRating))}</div>
                <div className="text-sm text-neutral-600">Based on {stats.totalReviews} reviews</div>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2 mt-4">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating}>
                  {renderRatingBar(rating, stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution], stats.totalReviews)}
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* Key Stats */}
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <div>
                  <div className="font-medium text-slate-900">Verified Reviews</div>
                  <div className="text-sm text-neutral-600">All reviews from genuine customers</div>
                </div>
              </div>

              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-tours-primary-600 mr-3" />
                <div>
                  <div className="font-medium text-slate-900">Excellent Service</div>
                  <div className="text-sm text-neutral-600">95% would book again</div>
                </div>
              </div>

              <div className="flex items-center">
                <Users className="h-5 w-5 text-tours-primary-600 mr-3" />
                <div>
                  <div className="font-medium text-slate-900">Diverse Feedback</div>
                  <div className="text-sm text-neutral-600">From travelers worldwide</div>
                </div>
              </div>
            </div>

            {/* Top Tags */}
            {stats.topTags.length > 0 && (
              <div className="mt-6">
                <div className="text-sm font-medium text-slate-900 mb-2">Common Praise</div>
                <div className="flex flex-wrap gap-2">
                  {stats.topTags.slice(0, 6).map(({ tag, count }) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700"
                    >
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      {tag} ({count})
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900">Customer Reviews</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-sm text-neutral-600 hover:text-neutral-900"
          >
            {showFilters ? <ChevronUp className="h-4 w-4 mr-1" /> : <ChevronDown className="h-4 w-4 mr-1" />}
            Sort & Filter
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="bg-white rounded-lg border border-neutral-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Sort by</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tours-primary-500 focus:border-tours-primary-500"
              >
                <option value="recent">Most Recent</option>
                <option value="rating-high">Highest Rating</option>
                <option value="rating-low">Lowest Rating</option>
                <option value="helpful">Most Helpful</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            showTourInfo={false}
            tourName={tour?.name}
          />
        ))}

        {reviews.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No reviews yet</h3>
            <p className="text-neutral-600">Be the first to review this tour!</p>
          </div>
        )}

        {/* Load More */}
        {reviews.length > 5 && (
          <div className="text-center">
            <Button variant="outline">
              Load More Reviews
            </Button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-tours-primary-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready for Your Adventure?</h3>
        <p className="text-neutral-600 mb-6">Join thousands of satisfied travelers who experienced the best of Bali with us.</p>
        <Button variant="primary" size="lg">
          Book This Tour
        </Button>
      </div>
    </div>
  )
}
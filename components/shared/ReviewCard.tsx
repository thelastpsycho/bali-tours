'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ThumbsUp, Reply, CheckCircle } from 'lucide-react'
import type { Review } from '@/lib/types/review'

interface ReviewCardProps {
  review: Review
  showTourInfo?: boolean
  tourName?: string
}

export default function ReviewCard({ review, showTourInfo = false, tourName }: ReviewCardProps) {
  const [helpful, setHelpful] = useState(review.helpful)
  const [hasVoted, setHasVoted] = useState(false)

  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpful(prev => prev + 1)
      setHasVoted(true)
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-tours-primary-500 to-tours-primary-700 rounded-full flex items-center justify-center text-white font-semibold">
            {review.customerName.charAt(0)}
          </div>
          <div className="ml-3">
            <div className="flex items-center">
              <h4 className="font-semibold text-slate-900">{review.customerName}</h4>
              {review.verified && (
                <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
              )}
            </div>
            <div className="flex items-center text-sm text-neutral-500">
              <span>{formatDate(review.date)}</span>
              {showTourInfo && tourName && (
                <>
                  <span className="mx-2">•</span>
                  <span>Tour: {tourName}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          {renderStars(review.rating)}
          <span className="ml-1 text-sm font-medium text-neutral-700">{review.rating}</span>
        </div>
      </div>

      <h3 className="font-medium text-slate-900 mb-2">{review.title}</h3>
      <p className="text-neutral-600 mb-4 leading-relaxed">{review.content}</p>

      {/* Tags */}
      {review.tags && review.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {review.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tours-primary-100 text-tours-primary-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Response */}
      {review.response && (
        <div className="bg-slate-50 rounded-lg p-4 mb-4">
          <div className="flex items-center mb-2">
            <Reply className="h-4 w-4 text-tours-primary-600 mr-2" />
            <span className="font-medium text-slate-900">Response from {review.response.author}</span>
            <span className="text-sm text-neutral-500 ml-2">
              {formatDate(review.response.date)}
            </span>
          </div>
          <p className="text-neutral-700 text-sm">{review.response.content}</p>
        </div>
      )}

      {/* Images */}
      {review.images && review.images.length > 0 && (
        <div className="flex gap-2 mb-4">
          {review.images.slice(0, 3).map((image, index) => (
            <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src={image}
                alt={`Review image ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform"
              />
              {index === 2 && review.images!.length > 3 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm">
                  +{review.images!.length - 3}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Helpful button */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
        <button
          onClick={handleHelpful}
          disabled={hasVoted}
          className={`flex items-center text-sm ${
            hasVoted
              ? 'text-tours-primary-600 font-medium'
              : 'text-neutral-500 hover:text-tours-primary-600'
          } transition-colors`}
        >
          <ThumbsUp className="h-4 w-4 mr-1" />
          Helpful ({helpful})
        </button>
      </div>
    </div>
  )
}
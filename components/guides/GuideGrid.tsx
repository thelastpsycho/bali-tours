'use client'

import { TravelGuide } from '@/types/travel-guide'
import { GuideCard } from './GuideCard'
import { GuideCategory } from '@/types/travel-guide'

interface GuideGridProps {
  guides: TravelGuide[]
  category?: GuideCategory
}

export function GuideGrid({ guides, category }: GuideGridProps) {
  return (
    <div className="space-y-8">
      {/* Category header */}
      {category && (
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-tours-neutral-200">
            <span className={category.color}>{category.icon}</span>
            <span className="font-medium text-tours-primary-900">
              {category.name}
            </span>
          </div>
          <p className="text-tours-neutral-600">{category.description}</p>
        </div>
      )}

      {/* Guides grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>

      {/* Empty state */}
      {guides.length === 0 && (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-tours-neutral-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-tours-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-tours-primary-950">
              No Guides Found
            </h3>
            <p className="text-tours-neutral-600">
              We couldn't find any travel guides matching your criteria. Try adjusting your filters or browse all categories.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
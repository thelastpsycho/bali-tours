'use client'

import { useState, useMemo } from 'react'
import { Search, Filter } from 'lucide-react'
import Link from 'next/link'
import { tours } from '@/data/tours'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import TourCard from '@/components/shared/TourCard'

type FilterState = {
  search: string
  duration: string
  category: string
  difficulty: string
  priceRange: [number, number]
}

const durations = [
  { value: 'all', label: 'All Durations' },
  { value: 'half-day', label: 'Half Day' },
  { value: 'full-day', label: 'Full Day' },
  { value: 'custom', label: 'Custom' }
]

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'culture', label: 'Culture' },
  { value: 'nature', label: 'Nature' },
  { value: 'temple', label: 'Temple' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'photography', label: 'Photography' },
  { value: 'waterfall', label: 'Waterfall' },
  { value: 'beach', label: 'Beach' },
  { value: 'sunset', label: 'Sunset' }
]

const difficulties = [
  { value: 'all', label: 'All Levels' },
  { value: 'easy', label: 'Easy' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'challenging', label: 'Challenging' }
]

export default function ToursPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    duration: 'all',
    category: 'all',
    difficulty: 'all',
    priceRange: [0, 3000000]
  })

  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      // Search filter
      if (filters.search && !tour.name.toLowerCase().includes(filters.search.toLowerCase()) &&
          !tour.shortDescription.toLowerCase().includes(filters.search.toLowerCase())) {
        return false
      }

      // Duration filter
      if (filters.duration !== 'all' && tour.duration !== filters.duration) {
        return false
      }

      // Category filter
      if (filters.category !== 'all' && !tour.category.includes(filters.category as any)) {
        return false
      }

      // Difficulty filter
      if (filters.difficulty !== 'all' && tour.difficulty !== filters.difficulty) {
        return false
      }

      // Price filter
      const minPrice = Math.min(...Object.values(tour.pricing))
      if (minPrice < filters.priceRange[0] || minPrice > filters.priceRange[1]) {
        return false
      }

      return true
    })
  }, [filters])

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      duration: 'all',
      category: 'all',
      difficulty: 'all',
      priceRange: [0, 3000000]
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Compact Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Bali Tours
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Private guided tours exploring Bali's culture, nature, and hidden gems.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search tours..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="pl-12 h-12 text-base border-slate-200 focus:border-emerald-500 bg-white"
            />
          </div>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {/* Duration Filters */}
            <div className="flex gap-2">
              {durations.map((duration) => (
                <button
                  key={duration.value}
                  onClick={() => updateFilter('duration', duration.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filters.duration === duration.value
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {duration.label}
                </button>
              ))}
            </div>

            {/* Category Filters - Top 5 */}
            <div className="flex gap-2">
              {categories.slice(1, 6).map((category) => (
                <button
                  key={category.value}
                  onClick={() => updateFilter('category', filters.category === category.value ? 'all' : category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filters.category === category.value
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(filters.search || filters.duration !== 'all' || filters.category !== 'all' || filters.difficulty !== 'all') && (
            <div className="text-center mt-4">
              <button
                onClick={clearFilters}
                className="text-sm text-slate-600 hover:text-emerald-600 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Tours Grid */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-slate-600">
              {filteredTours.length === 0 ? 'No tours found' : `${filteredTours.length} tours available`}
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-600 mb-4">Try adjusting your filters to see more tours.</p>
                <Button onClick={clearFilters} variant="secondary">
                  Clear Filters
                </Button>
              </div>
            ) : (
              filteredTours
                .sort((a, b) => (a.popularRank || 999) - (b.popularRank || 999))
                .map((tour) => (
                  <TourCard key={tour.id} tour={tour} variant="compact" />
                ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
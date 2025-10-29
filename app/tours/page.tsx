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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50'
      case 'moderate': return 'text-yellow-600 bg-yellow-50'
      case 'challenging': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-tours-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-tours-primary-950 to-tours-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Explore Our Bali Tours
            </h1>
            <p className="text-xl text-tours-neutral-200 max-w-3xl mx-auto">
              Discover Bali's hidden gems with our carefully crafted private tours. From cultural temples to natural wonders, we have the perfect adventure for you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-tours-neutral-400" />
            <Input
              type="text"
              placeholder="Search tours by name or description..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="pl-12 h-14 text-lg border-tours-neutral-300 focus:border-tours-primary-900"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <Button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                variant="secondary"
                className="w-full"
              >
                <Filter className="w-4 h-4 mr-2" />
                {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>

            {/* Filters */}
            <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block bg-white rounded-2xl p-6 border border-tours-neutral-200`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-semibold">Filters</h2>
                <Button
                  onClick={clearFilters}
                  variant="ghost"
                  size="sm"
                  className="text-tours-primary-900 hover:bg-tours-primary-50"
                >
                  Clear All
                </Button>
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Duration</h3>
                <div className="space-y-2">
                  {durations.map((duration) => (
                    <label key={duration.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="duration"
                        value={duration.value}
                        checked={filters.duration === duration.value}
                        onChange={(e) => updateFilter('duration', e.target.value)}
                        className="w-4 h-4 text-tours-primary-900 border-tours-neutral-300 focus:ring-tours-primary-900"
                      />
                      <span className="ml-3 text-sm">{duration.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={filters.category === category.value}
                        onChange={(e) => updateFilter('category', e.target.value)}
                        className="w-4 h-4 text-tours-primary-900 border-tours-neutral-300 focus:ring-tours-primary-900"
                      />
                      <span className="ml-3 text-sm">{category.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Difficulty</h3>
                <div className="space-y-2">
                  {difficulties.map((difficulty) => (
                    <label key={difficulty.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="difficulty"
                        value={difficulty.value}
                        checked={filters.difficulty === difficulty.value}
                        onChange={(e) => updateFilter('difficulty', e.target.value)}
                        className="w-4 h-4 text-tours-primary-900 border-tours-neutral-300 focus:ring-tours-primary-900"
                      />
                      <span className="ml-3 text-sm">{difficulty.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-tours-neutral-700">
                  Showing <span className="font-medium">{filteredTours.length}</span> of{' '}
                  <span className="font-medium">{tours.length}</span> tours
                </p>
              </div>
            </div>

            {/* Tours List */}
            <div className="grid gap-6">
              {filteredTours.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-tours-neutral-600 mb-4">No tours found matching your criteria.</p>
                  <Button onClick={clearFilters} variant="primary">
                    Clear Filters
                  </Button>
                </div>
              ) : (
                filteredTours
                  .sort((a, b) => a.popularRank - b.popularRank)
                  .map((tour) => (
                    <TourCard key={tour.id} tour={tour} variant="featured" />
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
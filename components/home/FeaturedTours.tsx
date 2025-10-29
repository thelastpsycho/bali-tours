import TourGrid from '@/components/tours/TourGrid'
import { tours } from '@/data/tours'
import Button from '@/components/shared/Button'
import Link from 'next/link'

// Get the top 4 tours by popular rank
const featuredTours = tours
  .sort((a, b) => (a.popularRank || 999) - (b.popularRank || 999))
  .slice(0, 4)

export default function FeaturedTours() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-tours-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-display-md md:text-display-lg font-display font-semibold text-tours-primary-950 mb-4">
            Popular Bali Tours
          </h2>
          <p className="text-lg text-tours-neutral-600 leading-relaxed">
            Discover our most sought-after tours, carefully curated to showcase the best of Bali's
            culture, nature, and adventure. Each tour is customizable to match your preferences.
          </p>
        </div>

        <TourGrid tours={featuredTours} />

        <div className="text-center mt-12">
          <Button
            as={Link}
            href="/tours"
            variant="primary"
            size="lg"
          >
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  )
}
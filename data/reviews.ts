import type { Review, ReviewStats } from '@/lib/types/review'

export const reviews: Review[] = [
  {
    id: '1',
    tourId: 'ubud-cultural-heritage',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.j@email.com',
    rating: 5,
    title: 'Amazing Cultural Experience!',
    content: 'This tour exceeded all my expectations. Our driver was incredibly knowledgeable about Balinese culture and took us to places we would have never found on our own. The rice terraces were breathtaking and the temple visits were fascinating.',
    date: '2024-01-15T00:00:00Z',
    verified: true,
    helpful: 12,
    response: {
      content: 'Thank you, Sarah! We\'re thrilled you enjoyed your cultural journey through Ubud. Our drivers love sharing the hidden gems of our beautiful island!',
      date: '2024-01-16T00:00:00Z',
      author: 'Wayan Sudana'
    },
    tags: ['cultural', 'knowledgeable-guide', 'hidden-gems']
  },
  {
    id: '2',
    tourId: 'uluwatu-temple-sunset',
    customerName: 'Michael Chen',
    customerEmail: 'm.chen@email.com',
    rating: 5,
    title: 'Perfect Sunset Experience',
    content: 'The sunset at Uluwatu Temple was absolutely magical! Our driver arrived on time, drove safely, and knew exactly the best spots for photos. The Kecak dance performance was the highlight of our Bali trip.',
    date: '2024-01-10T00:00:00Z',
    verified: true,
    helpful: 8,
    tags: ['sunset', 'temple', 'photography']
  },
  {
    id: '3',
    tourId: 'ubud-cultural-heritage',
    customerName: 'Emma Williams',
    customerEmail: 'emma.w@email.com',
    rating: 4,
    title: 'Great Day Trip with Minor Issues',
    content: 'Overall a wonderful experience exploring Ubud. The driver was friendly and the vehicle was comfortable. Only minor issue was that we started a bit later than planned, but we still managed to see everything. Would recommend!',
    date: '2024-01-08T00:00:00Z',
    verified: true,
    helpful: 5,
    tags: ['friendly-guide', 'comfortable-vehicle']
  },
  {
    id: '4',
    tourId: 'nusa-islands-adventure',
    customerName: 'David Martinez',
    customerEmail: 'd.martinez@email.com',
    rating: 5,
    title: 'Island Paradise!',
    content: 'The Nusa Islands tour was absolutely incredible! Snorkeling with manta rays was a once-in-a-lifetime experience. Our boat captain was experienced and made us feel safe throughout the journey. The islands are stunning!',
    date: '2024-01-05T00:00:00Z',
    verified: true,
    helpful: 15,
    tags: ['snorkeling', 'manta-rays', 'islands']
  },
  {
    id: '5',
    tourId: 'seminyak-beach-experience',
    customerName: 'Lisa Thompson',
    customerEmail: 'lisa.t@email.com',
    rating: 5,
    title: 'Relaxing Beach Day',
    content: 'Perfect for a relaxing day at the beach. Our driver recommended the best beach clubs and knew all the great photo spots. The vehicle was clean and air-conditioned, which was great during the hot day.',
    date: '2024-01-03T00:00:00Z',
    verified: true,
    helpful: 6,
    tags: ['beach', 'relaxing', 'beach-clubs']
  },
  {
    id: '6',
    tourId: 'uluwatu-temple-sunset',
    customerName: 'Robert Kim',
    customerEmail: 'r.kim@email.com',
    rating: 4,
    title: 'Breathtaking Views',
    content: 'The views from Uluwatu Temple are simply stunning. The only reason I\'m giving 4 stars instead of 5 is because it was quite crowded when we visited. Still, the sunset and the Kecak dance made it all worthwhile.',
    date: '2024-01-01T00:00:00Z',
    verified: true,
    helpful: 3,
    tags: ['views', 'sunset', 'crowded']
  },
  {
    id: '7',
    tourId: 'mount-batur-sunrise',
    customerName: 'Jennifer Lee',
    customerEmail: 'j.lee@email.com',
    rating: 5,
    title: 'Unforgettable Sunrise Trek',
    content: 'Waking up at 2 AM was worth it for this experience! The sunrise from Mount Batur was spectacular, and our guide was very helpful during the climb. The hot springs afterwards were the perfect reward.',
    date: '2023-12-28T00:00:00Z',
    verified: true,
    helpful: 20,
    tags: ['sunrise', 'trekking', 'hot-springs']
  },
  {
    id: '8',
    tourId: 'ubud-rice-terraces-adventure',
    customerName: 'Carlos Rodriguez',
    customerEmail: 'c.rodriguez@email.com',
    rating: 5,
    title: 'Nature at Its Best',
    content: 'The rice terraces are even more beautiful in person than in photos. Our driver took us to a less crowded spot and gave us time to really appreciate the scenery. Also included a great coffee plantation visit!',
    date: '2023-12-25T00:00:00Z',
    verified: true,
    helpful: 9,
    tags: ['nature', 'coffee-plantation', 'less-crowded']
  }
]

export function getReviewsByTourId(tourId: string): Review[] {
  return reviews.filter(review => review.tourId === tourId)
}

export function calculateReviewStats(reviews: Review[]): ReviewStats {
  const totalReviews = reviews.length
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews

  const ratingDistribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  reviews.forEach(review => {
    ratingDistribution[review.rating as keyof typeof ratingDistribution]++
  })

  // Count tags
  const tagCounts: { [key: string]: number } = {}
  reviews.forEach(review => {
    review.tags?.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  const topTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }))

  return {
    totalReviews,
    averageRating: Number(averageRating.toFixed(1)),
    ratingDistribution,
    topTags
  }
}

export function getAllReviews(): Review[] {
  return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
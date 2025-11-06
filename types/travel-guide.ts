export interface TravelGuide {
  id: string
  slug: string
  title: string
  subtitle: string
  category: 'culture' | 'nature' | 'adventure' | 'food' | 'practical' | 'seasonal'
  difficulty: 'easy' | 'moderate' | 'challenging'
  duration: string
  estimatedReadingTime: number // in minutes
  image: string
  author: {
    name: string
    role: string
    avatar: string
  }
  publishedAt: string
  updatedAt: string

  // Content sections
  summary: string
  introduction: string
  sections: {
    title: string
    content: string
    images?: string[]
    tips?: string[]
    mapLocation?: {
      lat: number
      lng: number
      title: string
    }
  }[]

  // Practical information
  bestTimeToVisit: string[]
  whatToBring: string[]
  cost: {
    currency: string
    min: number
    max: number
    notes?: string
  }

  // SEO
  metaTitle: string
  metaDescription: string
  keywords: string[]

  // Related content
  relatedTours: string[] // tour slugs
  relatedDestinations: string[] // destination slugs
  relatedGuides: string[] // guide slugs

  // Social proof
  views: number
  likes: number
  shares: number
  featured: boolean
  popularRank?: number
}

export interface GuideCategory {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  color: string
}
export interface Review {
  id: string
  tourId: string
  customerName: string
  customerEmail?: string
  rating: number
  title: string
  content: string
  date: string
  verified: boolean
  helpful: number
  response?: {
    content: string
    date: string
    author: string
  }
  images?: string[]
  tags?: string[]
}

export interface ReviewStats {
  totalReviews: number
  averageRating: number
  ratingDistribution: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
  topTags: { tag: string; count: number }[]
}
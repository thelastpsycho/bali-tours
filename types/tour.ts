export interface Tour {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  duration: 'half-day' | 'full-day' | 'custom'
  durationHours: number
  category: string[] // e.g., ['culture', 'nature', 'adventure']

  itinerary: {
    time: string
    location: string
    activity: string
    duration: string
    description?: string
  }[]

  highlights: string[]
  included: string[]
  excluded: string[]

  pricing: {
    smallCar: number      // Base price
    mediumCar: number
    largeVan: number
    luxury?: number
  }

  images: {
    main: string
    gallery: string[]
    alt: string[]
  }

  destinations: string[] // Related destination slugs

  // SEO fields
  metaTitle: string
  metaDescription: string
  keywords: string[]

  // Social proof
  rating: number
  reviewCount: number
  popularRank?: number

  // Practical info
  pickupIncluded: boolean
  minParticipants: number
  maxParticipants: number
  difficulty: 'easy' | 'moderate' | 'challenging'
  suitableFor: string[] // ['families', 'couples', 'solo', 'groups']
}

export interface Vehicle {
  id: string
  type: 'small' | 'medium' | 'large' | 'luxury'
  name: string
  model: string
  capacity: {
    passengers: number
    luggage: number
  }
  features: string[]
  image: string
  available: boolean
  priceMultiplier: number
}

export interface Booking {
  id: string
  tourId: string
  vehicleType: string
  date: string
  time: string

  customer: {
    name: string
    email: string
    phone: string
    nationality: string
    hotel?: string
  }

  participants: number
  pickupLocation: string
  specialRequests?: string

  pricing: {
    basePrice: number
    vehicleMultiplier: number
    totalPrice: number
    currency: 'IDR'
  }

  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
}

export interface Destination {
  id: string
  slug: string
  name: string
  description: string
  location: string
  image: string
  coordinates: {
    lat: number
    lng: number
  }
  category: string
}
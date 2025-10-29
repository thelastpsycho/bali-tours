export interface Destination {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  highlights: string[]
  activities: string[]
  bestTimeToVisit: string
  travelTips: string[]
  location: {
    region: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  tours: string[] // Tour IDs that visit this destination
  createdAt: string
  updatedAt: string
}
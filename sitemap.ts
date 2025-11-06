import { tours } from './data/tours'
import { getAllDestinations } from './data/destinations'
import { travelGuides } from './data/travel-guides'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://balitourstransportation.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fleet`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Tour pages
  const tourPages = tours.map((tour) => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Destination pages
  const destinations = getAllDestinations()
  const destinationPages = destinations.map((destination) => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Travel guide pages
  const guidePages = travelGuides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: guide.featured ? 0.9 : 0.8,
  }))

  return [...staticPages, ...tourPages, ...destinationPages, ...guidePages]
}
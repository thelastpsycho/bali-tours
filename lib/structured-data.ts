import { Tour } from '@/types/tour'

export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Bali Tours Transportation',
    description: 'Professional private tour services in Bali with experienced drivers and comfortable vehicles',
    url: 'https://balitourstransportation.com',
    logo: 'https://balitourstransportation.com/logo.png',
    image: 'https://balitourstransportation.com/og-image.jpg',
    telephone: '+6281234567890',
    email: 'info@balitourstransportation.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jalan Raya Kuta No. 100X',
      addressLocality: 'Kuta',
      addressRegion: 'Bali',
      postalCode: '80361',
      addressCountry: 'ID'
    },
    openingHours: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday',
          'Friday', 'Saturday', 'Sunday'
        ],
        opens: '08:00',
        closes: '20:00'
      }
    ],
    priceRange: 'IDR 750000 - 3000000',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash',
    languagesSpoken: ['English', 'Indonesian'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '844'
    },
    sameAs: [
      'https://facebook.com/balitourstransportation',
      'https://instagram.com/balitourstransportation'
    ]
  }
}

export function generateTourStructuredData(tour: Tour) {
  const minPrice = Math.min(...Object.values(tour.pricing))
  const maxPrice = Math.max(...Object.values(tour.pricing))

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.name,
    description: tour.shortDescription,
    url: `https://balitourstransportation.com/tours/${tour.slug}`,
    image: tour.images.main,
    inLanguage: 'en',
    duration: `PT${tour.durationHours}H`,
    touristType: tour.suitableFor.map(suitable =>
      suitable.charAt(0).toUpperCase() + suitable.slice(1)
    ),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: minPrice,
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString()
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tour.rating.toString(),
      reviewCount: tour.reviewCount.toString()
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Bali Tours Transportation',
      url: 'https://balitourstransportation.com'
    },
    itinerary: tour.itinerary.map(item => ({
      '@type': 'TouristAttraction',
      name: item.location,
      description: item.activity
    })),
    includedActivity: tour.included.map(inclusion => ({
      '@type': 'Thing',
      name: inclusion
    })),
    excludes: tour.excluded.map(exclusion => ({
      '@type': 'Thing',
      name: exclusion
    })),
    subjectOf: {
      '@type': 'CreativeWork',
      name: tour.name,
      description: tour.fullDescription,
      genre: tour.category.join(', ')
    }
  }
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bali Tours Transportation',
    description: 'Professional private tour services in Bali with experienced drivers and comfortable vehicles',
    url: 'https://balitourstransportation.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://balitourstransportation.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bali Tours Transportation',
      logo: {
        '@type': 'ImageObject',
        url: 'https://balitourstransportation.com/logo.png'
      }
    }
  }
}

export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  const breadcrumbItems = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems
  }
}

export function generateLocalBusinessStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Bali Tours Transportation',
    description: 'Professional private tour services in Bali',
    url: 'https://balitourstransportation.com',
    telephone: '+6281234567890',
    email: 'info@balitourstransportation.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jalan Raya Kuta No. 100X',
      addressLocality: 'Kuta',
      addressRegion: 'Bali',
      postalCode: '80361',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.7184,
      longitude: 115.1686
    },
    openingHours: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday',
          'Friday', 'Saturday', 'Sunday'
        ],
        opens: '08:00',
        closes: '20:00'
      }
    ],
    priceRange: 'IDR 750000 - 3000000',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash',
    languagesSpoken: ['English', 'Indonesian'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '844'
    },
    serviceArea: {
      '@type': 'Place',
      name: 'Bali, Indonesia'
    }
  }
}
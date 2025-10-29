import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    'name': 'Bali Tours Transportation',
    'description': 'Professional private tour services in Bali with experienced drivers and customizable itineraries',
    'url': 'https://balitourstransportation.com',
    'telephone': '+6281234567890',
    'email': 'info@balitourstransportation.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Denpasar',
      'addressRegion': 'Bali',
      'addressCountry': 'ID'
    },
    'sameAs': [
      'https://facebook.com/balitourstransportation',
      'https://instagram.com/balitourstransportation'
    ],
    'openingHours': 'Mo-Su 08:00-20:00',
    'priceRange': '$$'
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(organizationSchema, null, 2)}
    </Script>
  )
}
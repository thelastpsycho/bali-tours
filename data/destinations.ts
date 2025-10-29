import type { Destination } from '@/lib/types/destination'

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Ubud',
    slug: 'ubud',
    description: 'The cultural heart of Bali, known for its lush rice terraces, ancient temples, and traditional arts.',
    longDescription: `Ubud is Bali's cultural and spiritual center, nestled in the heart of the island among lush rainforests and emerald rice terraces. This enchanting town has been a center for fine arts, dance, and music for over a century. From the sacred Monkey Forest Sanctuary to the majestic Tegalalang Rice Terraces, Ubud offers a perfect blend of natural beauty and cultural richness.

The area is famous for its traditional crafts, including silver jewelry, wood carving, and textile making. Visitors can explore ancient temples, participate in yoga and meditation retreats, or indulge in world-class spa treatments. The vibrant local market offers everything from fresh produce to handcrafted souvenirs.`,
    image: 'https://images.unsplash.com/photo-1543118397-9ebd69a06974?w=800&h=600&fit=crop&crop=entropy',
    gallery: [
      'https://images.unsplash.com/photo-1543118397-9ebd69a06974?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1588824736976-ff5582262955?w=1200&h=800&fit=crop&crop=entropy',
    ],
    highlights: [
      'Sacred Monkey Forest Sanctuary',
      'Tegalalang Rice Terraces',
      'Tirta Empul Temple',
      'Ubud Art Market',
      'Campuhan Ridge Walk',
    ],
    activities: [
      'Rice terrace trekking',
      'Temple visits',
      'Yoga and meditation',
      'Traditional cooking classes',
      'Art workshops',
      'Spa and wellness treatments',
    ],
    bestTimeToVisit: 'April to October (dry season)',
    travelTips: [
      'Wear comfortable walking shoes for temple visits',
      'Bring a sarong or scarf for temple dress codes',
      'Start early to avoid crowds at popular spots',
      'Respect monkeys in the sanctuary',
      'Stay hydrated and use sun protection',
    ],
    location: {
      region: 'Central Bali',
      coordinates: {
        lat: -8.5069,
        lng: 115.2625,
      },
    },
    tours: ['ubud-cultural-heritage', 'ubud-rice-terraces-adventure'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Uluwatu',
    slug: 'uluwatu',
    description: 'Dramatic cliffs, world-class surf breaks, and ancient temples overlooking the Indian Ocean.',
    longDescription: `Uluwatu, perched on Bali's southernmost tip, is a paradise for surfers, cliff lovers, and sunset seekers. This area is famous for its dramatic limestone cliffs that drop dramatically into the turquoise Indian Ocean, creating some of Bali's most spectacular coastal scenery.

The crown jewel is the ancient Uluwatu Temple, one of Bali's six key directional temples, perched precariously on a cliff edge 70 meters above sea level. The area is also renowned for its world-class surf breaks, including the legendary Uluwatu surf spot that attracts surfers from around the globe.

In the evenings, visitors can witness the captivating Kecak dance performances at the temple, with the sunset providing a breathtaking backdrop. The nearby Padang Padang beach, featured in the movie "Eat Pray Love," offers pristine white sand and crystal-clear waters.`,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop&crop=entropy',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1579113800031-d4a1f7c636ab?w=1200&h=800&fit=crop&crop=entropy',
    ],
    highlights: [
      'Uluwatu Temple (Pura Luhur Uluwatu)',
      'Kecak Fire Dance performances',
      'Padang Padang Beach',
      'Dreamland Beach',
      'Single Fin Bar',
    ],
    activities: [
      'Surfing at world-class breaks',
      'Cliff jumping and swimming',
      'Temple exploration',
      'Sunset viewing',
      'Beach relaxation',
      'Nightlife and dining',
    ],
    bestTimeToVisit: 'April to November (dry season)',
    travelTips: [
      'Watch out for monkeys around the temple',
      'Bring cash for entrance fees',
      'Wear reef shoes for rock beaches',
      'Book Kecak dance tickets in advance',
      'Stay for sunset - it\'s spectacular',
    ],
    location: {
      region: 'South Bali',
      coordinates: {
        lat: -8.8407,
        lng: 115.1050,
      },
    },
    tours: ['uluwatu-temple-sunset'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    name: 'Seminyak',
    slug: 'seminyak',
    description: 'Upscale beach resort area with luxury hotels, fine dining, and vibrant nightlife.',
    longDescription: `Seminyak is Bali's most sophisticated beach resort area, offering a perfect blend of luxury, relaxation, and entertainment. This upscale neighborhood is known for its pristine beaches, world-class restaurants, high-end boutiques, and luxurious spas.

The wide, sandy beach is perfect for swimming, surfing, and sunbathing, with professional instructors available for surf lessons of all levels. As the sun sets, the beach transforms into a social hub with beach clubs like Ku De Ta and Potato Head Beach Club offering sunset views with cocktails.

Seminyak's dining scene is exceptional, with restaurants ranging from local warungs to Michelin-starred establishments. The area is also famous for its spa culture, offering everything from traditional Balinese massages to cutting-edge wellness treatments.`,
    image: 'https://images.unsplash.com/photo-1539609415589-f9542e1e9837?w=800&h=600&fit=crop&crop=entropy',
    gallery: [
      'https://images.unsplash.com/photo-1539609415589-f9542e1e9837?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1579734978777-4c7064d28432?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1590490359683-cc32121a221c?w=1200&h=800&fit=crop&crop=entropy',
    ],
    highlights: [
      'Seminyak Beach',
      'Petitenget Temple',
      'Eat Street (Jalan Kayu Aya)',
      'Batubelig Beach',
      'Seminyak Village',
    ],
    activities: [
      'Beach relaxation and swimming',
      'Surfing lessons',
      'Spa and wellness treatments',
      'Fine dining experiences',
      'Shopping at designer boutiques',
      'Beach club parties',
    ],
    bestTimeToVisit: 'All year round',
    travelTips: [
      'Bring cash for small purchases',
      'Respect local customs when visiting temples',
      'Stay hydrated and use sun protection',
      'Book popular restaurants in advance',
      'Be cautious of strong currents when swimming',
    ],
    location: {
      region: 'South Bali',
      coordinates: {
        lat: -8.6805,
        lng: 115.1590,
      },
    },
    tours: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '4',
    name: 'Canggu',
    slug: 'canggu',
    description: 'Bohemian coastal village known for surf breaks, yoga retreats, and vibrant cafe culture.',
    longDescription: `Canggu has emerged as Bali's trendiest coastal village, attracting a global community of digital nomads, surfers, and wellness enthusiasts. This laid-back area perfectly balances traditional Balinese culture with modern, bohemian lifestyle.

The coastline offers excellent surf breaks for all levels, from beginner-friendly waves at Batu Bolong to challenging reef breaks. Inland, rice paddies provide a picturesque backdrop for yoga studios, co-working spaces, and health-conscious cafes.

Canggu's food scene is legendary, with countless cafes serving everything from traditional Indonesian dishes to innovative plant-based cuisine. The area comes alive at night with beach bars, live music venues, and a thriving social scene.`,
    image: 'https://images.unsplash.com/photo-1539609415589-f9542e1e9837?w=800&h=600&fit=crop&crop=entropy',
    gallery: [
      'https://images.unsplash.com/photo-1539609415589-f9542e1e9837?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1543118397-9ebd69a06974?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&crop=entropy',
    ],
    highlights: [
      'Batu Bolong Beach',
      'Echo Beach',
      'Tanah Lot Temple (nearby)',
      'Finns Recreation Club',
      'Canggu Rice Fields',
    ],
    activities: [
      'Surfing and surf lessons',
      'Yoga and wellness classes',
      'Cafe hopping',
      'Co-working',
      'Beach club experiences',
      'Cycling through rice fields',
    ],
    bestTimeToVisit: 'April to October (dry season)',
    travelTips: [
      'Rent a scooter for easy transportation',
      'Bring reef shoes for rocky beach areas',
      'Book popular cafes early for breakfast',
      'Join community events and workshops',
      'Be mindful of traffic and parking',
    ],
    location: {
      region: 'South Bali',
      coordinates: {
        lat: -8.6389,
        lng: 115.1350,
      },
    },
    tours: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '5',
    name: 'Mount Batur',
    slug: 'mount-batur',
    description: 'Active volcano offering spectacular sunrise treks and panoramic caldera views.',
    longDescription: `Mount Batur, standing at 1,717 meters above sea level, is an active volcano and one of Bali's most iconic natural landmarks. Located in the Kintamani highlands, it offers adventurous travelers the opportunity to witness spectacular sunrise views from its summit.

The pre-dawn trek to the summit is a challenging but rewarding experience, with guides leading visitors through volcanic rock landscapes as the sky gradually brightens. From the top, you'll witness a breathtaking 360-degree panoramic view of the caldera, Lake Batur, and neighboring Mount Abang.

The area around the volcano offers natural hot springs where trekkers can soothe their muscles after the climb. The nearby Lake Batur, Bali's largest lake, provides additional recreational opportunities and stunning photography opportunities.`,
    image: 'https://images.unsplash.com/photo-1552084117-56a987666449?w=800&h=600&fit=crop&crop=entropy',
    gallery: [
      'https://images.unsplash.com/photo-1552084117-56a987666449?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1540331547398-222e4061ede4?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1552083986-20c672296e41?w=1200&h=800&fit=crop&crop=entropy',
    ],
    highlights: [
      'Sunrise trek to summit',
      'Lake Batur caldera',
      'Natural hot springs',
      'Black lava fields',
      'Kintamani viewpoints',
    ],
    activities: [
      'Mountain trekking',
      'Sunrise viewing',
      'Hot spring bathing',
      'Photography',
      'Cycling tours',
      'Coffee plantation visits',
    ],
    bestTimeToVisit: 'April to September (clear skies)',
    travelTips: [
      'Book with certified guides only',
      'Wear proper hiking shoes and warm clothing',
      'Bring headlamps for early morning trek',
      'Start early for sunrise (usually 2 AM pickup)',
      'Respect the sacred mountain',
    ],
    location: {
      region: 'North Bali',
      coordinates: {
        lat: -8.2425,
        lng: 115.3750,
      },
    },
    tours: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '6',
    name: 'Nusa Islands',
    slug: 'nusa-islands',
    description: 'Three pristine islands offering world-class diving, surfing, and tropical paradise.',
    longDescription: `The Nusa Islands - Nusa Penida, Nusa Lembongan, and Nusa Ceningan - are a trio of tropical paradises located southeast of mainland Bali. These relatively undeveloped islands offer some of Indonesia's most spectacular marine life, dramatic landscapes, and adventure activities.

Nusa Penida is the largest and most rugged, home to the iconic Kelingking Beach (often called "T-Rex" beach) and Angel's Billabong natural pool. Nusa Lembongan offers more developed infrastructure with stunning beaches, world-class surf breaks, and a laid-back vibe. Nusa Ceningan, the smallest island, features the famous Yellow Bridge and breathtaking cliff jumping spots.

The islands are renowned for their crystal-clear waters, vibrant coral reefs, and abundant marine life, including manta rays and mola mola (ocean sunfish) during certain seasons.`,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=entropy',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1584937679922-a5e892c8d527?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=800&fit=crop&crop=entropy',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&crop=entropy',
    ],
    highlights: [
      'Kelingking Beach (T-Rex)',
      'Angel\'s Billabong',
      'Broken Beach',
      'Crystal Bay',
      'Yellow Bridge',
    ],
    activities: [
      'Diving and snorkeling',
      'Manta ray watching',
      'Surfing at world-class breaks',
      'Island hopping',
      'Cliff jumping',
      'Beach exploration',
    ],
    bestTimeToVisit: 'April to November (dry season)',
    travelTips: [
      'Book fast boat tickets in advance',
      'Bring motion sickness medication',
      'Pack light as you\'ll carry luggage',
      'Respect local customs and dress codes',
      'Be prepared for basic infrastructure',
    ],
    location: {
      region: 'Southeast Bali',
      coordinates: {
        lat: -8.7244,
        lng: 115.5099,
      },
    },
    tours: ['nusa-islands-adventure'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug)
}

export function getAllDestinations(): Destination[] {
  return destinations
}

export function getDestinationsByRegion(region: string): Destination[] {
  return destinations.filter((destination) => destination.location.region === region)
}
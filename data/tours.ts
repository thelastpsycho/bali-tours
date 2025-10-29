import { Tour } from '@/types/tour'

export const tours: Tour[] = [
  {
    id: 'ubud-cultural-tour',
    slug: 'ubud-cultural-tour',
    name: 'Ubud Cultural Tour',
    shortDescription: 'Explore the heart of Balinese culture with visits to ancient temples, rice terraces, and traditional arts.',
    fullDescription: 'Immerse yourself in the rich cultural heritage of Ubud, Bali\'s cultural heartland. This comprehensive tour takes you through sacred temples, breathtaking rice terraces, and centers of traditional arts and crafts. Experience the spiritual essence of Bali as you visit the iconic Tegalalang Rice Terrace, interact with playful monkeys at the Sacred Monkey Forest, and discover the royal heritage at Ubud Palace. Purify your soul at the holy Tirta Empul Temple and learn about the traditional coffee-making process at a local plantation. This full-day tour offers a perfect blend of nature, culture, and spirituality that will leave you with a deep appreciation for Balinese traditions.',
    duration: 'full-day',
    durationHours: 10,
    category: ['culture', 'nature', 'temple'],
    itinerary: [
      {
        time: '8:00 AM',
        location: 'Hotel Pickup',
        activity: 'Meet your driver and departure',
        duration: '30 min',
        description: 'Comfortable pickup from your hotel in South Bali area'
      },
      {
        time: '9:00 AM',
        location: 'Tegalalang Rice Terrace',
        activity: 'Rice terrace exploration and photos',
        duration: '1.5 hours',
        description: 'Witness the stunning stepped rice paddies and learn about traditional irrigation system'
      },
      {
        time: '11:00 AM',
        location: 'Coffee Plantation',
        activity: 'Coffee tasting and plantation tour',
        duration: '1 hour',
        description: 'Sample various local coffees and teas while learning about traditional processing methods'
      },
      {
        time: '12:30 PM',
        location: 'Tirta Empul Temple',
        activity: 'Temple visit and purification ritual',
        duration: '1.5 hours',
        description: 'Experience the holy spring temple and participate in traditional purification ritual'
      },
      {
        time: '2:00 PM',
        location: 'Local Restaurant',
        activity: 'Lunch break',
        duration: '1 hour',
        description: 'Enjoy authentic Indonesian cuisine at a local restaurant'
      },
      {
        time: '3:00 PM',
        location: 'Sacred Monkey Forest',
        activity: 'Monkey sanctuary visit',
        duration: '1 hour',
        description: 'Interact with friendly monkeys in their natural habitat'
      },
      {
        time: '4:00 PM',
        location: 'Ubud Palace',
        activity: 'Royal palace exploration',
        duration: '1 hour',
        description: 'Visit the royal residence and traditional Balinese architecture'
      },
      {
        time: '5:00 PM',
        location: 'Ubud Market',
        activity: 'Traditional market visit',
        duration: '1 hour',
        description: 'Shop for local handicrafts, souvenirs, and traditional arts'
      },
      {
        time: '6:00 PM',
        location: 'Hotel Return',
        activity: 'Drop off at your hotel',
        duration: 'Varies',
        description: 'Return journey to your accommodation'
      }
    ],
    highlights: [
      'Visit the iconic Tegalalang Rice Terrace',
      'Experience the Sacred Monkey Forest Sanctuary',
      'Purify yourself at Tirta Empul Holy Water Temple',
      'Explore Ubud Royal Palace and traditional market',
      'Coffee plantation visit with tasting',
      'Authentic Indonesian lunch included'
    ],
    included: [
      'Private air-conditioned vehicle',
      'Professional English-speaking driver',
      'Hotel pickup and drop-off',
      'All entrance fees and parking',
      'Traditional lunch',
      'Coffee and tea tasting',
      'Bottled water',
      'Petrol and toll fees'
    ],
    excluded: [
      'Personal expenses',
      'Alcoholic beverages',
      'Travel insurance',
      'Tips and gratuities',
      'Items not mentioned in inclusions'
    ],
    pricing: {
      smallCar: 800000,
      mediumCar: 1040000,
      largeVan: 1440000,
      luxury: 2000000
    },
    images: {
      main: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1887&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1887&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1573804633927-bf6bd7f89e3a?q=80&w=1887&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533109721383-9c35614bc1a5?q=80&w=1887&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1887&auto=format&fit=crop'
      ],
      alt: [
        'Tegalalang Rice Terrace in Ubud Bali with tourists taking photos',
        'Sacred Monkey Forest Sanctuary with temple gates and monkeys',
        'Tirta Empul Temple with holy water purification pools',
        'Traditional Ubud Palace with Balinese architecture'
      ]
    },
    destinations: ['tegallalang', 'ubud', 'tirta-empul'],
    metaTitle: 'Ubud Cultural Tour | Full Day Private Tour with Driver',
    metaDescription: 'Explore Ubud\'s cultural highlights including Tegalalang Rice Terrace, Monkey Forest, Tirta Empul Temple. Private tour with professional driver, lunch included.',
    keywords: ['ubud tour', 'bali cultural tour', 'rice terrace', 'monkey forest', 'tirta empul', 'private driver'],
    rating: 4.8,
    reviewCount: 156,
    popularRank: 1,
    pickupIncluded: true,
    minParticipants: 1,
    maxParticipants: 12,
    difficulty: 'easy',
    suitableFor: ['families', 'couples', 'solo', 'groups']
  },
  {
    id: 'uluwatu-sunset-tour',
    slug: 'uluwatu-sunset-tour',
    name: 'Uluwatu Sunset Tour',
    shortDescription: 'Experience the spectacular Uluwatu sunset with Kecak fire dance and romantic cliffside temple.',
    fullDescription: 'Witness one of Bali\'s most magical evenings as you explore the dramatic cliff-top Uluwatu Temple, watch the mesmerizing Kecak fire dance performance, and enjoy a romantic seafood dinner on the beach. This half-day tour is perfect for those who want to experience the romantic side of Bali, combining spiritual heritage with natural beauty. The tour begins with a visit to the ancient Uluwatu Temple perched on steep cliffs overlooking the Indian Ocean, followed by the famous Kecak dance performance as the sun sets. End your evening with a fresh seafood dinner on Jimbaran Beach, dining with your feet in the sand under the stars.',
    duration: 'half-day',
    durationHours: 5,
    category: ['culture', 'temple', 'sunset'],
    itinerary: [
      {
        time: '2:00 PM',
        location: 'Hotel Pickup',
        activity: 'Meet your driver and departure',
        duration: '30 min',
        description: 'Comfortable pickup from your hotel'
      },
      {
        time: '3:00 PM',
        location: 'Uluwatu Temple',
        activity: 'Temple exploration and sunset viewing',
        duration: '2 hours',
        description: 'Explore the cliff-top temple and watch the spectacular sunset over the Indian Ocean'
      },
      {
        time: '5:30 PM',
        location: 'Kecak Dance Performance',
        activity: 'Traditional fire dance show',
        duration: '1 hour',
        description: 'Watch the captivating Kecak dance with sunset backdrop'
      },
      {
        time: '7:00 PM',
        location: 'Jimbaran Beach',
        activity: 'Seafood dinner',
        duration: '1.5 hours',
        description: 'Enjoy fresh grilled seafood on the beach'
      },
      {
        time: '8:30 PM',
        location: 'Hotel Return',
        activity: 'Drop off at your hotel',
        duration: 'Varies',
        description: 'Return journey to your accommodation'
      }
    ],
    highlights: [
      'Spectacular sunset at Uluwatu Temple',
      'Traditional Kecak fire dance performance',
      'Romantic seafood dinner on Jimbaran Beach',
      'Stunning cliff-top temple views',
      'Golden hour photography opportunities'
    ],
    included: [
      'Private air-conditioned vehicle',
      'Professional English-speaking driver',
      'Hotel pickup and drop-off',
      'Uluwatu Temple entrance fee',
      'Kecak dance performance ticket',
      'Seafood dinner with grilled seafood set menu',
      'Bottled water',
      'Petrol and toll fees'
    ],
    excluded: [
      'Personal expenses',
      'Alcoholic beverages',
      'Travel insurance',
      'Tips and gratuities',
      'Additional food or drinks not mentioned'
    ],
    pricing: {
      smallCar: 750000,
      mediumCar: 975000,
      largeVan: 1350000,
      luxury: 1875000
    },
    images: {
      main: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516494419602-8c46783aa8a3?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524674468945-6e408716cd36?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1887&auto=format&fit=crop'
      ],
      alt: [
        'Uluwatu Temple perched on cliff edge with ocean view',
        'Traditional Kecak fire dance performance at sunset',
        'Jimbaran Beach seafood dinner with tables on sand',
        'Spectacular sunset view from Uluwatu cliff'
      ]
    },
    destinations: ['uluwatu', 'jimbaran'],
    metaTitle: 'Uluwatu Sunset Tour with Kecak Dance & Jimbaran Dinner',
    metaDescription: 'Experience magical sunset at Uluwatu Temple, traditional Kecak fire dance, and romantic seafood dinner on Jimbaran Beach. Perfect evening tour.',
    keywords: ['uluwatu tour', 'bali sunset', 'kecak dance', 'jimbaran dinner', 'cliff temple', 'romantic tour'],
    rating: 4.9,
    reviewCount: 234,
    popularRank: 2,
    pickupIncluded: true,
    minParticipants: 1,
    maxParticipants: 8,
    difficulty: 'easy',
    suitableFor: ['couples', 'families', 'solo', 'groups']
  },
  {
    id: 'instagram-bali-tour',
    slug: 'instagram-bali-tour',
    name: 'Instagram Bali Tour',
    shortDescription: 'Visit the most photogenic spots in Bali for perfect Instagram shots including Handara Gate and Wanagiri.',
    fullDescription: 'Capture the most Instagram-worthy moments in Bali as we take you to the island\'s most photogenic locations. This tour is designed for social media enthusiasts and photography lovers who want to create stunning content. Visit the iconic Handara Gate with its majestic split gate, explore the mystical Ulun Danu Temple on the lake, enjoy the famous Wanagiri Hidden Hills swings and nests, and marvel at the expansive Jatiluwih Rice Terrace - a UNESCO World Heritage site. Each location offers unique backdrops and perfect photo opportunities that will make your social media feed unforgettable.',
    duration: 'full-day',
    durationHours: 10,
    category: ['photography', 'nature', 'adventure'],
    itinerary: [
      {
        time: '8:00 AM',
        location: 'Hotel Pickup',
        activity: 'Meet your driver and departure',
        duration: '45 min',
        description: 'Pickup from your hotel and journey to North Bali'
      },
      {
        time: '9:00 AM',
        location: 'Handara Gate',
        activity: 'Photoshoot at iconic gate',
        duration: '1 hour',
        description: 'Perfect Instagram shots at the famous temple gate entrance'
      },
      {
        time: '10:30 AM',
        location: 'Ulun Danu Temple',
        activity: 'Lake temple exploration',
        duration: '1.5 hours',
        description: 'Visit the beautiful floating temple on Beratan Lake'
      },
      {
        time: '12:30 PM',
        location: 'Local Restaurant',
        activity: 'Lunch break',
        duration: '1 hour',
        description: 'Enjoy lunch with stunning lake views'
      },
      {
        time: '2:00 PM',
        location: 'Wanagiri Hidden Hills',
        activity: 'Swing and nest photos',
        duration: '2 hours',
        description: 'Experience various photo spots with swings, nests, and lake views'
      },
      {
        time: '4:00 PM',
        location: 'Jatiluwih Rice Terrace',
        activity: 'UNESCO rice terrace exploration',
        duration: '1.5 hours',
        description: 'Marvel at the vast and beautiful UNESCO World Heritage rice fields'
      },
      {
        time: '5:30 PM',
        location: 'Hotel Return',
        activity: 'Return journey',
        duration: '2 hours',
        description: 'Return to your hotel with unforgettable memories'
      }
    ],
    highlights: [
      'Iconic Handara Gate photo spot',
      'Mystical Ulun Danu Temple on the lake',
      'Wanagiri Hidden Hills swings and nests',
      'UNESCO Jatiluwih Rice Terrace',
      'Professional photo opportunities',
      'Scenic mountain and lake views'
    ],
    included: [
      'Private air-conditioned vehicle',
      'Professional English-speaking driver',
      'Hotel pickup and drop-off',
      'All entrance fees',
      'Traditional lunch with views',
      'Bottled water',
      'Petrol and toll fees'
    ],
    excluded: [
      'Personal expenses',
      'Professional photographer (optional extra)',
      'Travel insurance',
      'Tips and gratuities',
      'Swing entrance fees (various prices)'
    ],
    pricing: {
      smallCar: 900000,
      mediumCar: 1170000,
      largeVan: 1620000,
      luxury: 2250000
    },
    images: {
      main: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1887&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1511377166279-3d4586c4b2bb?q=80&w=1887&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1887&auto=format&fit=crop'
      ],
      alt: [
        'Handara Gate with split temple entrance and mountain view',
        'Ulun Danu Temple on Beratan Lake with floating effect',
        'Wanagiri Hidden Hills swing with lake view background',
        'Jatiluwih Rice Terrace with extensive green fields'
      ]
    },
    destinations: ['handara-gate', 'ulun-danu', 'wanagiri', 'jatiluwih'],
    metaTitle: 'Instagram Bali Tour | Most Photogenic Spots & Photo Locations',
    metaDescription: 'Visit Bali\'s most Instagram-worthy spots including Handara Gate, Ulun Danu Temple, Wanagiri swings. Perfect tour for photography and social media.',
    keywords: ['instagram bali', 'photo spots', 'handara gate', 'wanagiri', 'ulun danu', 'photography tour'],
    rating: 4.7,
    reviewCount: 189,
    popularRank: 3,
    pickupIncluded: true,
    minParticipants: 1,
    maxParticipants: 10,
    difficulty: 'moderate',
    suitableFor: ['couples', 'solo', 'groups', 'families']
  },
  {
    id: 'waterfall-adventure',
    slug: 'waterfall-adventure',
    name: 'Waterfall Adventure',
    shortDescription: 'Explore Bali\'s most beautiful waterfalls including Tegenungan, Tibumana, and Tukad Cepung.',
    fullDescription: 'Dive into the refreshing world of Bali\'s natural waterfalls on this adventurous full-day tour. Discover three of the island\'s most spectacular waterfalls, each offering unique characteristics and swimming opportunities. Start at Tegenungan Waterfall, the most accessible and popular, perfect for photos and swimming. Then visit the hidden Tibumana Waterfall with its twin falls and natural pool. Finally, experience the magical Tukad Cepung Waterfall, where sunlight creates a stunning beam through the cave ceiling. This tour includes moderate hiking, swimming in natural pools, and experiencing the raw beauty of Bali\'s tropical rainforest.',
    duration: 'full-day',
    durationHours: 8,
    category: ['adventure', 'nature', 'waterfall'],
    itinerary: [
      {
        time: '8:00 AM',
        location: 'Hotel Pickup',
        activity: 'Meet your driver and departure',
        duration: '30 min',
        description: 'Pickup from your hotel in South Bali'
      },
      {
        time: '9:00 AM',
        location: 'Tegenungan Waterfall',
        activity: 'Waterfall exploration and swimming',
        duration: '2 hours',
        description: 'Visit the most popular waterfall with opportunities for swimming and photos'
      },
      {
        time: '11:30 AM',
        location: 'Tibumana Waterfall',
        activity: 'Hidden waterfall discovery',
        duration: '2 hours',
        description: 'Explore the twin falls and swim in the natural pool'
      },
      {
        time: '1:30 PM',
        location: 'Local Restaurant',
        activity: 'Lunch break',
        duration: '1 hour',
        description: 'Traditional Indonesian lunch with local specialties'
      },
      {
        time: '2:30 PM',
        location: 'Tukad Cepung Waterfall',
        activity: 'Cave waterfall experience',
        duration: '2 hours',
        description: 'Witness the magical light rays in the cave waterfall'
      },
      {
        time: '4:30 PM',
        location: 'Hotel Return',
        activity: 'Return journey',
        duration: '1 hour',
        description: 'Return to your hotel after an adventurous day'
      }
    ],
    highlights: [
      'Swim in three stunning waterfalls',
      'Discover hidden Tibumana twin falls',
      'Experience magical Tukad Cepung light rays',
      'Tropical rainforest hiking',
      'Natural swimming pools',
      'Professional guide assistance'
    ],
    included: [
      'Private air-conditioned vehicle',
      'Professional English-speaking driver',
      'Hotel pickup and drop-off',
      'All entrance fees',
      'Traditional lunch',
      'Bottled water and towels',
      'Parking fees',
      'Petrol'
    ],
    excluded: [
      'Personal expenses',
      'Water shoes or rental equipment',
      'Travel insurance',
      'Tips for local guides',
      'Extra activities'
    ],
    pricing: {
      smallCar: 850000,
      mediumCar: 1105000,
      largeVan: 1530000,
      luxury: 2125000
    },
    images: {
      main: 'https://images.unsplash.com/photo-15281272693224-7f618d3dfbd1?q=80&w=2070&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1528127269322-7f618d3dfbd1?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1573804633927-bf6bd7f89e3a?q=80&w=1887&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1887&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop'
      ],
      alt: [
        'Tegenungan Waterfall with people swimming in natural pool',
        'Tibumana Waterfall twin falls with clear water and rocks',
        'Tukad Cepung Waterfall with sunlight beam through cave',
        'Tropical rainforest path leading to waterfall'
      ]
    },
    destinations: ['tegenungan', 'tibumana', 'tukad-cepung'],
    metaTitle: 'Waterfall Adventure Tour | Explore Bali\'s Beautiful Waterfalls',
    metaDescription: 'Discover three stunning waterfalls: Tegenungan, Tibumana, and Tukad Cepung. Swim, hike, and explore Bali\'s natural beauty on this adventure tour.',
    keywords: ['bali waterfalls', 'waterfall tour', 'tegenungan', 'tibumana', 'tukad cepung', 'adventure tour'],
    rating: 4.6,
    reviewCount: 98,
    popularRank: 5,
    pickupIncluded: true,
    minParticipants: 1,
    maxParticipants: 8,
    difficulty: 'moderate',
    suitableFor: ['families', 'couples', 'solo', 'groups']
  },
  {
    id: 'east-bali-discovery',
    slug: 'east-bali-discovery',
    name: 'East Bali Discovery',
    shortDescription: 'Explore East Bali\'s hidden gems including Lempuyang Temple, Tirta Gangga, and Virgin Beach.',
    fullDescription: 'Journey to the less-explored eastern side of Bali and discover some of the island\'s most spectacular sights. This comprehensive tour takes you to the iconic Gates of Heaven at Lempuyang Temple, where you can capture that perfect photo between the gates with Mount Agung in the background. Visit the royal water palace of Tirta Gangga with its stunning pools and fountains, explore the historic Ujung Water Palace, and relax on the pristine white sand of Virgin Beach. East Bali offers a different perspective of the island, with fewer crowds, authentic local culture, and breathtaking natural scenery.',
    duration: 'full-day',
    durationHours: 12,
    category: ['culture', 'temple', 'beach'],
    itinerary: [
      {
        time: '6:00 AM',
        location: 'Hotel Pickup',
        activity: 'Early departure for East Bali',
        duration: '2 hours',
        description: 'Early morning pickup for the long journey to East Bali'
      },
      {
        time: '8:30 AM',
        location: 'Lempuyang Temple',
        activity: 'Gates of Heaven visit',
        duration: '2.5 hours',
        description: 'Climb to the iconic gates and capture stunning photos'
      },
      {
        time: '11:00 AM',
        location: 'Tirta Gangga',
        activity: 'Royal water palace exploration',
        duration: '1.5 hours',
        description: 'Visit the beautiful water gardens and pools'
      },
      {
        time: '1:00 PM',
        location: 'Local Restaurant',
        activity: 'Lunch break',
        duration: '1 hour',
        description: 'Traditional East Balinese cuisine'
      },
      {
        time: '2:30 PM',
        location: 'Taman Ujung',
        activity: 'Water palace visit',
        duration: '1.5 hours',
        description: 'Explore the historic Ujung Water Palace'
      },
      {
        time: '4:30 PM',
        location: 'Virgin Beach',
        activity: 'Beach relaxation',
        duration: '1.5 hours',
        description: 'Enjoy the pristine white sand and crystal clear water'
      },
      {
        time: '6:00 PM',
        location: 'Hotel Return',
        activity: 'Return journey',
        duration: '2.5 hours',
        description: 'Return to your hotel with beautiful memories'
      }
    ],
    highlights: [
      'Iconic Gates of Heaven at Lempuyang Temple',
      'Stunning Tirta Gangga water palace',
      'Historic Ujung Water Palace',
      'Relaxation at Virgin Beach',
      'Mount Agung as backdrop for photos',
      'Authentic East Balinese culture'
    ],
    included: [
      'Private air-conditioned vehicle',
      'Professional English-speaking driver',
      'Hotel pickup and drop-off',
      'All entrance fees',
      'Traditional lunch',
      'Bottled water and towels',
      'Parking fees',
      'Petrol and toll fees'
    ],
    excluded: [
      'Personal expenses',
      'Travel insurance',
      'Tips and gratuities',
      'Beach activities rentals',
      'Sarong rental for temples'
    ],
    pricing: {
      smallCar: 950000,
      mediumCar: 1235000,
      largeVan: 1710000,
      luxury: 2375000
    },
    images: {
      main: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1887&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1573804633927-bf6bd7f89e3a?q=80&w=1887&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop'
      ],
      alt: [
        'Lempuyang Temple Gates of Heaven with Mount Agung background',
        'Tirta Gangga water palace with stepping stones and pools',
        'Ujung Water Palace with European-style architecture',
        'Virgin Beach white sand with clear blue water'
      ]
    },
    destinations: ['lempuyang', 'tirta-gangga', 'ujung-water-palace', 'virgin-beach'],
    metaTitle: 'East Bali Discovery Tour | Gates of Heaven & Hidden Gems',
    metaDescription: 'Discover East Bali\'s hidden gems: Lempuyang Gates of Heaven, Tirta Gangga, Ujung Water Palace, and Virgin Beach. Full day adventure.',
    keywords: ['east bali', 'lempuyang temple', 'gates of heaven', 'tirta gangga', 'virgin beach', 'bali tour'],
    rating: 4.8,
    reviewCount: 167,
    popularRank: 4,
    pickupIncluded: true,
    minParticipants: 1,
    maxParticipants: 6,
    difficulty: 'challenging',
    suitableFor: ['families', 'couples', 'solo', 'groups']
  }
]
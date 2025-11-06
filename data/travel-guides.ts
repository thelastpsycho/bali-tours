import { TravelGuide, GuideCategory } from '@/types/travel-guide'

export const guideCategories: GuideCategory[] = [
  {
    id: 'culture',
    slug: 'culture',
    name: 'Culture & Temples',
    description: 'Learn about Balinese culture, traditions, and temple etiquette',
    icon: 'Temple',
    color: 'bg-tours-accent-100 text-tours-accent-900',
  },
  {
    id: 'nature',
    slug: 'nature',
    name: 'Nature & Wildlife',
    description: 'Discover Bali\'s natural beauty, beaches, and wildlife',
    icon: 'TreePine',
    color: 'bg-tours-success-100 text-tours-success-900',
  },
  {
    id: 'adventure',
    slug: 'adventure',
    name: 'Adventure Activities',
    description: 'Thrilling activities and adventures across the island',
    icon: 'Mountain',
    color: 'bg-tours-primary-100 text-tours-primary-900',
  },
  {
    id: 'food',
    slug: 'food',
    name: 'Food & Dining',
    description: 'Balinese cuisine, local delicacies, and dining tips',
    icon: 'Utensils',
    color: 'bg-tours-secondary-100 text-tours-secondary-900',
  },
  {
    id: 'practical',
    slug: 'practical',
    name: 'Practical Tips',
    description: 'Essential information for your Bali trip',
    icon: 'Info',
    color: 'bg-tours-neutral-100 text-tours-neutral-900',
  },
  {
    id: 'seasonal',
    slug: 'seasonal',
    name: 'Seasonal Guides',
    description: 'Best times to visit and seasonal activities',
    icon: 'Calendar',
    color: 'bg-tours-primary-100 text-tours-primary-900',
  },
]

export const travelGuides: TravelGuide[] = [
  // Culture Guides
  {
    id: '1',
    slug: 'balinese-temple-etiquette',
    title: 'Complete Guide to Balinese Temple Etiquette',
    subtitle: 'Learn the proper customs and respect when visiting sacred temples',
    category: 'culture',
    difficulty: 'easy',
    duration: '15 min read',
    estimatedReadingTime: 15,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&crop=entropy',
    author: {
      name: 'Wayan Sutawan',
      role: 'Local Cultural Expert',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    summary: 'Everything you need to know about respecting Balinese temple customs, including proper dress code, offerings, and photography etiquette.',
    introduction: 'Bali\'s temples are sacred spaces that require specific customs and behaviors. This guide will help you navigate temple visits respectfully and authentically.',
    sections: [
      {
        title: 'Understanding Temple Hierarchy',
        content: 'Balinese temples are organized into three types: public temples (pura desa), family temples (pura puseh), and directional temples (kayangan jagat). Each has different rules and levels of sacredness.',
        tips: [
          'Observe the temple entrance - if you see a split gate (candi bentar), it\'s likely a public temple',
          'Family temples require special permission to enter',
          'Always ask before photographing ceremonies or rituals'
        ]
      },
      {
        title: 'Proper Dress Code',
        content: 'Both men and women must cover their shoulders and knees. Sarongs are provided at most temples for free or with a small donation.',
        tips: [
          'Wear modest clothing underneath for ease',
          'Remove your shoes before entering temple grounds',
          'Use the provided sarongs correctly (wrap left over right)'
        ],
        mapLocation: {
          lat: -8.4095,
          lng: 115.1889,
          title: 'Besakih Temple'
        }
      },
      {
        title: 'Temple Etiquette Do\'s and Don\'ts',
        content: 'Understanding local customs helps you respect the sacred nature of these spaces and have a more meaningful experience.',
        tips: [
          'DO: Walk around shrines clockwise',
          'DO: Make a small donation for the sarong rental',
          'DON\'T: Touch temple artifacts or offerings',
          'DON\'T: Enter during religious ceremonies without permission'
        ]
      }
    ],
    bestTimeToVisit: ['Early morning (6-8 AM)', 'Late afternoon (4-6 PM)'],
    whatToBring: [
      'Modest clothing',
      'Small money for donations',
      'Hat and sunscreen',
      'Camera (with permission)'
    ],
    cost: {
      currency: 'IDR',
      min: 10000,
      max: 50000,
      notes: 'Most temples are free to enter but require donations or small fees for sarong rental'
    },
    metaTitle: 'Balinese Temple Etiquette Guide | Respectful Temple Visits in Bali',
    metaDescription: 'Learn proper Balinese temple customs, dress code, and etiquette for respectful temple visits. Essential guide for tourists visiting sacred sites.',
    keywords: [
      'balinese temple etiquette',
      'temple dress code bali',
      'visiting temples bali',
      'temple customs bali',
      'cultural etiquette bali'
    ],
    relatedTours: ['ubud-cultural-tour', 'uluwatu-sunset-tour'],
    relatedDestinations: ['ubud', 'uluwatu'],
    relatedGuides: ['balinese-offerings-guide'],
    views: 5234,
    likes: 289,
    shares: 156,
    featured: true,
    popularRank: 1
  },

  // Nature Guides
  {
    id: '2',
    slug: 'hidden-beaches-bali',
    title: 'Hidden Beaches of Bali: Beyond Tourist Crowds',
    subtitle: 'Discover secluded beaches and pristine coastal gems',
    category: 'nature',
    difficulty: 'moderate',
    duration: '20 min read',
    estimatedReadingTime: 20,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&crop=entropy',
    author: {
      name: 'Ketut Ariawan',
      role: 'Local Surf Guide & Beach Expert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-12',
    summary: 'Escape the tourist crowds and discover Bali\'s most beautiful hidden beaches, from the south coast to the north shore.',
    introduction: 'While Bali is famous for beaches like Kuta and Seminyak, the island\'s real treasures are its hidden, secluded beaches known only to locals and savvy travelers.',
    sections: [
      {
        title: 'South Coast Hidden Gems',
        content: 'The south coast offers several hidden beaches accessible through scenic walks or local knowledge. These spots offer pristine waters and fewer crowds.',
        tips: [
          'Green Bowl Beach requires descending stairs through limestone cliffs',
          'Thomas Beach in Uluwatu is a local surf spot with stunning views',
          'Padang Padang Secret Beach offers crystal-clear waters'
        ],
        mapLocation: {
          lat: -8.8208,
          lng: 115.0888,
          title: 'Uluwatu Hidden Beaches'
        }
      },
      {
        title: 'West Coast Adventures',
        content: 'The west coast offers black sand beaches and spectacular sunsets, with fewer tourists and authentic fishing villages.',
        tips: [
          'Balian Beach is perfect for learning to surf',
          'Medewi Beach offers long left-hand waves',
          'Local warungs serve fresh seafood caught daily'
        ]
      },
      {
        title: 'North Coast Serenity',
        content: 'Escape to the north for calm waters, volcanic black sand, and a completely different vibe from southern Bali.',
        tips: [
          'Lovina Beach is famous for dolphin watching',
          'Pemuteran offers excellent snorkeling and diving',
          'Less touristy, more authentic experience'
        ]
      }
    ],
    bestTimeToVisit: ['Dry season (April-October)', 'Early morning for fewer crowds'],
    whatToBring: [
      'Sunscreen (reef-safe)',
      'Hat and sunglasses',
      'Water shoes for rocky beaches',
      'Underwater camera'
    ],
    cost: {
      currency: 'IDR',
      min: 0,
      max: 100000,
      notes: 'Most beaches are free, some have small parking fees or require equipment rental'
    },
    metaTitle: 'Hidden Beaches Bali: Secret Coastal Gems & Secluded Beach Guide',
    metaDescription: 'Discover Bali\'s hidden beaches and secret coastal spots away from tourist crowds. Complete guide to pristine beaches, snorkeling spots, and local insights.',
    keywords: [
      'hidden beaches bali',
      'secret beaches bali',
      'secluded beaches bali',
      'best beaches bali',
      'bali beach guide'
    ],
    relatedTours: ['instagram-bali-tour', 'east-bali-discovery'],
    relatedDestinations: ['uluwatu', 'north-bali'],
    relatedGuides: ['snorkeling-guide-bali'],
    views: 4782,
    likes: 342,
    shares: 289,
    featured: true,
    popularRank: 2
  },

  // Food Guides
  {
    id: '3',
    slug: 'balinese-food-guide',
    title: 'Ultimate Guide to Balinese Cuisine: Must-Try Dishes',
    subtitle: 'Authentic flavors, street food, and dining etiquette',
    category: 'food',
    difficulty: 'easy',
    duration: '25 min read',
    estimatedReadingTime: 25,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&crop=entropy',
    author: {
      name: 'Made Suryani',
      role: 'Local Chef & Food Expert',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    },
    publishedAt: '2024-01-08',
    updatedAt: '2024-01-14',
    summary: 'From sate lilit to nasi goreng, discover the authentic flavors of Bali with this comprehensive food guide.',
    introduction: 'Balinese cuisine is a delightful blend of spices, fresh ingredients, and centuries-old cooking traditions. This guide will help you navigate the island\'s food scene like a local.',
    sections: [
      {
        title: 'Must-Try Balinese Dishes',
        content: 'Balinese cuisine offers a unique blend of Indonesian and local flavors with its own distinctive characteristics.',
        tips: [
          'Try Babi Guling (suckling pig) - Bali\'s most famous dish',
          'Sate Lilit (minced seafood skewers) is a local favorite',
          'Lawar (vegetable salad with minced meat) is uniquely Balinese',
          'Be Siap Sambal Matah (chicken with sambal) is a spicy delight'
        ]
      },
      {
        title: 'Street Food Guide',
        content: 'The best Balinese food is often found at local warungs (small eateries) and street vendors.',
        tips: [
          'Look for busy places - high turnover means fresh food',
          'Try Nasi Campur (mixed rice) for variety',
          'Martabak manis (sweet pancake) makes a great dessert',
          'Es Dawet (coconut ice dessert) is perfect for hot days'
        ],
        mapLocation: {
          lat: -8.3405,
          lng: 115.0920,
          title: 'Denpasar Night Market'
        }
      },
      {
        title: 'Dining Etiquette',
        content: 'Understanding local dining customs enhances your experience and shows respect for the culture.',
        tips: [
          'Wait to be served rather than sitting down immediately',
          'It\'s polite to leave a little food on your plate',
          'Use your right hand when eating traditional style',
          'Tipping is appreciated but not mandatory'
        ]
      }
    ],
    bestTimeToVisit: ['Lunch hours (11 AM-2 PM)', 'Dinner (6-8 PM)'],
    whatToBring: [
      'Small appetite (portions are generous)',
      'Open mind for spicy foods',
      'Cash for street vendors',
      'Antacid if sensitive to spicy food'
    ],
    cost: {
      currency: 'IDR',
      min: 15000,
      max: 200000,
      notes: 'Street food: 15,000-50,000 IDR. Mid-range restaurants: 50,000-150,000 IDR. Fine dining: 150,000+ IDR'
    },
    metaTitle: 'Balinese Food Guide: Must-Try Dishes, Street Food & Local Cuisine',
    metaDescription: 'Complete guide to Balinese cuisine with must-try dishes, street food recommendations, and authentic local flavors. Eat like a local in Bali.',
    keywords: [
      'balinese food',
      'balinese cuisine',
      'must try dishes bali',
      'street food bali',
      'local food bali',
      'warung food bali'
    ],
    relatedTours: ['ubud-cultural-tour', 'instagram-bali-tour'],
    relatedDestinations: ['ubud', 'denpasar'],
    relatedGuides: ['balinese-cooking-class-guide'],
    views: 6123,
    likes: 445,
    shares: 356,
    featured: true,
    popularRank: 3
  },

  // Practical Guides
  {
    id: '4',
    slug: 'bali-first-time-guide',
    title: 'First-Time Visitor\'s Guide to Bali',
    subtitle: 'Essential tips for planning your perfect Bali trip',
    category: 'practical',
    difficulty: 'easy',
    duration: '30 min read',
    estimatedReadingTime: 30,
    image: 'https://images.unsplash.com/photo-1537953773346-d86cc0928526?w=800&h=600&fit=crop&crop=entropy',
    author: {
      name: 'Putu Widyastuti',
      role: 'Travel Consultant',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-16',
    summary: 'Everything you need to know for your first visit to Bali - from visa requirements to cultural tips and practical advice.',
    introduction: 'Bali welcomes millions of visitors each year, but first-time travelers often face unexpected challenges. This guide covers everything you need to know before arriving.',
    sections: [
      {
        title: 'Before You Arrive',
        content: 'Proper preparation is key to a smooth Bali experience. Here\'s what you need to know before booking your trip.',
        tips: [
          'Check visa requirements for your nationality',
          'Book accommodations in advance during peak season',
          'Consider travel insurance that covers Indonesia',
          'Pack light clothing and insect repellent'
        ]
      },
      {
        title: 'Getting Around Bali',
        content: 'Transportation in Bali can be challenging. Understanding your options will help you plan better.',
        tips: [
          'Scooter rental offers freedom but requires international license',
          'Ride-hailing apps (Gojek/Grab) work in most tourist areas',
          'Private drivers are recommended for day trips',
          'Public transportation is limited and unreliable'
        ],
        mapLocation: {
          lat: -8.4095,
          lng: 115.1889,
          title: 'Ngurah Rai International Airport'
        }
      },
      {
        title: 'Money & Budgeting',
        content: 'Understanding currency, costs, and payment methods helps you manage your budget effectively.',
        tips: [
          'Indonesian Rupiah (IDR) is the only accepted currency',
          'ATMs are widely available but charge fees',
          'Credit cards accepted at hotels and restaurants',
          'Daily budget: 500,000-1,000,000 IDR per person'
        ]
      },
      {
        title: 'Health & Safety',
        content: 'Staying healthy and safe in Bali requires some awareness and preparation.',
        tips: [
          'Drink only bottled or filtered water',
          'Use mosquito repellent, especially during evenings',
          'Be cautious with street food if you have sensitive stomach',
          'Have travel insurance that covers medical evacuation'
        ]
      }
    ],
    bestTimeToVisit: ['April-October (dry season)', 'Shoulder seasons offer better value'],
    whatToBring: [
      'Passport with 6+ months validity',
      'International driver\'s permit (if renting scooter)',
      'Power adapter (Type F/C plugs)',
      'Basic medications and first-aid'
    ],
    cost: {
      currency: 'IDR',
      min: 500000,
      max: 2000000,
      notes: 'Budget: 500,000-800,000 IDR/day. Mid-range: 800,000-1,500,000 IDR/day. Luxury: 1,500,000+ IDR/day'
    },
    metaTitle: 'First-Time Visitor Guide to Bali | Essential Tips for Bali Travel',
    metaDescription: 'Complete first-timer\'s guide to Bali with essential tips on visas, transportation, money, safety, and cultural etiquette. Plan your perfect Bali trip.',
    keywords: [
      'bali first time visitor',
      'bali travel tips',
      'bali guide for beginners',
      'bali essential tips',
      'first time in bali',
      'bali travel guide'
    ],
    relatedTours: ['ubud-cultural-tour', 'instagram-bali-tour', 'waterfall-adventure'],
    relatedDestinations: ['ubud', 'canggu', 'seminyak'],
    relatedGuides: ['balinese-temple-etiquette', 'hidden-beaches-bali'],
    views: 8934,
    likes: 678,
    shares: 523,
    featured: true,
    popularRank: 4
  },

  // Adventure Guides
  {
    id: '5',
    slug: 'snorkeling-guide-bali',
    title: 'Best Snorkeling Spots in Bali',
    subtitle: 'Underwater paradise with coral reefs and marine life',
    category: 'adventure',
    difficulty: 'easy',
    duration: '15 min read',
    estimatedReadingTime: 15,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=entropy',
    author: {
      name: 'Komang Adi',
      role: 'Marine Biologist & Dive Master',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    },
    publishedAt: '2024-01-03',
    updatedAt: '2024-01-10',
    summary: 'Discover Bali\'s best snorkeling spots, from vibrant coral gardens to mysterious shipwrecks and encounters with manta rays.',
    introduction: 'Bali\'s waters are home to some of the most diverse marine life in Indonesia. Whether you\'re a beginner or experienced snorkeler, there\'s a perfect spot waiting for you.',
    sections: [
      {
        title: 'South Coast Snorkeling',
        content: 'The south coast offers accessible snorkeling with good visibility and coral reef protection.',
        tips: [
          'Tanjung Benoa is beginner-friendly with calm waters',
          'Sanur Beach offers gentle slopes and vibrant coral',
          'Best visited during high tide for better conditions'
        ]
      },
      {
        title: 'East Coast Paradise',
        content: 'The east coast boasts some of Bali\'s best snorkeling with crystal-clear waters and thriving marine life.',
        tips: [
          'Amed has incredible coral gardens and Japanese shipwreck',
          'Padang Bai offers multiple snorkeling spots including Blue Lagoon',
          'Tulamben\'s USAT Liberty shipwreck is world-class',
          'Crystal Bay nearby Nusa Penida is famous for mola-mola sightings'
        ],
        mapLocation: {
          lat: -8.2034,
          lng: 115.6130,
          title: 'Amed Snorkeling Area'
        }
      },
      {
        title: 'Snorkeling Tips & Equipment',
        content: 'Proper preparation and equipment make all the difference for a great snorkeling experience.',
        tips: [
          'Bring reef-safe sunscreen to protect coral',
          'Anti-fog spray for your mask is essential',
          'Always snorkel with a buddy for safety',
          'Don\'t touch coral or marine life',
          'Check tides and conditions before going'
        ]
      }
    ],
    bestTimeToVisit: ['Dry season (April-October)', 'Morning (8-10 AM) for best visibility'],
    whatToBring: [
      'Reef-safe sunscreen',
      'Underwater camera',
      'Waterproof phone case',
      'Towel and dry clothes'
    ],
    cost: {
      currency: 'IDR',
      min: 100000,
      max: 800000,
      notes: 'Equipment rental: 100,000-200,000 IDR. Guided tours: 200,000-400,000 IDR. Full-day trips: 400,000-800,000 IDR'
    },
    metaTitle: 'Best Snorkeling Spots Bali | Coral Reefs & Marine Life Guide',
    metaDescription: 'Complete guide to Bali\'s best snorkeling spots, including Amed, Tulamben, Padang Bai, and Nusa islands. Marine life, coral reefs, and professional tips.',
    keywords: [
      'snorkeling bali',
      'best snorkeling spots bali',
      'bali marine life',
      'bali coral reefs',
      'amed snorkeling',
      'tulamben wreck'
    ],
    relatedTours: ['waterfall-adventure', 'instagram-bali-tour'],
    relatedDestinations: ['amed', 'tulamben', 'padang-bai'],
    relatedGuides: ['diving-guide-bali'],
    views: 3892,
    likes: 267,
    shares: 198,
    featured: false,
    popularRank: 7
  },

  // Seasonal Guides
  {
    id: '6',
    slug: 'best-time-visit-bali',
    title: 'When to Visit Bali: Complete Seasonal Guide',
    subtitle: 'Weather, crowds, prices, and events throughout the year',
    category: 'seasonal',
    difficulty: 'easy',
    duration: '20 min read',
    estimatedReadingTime: 20,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop&crop=entropy',
    author: {
      name: 'Dewi Lestari',
      role: 'Meteorologist & Travel Expert',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    },
    publishedAt: '2024-01-01',
    updatedAt: '2024-01-18',
    summary: 'Discover the best time to visit Bali based on weather, crowds, prices, and seasonal activities. Plan your trip perfectly.',
    introduction: 'Bali\'s tropical climate means it\'s always a good time to visit, but different seasons offer unique advantages. Understanding Bali\'s weather patterns and tourist seasons helps you plan the perfect trip.',
    sections: [
      {
        title: 'Dry Season (April - October)',
        content: 'The most popular time to visit Bali, offering sunny days and perfect beach weather.',
        tips: [
          'Best time for outdoor activities and beach days',
          'Peak tourist season means higher prices and crowds',
          'July-August is busiest and most expensive',
          'Perfect for surfing, hiking, and temple visits'
        ]
      },
      {
        title: 'Rainy Season (November - March)',
        content: 'Often called the "green season" for its lush landscapes, with advantages that many travelers overlook.',
        tips: [
          'Lower prices and fewer tourists',
          'Afternoon showers don\'t typically ruin plans',
          'Lush, green landscapes are most beautiful',
          'Some outdoor activities may be affected'
        ],
        mapLocation: {
          lat: -8.4095,
          lng: 115.1889,
          title: 'Central Bali Weather Pattern'
        }
      },
      {
        title: 'Shoulder Seasons (March & October)',
        content: 'The sweet spot between peak and off-peak seasons, offering the best of both worlds.',
        tips: [
          'Good weather with fewer crowds',
          'Reasonable prices for accommodation',
          'Less humidity than rainy season',
          'Book in advance as these months are becoming popular'
        ]
      },
      {
        title: 'Monthly Breakdown',
        content: 'Each month in Bali has its own character and advantages.',
        tips: [
          'January: Heavy rains, but great for spa retreats',
          'February: Quietest month, lowest prices',
          'March: Weather improving, fewer crowds',
          'April: Start of dry season, great value',
          'May: Excellent weather before peak crowds',
          'June: Beginning of peak season, book ahead',
          'July-August: Peak tourist season, expensive',
          'September: Weather still great, crowds thinning',
          'October: Excellent value, great weather',
          'November: Transition to rainy season',
          'December: Rainy season begins, holiday crowds'
        ]
      },
      {
        title: 'Festival & Event Calendar',
        content: 'Bali\'s Hindu calendar is filled with ceremonies and festivals that add cultural depth to any visit.',
        tips: [
          'Nyepi (Day of Silence) in March - complete island shutdown',
          'Galungan & Kuningan - 10-day Hindu celebration',
          'Local temple anniversaries (odalan) happen monthly',
          'Arts Festival in Ubud (June-July)'
        ]
      }
    ],
    bestTimeToVisit: ['April-October for beach weather', 'November-March for budget travel'],
    whatToBring: [
      'Lightweight, breathable clothing',
      'Rain jacket or poncho',
      'Sun protection year-round',
      'Layers for air-conditioned spaces'
    ],
    cost: {
      currency: 'IDR',
      min: 400000,
      max: 2500000,
      notes: 'Peak season (June-August): 1,500,000-2,500,000 IDR/day. Shoulder season: 800,000-1,500,000 IDR/day. Low season: 400,000-800,000 IDR/day'
    },
    metaTitle: 'Best Time to Visit Bali | Weather, Crowds, Prices & Seasonal Guide',
    metaDescription: 'Complete seasonal guide to Bali including weather patterns, tourist seasons, pricing, and festival calendar. Plan your perfect Bali trip at the right time.',
    keywords: [
      'best time visit bali',
      'bali weather seasons',
      'bali tourist season',
      'bali rainy season',
      'bali dry season',
      'bali festival calendar'
    ],
    relatedTours: ['ubud-cultural-tour', 'instagram-bali-tour', 'uluwatu-sunset-tour'],
    relatedDestinations: ['ubud', 'uluwatu', 'seminyak'],
    relatedGuides: ['bali-first-time-guide', 'hidden-beaches-bali'],
    views: 7234,
    likes: 523,
    shares: 412,
    featured: true,
    popularRank: 5
  }
]

export const getGuideBySlug = (slug: string): TravelGuide | undefined => {
  return travelGuides.find(guide => guide.slug === slug)
}

export const getGuidesByCategory = (category: string): TravelGuide[] => {
  return travelGuides.filter(guide => guide.category === category)
}

export const getFeaturedGuides = (): TravelGuide[] => {
  return travelGuides.filter(guide => guide.featured)
}

export const getPopularGuides = (): TravelGuide[] => {
  return travelGuides
    .filter(guide => guide.popularRank)
    .sort((a, b) => (a.popularRank || 0) - (b.popularRank || 0))
}

export const getRelatedGuides = (guide: TravelGuide): TravelGuide[] => {
  return travelGuides.filter(g =>
    g.id !== guide.id &&
    (g.category === guide.category ||
     g.relatedGuides.includes(guide.slug) ||
     g.relatedTours.some(tour => guide.relatedTours.includes(tour)) ||
     g.relatedDestinations.some(dest => guide.relatedDestinations.includes(dest)))
  ).slice(0, 3)
}
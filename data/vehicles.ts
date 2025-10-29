import { Vehicle } from '@/types/tour'

export const vehicles: Vehicle[] = [
  {
    id: 'small-car',
    type: 'small',
    name: 'Small Car',
    model: 'Toyota Avanza',
    capacity: {
      passengers: 4,
      luggage: 2
    },
    features: [
      'Air Conditioning',
      'Professional Driver',
      'Fuel Included',
      'Parking Fees Included',
      'Insurance',
      'USB Charging',
      'Bottled Water'
    ],
    image: 'https://images.unsplash.com/photo-1549399542-7e2467375061?q=80&w=1887&auto=format&fit=crop',
    available: true,
    priceMultiplier: 1.0
  },
  {
    id: 'medium-car',
    type: 'medium',
    name: 'Medium Car',
    model: 'Toyota Innova',
    capacity: {
      passengers: 6,
      luggage: 4
    },
    features: [
      'Air Conditioning',
      'Professional Driver',
      'Fuel Included',
      'Parking Fees Included',
      'Insurance',
      'USB Charging',
      'Bottled Water',
      'More Legroom',
      'Premium Seats'
    ],
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358453?q=80&w=1887&auto=format&fit=crop',
    available: true,
    priceMultiplier: 1.3
  },
  {
    id: 'large-van',
    type: 'large',
    name: 'Large Van',
    model: 'Toyota Hiace',
    capacity: {
      passengers: 12,
      luggage: 8
    },
    features: [
      'Air Conditioning',
      'Professional Driver',
      'Fuel Included',
      'Parking Fees Included',
      'Insurance',
      'USB Charging',
      'Bottled Water',
      'Spacious Interior',
      'Luggage Space',
      'Premium Sound System'
    ],
    image: 'https://images.unsplash.com/photo-1570125479572-45100baca32c?q=80&w=1887&auto=format&fit=crop',
    available: true,
    priceMultiplier: 1.8
  },
  {
    id: 'luxury-car',
    type: 'luxury',
    name: 'Luxury Vehicle',
    model: 'Toyota Alphard',
    capacity: {
      passengers: 4,
      luggage: 3
    },
    features: [
      'Premium Air Conditioning',
      'Professional Driver',
      'Fuel Included',
      'Parking Fees Included',
      'Premium Insurance',
      'Wireless Charging',
      'Premium Amenities',
      'Leather Seats',
      'Privacy Glass',
      'Premium Sound System',
      'Refrigerator'
    ],
    image: 'https://images.unsplash.com/photo-1580273916550-e60bd42bf3bb?q=80&w=1887&auto=format&fit=crop',
    available: true,
    priceMultiplier: 2.5
  }
]
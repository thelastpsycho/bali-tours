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
    image: 'https://www.dsf.my/wp-content/uploads/2015/10/ExteriorDI-L_DI-5_1-110915.jpg',
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
    image: 'https://radarbanyumas.disway.id/upload/085d54e6f94421216fb53bbbbf571038.jpg',
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
    image: 'https://toyotanigeria.com/wp-content/uploads/2018/11/Haice-scaled.jpg',
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
    image: 'https://2024toyota.net/wp-content/uploads/2023/02/2024-Toyota-Alphard-Exterior.jpg',
    available: true,
    priceMultiplier: 2.5
  }
]

export function getAllVehicles() {
  return vehicles
}
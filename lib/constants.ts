// Configuration constants for Bali Tours website

// Contact Information
export const CONTACT_INFO = {
  phone: '+6281234567890', // Replace with actual phone number
  phoneRaw: '6281234567890', // Without + for WhatsApp
  email: 'info@balitourstransportation.com',
  whatsapp: '6281234567890',
} as const

// Business Information
export const BUSINESS_INFO = {
  name: 'Bali Tours Transportation',
  description: 'Professional private tour services in Bali with experienced drivers and customizable itineraries.',
  url: 'https://balitourstransportation.com',
  address: {
    city: 'Denpasar',
    region: 'Bali',
    country: 'Indonesia',
  },
  hours: '8 AM - 8 PM (WITA)',
} as const

// Social Media
export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/balitourstransportation',
  instagram: 'https://instagram.com/balitourstransportation',
  youtube: 'https://youtube.com/@balitourstransportation',
} as const

// Default Configuration
export const DEFAULT_CONFIG = {
  currency: 'IDR' as const,
  locale: 'en-US' as const,
  timezone: 'Asia/Makassar' as const, // Bali timezone (WITA)
} as const
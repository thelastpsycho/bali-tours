import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: 'IDR' = 'IDR'): string {
  if (currency === 'IDR') {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function generateWhatsAppLink(params: {
  tourName?: string
  date?: string
  passengers?: number
  vehicleType?: string
}) {
  const phoneNumber = '62XXXXXXXXX' // Replace with actual number
  const baseUrl = `https://wa.me/${phoneNumber}`

  let message = 'Hi, I would like to inquire about '

  if (params.tourName) {
    message += `${params.tourName} tour`
    if (params.date) message += ` on ${params.date}`
    if (params.passengers) message += ` for ${params.passengers} people`
    if (params.vehicleType) message += ` with ${params.vehicleType}`
  } else {
    message += 'your Bali tours'
  }

  message += '. Could you provide more information?'

  return `${baseUrl}?text=${encodeURIComponent(message)}`
}
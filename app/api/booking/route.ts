import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema for booking
const bookingSchema = z.object({
  customerInfo: z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(8, 'Phone number must be at least 8 characters'),
    country: z.string().min(2, 'Country is required'),
    adults: z.number().min(1, 'At least 1 adult is required'),
    children: z.number().min(0).optional(),
    infants: z.number().min(0).optional(),
  }),
  tourInfo: z.object({
    tourId: z.string().min(1, 'Tour ID is required'),
    tourName: z.string().min(1, 'Tour name is required'),
    date: z.string().min(1, 'Tour date is required'),
    duration: z.string().min(1, 'Duration is required'),
    pickupLocation: z.string().min(1, 'Pickup location is required'),
    specialRequests: z.string().optional(),
  }),
  vehicleInfo: z.object({
    vehicleType: z.string().min(1, 'Vehicle type is required'),
    vehicleName: z.string().min(1, 'Vehicle name is required'),
    basePrice: z.number().positive('Base price must be positive'),
    additionalServices: z.array(z.object({
      name: z.string(),
      price: z.number().positive(),
    })).optional(),
  }),
  pricing: z.object({
    basePrice: z.number().positive('Base price must be positive'),
    additionalServices: z.number().min(0),
    total: z.number().positive('Total must be positive'),
    currency: z.string().default('USD'),
  }),
  payment: z.object({
    method: z.enum(['cash', 'bank-transfer', 'paypal', 'credit-card']),
    status: z.enum(['pending', 'paid', 'partial']).default('pending'),
  }),
  termsAccepted: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = bookingSchema.parse(body)

    // Here you would typically:
    // 1. Generate booking reference
    // 2. Store in database
    // 3. Send confirmation email to customer
    // 4. Send notification to admin
    // 5. Send WhatsApp confirmation
    // 6. Process payment (if applicable)

    // Generate booking reference
    const bookingReference = `BKT-${Date.now().toString().slice(-8).toUpperCase()}`

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('New booking:', {
      reference: bookingReference,
      ...validatedData,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Your booking has been confirmed! Check your email for details.',
        data: {
          bookingReference,
          timestamp: new Date().toISOString(),
          status: 'confirmed',
          nextSteps: [
            'We will send a confirmation email shortly',
            'Our team will contact you via WhatsApp to confirm pickup details',
            'Please have your ID ready on the tour day',
            'Payment can be made on the tour day (for cash bookings)'
          ]
        }
      },
      { status: 200 }
    )

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Booking validation failed',
          errors: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    console.error('Booking error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your booking. Please try again later.'
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  // This would typically check booking status
  const { searchParams } = new URL(request.url)
  const reference = searchParams.get('reference')

  if (!reference) {
    return NextResponse.json(
      {
        success: false,
        message: 'Booking reference is required'
      },
      { status: 400 }
    )
  }

  // Simulate database lookup
  return NextResponse.json(
    {
      success: true,
      data: {
        reference,
        status: 'confirmed',
        customerName: 'John Doe',
        tourName: 'Ubud Cultural Heritage Tour',
        date: '2024-01-15',
        totalPaid: 150,
        currency: 'USD',
        bookingDate: '2024-01-10T10:30:00Z',
        statusHistory: [
          { status: 'pending', timestamp: '2024-01-10T10:30:00Z', note: 'Booking initiated' },
          { status: 'confirmed', timestamp: '2024-01-10T10:35:00Z', note: 'Booking confirmed' },
        ]
      }
    },
    { status: 200 }
  )
}
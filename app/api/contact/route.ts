import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 characters'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  destination: z.string().optional(),
  tourType: z.enum(['private-tour', 'airport-transfer', 'hotel-transfer', 'custom-tour']).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Here you would typically:
    // 1. Send email to your business email
    // 2. Store in database
    // 3. Send auto-reply to customer
    // 4. Send WhatsApp notification

    // For now, we'll simulate the process
    console.log('Contact form submission:', validatedData)

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry! We will contact you within 24 hours.',
        data: {
          timestamp: new Date().toISOString(),
          inquiryId: `INQ-${Date.now()}`,
        }
      },
      { status: 200 }
    )

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.'
      },
      { status: 500 }
    )
  }
}
'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import { generateWhatsAppLink } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  tour: z.string().optional(),
  date: z.string().optional(),
  participants: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Create WhatsApp message
      const whatsappMessage = `*New Contact Form Submission*

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Tour Interest: ${data.tour || 'Not specified'}
Preferred Date: ${data.date || 'Not specified'}
Participants: ${data.participants || 'Not specified'}

Message:
${data.message}`

      const whatsappLink = generateWhatsAppLink({
        message: whatsappMessage,
      })

      // Open WhatsApp in new tab
      window.open(whatsappLink, '_blank')

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const tours = [
    'Ubud Cultural Tour',
    'Uluwatu Sunset Tour',
    'Instagram Bali Tour',
    'Waterfall Adventure',
    'East Bali Discovery',
    'Custom Tour'
  ]

  return (
    <div className="min-h-screen bg-tours-neutral-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-tours-primary-950 to-tours-primary-900 text-white py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1887&auto=format&fit=crop"
            alt="Bali temple"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-tours-neutral-200 max-w-3xl mx-auto">
              Have questions about our tours? Want to customize your itinerary?
              We're here to help you plan the perfect Bali adventure.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-display font-semibold mb-6">Get in Touch</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-tours-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-tours-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tours-primary-950">Our Location</h3>
                    <p className="text-tours-neutral-600">
                      Jalan Raya Kuta No. 100X<br />
                      Kuta, Bali 80361
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-tours-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-tours-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tours-primary-950">Phone & WhatsApp</h3>
                    <p className="text-tours-neutral-600">
                      <a href="tel:+6281234567890" className="hover:text-tours-primary-900 transition-colors">
                        +62 812 3456 7890
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-tours-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-tours-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tours-primary-950">Email</h3>
                    <p className="text-tours-neutral-600">
                      <a href="mailto:info@balitourstransportation.com" className="hover:text-tours-primary-900 transition-colors">
                        info@balitourstransportation.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-tours-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-tours-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tours-primary-950">Operating Hours</h3>
                    <p className="text-tours-neutral-600">
                      Monday - Sunday<br />
                      8:00 AM - 8:00 PM WITA
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Image */}
              <div className="pt-6">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1887&auto=format&fit=crop"
                  alt="Our office in Bali"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-sm text-tours-neutral-500 mt-2 text-center">Our friendly team ready to assist you</p>
              </div>

              {/* Quick Contact */}
              <div className="pt-6 border-t border-tours-neutral-200">
                <h3 className="font-semibold mb-3">Quick Contact</h3>
                <Button
                  as="a"
                  href={generateWhatsAppLink({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  size="lg"
                  className="w-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-display font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-tours-primary-950 mb-1">Do I need to pay upfront?</h4>
                  <p className="text-sm text-tours-neutral-600">
                    No, you can pay directly to your driver on the day of the tour.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-tours-primary-950 mb-1">Can I customize my tour?</h4>
                  <p className="text-sm text-tours-neutral-600">
                    Yes, all our tours can be customized to match your preferences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-tours-primary-950 mb-1">Is pickup included?</h4>
                  <p className="text-sm text-tours-neutral-600">
                    Yes, we provide pickup and drop-off from most areas in South Bali.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-display font-semibold mb-6">Send us a Message</h2>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent via WhatsApp. We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Your Name"
                    {...register('name')}
                    error={errors.name?.message}
                    placeholder="John Doe"
                    required
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    {...register('email')}
                    error={errors.email?.message}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input
                    label="Phone Number"
                    {...register('phone')}
                    error={errors.phone?.message}
                    placeholder="+62 812 3456 7890"
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-tours-primary-900 mb-2">
                      Tour Interest
                    </label>
                    <select
                      {...register('tour')}
                      className="w-full px-4 py-3 border border-tours-neutral-300 rounded-lg bg-white text-tours-primary-900 focus:outline-none focus:ring-2 focus:ring-tours-primary-900 focus:border-transparent"
                    >
                      <option value="">Select a tour (optional)</option>
                      {tours.map((tour) => (
                        <option key={tour} value={tour}>
                          {tour}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Input
                    label="Preferred Date"
                    type="date"
                    {...register('date')}
                    error={errors.date?.message}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-tours-primary-900 mb-2">
                    Number of Participants
                  </label>
                  <select
                    {...register('participants')}
                    className="w-full px-4 py-3 border border-tours-neutral-300 rounded-lg bg-white text-tours-primary-900 focus:outline-none focus:ring-2 focus:ring-tours-primary-900 focus:border-transparent"
                  >
                    <option value="">Select participants (optional)</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7+">7+ People</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-tours-primary-900 mb-2">
                    Your Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-4 py-3 border border-tours-neutral-300 rounded-lg bg-white text-tours-primary-900 placeholder:text-tours-neutral-400 focus:outline-none focus:ring-2 focus:ring-tours-primary-900 focus:border-transparent resize-none"
                    placeholder="Tell us about your travel plans, preferences, or any questions you have..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-tours-neutral-200">
                  <p className="text-sm text-tours-neutral-600">
                    We typically respond within 1 hour during business hours.
                  </p>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
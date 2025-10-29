import { Search, Calendar, Heart } from 'lucide-react'
import Card from '@/components/shared/Card'

const steps = [
  {
    icon: Search,
    title: 'Choose Your Tour',
    description: 'Browse our curated selection of tours or request a custom itinerary tailored to your interests.',
    color: 'bg-tours-primary-100 text-tours-primary-900',
  },
  {
    icon: Calendar,
    title: 'Book & Confirm',
    description: 'Select your preferred date, vehicle, and group size. Get instant confirmation via WhatsApp or email.',
    color: 'bg-tours-accent-100 text-tours-accent-900',
  },
  {
    icon: Heart,
    title: 'Enjoy Your Experience',
    description: 'Meet your professional driver and embark on an unforgettable Bali adventure with peace of mind.',
    color: 'bg-tours-secondary-100 text-tours-secondary-900',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-md md:text-display-lg font-display font-semibold text-tours-primary-950 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-tours-neutral-600 leading-relaxed">
            Booking your Bali tour is simple and straightforward. Follow these three easy steps
            to secure your perfect Bali experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-elegant-lg transition-all duration-300">
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>
              <div className="text-2xl font-display font-semibold text-tours-primary-950 mb-2">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-tours-primary-950 mb-3">
                {step.title}
              </h3>
              <p className="text-tours-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
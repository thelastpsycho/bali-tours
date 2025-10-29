import { CheckCircle, Shield, Clock, MapPin } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: 'Professional Drivers',
    description: 'Experienced, English-speaking drivers with extensive local knowledge',
  },
  {
    icon: Shield,
    title: 'Safe & Reliable',
    description: 'Well-maintained vehicles with comprehensive insurance coverage',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Customizable itineraries and pickup times to suit your needs',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Insider tips and access to hidden gems and authentic experiences',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-tours-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-md md:text-display-lg font-display font-semibold text-tours-primary-950 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-tours-neutral-600 leading-relaxed">
            We\'re committed to providing exceptional service and unforgettable experiences.
            Here\'s what sets us apart from other tour providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-tours-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-tours-primary-900" />
              </div>
              <h3 className="text-xl font-semibold text-tours-primary-950 mb-2">
                {feature.title}
              </h3>
              <p className="text-tours-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
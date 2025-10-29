import { Star, Quote } from 'lucide-react'
import Card from '@/components/shared/Card'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Australia',
    tour: 'Ubud Cultural Tour',
    rating: 5,
    content: 'Absolutely fantastic experience! Our driver was knowledgeable, friendly, and went above and beyond. The tour was well-organized and we saw so much in one day. Highly recommend!',
    avatar: '/testimonials/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    tour: 'Instagram Bali Tour',
    rating: 5,
    content: 'Perfect for capturing amazing photos! Every stop was Instagram-worthy. The driver knew all the best spots and timing for lighting. Made our trip unforgettable.',
    avatar: '/testimonials/michael.jpg',
  },
  {
    name: 'Emma Williams',
    location: 'United Kingdom',
    tour: 'Uluwatu Sunset Tour',
    rating: 5,
    content: 'The sunset tour was magical! Kecak dance was incredible, and the seafood dinner on Jimbaran Beach was the perfect ending. Professional service throughout.',
    avatar: '/testimonials/emma.jpg',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'fill-tours-accent-500 text-tours-accent-500'
              : 'text-tours-neutral-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-md md:text-display-lg font-display font-semibold text-tours-primary-950 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-tours-neutral-600 leading-relaxed">
            Don\'t just take our word for it. Here\'s what our happy customers have to say
            about their experiences with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-tours-primary-200 mr-2" />
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-tours-neutral-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-tours-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-tours-primary-900 font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-tours-primary-950">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-tours-neutral-500">
                    {testimonial.location} • {testimonial.tour}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
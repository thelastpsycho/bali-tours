import Image from 'next/image'
import { ArrowRight, Search } from 'lucide-react'
import Button from '@/components/shared/Button'
import { generateWhatsAppLink } from '@/lib/utils'
import Link from 'next/link'

export default function Hero() {
  const whatsappLink = generateWhatsAppLink({})

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/bali-landscape.jpg"
          alt="Beautiful Bali landscape with rice terraces and mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tours-primary-950/80 via-tours-primary-950/60 to-tours-primary-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="animate-slide-up">
            <h1 className="text-display-lg md:text-display-xl font-display font-semibold text-white mb-6 leading-tight">
              Discover Bali's Hidden Treasures
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
              Curated private tours with expert local guides.
              Experience authentic Bali at your own pace with comfortable vehicles
              and customizable itineraries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                as={Link}
                href="/tours"
                variant="accent"
                size="lg"
              >
                Browse Tours
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30"
              >
                <Search className="w-5 h-5 mr-2" />
                Custom Tour
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-display font-semibold text-white mb-1">500+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-semibold text-white mb-1">4.9</div>
                <div className="text-sm text-white/80">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-semibold text-white mb-1">5+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
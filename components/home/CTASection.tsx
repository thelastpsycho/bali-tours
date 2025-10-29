import Button from '@/components/shared/Button'
import { generateWhatsAppLink } from '@/lib/utils'
import { Phone, MessageCircle } from 'lucide-react'

export default function CTASection() {
  const whatsappLink = generateWhatsAppLink({})

  return (
    <section className="py-16 md:py-24 bg-tours-primary-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-display-md md:text-display-lg font-display font-semibold text-white mb-6">
          Ready to Explore Bali?
        </h2>
        <p className="text-xl text-tours-neutral-300 mb-10 max-w-2xl mx-auto">
          Let us help you create unforgettable memories in the Island of the Gods.
          Get in touch today for a personalized quote and travel recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            as="a"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </Button>
          <Button
            as="a"
            href="tel:+6281234567890"
            variant="secondary"
            size="lg"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us Now
          </Button>
        </div>
        <p className="text-tours-neutral-400 mt-6">
          Quick response within 5 minutes • Available 8 AM - 8 PM
        </p>
      </div>
    </section>
  )
}
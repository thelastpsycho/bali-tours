import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react'
import Button from '@/components/shared/Button'
import { generateWhatsAppLink } from '@/lib/utils'

export default function Footer() {
  const whatsappLink = generateWhatsAppLink({})

  const footerLinks = {
    Explore: [
      { name: 'All Tours', href: '/tours' },
      { name: 'Half-Day Tours', href: '/tours?duration=half-day' },
      { name: 'Full-Day Tours', href: '/tours?duration=full-day' },
      { name: 'Custom Tours', href: '/tours?duration=custom' },
    ],
    Destinations: [
      { name: 'Ubud', href: '/destinations/ubud' },
      { name: 'Uluwatu', href: '/destinations/uluwatu' },
      { name: 'Seminyak', href: '/destinations/seminyak' },
      { name: 'Canggu', href: '/destinations/canggu' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Fleet', href: '/fleet' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    Support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Booking Policy', href: '/booking-policy' },
    ],
  }

  return (
    <footer className="bg-tours-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-tours-accent-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-tours-primary-950" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-white">
                  Bali Tours
                </h3>
                <p className="text-sm text-tours-neutral-300">Transportation</p>
              </div>
            </div>
            <p className="text-tours-neutral-300 mb-6 leading-relaxed">
              Professional private tour services in Bali with experienced drivers,
              comfortable vehicles, and customizable itineraries for unforgettable adventures.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-tours-accent-400" />
                <a
                  href="tel:+6281234567890"
                  className="text-tours-neutral-300 hover:text-tours-accent-400 transition-colors"
                >
                  +62 812 3456 7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-tours-accent-400" />
                <a
                  href="mailto:info@balitourstransportation.com"
                  className="text-tours-neutral-300 hover:text-tours-accent-400 transition-colors"
                >
                  info@balitourstransportation.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-tours-accent-400" />
                <span className="text-tours-neutral-300">
                  8:00 AM - 8:00 PM WITA
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-tours-neutral-300 hover:text-tours-accent-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-tours-primary-800">
          <div className="bg-tours-primary-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-semibold text-white mb-3">
              Ready to Explore Bali?
            </h3>
            <p className="text-tours-neutral-300 mb-6 max-w-2xl mx-auto">
              Get instant quotes and personalized tour recommendations through WhatsApp
            </p>
            <Button
              as="a"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Chat with Us on WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-tours-primary-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-tours-neutral-400 text-sm mb-4 md:mb-0">
            © 2024 Bali Tours Transportation. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://facebook.com/balitourstransportation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tours-neutral-400 hover:text-tours-accent-400 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/balitourstransportation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tours-neutral-400 hover:text-tours-accent-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
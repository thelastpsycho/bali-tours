'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import Button from '@/components/shared/Button'
import { generateWhatsAppLink } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Tours', href: '/tours' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const whatsappLink = generateWhatsAppLink({})

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-tours-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-tours-primary-900 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-semibold text-tours-primary-950">
                  Bali Tours
                </h1>
                <p className="text-xs text-tours-neutral-600">Transportation</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-tours-neutral-700 hover:text-tours-primary-900 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              as="a"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              size="sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              as={Link}
              href="/booking"
              variant="primary"
              size="sm"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-tours-neutral-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-tours-primary-950" />
              ) : (
                <Menu className="w-6 h-6 text-tours-primary-950" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-tours-neutral-200">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-tours-neutral-700 hover:text-tours-primary-900 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-tours-neutral-200">
                <Button
                  as="a"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  size="sm"
                  className="w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  as={Link}
                  href="/booking"
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
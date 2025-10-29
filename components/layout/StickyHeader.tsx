'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function StickyHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/tours', label: 'Tours' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/about', label: 'About' },
    { href: '/booking', label: 'Book Now' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/98 backdrop-blur-md border-b border-neutral-200 shadow-md'
        : 'bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className="h-16 w-auto">
              {/* Minimalist temple/mountain icon */}
              <g id="icon">
                {/* Base mountain */}
                <path d="M 20 40 L 30 20 L 40 40 Z" fill="#0f172a" opacity="0.9"/>

                {/* Middle mountain */}
                <path d="M 28 40 L 35 25 L 42 40 Z" fill="#334155" opacity="0.8"/>

                {/* Front mountain with temple peak */}
                <path d="M 35 40 L 40 28 L 45 40 Z" fill="#1e293b"/>

                {/* Small temple spire on top */}
                <circle cx="40" cy="26" r="1.5" fill="#eab308"/>
                <path d="M 40 26 L 40 22" stroke="#eab308" strokeWidth="1" strokeLinecap="round"/>

                {/* Sun/circle accent */}
                <circle cx="25" cy="22" r="3" fill="none" stroke="#eab308" strokeWidth="1.5" opacity="0.7"/>
              </g>

              {/* Text: BALI */}
              <text x="55" y="35" fontFamily="serif" fontSize="24" fontWeight="600" fill="#1a1a1a" letterSpacing="1">
                BALI
              </text>

              {/* Text: TOURS */}
              <text x="55" y="48" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="#e11d48" letterSpacing="3">
                TOURS
              </text>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium ${
                  isActive(item.href)
                    ? 'text-tours-primary-700 border-b-2 border-tours-primary-700 pb-1'
                    : 'text-slate-800 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-slate-900 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-neutral-200 shadow-lg">
              <nav className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-tours-primary-50 text-tours-primary-700'
                        : 'text-slate-800 hover:bg-neutral-100 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
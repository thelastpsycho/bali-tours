'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/tours', label: 'Tours' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (!pathname) return false
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-colors font-medium ${
              isActive(item.href)
                ? 'text-tours-primary-600 border-b-2 border-tours-primary-600 pb-1'
                : 'text-neutral-700 hover:text-slate-900'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-neutral-700 hover:text-slate-900 hover:bg-neutral-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-neutral-200 shadow-lg">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-tours-primary-50 text-tours-primary-600'
                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
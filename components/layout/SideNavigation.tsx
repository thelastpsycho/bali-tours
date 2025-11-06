'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Home,
  MapPin,
  Car,
  Users,
  Info,
  Calendar,
  Phone,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function SideNavigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Adjust main content and footer margin based on sidebar collapse state
  useEffect(() => {
    const mainContent = document.getElementById('main-content')
    const footer = document.querySelector('footer')

    if (window.innerWidth >= 1024) {
      const marginLeft = isCollapsed ? '5rem' : '18rem' // w-20 = 5rem, w-72 = 18rem

      if (mainContent) {
        mainContent.style.marginLeft = marginLeft
      }

      if (footer) {
        footer.style.marginLeft = marginLeft
      }
    }
  }, [isCollapsed])

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/tours', label: 'Tours', icon: MapPin },
    { href: '/destinations', label: 'Destinations', icon: MapPin },
    { href: '/guides', label: 'Travel Guides', icon: BookOpen },
    { href: '/fleet', label: 'Fleet', icon: Car },
    { href: '/about', label: 'About', icon: Users },
    { href: '/booking', label: 'Book Now', icon: Calendar },
    { href: '/contact', label: 'Contact', icon: Phone },
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
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
              <g id="icon">
                <path d="M 20 40 L 30 20 L 40 40 Z" fill="#0f172a" opacity="0.9"/>
                <path d="M 28 40 L 35 25 L 42 40 Z" fill="#334155" opacity="0.8"/>
                <path d="M 35 40 L 40 28 L 45 40 Z" fill="#1e293b"/>
                <circle cx="40" cy="26" r="1.5" fill="#eab308"/>
                <path d="M 40 26 L 40 22" stroke="#eab308" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="25" cy="22" r="3" fill="none" stroke="#eab308" strokeWidth="1.5" opacity="0.7"/>
              </g>
              <text x="55" y="35" fontFamily="serif" fontSize="18" fontWeight="600" fill="#1a1a1a" letterSpacing="1">
                BALI
              </text>
              <text x="55" y="46" fontFamily="sans-serif" fontSize="9" fontWeight="500" fill="#e11d48" letterSpacing="3">
                TOURS
              </text>
            </svg>
          </div>
          <button
            className="p-2 rounded-md text-neutral-700 hover:text-slate-900 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Side Navigation */}
      <div className={`
        fixed top-0 left-0 z-40 h-screen bg-white shadow-2xl transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:translate-x-0
        ${isCollapsed ? 'lg:w-20' : 'lg:w-72'}
        w-72
      `}>
        {/* Logo Section */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <div className={`${isCollapsed ? 'lg:hidden' : 'block'}`}>
            <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" className="h-14 w-auto">
              <g id="icon">
                <path d="M 20 40 L 30 20 L 40 40 Z" fill="#0f172a" opacity="0.9"/>
                <path d="M 28 40 L 35 25 L 42 40 Z" fill="#334155" opacity="0.8"/>
                <path d="M 35 40 L 40 28 L 45 40 Z" fill="#1e293b"/>
                <circle cx="40" cy="26" r="1.5" fill="#eab308"/>
                <path d="M 40 26 L 40 22" stroke="#eab308" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="25" cy="22" r="3" fill="none" stroke="#eab308" strokeWidth="1.5" opacity="0.7"/>
              </g>
              <text x="55" y="35" fontFamily="serif" fontSize="20" fontWeight="600" fill="#1a1a1a" letterSpacing="1">
                BALI
              </text>
              <text x="55" y="48" fontFamily="sans-serif" fontSize="10" fontWeight="500" fill="#e11d48" letterSpacing="3">
                TOURS
              </text>
            </svg>
          </div>

          {/* Collapsed logo for desktop */}
          <div className={`${isCollapsed ? 'block lg:block' : 'hidden lg:hidden'}`}>
            <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
              <g id="icon">
                <path d="M 20 40 L 30 20 L 40 40 Z" fill="#0f172a" opacity="0.9"/>
                <path d="M 28 40 L 35 25 L 42 40 Z" fill="#334155" opacity="0.8"/>
                <path d="M 35 40 L 40 28 L 45 40 Z" fill="#1e293b"/>
                <circle cx="40" cy="26" r="1.5" fill="#eab308"/>
                <path d="M 40 26 L 40 22" stroke="#eab308" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="25" cy="22" r="3" fill="none" stroke="#eab308" strokeWidth="1.5" opacity="0.7"/>
              </g>
            </svg>
          </div>

          <div className="flex items-center gap-2">
            {/* Collapse Toggle - Desktop Only */}
            <button
              className="hidden lg:flex p-1.5 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label="Toggle sidebar"
            >
              {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>

            {/* Close Button - Mobile Only */}
            <button
              className="lg:hidden p-1.5 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`
                group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${isActive(item.href)
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg transform scale-[1.02]'
                  : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                }
                ${isCollapsed ? 'lg:justify-center' : ''}
              `}
            >
              <item.icon className={`
                w-5 h-5 flex-shrink-0 transition-transform duration-200
                ${isActive(item.href) ? 'scale-110' : 'group-hover:scale-110'}
              `} />
              <span className={`
                font-medium whitespace-nowrap
                ${isCollapsed ? 'lg:hidden' : 'block'}
              `}>
                {item.label}
              </span>

              {/* Active indicator */}
              {isActive(item.href) && (
                <div className="hidden lg:block absolute right-4 w-2 h-2 bg-white rounded-full animate-pulse" />
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom Section - Contact Info */}
        <div className={`
          border-t border-neutral-100 p-4 bg-gradient-to-b from-neutral-50 to-white
          ${isCollapsed ? 'lg:hidden' : 'block'}
        `}>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span className={isCollapsed ? 'lg:hidden' : 'block'}>+62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span className={isCollapsed ? 'lg:hidden' : 'block'}>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white shadow-xl z-20 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="bg-gradient-to-b from-white to-gray-50">
            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    flex items-center gap-4 px-4 py-4 rounded-xl text-base font-medium transition-all duration-200
                    ${isActive(item.href)
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md transform scale-[1.02]'
                      : 'text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
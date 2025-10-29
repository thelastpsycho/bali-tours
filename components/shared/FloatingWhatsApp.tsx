'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Phone, X } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/utils'

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 200px
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappLink = generateWhatsAppLink({})

  const quickActions = [
    {
      label: 'Book a Tour',
      message: 'Hi! I would like to book a tour. Can you help me?',
      icon: '🎯'
    },
    {
      label: 'Ask a Question',
      message: 'Hi! I have a question about your tours.',
      icon: '❓'
    },
    {
      label: 'Custom Tour',
      message: 'Hi! I would like to customize a tour package.',
      icon: '🗺️'
    },
    {
      label: 'Call Now',
      action: 'tel:+6281234567890',
      icon: '📞'
    }
  ]

  return (
    <>
      {/* Main WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30 group-hover:opacity-0" />

          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-bounce" />
        </button>
      </div>

      {/* Expanded Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/20 z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Container */}
          <div className="fixed bottom-24 right-6 z-50 animate-slide-up">
            <div className="bg-white rounded-2xl shadow-2xl p-4 mb-4 min-w-[280px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">How can we help you?</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-neutral-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.action || (action.message ? `${whatsappLink}&text=${encodeURIComponent(action.message)}` : whatsappLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <span className="text-2xl">{action.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 group-hover:text-green-700">
                        {action.label}
                      </p>
                      <p className="text-sm text-slate-600">
                        {action.action ? 'Call us directly' : 'Chat on WhatsApp'}
                      </p>
                    </div>
                    <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-green-600" />
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Phone className="w-4 h-4" />
                  <span>Available daily: 8AM - 8PM (WITA)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 mt-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>Usually responds within 1 hour</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
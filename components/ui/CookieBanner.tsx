'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative">
            <button
              onClick={handleReject}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex-shrink-0">
                <Cookie className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-sm mb-1.5">Your privacy matters</h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  We use cookies to improve your browsing experience, analyze site traffic, and personalize content. You can choose to accept or reject non-essential cookies.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="px-5 py-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-semibold rounded-full transition-opacity duration-300 cursor-pointer"
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleReject}
                    className="px-5 py-2 border border-white/10 text-gray-400 text-xs font-medium rounded-full hover:border-white/20 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

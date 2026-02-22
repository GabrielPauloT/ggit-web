'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useLenis } from 'lenis/react'

export default function ReturnToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down past 500px Let's use 500 to be safe on mobile
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easeOutExpo
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-50 cursor-pointer p-3 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan hover:bg-brand-blue/20 hover:border-brand-blue/50 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] backdrop-blur-md group"
          aria-label="Return to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full border border-brand-cyan/30 scale-100 opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLenis } from 'lenis/react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lenis = useLenis()

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // Smooth scroll to top
    if (href === '/') {
      lenis?.scrollTo(0, { duration: 2.5 })
      setIsOpen(false)
      return
    }

    // Scroll to section
    if (href.startsWith('#')) {
      const target = document.querySelector(href) as HTMLElement
      if (target && lenis) {
        const targetTop = target.getBoundingClientRect().top + window.scrollY + -80 // inclusive of offset
        const currentScroll = window.scrollY
        const distance = Math.abs(currentScroll - targetTop)
        
        // Dynamic duration: 1.2s minimum, caps at 2.5s. 
        // Scales based on distance (slower for longer scrolls)
        const duration = Math.min(Math.max(distance / 1500, 1.2), 2.5)

        lenis.scrollTo(target, { 
          offset: -80, 
          duration: duration,
          // easeInOutQuart: steep acceleration/deceleration curve for premium feel
          easing: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
        })
      }
    }
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tighter group"
          onClick={(e) => handleNavClick(e, '/')}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-brand-blue transition-all duration-300">GGIT</span>
          <span className="text-brand-blue group-hover:text-brand-cyan transition-colors">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-gray-400 hover:text-brand-cyan transition-colors relative group cursor-pointer"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <button className="bg-brand-blue/10 hover:bg-brand-blue/20 border border-brand-blue/20 hover:border-brand-blue text-brand-blue hover:text-brand-cyan px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.1)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] backdrop-blur-sm">
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-brand-blue transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-medium text-gray-300 hover:text-brand-blue py-2 border-b border-white/5 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <button className="mt-4 w-full bg-brand-blue text-white py-3 rounded-lg font-semibold shadow-lg shadow-brand-blue/20">
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

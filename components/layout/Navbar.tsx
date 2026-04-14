'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLenis } from 'lenis/react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSelector from '@/components/ui/LanguageSelector'

const sectionIds = ['services', 'projects', 'about', 'contact']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const lenis = useLenis()
  const isClickScrolling = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const visibleSections = new Map<string, number>()

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio)
          } else {
            visibleSections.delete(id)
          }

          if (isClickScrolling.current) return

          let best: string | null = null
          let bestRatio = 0
          visibleSections.forEach((ratio, sId) => {
            if (ratio > bestRatio) {
              bestRatio = ratio
              best = sId
            }
          })
          setActiveSection(best)
        },
        { threshold: [0, 0.2, 0.4, 0.6], rootMargin: '-80px 0px -30% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (href === '/') {
      lenis?.scrollTo(0, { duration: 2.5 })
      setIsOpen(false)
      setActiveSection(null)
      return
    }

    if (href.startsWith('#')) {
      const sectionId = href.slice(1)
      setActiveSection(sectionId)
      isClickScrolling.current = true

      const target = document.querySelector(href) as HTMLElement
      if (target && lenis) {
        const targetTop = target.getBoundingClientRect().top + window.scrollY - 80
        const currentScroll = window.scrollY
        const distance = Math.abs(currentScroll - targetTop)
        const duration = Math.min(Math.max(distance / 1500, 1.2), 2.5)

        lenis.scrollTo(target, { 
          offset: -80, 
          duration: duration,
          easing: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
          onComplete: () => { isClickScrolling.current = false }
        })
      } else {
        setTimeout(() => { isClickScrolling.current = false }, 2000)
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
    <div className={`fixed left-0 right-0 z-50 transition-[top,padding] duration-500 flex justify-center ${scrolled ? 'top-4 px-4' : 'top-0'}`}>
      <nav
        className={`w-full max-w-7xl transition-[padding,background-color,border-color,border-radius] duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 md:bg-black/40 md:backdrop-blur-xl border border-white/10 rounded-full py-3 px-6'
            : 'bg-transparent border-transparent py-6 px-6'
        }`}
      >
        <div className="flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tighter group flex items-baseline cursor-pointer"
          onClick={(e) => handleNavClick(e, '/')}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-brand-cyan transition-colors duration-500">GGIT</span>
          <span className="text-brand-blue group-hover:text-brand-cyan transition-colors ml-0.5">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const sectionId = item.href.slice(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium relative cursor-pointer transition-colors duration-300 ${
                  isActive ? 'text-brand-cyan' : 'text-gray-400 hover:text-brand-cyan'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-brand-cyan transition-[width] duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            )
          })}
          
          <LanguageSelector />

          <button 
            onClick={(e) => handleNavClick(e as any, '#contact')}
            className="group relative cursor-pointer bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 hover:border-brand-cyan hover:bg-brand-cyan/20 overflow-hidden"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/0 via-brand-cyan/10 to-brand-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          </button>
        </div>

        <button
          className="md:hidden cursor-pointer text-white hover:text-brand-blue transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 mt-2 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden md:hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((item) => {
                const sectionId = item.href.slice(1)
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-lg font-medium py-2 border-b border-white/5 cursor-pointer transition-colors ${
                      isActive ? 'text-brand-cyan' : 'text-gray-300 hover:text-brand-blue'
                    }`}
                  >
                    {item.name}
                  </a>
                )
              })}
              <div className="flex items-center justify-between mt-2">
                <LanguageSelector />
                <button 
                  onClick={(e) => { handleNavClick(e as any, '#contact'); }}
                  className="cursor-pointer bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Start Project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </div>
  )
}

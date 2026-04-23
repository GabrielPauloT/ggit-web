'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLenis } from 'lenis/react'
import { useLanguage } from '@/components/providers/LanguageProvider'

const slotWords = ['SYSTEMS', 'MVP', 'POC', 'VALUE', 'TTM']

function SlotMachine() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const [width, setWidth] = useState<number | undefined>(undefined)

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slotWords.length)
    }, 4000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth)
    }
  }, [currentIndex])

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % slotWords.length)
    startTimer()
  }

  return (
    <motion.span
      className="inline-flex relative overflow-hidden align-bottom cursor-pointer select-none"
      onClick={handleClick}
      animate={{ width: width ?? 'auto' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <span ref={measureRef} className="invisible absolute font-bold whitespace-nowrap">
        {slotWords[currentIndex]}
      </span>
      <span className="invisible font-bold">W</span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ y: '100%', filter: 'blur(8px)', opacity: 0 }}
          animate={{ y: '0%', filter: 'blur(0px)', opacity: 1 }}
          exit={{ y: '-100%', filter: 'blur(8px)', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 2.5,
          }}
          className="absolute inset-0 flex items-center justify-center font-bold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
            {slotWords[currentIndex]}
          </span>
        </motion.span>
      </AnimatePresence>
    </motion.span>
  )
}

export default function Hero() {
  const lenis = useLenis()
  const { t } = useLanguage()

  const handleScroll = (id: string) => {
    const target = document.querySelector(id) as HTMLElement
    if (target && lenis) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY - 80
      const currentScroll = window.scrollY
      const distance = Math.abs(currentScroll - targetTop)
      const duration = Math.min(Math.max(distance / 1500, 1.2), 2.5)

      lenis.scrollTo(target, { 
        offset: -80, 
        duration: duration,
        easing: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
      })
    }
  }

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-noise">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="hero-glow-orb hero-glow-orb-1" />
        <div className="hero-glow-orb hero-glow-orb-2" />
        <div className="hero-glow-orb hero-glow-orb-3" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3, delayChildren: 0.2 },
            },
          }}
          className="max-w-5xl"
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-bold tracking-tighter mb-8 text-white leading-none whitespace-nowrap"
          >
            GGIT<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span><SlotMachine />
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed font-light px-2"
          >
            {t.hero.tagline} <span className="text-white font-medium relative inline-block group cursor-default">
              {t.hero.taglineHighlight}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan" />
            </span> {t.hero.taglineEnd}
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto mb-12 font-light px-2"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4"
          >
            <a 
              href="mailto:gabriel.gimenes@ggitsystems.com.au?subject=Discovery%20Call%20Request&body=Hi%20Gabriel%2C%0A%0AI%27d%20like%20to%20book%20a%20discovery%20call.%20Here%27s%20a%20quick%20overview%20of%20what%20I%27m%20working%20on%3A%0A%0A"
              className="group relative cursor-pointer bg-brand-blue/10 border border-brand-blue/30 text-white px-8 py-3.5 rounded-full font-medium transition-colors duration-300 hover:border-brand-blue hover:bg-brand-blue/20 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 text-brand-cyan group-hover:text-white transition-colors duration-300">{t.hero.cta}</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
            
            <button 
              onClick={() => handleScroll('#how-we-work')}
              className="px-8 py-3.5 cursor-pointer rounded-full font-medium text-gray-400 hover:text-white transition-colors hover:bg-white/5 relative overflow-hidden group"
            >
              <span className="relative z-10">{t.hero.ctaSecondary}</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white/30 group-hover:w-full group-hover:left-0 transition-[width,left] duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        aria-label="Scroll to how we work section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer bg-transparent border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        onClick={() => handleScroll('#how-we-work')}
      >
        <div className="flex flex-col items-center gap-2 text-gray-500 text-xs font-mono uppercase tracking-widest">
          {t.hero.scroll}
          <ChevronDown className="w-5 h-5 text-brand-blue" />
        </div>
      </motion.button>
    </section>
  )
}

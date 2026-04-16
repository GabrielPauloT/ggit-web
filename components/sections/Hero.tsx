'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLenis } from 'lenis/react'

const slotWords = ['SYSTEMS', 'MVP', 'POC', 'VALUE', 'TTM']

function SlotMachine() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const targetRef = useRef(1)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    const clearTimers = () => {
      timersRef.current.forEach(clearTimeout)
      timersRef.current = []
    }

    const cycle = () => {
      setIsSpinning(true)
      clearTimers()

      const totalSpins = 3 + Math.floor(Math.random() * 2)
      const target = targetRef.current

      for (let i = 0; i < totalSpins; i++) {
        const delay = i < totalSpins - 2 ? 500 * (i + 1) : i === totalSpins - 2 ? 500 * (totalSpins - 2) + 700 : 500 * (totalSpins - 2) + 1200
        const id = setTimeout(() => {
          if (i < totalSpins - 1) {
            setCurrentIndex((prev) => (prev + 1) % slotWords.length)
          } else {
            setCurrentIndex(target)
            setIsSpinning(false)
            targetRef.current = (target + 1) % slotWords.length
          }
        }, delay)
        timersRef.current.push(id)
      }
    }

    const scheduleId = setTimeout(cycle, 3000)
    timersRef.current.push(scheduleId)
    const interval = setInterval(cycle, 6000)

    return () => {
      clearInterval(interval)
      clearTimers()
    }
  }, [])

  return (
    <span className="inline-flex relative overflow-hidden align-bottom">
      <span className="invisible font-bold">SYSTEMS</span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={`${currentIndex}-${isSpinning}`}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{
            duration: isSpinning ? 0.08 : 0.4,
            ease: isSpinning ? 'linear' : [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0 flex items-center justify-center md:justify-start font-bold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
            {slotWords[currentIndex]}
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const lenis = useLenis()

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
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
              },
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
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light px-2"
          >
            Your strategic tech partner. We <span className="text-white font-medium relative inline-block group cursor-default">
              validate
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan" />
            </span> ideas, build MVPs, and scale when you're ready.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4"
          >
            <button 
              onClick={() => handleScroll('#projects')}
              className="group relative cursor-pointer bg-brand-blue/10 border border-brand-blue/30 text-white px-8 py-3.5 rounded-full font-medium transition-colors duration-300 hover:border-brand-blue hover:bg-brand-blue/20 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 text-brand-cyan group-hover:text-white transition-colors duration-300">Explore Work</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
            
            <button 
              onClick={() => handleScroll('#contact')}
              className="px-8 py-3.5 cursor-pointer rounded-full font-medium text-gray-400 hover:text-white transition-colors hover:bg-white/5 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white/30 group-hover:w-full group-hover:left-0 transition-[width,left] duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer bg-transparent border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        onClick={() => handleScroll('#about')}
      >
        <div className="flex flex-col items-center gap-2 text-gray-500 text-xs font-mono uppercase tracking-widest">
          Scroll
          <ChevronDown className="w-5 h-5 text-brand-blue" />
        </div>
      </motion.button>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLenis } from 'lenis/react'

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
          className="max-w-4xl"
        >

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-8 text-white leading-none"
          >
            GGIT<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]">.</span><br className="md:hidden" />SYSTEMS
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Your strategic tech partner. We <span className="text-white font-medium relative inline-block group cursor-default">
              validate
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan scale-x-100 origin-left transition-transform group-hover:scale-x-110" />
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-cyan blur-[6px] opacity-40 group-hover:opacity-80 transition-opacity" />
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
              className="group relative cursor-pointer bg-brand-blue/10 border border-brand-blue/30 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/20 shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center gap-3 overflow-hidden backdrop-blur-md"
            >
              <span className="relative z-10 text-brand-cyan group-hover:text-white transition-colors duration-300">Explore Work</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </button>
            
            <button 
              onClick={() => handleScroll('#contact')}
              className="px-8 py-3.5 cursor-pointer rounded-full font-medium text-gray-400 hover:text-white transition-all hover:bg-white/5 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white/30 group-hover:w-full group-hover:left-0 transition-all duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        onClick={() => handleScroll('#about')}
      >
        <div className="flex flex-col items-center gap-2 text-gray-500 text-xs font-mono uppercase tracking-widest">
          Scroll
          <ChevronDown className="w-5 h-5 text-brand-blue" />
        </div>
      </motion.div>
    </section>
  )
}

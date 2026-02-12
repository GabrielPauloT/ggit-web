'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import HeroBackground from '@/components/3d/HeroBackground'
import InteractiveCube from '../3d/InteractiveCube'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <InteractiveCube />
      </div>

      {/* Content Layer */}
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


          {/* Main Heading */}
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white leading-tight"
          >
            GGIT<span className="text-brand-blue drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]">.</span> SYSTEMS
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Turning complex challenges into <span className="text-white font-semibold relative inline-block">
              scalable
              <span className="absolute bottom-1 left-0 w-full h-[1px] bg-brand-cyan/50" />
            </span> digital solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] flex items-center gap-2 overflow-hidden">
              <span className="relative z-10">Explore Work</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-8 py-4 rounded-full font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all hover:bg-white/5">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-500 text-xs font-mono uppercase tracking-widest">
          Scroll
          <ChevronDown className="w-5 h-5 text-brand-blue" />
        </div>
      </motion.div>
    </section>
  )
}

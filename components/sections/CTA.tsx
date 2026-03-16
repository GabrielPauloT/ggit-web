'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLenis } from 'lenis/react'

export default function CTA() {
  const lenis = useLenis()

  const handleScroll = () => {
    const target = document.querySelector('#contact') as HTMLElement
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
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/[0.06] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-brand-cyan/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to build<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan drop-shadow-[0_0_15px_rgba(124,58,237,0.4)]">?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light mb-10 max-w-xl mx-auto">
            Whether you're validating an idea or scaling a product, we'll find the smartest path forward for your stage.
          </p>
          <motion.button
            onClick={handleScroll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative cursor-pointer bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] flex items-center gap-3 mx-auto overflow-hidden"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

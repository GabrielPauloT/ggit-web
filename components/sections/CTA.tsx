'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/[0.06] rounded-full blur-[120px]" />
        <div className="section-glow absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-brand-cyan/[0.04] rounded-full blur-[100px]" />
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
            {t.cta.title}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light mb-10 max-w-xl mx-auto">
            {t.cta.subtitle}
          </p>
          <motion.a
            href="mailto:gabriel.gimenes@ggitsystems.com.au?subject=Discovery%20Call%20Request&body=Hi%20Gabriel%2C%0A%0AI%27d%20like%20to%20book%20a%20discovery%20call.%20Here%27s%20a%20quick%20overview%20of%20what%20I%27m%20working%20on%3A%0A%0A"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative cursor-pointer bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-10 py-4 rounded-full font-semibold text-lg transition-opacity duration-300 inline-flex items-center gap-3 mx-auto overflow-hidden"
          >
            <span className="relative z-10">{t.cta.button}</span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

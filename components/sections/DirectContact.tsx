'use client'

import { motion } from 'framer-motion'
import { X, AlertTriangle, Check, Crown } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

export default function DirectContact() {
  const { t } = useLanguage()
  const rows = t.howWeWork.rows

  return (
    <section id="how-we-work" className="py-32 relative overflow-hidden">
      <div className="section-glow absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-brand-cyan/[0.03] rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="w-10 h-[1px] bg-brand-cyan" />
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase">{t.howWeWork.label}</h2>
            <span className="w-10 h-[1px] bg-brand-cyan" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {t.howWeWork.title1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span> {t.howWeWork.title2}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            {t.howWeWork.subtitle}
          </p>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-4 border-b border-white/[0.08]">
              <div className="p-6" />
              <div className="p-6 text-center border-l border-white/[0.05]">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <AlertTriangle className="w-4 h-4 text-red-400/70" />
                  <span className="text-gray-400 font-semibold text-sm">{t.howWeWork.headers.freelancer}</span>
                </div>
              </div>
              <div className="p-6 text-center border-l border-white/[0.05]">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <AlertTriangle className="w-4 h-4 text-yellow-400/70" />
                  <span className="text-gray-400 font-semibold text-sm">{t.howWeWork.headers.agency}</span>
                </div>
              </div>
              <div className="p-6 text-center border-l border-brand-cyan/20 bg-brand-cyan/[0.03]">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-brand-cyan" />
                  <span className="text-brand-cyan font-semibold text-sm">{t.howWeWork.headers.ggit}</span>
                </div>
              </div>
            </div>

            {rows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 ${index < rows.length - 1 ? 'border-b border-white/[0.05]' : ''} group hover:bg-white/[0.01] transition-colors duration-300`}
              >
                <div className="p-5 flex items-center">
                  <span className="text-white text-sm font-medium">{row.category}</span>
                </div>
                <div className="p-5 flex items-center border-l border-white/[0.05]">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400/60 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500 text-sm">{row.freelancer}</span>
                  </div>
                </div>
                <div className="p-5 flex items-center border-l border-white/[0.05]">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-yellow-400/60 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500 text-sm">{row.agency}</span>
                  </div>
                </div>
                <div className="p-5 flex items-center border-l border-brand-cyan/20 bg-brand-cyan/[0.02]">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{row.ggit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {rows.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5"
            >
              <p className="text-white text-sm font-semibold mb-3">{row.category}</p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-500 text-xs"><span className="text-gray-600 font-medium">{t.howWeWork.headers.freelancer}:</span> {row.freelancer}</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-yellow-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-500 text-xs"><span className="text-gray-600 font-medium">{t.howWeWork.headers.agency}:</span> {row.agency}</span>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-white/[0.05]">
                  <Check className="w-3.5 h-3.5 text-brand-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-xs font-medium"><span className="text-brand-cyan">{t.howWeWork.headers.ggit}:</span> {row.ggit}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-500 text-sm mt-10 font-light"
        >
          {t.howWeWork.bottomTagline}
        </motion.p>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Compass, Rocket, Brain, TrendingUp, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'

const servicesMeta = [
  { id: 'discovery-strategy', icon: Compass, number: '01', gradient: 'from-amber-500/20 via-orange-500/10 to-transparent' },
  { id: 'mvp-build', icon: Rocket, number: '02', gradient: 'from-cyan-500/20 via-teal-500/10 to-transparent' },
  { id: 'fractional-cto', icon: Brain, number: '03', gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent' },
  { id: 'scale-migrate', icon: TrendingUp, number: '04', gradient: 'from-emerald-500/20 via-green-500/10 to-transparent' },
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="section-glow absolute top-0 right-[-20%] w-[600px] h-[600px] bg-brand-blue/[0.04] rounded-full blur-[120px]" />
      <div className="section-glow absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-brand-cyan/[0.03] rounded-full blur-[100px]" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="w-10 h-[1px] bg-brand-cyan" />
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase">{t.services.label}</h2>
            <span className="w-10 h-[1px] bg-brand-cyan" />
          </div>
          <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            {t.services.title}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">,</span> {t.services.titleEnd}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesMeta.map((meta, index) => {
            const item = t.services.items[index]
            return (
              <motion.div
                key={index}
                id={meta.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer bg-white/[0.02] border border-white/[0.05] hover:border-brand-blue/50 hover:bg-white/[0.04] rounded-3xl transition-colors duration-500 relative overflow-hidden flex flex-col"
              >
                <div className={`h-3 bg-gradient-to-r ${meta.gradient}`} />

                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-white/[0.06] font-mono group-hover:text-brand-blue/20 transition-colors duration-500">
                      {meta.number}
                    </span>
                    <div className="p-3 bg-brand-blue/[0.08] border border-brand-blue/20 rounded-xl group-hover:bg-brand-blue/20 group-hover:border-brand-blue/40 transition-colors duration-500">
                      <meta.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-cyan transition-colors duration-500" />
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-brand-cyan/70 font-medium mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500 mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/[0.05]">
                    {item.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        <ArrowRight className="w-3 h-3 text-brand-blue/50 group-hover:text-brand-cyan transition-colors duration-500 flex-shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

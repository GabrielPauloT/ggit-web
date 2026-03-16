'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Products Launched', value: '8+' },
  { label: 'Countries Connected', value: '2' },
  { label: 'Avg. Efficiency Gain', value: '80%' },
  { label: 'Hours Saved Monthly', value: '36+' },
]

export default function Stats() {
  return (
    <section id="stats" className="py-20 border-y border-white/5 relative overflow-hidden backdrop-blur-[2px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-blue/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group cursor-pointer p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-blue/30 hover:bg-brand-blue/[0.02] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 font-mono text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-cyan transition-all duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                {stat.value}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

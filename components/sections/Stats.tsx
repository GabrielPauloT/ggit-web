'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Large Scale Projects', value: '8+' },
  { label: 'Efficiency Increase', value: '80%' },
  { label: 'Hours Saved / Mo', value: '36+' },
  { label: 'User Satisfaction', value: '98%' },
]

export default function Stats() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a] border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <h4 className="text-4xl md:text-6xl font-bold text-white mb-2 font-mono group-hover:text-brand-blue transition-colors duration-300">
                {stat.value}
              </h4>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

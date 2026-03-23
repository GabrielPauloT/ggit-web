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
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-center"
            >
              <div className="text-center px-10 md:px-14 py-6">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-white mb-2 tracking-tight">
                  {stat.value}
                </h4>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block w-[1px] h-12 bg-white/[0.08]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

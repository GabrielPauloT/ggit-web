'use client'

import { motion } from 'framer-motion'
import { MapPin, Lightbulb, TrendingUp, BrainCircuit } from 'lucide-react'
import InteractiveCube from '@/components/3d/InteractiveCube'

const pillars = [
  {
    icon: Lightbulb,
    title: 'Validate First',
    description: 'Too many startups burn months building the wrong thing. We validate your hypothesis with the leanest possible solution before committing to full-scale development.',
  },
  {
    icon: TrendingUp,
    title: 'Scale When Ready',
    description: 'From no-code prototypes to fully custom high-code architecture — we match the technology to your business stage, so budget and time are never barriers to innovation.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Driven',
    description: 'We identify where Artificial Intelligence can cut operational costs — from automating repetitive tasks to predictive analytics in dashboards. AI is our ally, not a buzzword.',
  },
  {
    icon: MapPin,
    title: 'Australia–Brazil Bridge',
    description: 'Born from a union of minds across two continents, we bring together Australian market insight and Brazilian engineering talent to deliver world-class products.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden backdrop-blur-sm">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-brand-cyan/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-[1px] bg-brand-cyan" />
              <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase">Our Story</h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
              Not just another dev agency<span className="text-brand-cyan drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">.</span>
            </h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light mb-6">
              We noticed a frustrating pattern — startups spending massive amounts of money and months of development on overly complex solutions before even validating if users actually wanted the product.
            </p>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              We decided to change that. GGIT Systems was built to stop "just writing code" and start building viable businesses.
            </p>
            <p className="text-gray-500 text-sm font-mono tracking-wide mt-8">
              Founded in 2023 — Built on faith, resilience, and an unshakable foundation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-white/[0.01] border border-white/[0.05]"
          >
            <InteractiveCube />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 bg-white/[0.02] border border-white/[0.05] hover:border-brand-blue/40 rounded-3xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="mb-6 p-4 bg-brand-blue/[0.05] border border-brand-blue/20 w-fit rounded-2xl group-hover:bg-brand-blue/15 group-hover:border-brand-blue/40 transition-all duration-500 relative z-10">
                <pillar.icon className="w-7 h-7 text-brand-blue group-hover:text-brand-cyan transition-colors duration-500" />
              </div>
              
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-cyan transition-colors relative z-10">
                {pillar.title}
              </h4>
              <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500 relative z-10">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

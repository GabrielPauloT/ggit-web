'use client'

import { motion } from 'framer-motion'
import { Search, FlaskConical, Hammer, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    subtitle: 'Understand & Define',
    description: 'We dive deep into your business, market, and users. We map the real problem before writing a single line of code.',
    deliverables: ['User Research', 'Market Analysis', 'Technical Assessment', 'Project Roadmap'],
    color: 'brand-blue',
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'Validate',
    subtitle: 'Test & Prove',
    description: 'Build the leanest possible solution to test your hypothesis. No over-engineering — just enough to prove the concept works.',
    deliverables: ['PoC / Prototype', 'User Testing', 'Feasibility Report', 'Go/No-Go Decision'],
    color: 'brand-cyan',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build',
    subtitle: 'Design & Develop',
    description: 'With validation in hand, we build the real product using AI-accelerated workflows — cleaner code, faster delivery, and optimized cost.',
    deliverables: ['MVP Development', 'UI/UX Design', 'AI-Assisted Architecture', 'Quality Assurance'],
    color: 'brand-blue',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Scale',
    subtitle: 'Grow & Optimize',
    description: 'As your business grows, so does the product. We evolve the architecture, optimize performance, and prepare for what\'s next.',
    deliverables: ['Performance Optimization', 'Infrastructure Scaling', 'Feature Expansion', 'Ongoing Support'],
    color: 'brand-cyan',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="section-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/[0.03] rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="w-10 h-[1px] bg-brand-cyan" />
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase">Our Method</h2>
            <span className="w-10 h-[1px] bg-brand-cyan" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            From idea to product<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Every project follows a proven path. No shortcuts, no guesswork — just a clear methodology accelerated by AI-powered development tools.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 -right-4 z-20 w-8 h-8 items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-cyan/60 transition-colors duration-500" />
                  </div>
                )}

                <div className="p-8 bg-white/[0.02] border border-white/[0.05] rounded-3xl hover:border-brand-blue/30 transition-colors duration-500 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span className="text-5xl font-bold text-white/[0.06] font-mono group-hover:text-brand-blue/20 transition-colors duration-500">
                      {step.number}
                    </span>
                    <div className={`p-3 bg-${step.color}/[0.08] border border-${step.color}/20 rounded-xl group-hover:bg-${step.color}/20 group-hover:border-${step.color}/40 transition-colors duration-500`}>
                      <step.icon className={`w-6 h-6 text-${step.color}`} />
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors duration-300 relative z-10">
                    {step.title}
                  </h4>
                  <p className="text-xs font-mono text-brand-cyan/60 uppercase tracking-wider mb-4 relative z-10">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-400 leading-relaxed font-light mb-6 relative z-10 flex-grow">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/[0.05] relative z-10">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        <div className="w-1 h-1 rounded-full bg-brand-blue/50 group-hover:bg-brand-cyan transition-colors duration-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

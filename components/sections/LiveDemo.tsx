'use client'

import { motion } from 'framer-motion'
import { Bot, LogIn, CreditCard, LayoutDashboard, Headphones, ArrowRight } from 'lucide-react'

const flowSteps = [
  {
    icon: LogIn,
    label: 'Onboarding',
    wireframe: ['Name / Email', 'Company Size', 'Industry Select', '[Continue →]'],
  },
  {
    icon: CreditCard,
    label: 'Pricing',
    wireframe: ['Plan Comparison', '── Basic ──', '── Pro ──', '[Subscribe]'],
    aiBadge: 'AI: Dynamic pricing based on demand',
  },
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    wireframe: ['Fleet Overview', '█████ 82%', '████░ 67%', 'Active Routes: 14'],
    aiBadge: 'AI: Predictive analytics & alerts',
  },
  {
    icon: Headphones,
    label: 'Support',
    wireframe: ['Ticket #4821', 'Priority: High', 'Category: Billing', '[Resolve]'],
    aiBadge: 'AI: Auto-triage & smart routing',
  },
]

export default function LiveDemo() {
  return (
    <section id="live-demo" className="pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Product engineering before<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">software engineering</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            We don&apos;t start coding in the dark. You see every user click and every system automation before development begins. Full scope predictability.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0">
            <div className="mx-16 h-[2px] bg-gradient-to-r from-brand-blue/20 via-brand-cyan/30 to-brand-blue/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {step.aiBadge && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue/15 border border-brand-blue/30 rounded-full backdrop-blur-sm">
                      <Bot className="w-3 h-3 text-brand-blue flex-shrink-0" />
                      <span className="text-[10px] sm:text-[11px] text-brand-cyan font-medium">{step.aiBadge}</span>
                    </div>
                  </motion.div>
                )}

                <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-brand-blue/20 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                    <div className="flex items-center gap-2">
                      <step.icon className="w-4 h-4 text-gray-500 group-hover:text-brand-cyan transition-colors duration-300" />
                      <span className="text-gray-400 text-xs font-medium group-hover:text-gray-300 transition-colors">{step.label}</span>
                    </div>
                    <span className="text-gray-700 text-[10px] font-mono">0{index + 1}</span>
                  </div>

                  <div className="p-4 space-y-2.5 font-mono text-xs min-h-[140px]">
                    {step.wireframe.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.1 + 0.3, duration: 0.4 }}
                        className={`${
                          line.startsWith('[')
                            ? 'text-brand-blue border border-brand-blue/20 rounded-md px-2 py-1.5 text-center bg-brand-blue/[0.05] hover:bg-brand-blue/10 transition-colors cursor-default'
                            : line.startsWith('█') || line.startsWith('─')
                            ? 'text-gray-600'
                            : 'text-gray-400'
                        }`}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                    <ArrowRight className="w-4 h-4 text-brand-cyan/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

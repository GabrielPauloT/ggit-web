'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Zap, Users } from 'lucide-react'

const advantages = [
  {
    icon: MessageCircle,
    title: 'Talk to builders, not salespeople',
    description: 'From initial scope to production deploy, you deal directly with founders and engineers. No middlemen.',
  },
  {
    icon: Zap,
    title: 'Fast feedback loops',
    description: 'Weekly demos, async updates, and a direct line to the team. You always know where your project stands.',
  },
  {
    icon: Users,
    title: 'Small team, big ownership',
    description: 'Every engineer on your project understands the full picture. No ticket handoffs, no context switching.',
  },
]

export default function DirectContact() {
  return (
    <section id="how-we-work" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-brand-cyan/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-[1px] bg-brand-cyan" />
              <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase">How We Work</h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Less noise<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">,</span><br />
              more delivery<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
            </h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light mb-4">
              The #1 frustration in hiring a dev agency? The telephone game. You brief a PM, who briefs a lead, who briefs a developer — and by the time code gets written, the original vision is lost.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              At GGIT, you talk directly to the people who build your product. From scoping to deployment, your line is always open to the engineers and founders making decisions.
            </p>
          </motion.div>

          <div className="space-y-6">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 bg-white/[0.02] border border-white/[0.05] hover:border-brand-blue/30 rounded-2xl transition-all duration-500 flex items-start gap-5 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="p-3 bg-brand-blue/[0.08] border border-brand-blue/20 rounded-xl flex-shrink-0 group-hover:bg-brand-blue/15 group-hover:border-brand-blue/40 transition-all duration-500 relative z-10">
                  <item.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-cyan transition-colors duration-500" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

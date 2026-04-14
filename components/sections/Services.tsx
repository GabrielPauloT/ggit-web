'use client'

import { motion } from 'framer-motion'
import { Rocket, Code, Smartphone, Bot, Cpu, Layers } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'PoC & MVP Development',
    description: 'Validate your idea fast. We build proof of concepts and minimum viable products using the smartest tech for your current stage.',
    tags: ['Rapid Prototyping', 'User Testing', 'Market Fit'],
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    icon: Layers,
    title: 'No-Code to High-Code',
    description: 'Start lean with no-code or low-code for rapid validation, then scale to fully custom architecture when the business demands it.',
    tags: ['Bubble', 'FlutterFlow', 'Custom Migration'],
    gradient: 'from-cyan-500/20 via-teal-500/10 to-transparent',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Robust, scalable systems built with modern architecture — from ERPs and SaaS platforms to complex B2B solutions.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Cloud'],
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform apps that deliver exceptional user experiences across iOS and Android.',
    tags: ['React Native', 'iOS', 'Android', 'Expo'],
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'We automate document triage, customer support, and operational workflows using AI — saving your team dozens of hours every month.',
    tags: ['LLMs', 'WhatsApp Bots', 'Predictive Analytics', 'RAG'],
    gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
  },
  {
    icon: Cpu,
    title: 'Industrial IoT',
    description: 'Connected solutions for manufacturing monitoring, shop floor data collection, and predictive analytics.',
    tags: ['OPC', 'MES', 'Real-time Analytics'],
    gradient: 'from-rose-500/20 via-red-500/10 to-transparent',
  },
]

export default function Services() {
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Build</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            The right technology, at the right time, for the exact stage of your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer bg-white/[0.02] border border-white/[0.05] hover:border-brand-blue/50 hover:bg-white/[0.04] rounded-3xl transition-colors duration-500 relative overflow-hidden flex flex-col"
            >
              <div className={`h-32 bg-gradient-to-br ${service.gradient} relative flex items-center justify-center border-b border-white/[0.05]`}>
                <div className="hidden md:block absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                <div className="p-4 bg-black/40 border border-white/10 rounded-2xl group-hover:scale-110 group-hover:border-brand-blue/40 transition-transform duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <service.icon className="w-8 h-8 text-brand-blue group-hover:text-brand-cyan transition-colors duration-500" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-brand-cyan transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-500 relative z-10 mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500 border border-white/[0.08] px-3 py-1 rounded-full bg-white/[0.02] group-hover:border-brand-blue/30 group-hover:text-gray-400 transition-colors duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Rocket, Code, Smartphone, Bot, Cpu, Layers } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'PoC & MVP Development',
    description: 'Validate your idea fast. We build proof of concepts and minimum viable products using the smartest tech for your current stage.',
  },
  {
    icon: Layers,
    title: 'No-Code to High-Code',
    description: 'Start lean with no-code or low-code for rapid validation, then scale to fully custom architecture when the business demands it.',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Robust, scalable systems built with modern architecture — from ERPs and SaaS platforms to complex B2B solutions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform apps that deliver exceptional user experiences across iOS and Android.',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Intelligent agents, chatbots, and automation workflows that streamline operations and cut response times.',
  },
  {
    icon: Cpu,
    title: 'Industrial IoT',
    description: 'Connected solutions for manufacturing monitoring, shop floor data collection, and predictive analytics.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden backdrop-blur-sm">
      <div className="absolute top-0 right-[-20%] w-[600px] h-[600px] bg-brand-blue/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-brand-cyan/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan drop-shadow-[0_0_15px_rgba(124,58,237,0.4)]">Build</span>
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
              className="group cursor-pointer p-8 bg-white/[0.02] border border-white/[0.05] hover:border-brand-blue/50 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />
              
              <div className="mb-8 p-4 bg-brand-blue/[0.05] border border-brand-blue/20 w-fit rounded-2xl group-hover:bg-brand-blue/20 group-hover:scale-110 group-hover:border-brand-blue/50 transition-all duration-500 relative z-10 shadow-[0_0_15px_rgba(124,58,237,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                <service.icon className="w-8 h-8 text-brand-blue group-hover:text-cyan-300 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-brand-cyan transition-colors relative z-10 drop-shadow-md">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-500 relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

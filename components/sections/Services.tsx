'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Bot, Cpu } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored solutions built with modern architecture to solve complex business challenges.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Intelligent systems that streamline operations and provide data-driven insights.',
  },
  {
    icon: Cpu,
    title: 'Industrial IoT',
    description: 'Connected solutions for manufacturing and industrial processes monitoring.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden backdrop-blur-sm">
      {/* Background glow effects */}
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Comprehensive technology solutions designed to scale with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer p-8 bg-white/[0.02] border border-white/[0.05] hover:border-brand-blue/50 hover:bg-white/[0.04] rounded-3xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />
              
              <div className="mb-8 p-4 bg-brand-blue/[0.05] border border-brand-blue/20 w-fit rounded-2xl group-hover:bg-brand-blue/20 group-hover:scale-110 group-hover:border-brand-blue/50 transition-all duration-500 relative z-10 shadow-[0_0_15px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
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

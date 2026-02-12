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
    <section id="services" className="py-24 bg-[#0a0a0a] border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Our <span className="text-brand-blue">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions designed to scale with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 bg-white/5 border border-white/5 hover:border-brand-blue/30 rounded-2xl transition-all duration-300 hover:bg-white/10"
            >
              <div className="mb-6 p-4 bg-brand-blue/10 w-fit rounded-xl group-hover:bg-brand-blue/20 transition-colors">
                <service.icon className="w-8 h-8 text-brand-blue group-hover:text-brand-cyan transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

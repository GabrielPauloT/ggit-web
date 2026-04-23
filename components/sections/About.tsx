'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, MapPin, Calendar, Award } from 'lucide-react'
import Image from 'next/image'

const credentials = [
  { icon: Calendar, text: '6+ years in software engineering' },
  { icon: MapPin, text: 'Melbourne, AU — Brazilian-born' },
  { icon: Award, text: 'Microsoft & AWS community member' },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="section-glow absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/[0.03] rounded-full blur-[120px]" />
      <div className="section-glow absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-brand-cyan/[0.03] rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="w-10 h-[1px] bg-brand-cyan" />
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase">Who We Are</h2>
            <span className="w-10 h-[1px] bg-brand-cyan" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Founder-led<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span> Builder-first<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            You deal directly with the person who built this company — not a sales team, not an account manager.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <Image
                src="/founder-portrait.jpg"
                alt="Gabriel Gimenes Alencar — Founder of GGIT Systems"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Microsoft badge - floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-[#111] border border-white/[0.08] rounded-2xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
            >
              <div className="relative w-48 h-32 rounded-xl overflow-hidden">
                <Image
                  src="/founder-microsoft.jpg"
                  alt="Gabriel at Microsoft event"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Bio side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-2">
              <h4 className="text-2xl md:text-3xl font-bold text-white">Gabriel Gimenes Alencar</h4>
              <p className="text-brand-cyan font-mono text-sm mt-1">Founder & CTO</p>
            </div>

            <div className="flex gap-3 mb-8 mt-4">
              <a
                href="https://www.linkedin.com/company/ggit-systems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-brand-cyan" />
              </a>
              <a
                href="https://github.com/ggit-systems"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-colors duration-300"
              >
                <Github className="w-4 h-4 text-gray-400 hover:text-brand-cyan" />
              </a>
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-4">
              I noticed a frustrating pattern — startups spending massive amounts of money and months of development on overly complex solutions before even validating if users actually wanted the product.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8">
              I built GGIT Systems to change that. To stop "just writing code" and start building viable businesses. When you work with us, you work with me — directly.
            </p>

            {/* Credentials */}
            <div className="space-y-3">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-brand-blue/[0.06] border border-brand-blue/15 rounded-lg">
                    <item.icon className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 text-xs font-mono tracking-wide mt-8">
              Founded in 2023 — Melbourne, Australia
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

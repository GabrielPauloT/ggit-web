'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import { ArrowUpRight, Database, Cpu, Globe } from 'lucide-react'

// Helper to get icon based on category
const getCategoryIcon = (category: string) => {
  if (category.includes('AI') || category.includes('IoT')) return <Cpu size={24} className="text-brand-cyan" />
  if (category.includes('Data') || category.includes('ERP')) return <Database size={24} className="text-green-500" />
  return <Globe size={24} className="text-brand-blue" />
}

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left"
        >
          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <span className="w-10 h-[1px] bg-brand-cyan" />
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase">Selected Works</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Digital Excellence<span className="text-brand-blue">.</span></h3>
          <p className="text-gray-400 max-w-2xl">
            We build systems that scale. From Industrial IoT to Consumer Apps, our engineering drives real business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col"
            >
              {/* Card Header / Icon */}
              <div className="h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] group-hover:from-[#202020] group-hover:to-[#151515] transition-colors relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {getCategoryIcon(project.category)}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-brand-cyan px-3 py-1 bg-brand-cyan/10 rounded-full border border-brand-cyan/20">
                    {project.category}
                  </span>
                  <ArrowUpRight className="text-gray-500 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors leading-tight">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-4 pt-4 border-t border-white/5 mt-auto">
                   <div className="flex flex-wrap gap-2">
                     {project.tech.slice(0, 3).map(t => (
                       <span key={t} className="text-xs text-gray-500 border border-white/5 px-2 py-1 rounded bg-[#1a1a1a]">
                         {t}
                       </span>
                     ))}
                     {project.tech.length > 3 && (
                        <span className="text-xs text-gray-500 px-1 py-1">+</span>
                     )}
                   </div>
                   
                   <div className="flex items-start gap-2">
                     <div className="w-1 h-full min-h-[1.5em] bg-green-500 rounded-full" />
                     <p className="text-xs text-gray-300 leading-tight">
                       <span className="text-green-400 font-semibold block mb-0.5">Impact</span>
                       {project.impact}
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

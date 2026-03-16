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
    <section id="projects" className="py-32 relative overflow-hidden backdrop-blur-sm">
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
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Digital Excellence<span className="text-brand-cyan drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">.</span>
          </h3>
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
              className="group relative cursor-pointer bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden hover:border-brand-blue/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:bg-white/[0.04] flex flex-col"
            >
              {/* Optional glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Card Header / Icon */}
              <div className="h-56 bg-gradient-to-br from-white/[0.02] to-transparent group-hover:from-brand-blue/[0.08] transition-colors duration-500 relative flex items-center justify-center overflow-hidden border-b border-white/[0.05]">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                <div className="p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 group-hover:scale-110 group-hover:border-brand-blue/40 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
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

                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors duration-300 leading-tight">
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

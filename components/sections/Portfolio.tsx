'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { projects } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

const projectColors = [
  { from: 'from-amber-500/20', to: 'to-orange-600/10', accent: 'text-amber-400' },
  { from: 'from-cyan-500/20', to: 'to-teal-600/10', accent: 'text-cyan-400' },
  { from: 'from-purple-500/20', to: 'to-pink-600/10', accent: 'text-purple-400' },
  { from: 'from-emerald-500/20', to: 'to-green-600/10', accent: 'text-emerald-400' },
  { from: 'from-blue-500/20', to: 'to-indigo-600/10', accent: 'text-blue-400' },
  { from: 'from-rose-500/20', to: 'to-red-600/10', accent: 'text-rose-400' },
  { from: 'from-yellow-500/20', to: 'to-amber-600/10', accent: 'text-yellow-400' },
  { from: 'from-teal-500/20', to: 'to-cyan-600/10', accent: 'text-teal-400' },
]

function HoverCard({ project, color }: { project: typeof projects[0]; color: typeof projectColors[0] }) {
  return (
    <div className={`w-72 sm:w-80 rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br ${color.from} ${color.to} bg-[#111] shadow-2xl shadow-black/50`}>
      <div className="h-40 flex items-center justify-center relative">
        <div className="text-center px-6 relative z-10">
          <p className="text-white/90 font-semibold text-lg mb-1">{project.title}</p>
          <p className={`text-xs font-mono ${color.accent}`}>{project.category}</p>
        </div>
      </div>
      <div className="p-4 bg-black/40 border-t border-white/5">
        <p className="text-gray-400 text-xs leading-relaxed mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="text-[10px] text-gray-500 border border-white/10 px-2 py-0.5 rounded-full bg-white/[0.03]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectRow({ project, index, color }: {
  project: typeof projects[0]
  index: number
  color: typeof projectColors[0]
}) {
  const [isHovered, setIsHovered] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return
    const rect = rowRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - 160)
    mouseY.set(e.clientY - rect.top - 200)
  }

  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative border-b border-white/[0.06] cursor-pointer"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${color.from} ${color.to} transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      <div className="relative z-10 flex items-center justify-between py-6 sm:py-8 px-2 sm:px-4">
        <div className="flex items-center gap-4 sm:gap-8 flex-1 min-w-0">
          <span className="text-gray-700 font-mono text-xs sm:text-sm w-6 sm:w-8 flex-shrink-0 group-hover:text-gray-500 transition-colors">
            {num}
          </span>
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-brand-cyan transition-colors duration-300 truncate">
            {project.title}
          </h4>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0 ml-4">
          <span className={`hidden sm:inline-block text-xs font-mono ${color.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            {project.impact}
          </span>
          <span className="hidden md:inline-block text-xs text-gray-600 font-mono group-hover:text-gray-400 transition-colors">
            {project.category}
          </span>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 transition-colors duration-300">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-brand-cyan transition-colors duration-300" />
          </div>
        </div>
      </div>

      {!isMobile && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            x: springX,
            y: springY,
            position: 'absolute',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <HoverCard project={project} color={color} />
        </motion.div>
      )}

      {isMobile && isHovered && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="relative z-10 px-2 pb-6"
        >
          <p className="text-gray-400 text-sm mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tech.slice(0, 3).map(t => (
              <span key={t} className="text-[10px] text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">{t}</span>
            ))}
          </div>
          <p className={`text-xs font-mono ${color.accent}`}>{project.impact}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="section-glow absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-10 h-[1px] bg-brand-cyan" />
            <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase">Selected Works</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Digital Excellence<span className="text-brand-cyan md:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">.</span>
          </h3>
        </motion.div>

        <div className="border-t border-white/[0.06]">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={index}
              color={projectColors[index % projectColors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

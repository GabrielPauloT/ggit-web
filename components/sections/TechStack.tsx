'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const codeLines = [
  { indent: 0, text: 'const app = new NestFactory();', color: 'text-gray-300' },
  { indent: 0, text: '', color: '' },
  { indent: 0, text: '// API Architecture', color: 'text-gray-500' },
  { indent: 0, text: 'app.useGlobalPipes(new ValidationPipe());', color: 'text-gray-300' },
  { indent: 0, text: 'app.enableCors({ origin: CLIENT_URL });', color: 'text-gray-300' },
  { indent: 0, text: '', color: '' },
  { indent: 0, text: '// Authentication & Security', color: 'text-gray-500' },
  { indent: 0, text: 'app.use(helmet());', color: 'text-gray-300' },
  { indent: 0, text: 'app.use(rateLimit({ max: 100 }));', color: 'text-gray-300' },
  { indent: 0, text: '', color: '' },
  { indent: 0, text: '// Database Connection', color: 'text-gray-500' },
  { indent: 0, text: 'await TypeORM.initialize({', color: 'text-gray-300' },
  { indent: 1, text: 'type: "postgres",', color: 'text-brand-cyan' },
  { indent: 1, text: 'synchronize: false,', color: 'text-brand-cyan' },
  { indent: 1, text: 'migrations: ["dist/migrations/*"]', color: 'text-brand-cyan' },
  { indent: 0, text: '});', color: 'text-gray-300' },
  { indent: 0, text: '', color: '' },
  { indent: 0, text: 'await app.listen(3000);', color: 'text-brand-blue' },
  { indent: 0, text: '// ✓ Production ready', color: 'text-green-500' },
]

const techItems = [
  { name: 'Next.js', role: 'Frontend' },
  { name: 'NestJS', role: 'Backend' },
  { name: 'PostgreSQL', role: 'Database' },
  { name: 'React Native', role: 'Mobile' },
  { name: 'Docker', role: 'Infrastructure' },
  { name: 'AWS / GCP', role: 'Cloud' },
]

function CodeBlock() {
  const [visibleLines, setVisibleLines] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInViewRef = useRef(false)
  const isWaitingRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { isInViewRef.current = entry.isIntersecting },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisibleLines(codeLines.length)
      return
    }

    const interval = setInterval(() => {
      if (!isInViewRef.current || isWaitingRef.current) return
      setVisibleLines(prev => {
        if (prev >= codeLines.length) {
          isWaitingRef.current = true
          setTimeout(() => {
            setVisibleLines(0)
            isWaitingRef.current = false
          }, 2000)
          return prev
        }
        return prev + 1
      })
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={ref} className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="text-gray-500 text-xs ml-2">server.ts</span>
      </div>
      <div className="p-5 h-[360px] overflow-hidden">
        {codeLines.map((line, i) => (
          <div
            key={i}
            className={`transition-all duration-300 ${i < visibleLines ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            style={{ paddingLeft: `${line.indent * 24}px` }}
          >
            {line.text ? (
              <span className={line.color}>
                <span className="text-gray-700 select-none mr-4">{String(i + 1).padStart(2, ' ')}</span>
                {line.text}
              </span>
            ) : (
              <span className="text-gray-700 select-none mr-4">{String(i + 1).padStart(2, ' ')}</span>
            )}
          </div>
        ))}
        <div className={`mt-1 transition-all duration-500 ${visibleLines >= codeLines.length ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-gray-700 select-none mr-4"> &gt;</span>
          <span className="inline-block w-2 h-4 bg-brand-blue animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-[-20%] w-[600px] h-[600px] bg-brand-blue/[0.03] rounded-full blur-[150px] pointer-events-none" />

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
              <h2 className="text-sm font-mono text-brand-cyan tracking-widest uppercase">Under the Hood</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Built to scale<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
              Modern architecture, clean code, and production-grade infrastructure. We don&apos;t just make it work — we make it last.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techItems.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-brand-blue/30 transition-all duration-300 group"
                >
                  <p className="text-white text-sm font-medium group-hover:text-brand-cyan transition-colors">{tech.name}</p>
                  <p className="text-gray-500 text-xs">{tech.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CodeBlock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

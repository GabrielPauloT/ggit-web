'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef, useCallback } from 'react'
import { MapPin, Truck, Sparkles } from 'lucide-react'

const aiPrompt = '> Generate a fleet tracking card component with real-time status, route visualization, and ETA. Use React, Tailwind CSS and Lucide icons.'

const codeLines = [
  'import { Badge } from "@/components/ui/badge";',
  'import { MapPin, Truck } from "lucide-react";',
  '',
  'interface RouteProps {',
  '  id: string;',
  '  origin: string;',
  '  destination: string;',
  "  status: 'in_transit' | 'delivered';",
  '  driver: string;',
  '}',
  '',
  'export default function ActiveRouteCard(',
  '  { id, origin, destination, status, driver }',
  ': RouteProps) {',
  '  return (',
  '    <div className="p-6 bg-white rounded-xl',
  '      border shadow-sm">',
  '      <div className="flex justify-between">',
  '        <h3 className="font-semibold">',
  '          Route #{id}',
  '        </h3>',
  '        <Badge variant={',
  "          status === 'in_transit'",
  "            ? 'default' : 'secondary'",
  '        }>',
  "          {status === 'in_transit'",
  "            ? 'In Transit' : 'Delivered'}",
  '        </Badge>',
  '      </div>',
  '',
  '      <div className="flex items-center">',
  '        <MapPin className="text-blue-500"/>',
  '        <span>{origin}</span>',
  '        <div className="h-px w-8 bg-zinc-300"/>',
  '        <MapPin className="text-emerald-500"/>',
  '        <span>{destination}</span>',
  '      </div>',
  '',
  '      <div className="flex items-center',
  '        bg-zinc-50 p-3 rounded-lg">',
  '        <Truck className="text-zinc-700"/>',
  '        <div>',
  '          <p className="font-medium">',
  '            {driver}',
  '          </p>',
  '          <p className="text-emerald-500">',
  '            ETA: 2h 15m',
  '          </p>',
  '        </div>',
  '      </div>',
  '    </div>',
  '  );',
  '}',
]

const PHASE_PROMPT = 0
const PHASE_CODE = 1
const PHASE_DONE = 2

function getPreviewPhase(codeLine: number) {
  if (codeLine < 14) return 0
  if (codeLine < 22) return 1
  if (codeLine < 32) return 2
  if (codeLine < 42) return 3
  return 4
}

function useAnimationLoop() {
  const [promptChars, setPromptChars] = useState(0)
  const [visibleCodeLines, setVisibleCodeLines] = useState(0)
  const [phase, setPhase] = useState(PHASE_PROMPT)
  const [isWaiting, setIsWaiting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const tick = useCallback(() => {
    if (!isInView || isWaiting) return

    if (phase === PHASE_PROMPT) {
      setPromptChars(prev => {
        if (prev >= aiPrompt.length) {
          setTimeout(() => setPhase(PHASE_CODE), 600)
          return prev
        }
        return prev + 2
      })
    } else if (phase === PHASE_CODE) {
      setVisibleCodeLines(prev => {
        if (prev >= codeLines.length) {
          setPhase(PHASE_DONE)
          setIsWaiting(true)
          setTimeout(() => {
            setPromptChars(0)
            setVisibleCodeLines(0)
            setPhase(PHASE_PROMPT)
            setIsWaiting(false)
          }, 4000)
          return prev
        }
        return prev + 1
      })
    }
  }, [isInView, isWaiting, phase])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setPromptChars(aiPrompt.length)
      setVisibleCodeLines(codeLines.length)
      setPhase(PHASE_DONE)
      return
    }

    const speed = phase === PHASE_PROMPT ? 30 : 120
    const interval = setInterval(tick, speed)
    return () => clearInterval(interval)
  }, [tick, phase])

  return { ref, promptChars, visibleCodeLines, phase }
}

function CodeEditor({ promptChars, visibleCodeLines, phase }: {
  promptChars: number
  visibleCodeLines: number
  phase: number
}) {
  return (
    <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden font-mono text-xs sm:text-sm h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="text-gray-500 text-xs ml-2">ActiveRouteCard.tsx</span>
      </div>

      <div className="px-4 py-3 border-b border-white/[0.06] bg-brand-blue/[0.03] flex items-center gap-2 min-h-[44px]">
        <Sparkles className="w-4 h-4 text-brand-blue flex-shrink-0" />
        <span className="text-brand-cyan text-xs">
          {aiPrompt.slice(0, promptChars)}
          {phase === PHASE_PROMPT && promptChars < aiPrompt.length && (
            <span className="inline-block w-1.5 h-3.5 bg-brand-cyan animate-pulse ml-0.5 align-middle" />
          )}
        </span>
      </div>

      <div className="p-4 flex-1 overflow-hidden">
        {codeLines.map((line, i) => {
          const isKeyword = line.includes('import') || line.includes('export') || line.includes('interface') || line.includes('return')
          const isType = line.includes('string') || line.includes('RouteProps')
          const isString = line.includes("'") || line.includes('"')

          let colorClass = 'text-gray-300'
          if (!line) colorClass = ''
          else if (isKeyword) colorClass = 'text-purple-400'
          else if (isType) colorClass = 'text-brand-cyan'
          else if (isString) colorClass = 'text-green-400'

          return (
            <div
              key={i}
              className={`leading-5 transition-all duration-200 ${i < visibleCodeLines ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="text-gray-700 select-none inline-block w-7 text-right mr-3">
                {line !== undefined ? i + 1 : ''}
              </span>
              <span className={colorClass}>{line}</span>
            </div>
          )
        })}
        {phase === PHASE_DONE && (
          <div className="mt-1">
            <span className="text-gray-700 select-none inline-block w-7 text-right mr-3">&gt;</span>
            <span className="inline-block w-2 h-4 bg-brand-blue animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}

function PreviewCard({ previewPhase }: { previewPhase: number }) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
      <div className={`p-6 transition-all duration-500 ${previewPhase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex justify-between items-center mb-5">
          <h3 className={`text-lg font-semibold text-zinc-900 transition-all duration-500 ${previewPhase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            Route #BRZ-8492
          </h3>
          <span className={`px-3 py-1 text-xs font-medium rounded-full bg-blue-600 text-white transition-all duration-500 ${previewPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            In Transit
          </span>
        </div>

        <div className={`flex items-center space-x-3 mb-6 text-sm text-zinc-500 transition-all duration-700 ${previewPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" />
            <span>Melbourne, VIC</span>
          </div>
          <div className="h-px w-8 bg-zinc-300" />
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-emerald-500" />
            <span>Sydney, NSW</span>
          </div>
        </div>

        <div className={`flex items-center space-x-3 bg-zinc-50 p-3 rounded-lg transition-all duration-700 ${previewPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <Truck className="w-5 h-5 text-zinc-700" />
          <div>
            <p className="text-sm font-medium text-zinc-900">Carlos Silva</p>
            <p className="text-xs text-emerald-600 font-medium">ETA: 2h 15m</p>
          </div>
        </div>
      </div>

      {previewPhase < 1 && (
        <div className="p-6 space-y-4 animate-pulse">
          <div className="flex justify-between">
            <div className="h-5 w-32 bg-zinc-200 rounded" />
            <div className="h-5 w-20 bg-zinc-200 rounded-full" />
          </div>
          <div className="h-4 w-48 bg-zinc-100 rounded" />
          <div className="h-12 w-full bg-zinc-100 rounded-lg" />
        </div>
      )}
    </div>
  )
}

export default function LiveDemo() {
  const { ref, promptChars, visibleCodeLines, phase } = useAnimationLoop()
  const previewPhase = phase === PHASE_DONE ? 4 : (phase === PHASE_CODE ? getPreviewPhase(visibleCodeLines) : -1)

  return (
    <section id="live-demo" className="pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Startup speed<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span> Enterprise quality<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            We use AI in our development workflow to go from idea to interface in record time. Less boilerplate, more focus on business logic and scalability.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-h-[500px]"
          >
            <CodeEditor promptChars={promptChars} visibleCodeLines={visibleCodeLines} phase={phase} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col"
          >
            <div className="bg-[#f8f9fa] border border-white/[0.08] rounded-2xl overflow-hidden flex-1 flex flex-col">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-200 bg-white">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <div className="flex-1 mx-4">
                  <div className="bg-zinc-100 rounded-md px-3 py-1 text-xs text-zinc-400 text-center">
                    localhost:3000/dashboard
                  </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <PreviewCard previewPhase={previewPhase} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

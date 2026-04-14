'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const languages = [
  { code: 'EN', flag: '🇬🇧' },
  { code: 'PT', flag: '🇧🇷' },
  { code: 'ES', flag: '🇪🇸' },
]

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(languages[0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved) {
      const found = languages.find(l => l.code === saved)
      if (found) setSelected(found)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (lang: typeof languages[0]) => {
    setSelected(lang)
    localStorage.setItem('lang', lang.code)
    setIsOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 group"
      >
        <span className="text-sm leading-none">{selected.flag}</span>
        <span className="text-xs font-mono tracking-wide">{selected.code}</span>
        <ChevronDown className={`w-3 h-3 text-gray-600 group-hover:text-brand-cyan transition-[transform,color] duration-200 ${isOpen ? 'rotate-180 text-brand-cyan' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-3 bg-[#111] border border-white/[0.08] rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.6)] min-w-[90px] z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left cursor-pointer transition-colors duration-200 ${
                  selected.code === lang.code
                    ? 'text-brand-cyan bg-brand-cyan/[0.06]'
                    : 'text-gray-500 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-sm leading-none">{lang.flag}</span>
                <span className="text-xs font-mono tracking-wide">{lang.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { getTranslations, type Lang, type Translations } from '@/lib/i18n'

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'EN',
  setLang: () => {},
  t: getTranslations('EN'),
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('EN')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved && ['EN', 'PT', 'ES'].includes(saved)) {
      setLangState(saved)
    }
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
  }

  const t = getTranslations(lang)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

import en from './en.json'
import pt from './pt.json'
import es from './es.json'

export type Lang = 'EN' | 'PT' | 'ES'

const translations: Record<Lang, typeof en> = { EN: en, PT: pt, ES: es }

export function getTranslations(lang: Lang) {
  return translations[lang] || translations.EN
}

export type Translations = typeof en

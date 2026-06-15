import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { translations } from '../data/i18n'

const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('portfolio-lang')
    if (stored === 'pt' || stored === 'en') return stored
  }
  return 'pt'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  useEffect(() => {
    try {
      document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
    } catch {
      /* noop */
    }
  }, [lang])

  const setLang = useCallback((next) => {
    try {
      localStorage.setItem('portfolio-lang', next)
    } catch {
      /* noop */
    }
    setLangState(next)
  }, [])

  const t = translations[lang === 'en' ? 'en' : 'pt']

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

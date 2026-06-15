import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-slate-400/10 px-6 py-[34px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <span className="font-mono text-[11.5px] text-[#64748b]">{t.footer}</span>
      </div>
    </footer>
  )
}

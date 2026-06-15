import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const SECTIONS = ['inicio', 'sobre', 'experiencia', 'habilidades', 'projetos']

function LangToggle({ lang, setLang }) {
  const btn = (active) =>
    `rounded-[7px] px-[11px] py-1.5 font-mono text-[11.5px] font-medium tracking-[0.04em] transition-all duration-200 ${
      active ? 'bg-[#2563eb] text-[#f8fafc]' : 'bg-transparent text-slate-400'
    }`
  return (
    <div className="flex items-center gap-0.5 rounded-[9px] border border-slate-400/[0.18] bg-slate-900/50 p-[3px]">
      <button type="button" aria-label="Português" className={btn(lang === 'pt')} onClick={() => setLang('pt')}>
        PT
      </button>
      <button type="button" aria-label="English" className={btn(lang === 'en')} onClick={() => setLang('en')}>
        EN
      </button>
    </div>
  )
}

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-400/10 bg-[#0a0f1a]/[0.78] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-6 py-3.5">
        <a
          href="#inicio"
          className="font-display text-base font-bold tracking-[-0.02em] text-slate-200 no-underline"
        >
          &lt;JV<span className="text-[#3b82f6]">/</span>&gt;<span className="text-[#3b82f6]">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={close}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 no-underline transition-colors hover:bg-slate-400/[0.08] hover:text-slate-200"
            >
              {t.nav[id]}
            </a>
          ))}
          <a
            href="#contato"
            onClick={close}
            className="ml-1.5 rounded-[9px] border border-[#60a5fa]/40 px-4 py-2 font-display text-[13.5px] font-semibold text-[#bfdbfe] no-underline transition-all hover:border-[#60a5fa]/70 hover:bg-[#2563eb]/[0.18]"
          >
            {t.nav.contato}
          </a>
          <div className="ml-2.5">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-slate-400/[0.18] bg-slate-900/50 text-lg text-slate-300 md:hidden"
        >
          ≡
        </button>
      </div>

      {open ? (
        <div className="flex flex-col gap-0.5 border-t border-slate-400/10 bg-[#0a0f1a]/[0.97] px-[18px] pb-4 pt-2 md:hidden">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={close}
              className="rounded-lg px-2 py-[11px] text-[15px] text-slate-300 no-underline"
            >
              {t.nav[id]}
            </a>
          ))}
          <a
            href="#contato"
            onClick={close}
            className="rounded-lg px-2 py-[11px] text-[15px] text-[#bfdbfe] no-underline"
          >
            {t.nav.contato}
          </a>
          <div className="mt-2.5 flex items-center gap-1.5 border-t border-slate-400/10 pt-3">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      ) : null}
    </header>
  )
}

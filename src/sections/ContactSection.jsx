import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { SocialLinks } from '../components/SocialLinks'
import { social } from '../data/i18n'

export function ContactSection() {
  const { t } = useLanguage()
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <section id="contato" className="relative mx-auto max-w-[1140px] px-6 py-[110px] scroll-mt-[84px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
        style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.14),transparent 65%)' }}
      />
      <div className="relative text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[#60a5fa]">
          {t.contact.eyebrow}
        </p>
        <h2 className="m-0 font-display text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.025em] text-[#f1f5f9]">
          {t.contact.heading1}
          <br />
          {t.contact.heading2}
        </h2>
        <p className="mx-auto mt-[22px] max-w-[480px] text-[16.5px] leading-[1.7] text-slate-400">
          {t.contact.sub}
        </p>

        <div className="mt-[38px] flex flex-wrap justify-center gap-3.5">
          <a
            href={`mailto:${social.email}`}
            className="inline-flex items-center gap-[9px] rounded-xl bg-[#2563eb] px-[26px] py-3.5 font-display text-[15px] font-semibold text-[#f8fafc] no-underline shadow-[0_16px_36px_-16px_rgba(37,99,235,0.9)] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#3b82f6]"
          >
            {social.email}
          </a>

          <div className="relative inline-flex">
            <button
              type="button"
              onClick={() => setCvOpen((v) => !v)}
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl border border-slate-400/20 bg-slate-900/60 px-[26px] py-3.5 font-display text-[15px] font-semibold text-slate-200 transition-all duration-200 hover:border-[#60a5fa]/60"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              {t.contact.cv}
              <span
                className="inline-flex transition-transform duration-[250ms]"
                style={{ transform: cvOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <div
              className="absolute left-1/2 top-[calc(100%+10px)] z-30 flex min-w-[210px] flex-col gap-1 rounded-[14px] border border-slate-400/[0.18] bg-[#0d1422]/[0.97] p-2 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.85)] backdrop-blur-md transition-[opacity,transform] duration-200"
              style={{
                transform: cvOpen
                  ? 'translateX(-50%) translateY(0)'
                  : 'translateX(-50%) translateY(-8px)',
                opacity: cvOpen ? 1 : 0,
                pointerEvents: cvOpen ? 'auto' : 'none',
              }}
            >
              <a
                href="/Curriculo-Joao-Vitor-PT.pdf"
                download="Joao Vitor M. de Andrade - Curriculo.pdf"
                onClick={() => setCvOpen(false)}
                className="flex items-center gap-[11px] rounded-[9px] px-[13px] py-[11px] text-sm font-medium text-slate-200 no-underline transition-colors duration-150 hover:bg-[#2563eb]/[0.18]"
              >
                <span className="text-[17px] leading-none">🇧🇷</span>
                {t.contact.cvPt}
              </a>
              <a
                href="/Curriculo-Joao-Vitor-EN.pdf"
                download="Joao Vitor M. de Andrade - Resume.pdf"
                onClick={() => setCvOpen(false)}
                className="flex items-center gap-[11px] rounded-[9px] px-[13px] py-[11px] text-sm font-medium text-slate-200 no-underline transition-colors duration-150 hover:bg-[#2563eb]/[0.18]"
              >
                <span className="text-[17px] leading-none">🇺🇸</span>
                {t.contact.cvEn}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[30px]">
          <SocialLinks size="contact" />
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { CodeWindow } from '../components/CodeWindow'
import { SocialLinks } from '../components/SocialLinks'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pb-20 pt-[120px] scroll-mt-[84px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[140px] top-[120px] h-[340px] w-[340px] rounded-full bg-[#2563eb]/[0.16] blur-[110px]" />
        <div className="absolute -right-20 top-[42%] h-[420px] w-[420px] rounded-full bg-[#38bdf8]/10 blur-[130px]" />
        <div className="absolute bottom-[60px] left-[32%] h-[300px] w-[300px] rounded-full bg-[#4f46e5]/[0.12] blur-[110px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1140px] grid-cols-[1.25fr_0.75fr] items-center gap-12 max-[860px]:grid-cols-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border border-[#60a5fa]/30 bg-[#2563eb]/[0.08] px-3.5 py-[7px]">
            <span className="h-2 w-2 rounded-full bg-[#34d399] shadow-[0_0_0_3px_rgba(52,211,153,0.2)]" />
            <span className="font-mono text-[11.5px] tracking-[0.06em] text-slate-300">
              {t.hero.status}
            </span>
          </div>

          <p className="mb-4 font-mono text-[12.5px] uppercase tracking-[0.24em] text-[#60a5fa]">
            {t.hero.eyebrow}
          </p>
          <h1 className="m-0 font-display text-[clamp(2.6rem,6.5vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#f1f5f9]">
            João Vitor
            <br />
            Andrade
          </h1>
          <p className="mt-5 font-display text-[clamp(1.1rem,2.4vw,1.6rem)] font-medium tracking-[-0.01em] text-[#60a5fa]">
            {t.hero.role}
          </p>
          <p className="mt-[22px] max-w-[520px] text-[16.5px] leading-[1.7] text-slate-400 [text-wrap:pretty]">
            {t.hero.desc}
          </p>

          <div className="mt-[34px] flex flex-wrap gap-3.5">
            <a
              href="#projetos"
              className="inline-flex items-center gap-[9px] rounded-xl bg-[#2563eb] px-6 py-[13px] font-display text-[15px] font-semibold text-[#f8fafc] no-underline shadow-[0_16px_36px_-16px_rgba(37,99,235,0.9)] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#3b82f6]"
            >
              {t.hero.ctaProjects} <span>→</span>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-[9px] rounded-xl border border-slate-400/20 bg-slate-900/60 px-6 py-[13px] font-display text-[15px] font-semibold text-slate-200 no-underline transition-all duration-200 hover:border-[#60a5fa]/60 hover:bg-slate-900/90"
            >
              {t.hero.ctaContact}
            </a>
          </div>

          <div className="mt-[34px]">
            <SocialLinks size="hero" />
          </div>
        </motion.div>

        <div className="flex items-center justify-center max-[860px]:hidden">
          <CodeWindow />
        </div>
      </div>

      <div className="absolute bottom-[26px] left-1/2 -translate-x-1/2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#475569]">
        scroll ↓
      </div>
    </section>
  )
}

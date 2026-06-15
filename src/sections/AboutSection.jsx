import { useLanguage } from '../context/LanguageContext'
import { Reveal } from '../components/Reveal'

/** Converte **trechos** em <strong> destacado. */
function rich(text) {
  return String(text)
    .split(/\*\*(.+?)\*\*/g)
    .map((seg, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-slate-300">
          {seg}
        </strong>
      ) : (
        seg
      ),
    )
}

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="relative mx-auto max-w-[1140px] px-6 py-[100px] scroll-mt-[84px]">
      <Reveal className="text-center">
        <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.22em] text-[#60a5fa]">
          {t.about.eyebrow}
        </p>
        <h2 className="mx-auto mb-10 max-w-[760px] font-display text-[clamp(1.9rem,4vw,2.7rem)] font-semibold tracking-[-0.02em] text-[#f1f5f9]">
          {t.about.heading}
        </h2>
      </Reveal>

      <Reveal>
        <div className="mx-auto flex max-w-[760px] flex-col gap-[18px] text-left text-[16.5px] leading-[1.8] text-slate-400">
          {t.about.paras.map((p, i) => (
            <p key={i} className="m-0 [text-wrap:pretty]">
              {rich(p)}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

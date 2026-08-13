import { useLanguage } from '../context/LanguageContext'
import { Reveal } from '../components/Reveal'
import { skillGroups } from '../data/i18n'

export function SkillsSection() {
  const { t, lang } = useLanguage()

  return (
    <section id="habilidades" className="relative mx-auto max-w-[1140px] px-6 py-[100px] scroll-mt-[84px]">
      <Reveal>
        <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.22em] text-[#60a5fa]">
          {t.skills.eyebrow}
        </p>
        <h2 className="mb-12 font-display text-[clamp(1.9rem,4vw,2.7rem)] font-semibold tracking-[-0.02em] text-[#f1f5f9]">
          {t.skills.heading}
        </h2>
      </Reveal>

      <Reveal className="grid gap-[18px] [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {skillGroups.map((group) => (
          <div
            key={group.key}
            className="rounded-2xl border border-slate-400/[0.12] bg-slate-900/50 p-6 transition-colors duration-300 hover:border-[#60a5fa]/35"
          >
            <p className="mb-4 flex items-center gap-[9px] font-display text-[15px] font-semibold text-slate-200">
              <span className="h-[7px] w-[7px] rounded-[2px] bg-[#3b82f6]" />
              {t.skills[group.key]}
            </p>
            <div className="flex flex-wrap gap-2">
              {(lang === 'en' && group.itemsEn ? group.itemsEn : group.items).map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-400/[0.14] bg-slate-800/50 px-2.5 py-[5px] font-mono text-[11.5px] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

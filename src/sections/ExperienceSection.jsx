import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Reveal } from '../components/Reveal'

const COMPANIES = ['The Door', 'Nexsion', 'JMP Representações', 'Procon Goiás']

function ExperienceItem({ job, company, isFirst, isLast, currentLabel, lang }) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const [overflows, setOverflows] = useState(false)

  useEffect(() => {
    const measure = () => {
      const el = ref.current
      if (!el) return
      const lh = parseFloat(getComputedStyle(el).lineHeight) || 25.5
      setOverflows(el.scrollHeight > lh * 3 + 2)
    }
    measure()
    window.addEventListener('resize', measure)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [job.desc])

  const more = lang === 'en' ? 'See more ↓' : 'Ver mais ↓'
  const less = lang === 'en' ? 'See less ↑' : 'Ver menos ↑'

  return (
    <Reveal className={`relative pl-[30px] ${isLast ? '' : 'pb-[38px]'}`}>
      <span
        className={`absolute -left-[7px] top-1 h-[13px] w-[13px] rounded-full ${
          isFirst
            ? 'bg-[#2563eb] shadow-[0_0_0_4px_rgba(37,99,235,0.18)]'
            : 'bg-[#334155] shadow-[0_0_0_4px_rgba(51,65,85,0.25)]'
        }`}
      />
      <div className="flex flex-wrap items-center gap-2.5">
        <h3 className="m-0 font-display text-[19px] font-semibold text-[#f1f5f9]">{job.title}</h3>
        {isFirst ? (
          <span className="rounded-full border border-[#34d399]/35 bg-[#34d399]/[0.08] px-[9px] py-[3px] font-mono text-[10px] uppercase tracking-[0.1em] text-[#34d399]">
            {currentLabel}
          </span>
        ) : null}
      </div>
      <p className="mt-1.5 font-mono text-[13px] text-[#60a5fa]">{company}</p>
      <p
        ref={ref}
        className="mt-3 max-w-[760px] text-[15px] leading-[1.7] text-slate-400 [text-wrap:pretty]"
        style={
          open
            ? undefined
            : {
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }
        }
      >
        {job.desc}
      </p>
      {overflows ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-2.5 inline-flex cursor-pointer items-center gap-[5px] border-none bg-transparent p-0 font-mono text-xs tracking-[0.04em] text-[#60a5fa]"
        >
          {open ? less : more}
        </button>
      ) : null}
    </Reveal>
  )
}

export function ExperienceSection() {
  const { t, lang } = useLanguage()
  const jobs = t.exp.jobs

  return (
    <section
      id="experiencia"
      className="relative border-y border-slate-400/[0.08] bg-slate-900/25"
    >
      <div className="mx-auto max-w-[1140px] px-6 py-[100px] scroll-mt-[84px]">
        <Reveal>
          <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.22em] text-[#60a5fa]">
            {t.exp.eyebrow}
          </p>
          <h2 className="mb-12 font-display text-[clamp(1.9rem,4vw,2.7rem)] font-semibold tracking-[-0.02em] text-[#f1f5f9]">
            {t.exp.heading}
          </h2>
        </Reveal>
        <div className="ml-1.5 flex flex-col border-l border-slate-400/[0.16]">
          {jobs.map((job, i) => (
            <ExperienceItem
              key={i}
              job={job}
              company={COMPANIES[i]}
              isFirst={i === 0}
              isLast={i === jobs.length - 1}
              currentLabel={t.exp.current}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

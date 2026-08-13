import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { mobileProjects } from '../data/mobileProjects'

function localize(p, lang, kind) {
  const base = { ...p, kind }
  if (lang === 'en') {
    return { ...base, title: p.titleEn || p.title, description: p.descriptionEn || p.description }
  }
  return base
}

export function ProjectsSection() {
  const { t, lang } = useLanguage()
  const [filter, setFilter] = useState('web')
  const [showAll, setShowAll] = useState(false)

  const web = projects.map((p) => localize(p, lang, 'web'))
  const mob = mobileProjects.map((p) => localize(p, lang, 'mobile'))
  const list = filter === 'mobile' ? mob : web
  const filtered = showAll ? list : list.slice(0, 3)
  const hasMore = list.length > 3
  const isEmpty = filtered.length === 0

  const selectFilter = (next) => {
    setFilter(next)
    setShowAll(false)
  }

  const pill = (active) =>
    `inline-flex items-center gap-2 rounded-[10px] px-[15px] py-[9px] font-mono text-[11.5px] uppercase tracking-[0.08em] transition-all duration-200 ${
      active
        ? 'border border-transparent bg-[#2563eb] text-[#f8fafc]'
        : 'border border-slate-400/[0.18] bg-slate-900/50 text-slate-400'
    }`
  const badge = (active) =>
    `rounded-[6px] px-1.5 py-px font-mono text-[10px] ${
      active ? 'bg-white/[0.18] text-[#f8fafc]' : 'bg-slate-400/[0.12] text-[#64748b]'
    }`

  return (
    <section id="projetos" className="relative border-t border-slate-400/[0.08] bg-slate-900/25">
      <div className="mx-auto max-w-[1140px] px-6 py-[100px] scroll-mt-[84px]">
        <Reveal className="mb-[34px]">
          <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.22em] text-[#60a5fa]">
            {t.projects.eyebrow}
          </p>
          <h2 className="m-0 font-display text-[clamp(1.9rem,4vw,2.7rem)] font-semibold tracking-[-0.02em] text-[#f1f5f9]">
            {t.projects.heading}
          </h2>
        </Reveal>

        <div className="mb-[30px] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-[9px]">
            <button type="button" onClick={() => selectFilter('web')} className={pill(filter === 'web')}>
              {t.projects.web} <span className={badge(filter === 'web')}>{web.length}</span>
            </button>
            <button type="button" onClick={() => selectFilter('mobile')} className={pill(filter === 'mobile')}>
              {t.projects.mobile} <span className={badge(filter === 'mobile')}>{mob.length}</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5">
          {filtered.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              layout={proj.featured ? 'feature' : 'row'}
              lang={lang}
            />
          ))}
        </div>

        {hasMore ? (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="mx-auto mt-9 inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-[#60a5fa]/35 px-7 py-[13px] font-display text-sm font-semibold tracking-[0.01em] text-[#dbeafe] shadow-[0_10px_30px_-14px_rgba(37,99,235,0.7)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-[#60a5fa]/70 hover:shadow-[0_16px_38px_-14px_rgba(37,99,235,0.85)]"
              style={{
                background: 'linear-gradient(135deg, rgba(37,99,235,0.18), rgba(15,23,42,0.4))',
              }}
            >
              {showAll ? t.projects.verMenos : t.projects.verMais}
              <span
                className="inline-flex transition-transform duration-300"
                style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
          </div>
        ) : null}

        {isEmpty ? (
          <div className="rounded-2xl border border-dashed border-slate-400/20 px-6 py-[60px] text-center font-mono text-[13px] text-[#64748b]">
            {t.projects.empty}
          </div>
        ) : null}
      </div>
    </section>
  )
}

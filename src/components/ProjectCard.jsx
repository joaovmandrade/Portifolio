import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Pega `campo` respeitando a variante `campoEn` quando o idioma é inglês. */
function pick(obj, key, lang) {
  const en = obj?.[`${key}En`]
  if (lang === 'en' && en != null && (!Array.isArray(en) || en.length)) return en
  return obj?.[key]
}

/**
 * Card de projeto com moldura de navegador (web) ou celular (mobile).
 * `layout`: 'row' (linha, padrão) | 'feature' | 'grid'
 *
 * Quando o projeto traz `overview`, `stack`, `features` ou `highlights`,
 * o card ganha um botão que abre o painel de detalhes completo.
 */
export function ProjectCard({ project, layout = 'row', lang = 'pt' }) {
  const [open, setOpen] = useState(false)
  const isMobile = project.kind === 'mobile'
  const hasImage = Boolean(project.image && String(project.image).trim())
  const isRow = layout === 'row'
  const isFeature = layout === 'feature'
  const isRowLike = isRow || isFeature

  const url = project.liveUrl || project.storeUrl || ''
  let host = ''
  try {
    host = url ? new URL(url).host : 'localhost'
  } catch {
    host = 'preview'
  }

  const kindLabel = isMobile
    ? `${project.platform ? project.platform + ' · ' : ''}Mobile`
    : 'Web'
  const primaryLabel = isMobile
    ? lang === 'en'
      ? 'Open app'
      : 'Abrir app'
    : lang === 'en'
      ? 'View project'
      : 'Ver projeto'
  const hasRepo = Boolean(project.repoUrl && String(project.repoUrl).trim())

  // ---- Conteúdo opcional do painel de detalhes ----
  const localizedCategory = pick(project, 'category', lang)
  const categories = Array.isArray(localizedCategory) ? localizedCategory : []
  const role = pick(project, 'role', lang)
  const tagline = pick(project, 'tagline', lang)
  const overview = pick(project, 'overview', lang) || []
  const stack = project.stack || []
  const features = project.features || []
  const highlights = pick(project, 'highlights', lang) || []
  const hasDetails = Boolean(
    overview.length || stack.length || features.length || highlights.length,
  )
  const detailsLabel = open
    ? lang === 'en'
      ? 'Hide details'
      : 'Ocultar detalhes'
    : lang === 'en'
      ? 'View details'
      : 'Ver detalhes'
  const stackLabel = lang === 'en' ? 'Stack' : 'Stack'
  const highlightsLabel = lang === 'en' ? 'Technical highlights' : 'Diferenciais técnicos'
  const eyebrowText = [kindLabel, ...categories].join(' • ')
  const sectionTitle = 'font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#60a5fa]'
  const divider = 'h-px w-full bg-slate-400/[0.08]'

  const titleSize = isFeature ? '24px' : isRow ? '22px' : '19px'

  // Empilha (imagem em cima, texto embaixo) no mobile; vira linha a partir de 640px.
  const layoutClasses = isRowLike
    ? 'flex-col gap-5 p-[18px] min-[640px]:flex-row min-[640px]:flex-wrap min-[640px]:gap-[34px] min-[640px]:p-[26px]'
    : 'flex-col gap-5 p-[18px]'
  const frameClasses = isRowLike
    ? isMobile
      ? 'w-full min-[640px]:flex-[0_0_230px]'
      : isFeature
        ? 'w-full min-[640px]:flex-[1.3]'
        : 'w-full min-[640px]:flex-[1.05]'
    : 'w-full'
  const metaClasses = isRowLike
    ? 'w-full min-[640px]:flex-1 min-[640px]:min-w-[240px]'
    : 'w-full'

  return (
    <article
      className={`group relative box-border flex h-full w-full animate-[cardUp_.55s_ease-out_both] overflow-hidden rounded-[20px] border border-slate-400/[0.12] shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)] transition-[transform,border-color,box-shadow] duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:border-[#60a5fa]/45 hover:shadow-[0_34px_70px_-30px_rgba(37,99,235,0.4)] ${layoutClasses}`}
      style={{
        background: 'linear-gradient(180deg, rgba(15,23,42,0.78), rgba(2,6,23,0.85))',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 80% -10%, rgba(59,130,246,0.10), transparent 60%)',
        }}
      />

      {/* DEVICE / FRAME */}
      <div className={`relative z-[1] min-w-0 ${frameClasses}`}>
        {isMobile ? (
          <div className="flex justify-center">
            <div
              className="relative aspect-[9/19] w-full max-w-[230px] rounded-[34px] border border-slate-400/[0.18] p-[9px]"
              style={{
                background: 'linear-gradient(160deg,#1e293b,#020617)',
                boxShadow:
                  'inset 0 0 0 2px rgba(2,6,23,0.9), 0 30px 60px -30px rgba(0,0,0,0.9)',
              }}
            >
              <div className="absolute left-1/2 top-[18px] z-[3] h-[18px] w-16 -translate-x-1/2 rounded-full border border-slate-400/[0.12] bg-[#020617]" />
              <div className="relative h-full w-full overflow-hidden rounded-[26px] bg-[#0a0f1a]">
                {hasImage ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    className="flex h-full w-full flex-col items-center justify-center gap-2.5"
                    style={{
                      background:
                        'repeating-linear-gradient(135deg, rgba(30,41,59,0.55) 0 12px, rgba(15,23,42,0.55) 12px 24px)',
                    }}
                  >
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-[#60a5fa]/40 text-xl text-[#60a5fa]">
                      📱
                    </div>
                    <span className="px-4 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-[#64748b]">
                      {lang === 'en' ? 'screenshot coming soon' : 'print em breve'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-[14px] border border-slate-400/[0.16] bg-[#0b1220] shadow-[0_22px_48px_-28px_rgba(0,0,0,0.9)]">
            <div
              className="flex items-center gap-2 border-b border-slate-400/10 px-3.5 py-2.5"
              style={{ background: 'linear-gradient(180deg,#111c30,#0b1220)' }}
            >
              <span className="h-[11px] w-[11px] rounded-full bg-[#f87171]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#fbbf24]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#34d399]" />
              <div className="ml-2 flex h-[22px] min-w-0 flex-1 items-center gap-1.5 rounded-[7px] border border-slate-400/10 bg-[#020617]/70 px-2.5">
                <span className="h-[9px] w-[9px] rounded-[2px] border border-[#475569]" />
                <span className="overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[10px] text-[#64748b]">
                  {host}
                </span>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0f1a]">
              {hasImage ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{
                    background:
                      'repeating-linear-gradient(135deg, rgba(30,41,59,0.55) 0 14px, rgba(15,23,42,0.55) 14px 28px)',
                  }}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#64748b]">
                    screenshot
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* META */}
      <div className={`relative z-[1] flex flex-col gap-3.5 ${metaClasses}`}>
        <div className="flex items-center gap-2.5">
          <span className={sectionTitle}>{eyebrowText}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-[#60a5fa]/35 to-transparent" />
        </div>

        <div>
          <h3
            className="m-0 font-display font-semibold leading-[1.2] tracking-[-0.01em] text-slate-200"
            style={{ fontSize: titleSize }}
          >
            {project.title}
          </h3>
          {role ? (
            <p className="m-0 mt-[9px] inline-flex items-center gap-2 rounded-full border border-[#60a5fa]/30 bg-[#2563eb]/[0.12] px-3 py-[5px] font-mono text-[11px] leading-[1.4] tracking-[0.02em] text-[#bfdbfe]">
              <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#60a5fa]" />
              {role}
            </p>
          ) : null}
          <p className="mt-2.5 text-[14.5px] leading-[1.65] text-slate-400 [text-wrap:pretty]">
            {project.description}
          </p>
        </div>

        <ul className="m-0 mt-0.5 flex list-none flex-wrap gap-[7px] p-0">
          {(project.technologies || []).map((tech) => (
            <li
              key={tech}
              className="rounded-[7px] border border-slate-400/[0.14] bg-slate-800/50 px-[9px] py-[5px] font-mono text-[11px] text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-1.5">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[7px] whitespace-nowrap rounded-[10px] bg-[#2563eb] px-4 py-2.5 font-display text-[13.5px] font-semibold text-[#f8fafc] no-underline shadow-[0_12px_28px_-14px_rgba(37,99,235,0.9)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-[#3b82f6]"
            >
              {primaryLabel} <span className="text-sm">↗</span>
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-[7px] whitespace-nowrap rounded-[10px] bg-[#2563eb]/[0.18] px-4 py-2.5 font-display text-[13.5px] font-semibold text-[#64748b]">
              {primaryLabel}
            </span>
          )}
          {hasRepo ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[7px] rounded-[10px] border border-slate-400/[0.18] bg-slate-800/55 px-4 py-2.5 font-display text-[13.5px] font-semibold text-slate-200 no-underline transition-[border-color,background] duration-200 hover:border-[#60a5fa]/50 hover:bg-slate-800/85"
            >
              GitHub
            </a>
          ) : null}
          {hasDetails ? (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex cursor-pointer items-center gap-2 rounded-[10px] border border-[#60a5fa]/25 bg-[#2563eb]/[0.08] px-4 py-2.5 font-display text-[13.5px] font-semibold text-[#bfdbfe] transition-[border-color,background,color] duration-200 hover:border-[#60a5fa]/55 hover:bg-[#2563eb]/[0.16] hover:text-[#dbeafe]"
            >
              {detailsLabel}
              <span
                className="inline-flex transition-transform duration-300"
                style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
          ) : null}
        </div>
      </div>

      {/* PAINEL DE DETALHES (ocupa a linha inteira do card) */}
      {hasDetails ? (
        <div className="relative z-[1] w-full min-[640px]:basis-full">
          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div
                  className="flex flex-col gap-6 rounded-[16px] border border-slate-400/[0.1] p-5 min-[640px]:p-6"
                  style={{ background: 'rgba(2,6,23,0.5)' }}
                >
                  {tagline ? (
                    <p className="m-0 border-l-2 border-[#60a5fa]/45 pl-4 font-display text-[15.5px] leading-[1.6] tracking-[-0.005em] text-slate-300 [text-wrap:pretty]">
                      {tagline}
                    </p>
                  ) : null}

                  {overview.length ? (
                    <div className="flex flex-col gap-3">
                      {overview.map((para, i) => (
                        <p
                          key={i}
                          className="m-0 text-[14px] leading-[1.75] text-slate-400 [text-wrap:pretty]"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {stack.length ? (
                    <>
                      <span className={divider} />
                      <div className="flex flex-col gap-3.5">
                        <span className={sectionTitle}>{stackLabel}</span>
                        {stack.map((group) => (
                          <div
                            key={group.label}
                            className="flex flex-col gap-2 min-[560px]:flex-row min-[560px]:gap-4"
                          >
                            <span className="pt-[3px] font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#64748b] min-[560px]:w-[104px] min-[560px]:shrink-0">
                              {pick(group, 'label', lang)}
                            </span>
                            <ul className="m-0 flex list-none flex-wrap gap-[6px] p-0">
                              {(pick(group, 'items', lang) || []).map((item) => (
                                <li
                                  key={item}
                                  className="rounded-[6px] border border-slate-400/[0.12] bg-slate-800/40 px-2 py-[3px] font-mono text-[10.5px] text-slate-300"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {features.length ? (
                    <>
                      <span className={divider} />
                      <div className="grid grid-cols-1 gap-6 min-[560px]:grid-cols-2">
                        {features.map((group) => (
                          <div key={group.label} className="flex flex-col gap-3">
                            <span className={sectionTitle}>{pick(group, 'label', lang)}</span>
                            <ul className="m-0 flex list-none flex-col gap-2 p-0">
                              {(pick(group, 'items', lang) || []).map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-2.5 text-[13.5px] leading-[1.5] text-slate-400"
                                >
                                  <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#60a5fa]/70" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {highlights.length ? (
                    <>
                      <span className={divider} />
                      <div className="flex flex-col gap-3">
                        <span className={sectionTitle}>{highlightsLabel}</span>
                        <ul className="m-0 grid list-none grid-cols-1 gap-2 p-0 min-[560px]:grid-cols-2">
                          {highlights.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-[13.5px] leading-[1.5] text-slate-400"
                            >
                              <span className="font-mono text-[13px] leading-[1.4] text-[#60a5fa]/80">
                                ›
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : null}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ) : null}
    </article>
  )
}

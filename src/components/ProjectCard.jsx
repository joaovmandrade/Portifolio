import { motion } from 'framer-motion'
import { Button } from './Button'

export function ProjectCard({ project, index = 0 }) {
  const { title, description, technologies, image, liveUrl, repoUrl } = project
  const hasImage = Boolean(image && image.trim())
  const hasLive = Boolean(liveUrl && liveUrl.trim())
  const hasRepo = Boolean(repoUrl && repoUrl.trim())
  const initial = title.trim().charAt(0).toUpperCase() || '?'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeOut' } }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900/80 to-slate-950/90 shadow-xl shadow-black/20 transition-colors hover:border-slate-700/90"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        {hasImage ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950/80">
            <span className="font-display text-5xl font-bold text-slate-600/90 transition-colors group-hover:text-blue-500/50">
              {initial}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="font-display text-lg font-semibold text-slate-200 sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
            {description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-slate-700/60 bg-slate-800/40 px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-1">
          <Button
            href={hasLive ? liveUrl : undefined}
            disabled={!hasLive}
            title={
              hasLive
                ? 'Abrir projeto'
                : 'Defina liveUrl em src/data/projects.js'
            }
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[8rem] sm:flex-none"
          >
            Ver projeto
          </Button>
          <Button
            href={hasRepo ? repoUrl : undefined}
            disabled={!hasRepo}
            title={
              hasRepo
                ? 'Repositório no GitHub'
                : 'Defina repoUrl em src/data/projects.js'
            }
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[8rem] sm:flex-none"
          >
            GitHub
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

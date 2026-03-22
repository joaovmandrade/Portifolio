import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/site'

export function ExperienceSection() {
  return (
    <SectionShell id="experiencia">
      <SectionHeading
        eyebrow="Trajetória"
        title="Experiência"
        description="Experiências que somam visão técnica e proximidade com o usuário."
      />
      <ol className="relative ml-1 space-y-6 border-l border-slate-800/90 pl-8 sm:ml-2 sm:pl-10 md:space-y-8">
        {experience.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem+1px)] top-3 h-2.5 w-2.5 rounded-full border-2 border-[#0a0f1a] bg-blue-500/90 shadow-[0_0_12px_rgba(59,130,246,0.4)] sm:-left-[calc(2.5rem+1px)]" />
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/35 p-5 transition-colors hover:border-slate-700/80 sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-lg font-semibold text-slate-200">
                  {item.role}
                </h3>
                <span className="text-sm font-medium text-blue-400/90">
                  {item.company}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                {item.details}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </SectionShell>
  )
}

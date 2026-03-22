import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/site'

function SkillPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-slate-700/50 bg-slate-800/30 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500/25 hover:bg-slate-800/55 sm:text-sm">
      {children}
    </span>
  )
}

export function SkillsSection() {
  return (
    <SectionShell
      id="habilidades"
      className="border-t border-slate-800/60 bg-slate-950/20"
    >
      <SectionHeading
        eyebrow="Stack"
        title="Habilidades"
        description="Tecnologias e práticas que uso no dia a dia e em projetos."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 transition-shadow hover:shadow-lg hover:shadow-blue-950/20 sm:p-6"
          >
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <SkillPill key={skill}>{skill}</SkillPill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}

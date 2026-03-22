import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { SectionHeading } from '../components/SectionHeading'
import { about } from '../data/site'

export function AboutSection() {
  return (
    <SectionShell id="sobre" className="border-t border-slate-800/60 bg-slate-950/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeading eyebrow="Sobre" title="Quem sou eu" />
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-lg shadow-black/10 sm:p-8 md:p-10">
          <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
            {about.text}
          </p>
        </div>
      </motion.div>
    </SectionShell>
  )
}

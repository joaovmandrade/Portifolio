import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { SectionHeading } from '../components/SectionHeading'
import { SocialLinks } from '../components/SocialLinks'
import { contact } from '../data/site'

export function ContactSection() {
  return (
    <SectionShell
      id="contato"
      className="border-t border-slate-800/60 bg-slate-950/40"
    >
      <SectionHeading
        eyebrow="Vamos conversar"
        title="Contato"
        description="Aberto a oportunidades, freelas e conversas sobre Front-End | Web & Mobile."
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-xl rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-xl shadow-black/20 sm:p-8"
      >
        <ul className="space-y-5">
          <li>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Email
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 inline-block text-slate-200 transition-colors hover:text-blue-400"
            >
              {contact.email}
            </a>
          </li>
          <li>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Telefone
            </p>
            <a
              href={contact.phoneHref}
              className="mt-1 inline-block text-slate-200 transition-colors hover:text-blue-400"
            >
              {contact.phone}
            </a>
          </li>
          <li>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Redes
            </p>
            <div className="mt-2 flex flex-wrap gap-4 text-sm">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 underline-offset-4 hover:text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 underline-offset-4 hover:text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </li>
        </ul>
        <div className="mt-8 border-t border-slate-800/80 pt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Ícones rápidos
          </p>
          <SocialLinks variant="inline" />
        </div>
      </motion.div>
    </SectionShell>
  )
}

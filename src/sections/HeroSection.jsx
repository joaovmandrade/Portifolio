import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { hero } from '../data/site'

export function HeroSection() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center scroll-mt-24 pt-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-indigo-600/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-blue-400/85">
            Portfólio
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {hero.name}
          </h1>
          <p className="mt-4 font-display text-lg text-blue-300/90 sm:text-xl md:text-2xl">
            {hero.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="button" onClick={() => go('projetos')}>
              Ver projetos
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => go('contato')}
            >
              Contato
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

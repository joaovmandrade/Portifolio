import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-[#0a0f1a]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollTo("inicio")}
          className="font-display text-sm font-semibold tracking-tight text-slate-200 transition-colors hover:text-blue-400"
        >
          &lt;JV/&gt;<span className="text-blue-500">.</span>
        </button>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Principal"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-slate-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/50 text-slate-300 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-800/80 bg-[#0a0f1a]/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="rounded-lg px-3 py-3 text-left text-sm text-slate-300 hover:bg-slate-800/70"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

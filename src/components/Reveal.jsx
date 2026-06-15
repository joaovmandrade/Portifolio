import { motion } from 'framer-motion'

/** Reveal-up ao entrar na viewport (equivalente ao revealUp do design). */
export function Reveal({ children, className = '', delay = 0, y = 30, as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  )
}

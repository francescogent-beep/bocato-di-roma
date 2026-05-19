'use client'
import { motion } from 'framer-motion'

export function AnimatedHeroTitle() {
  const words = ['BOCATO', 'DI', 'ROMA']
  return (
    <h1
      className="font-stencil text-[#FEB428] leading-none"
      style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', textShadow: '4px 4px 0px rgba(0,0,0,0.4)' }}
      aria-label="Bocato di Roma"
    >
      {words.map((word, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 48, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-block', marginRight: i < 2 ? '0.25em' : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  )
}

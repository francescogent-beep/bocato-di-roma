'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroAnimations({ type }: { type: 'logo' | 'badge' }) {
  if (type === 'logo') {
    return (
      <motion.div
        className="relative z-10 mb-6"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/logo.png"
          alt="Bocato di Roma"
          width={140}
          height={140}
          priority
          className="mx-auto drop-shadow-2xl"
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      className="inline-block bg-[#361E1E] px-6 py-2 mb-8"
      initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
      animate={{ opacity: 1, rotate: -2, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.7, type: 'spring', bounce: 0.4 }}
    >
      <span className="text-[#FEB428] font-stencil text-xl md:text-2xl uppercase tracking-wider">
        Veni Vidi y Comí
      </span>
    </motion.div>
  )
}

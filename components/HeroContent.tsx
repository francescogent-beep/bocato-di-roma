'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HeroBackground } from '@/components/HeroBackground'
import { GLOVO_URL } from '@/lib/data'

export function HeroContent() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ backgroundColor: '#9F1429' }}
      aria-label="Bocato di Roma — Bocatos Napoletanos en Murcia"
    >
      <HeroBackground />
      {/* Dark overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#9F1429]/50" style={{ zIndex: 2 }} />

      {/* Main content */}
      <div className="relative text-center max-w-2xl w-full" style={{ zIndex: 10 }}>
        {/* Logo — big, no text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          {/* Mobile: round badge logo */}
          <Image
            src="/logo-bocato-di-roma-yellow.svg"
            alt="Bocato di Roma"
            width={300}
            height={300}
            priority
            className="mx-auto block md:hidden -mt-8 -mb-8"
            style={{ filter: 'drop-shadow(0 8px 48px rgba(0,0,0,0.65))' }}
          />
          {/* Desktop: one-line horizontal logo */}
          <Image
            src="/one-line-yellow-bocato-di-roma-logo.svg"
            alt="Bocato di Roma"
            width={1200}
            height={412}
            priority
            className="mx-auto hidden md:block"
            style={{ filter: 'drop-shadow(0 8px 48px rgba(0,0,0,0.65))' }}
          />
        </motion.div>

        {/* Tagline — animated badge */}
        <motion.div
          initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: 'spring', bounce: 0.4 }}
          className="inline-block bg-[#361E1E] px-6 py-2 mb-8"
        >
          <span className="text-[#FEB428] font-stencil text-xl md:text-2xl uppercase tracking-wider">
            Veni Vidi y Comí
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/80 text-base md:text-lg uppercase tracking-[0.2em] font-bold mb-8"
        >
          Street food napoletano · Murcia
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/menu"
            className="bg-[#F4E6CE] text-[#361E1E] font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-white transition-colors"
          >
            La Carta
          </Link>
          {/* Glovo button hidden — uncomment to re-enable
          <a
            href={GLOVO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FEB428] text-[#361E1E] font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-white transition-colors"
          >
            Pedir Ahora — Glovo
          </a>
          */}
        </motion.div>
      </div>

      {/* Paint drip at bottom */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 10 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path
            d="M0,0 L1440,0 L1440,20
              Q1420,40 1400,20 Q1380,0 1360,20 Q1340,40 1320,20 Q1290,0 1260,28
              Q1240,48 1220,28 Q1200,8 1180,30 Q1160,50 1140,30
              Q1100,5 1060,35 Q1040,52 1020,35 Q990,15 960,38
              Q940,55 920,38 Q900,20 880,40 Q860,55 840,40
              Q800,10 760,45 Q740,58 720,45 Q700,28 680,45
              Q650,62 620,42 Q600,28 580,42 Q560,55 540,42
              Q500,15 460,50 Q440,65 420,50 Q400,32 380,50
              Q340,68 300,45 Q280,32 260,45 Q240,58 220,42
              Q180,18 140,48 Q120,62 100,48 Q80,32 60,50
              Q40,65 20,50 Q10,42 0,50 Z"
            fill="#F4E6CE"
          />
        </svg>
      </div>
    </section>
  )
}

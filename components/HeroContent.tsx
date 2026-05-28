'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HeroBackground } from '@/components/HeroBackground'
// import { GLOVO_URL } from '@/lib/data' // re-enable when Glovo goes live

// ─────────────────────────────────────────────────────────────────────────────
// CLOTHESLINE LAUNDRY — 5 quality SVG items
// ─────────────────────────────────────────────────────────────────────────────

function Clothespin() {
  return (
    <svg width="12" height="22" viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg">
      {/* body */}
      <rect x="1.5" y="0" width="9" height="12" rx="2.5" fill="#7a5c1e" />
      {/* spring slot */}
      <rect x="3.5" y="5.5" width="5" height="2.5" rx="1" fill="#3e2c0c" />
      {/* left jaw */}
      <path d="M 0.5 12 Q 0 15 0.5 22 Q 2 23.5 3.5 22 L 5 12 Z" fill="#9a7225" />
      {/* right jaw */}
      <path d="M 11.5 12 Q 12 15 11.5 22 Q 10 23.5 8.5 22 L 7 12 Z" fill="#9a7225" />
      {/* hinge highlight */}
      <line x1="1.5" y1="12" x2="10.5" y2="12" stroke="rgba(255,220,100,0.25)" strokeWidth="1" />
    </svg>
  )
}

// ── GRANDMA BLOOMERS ──────────────────────────────────────────────────────────
function Bloomers() {
  return (
    <svg width="92" height="80" viewBox="0 0 92 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bl-g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#000" stopOpacity="0.11" />
          <stop offset="28%"  stopColor="#000" stopOpacity="0.02" />
          <stop offset="72%"  stopColor="#000" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.13" />
        </linearGradient>
      </defs>

      {/* waistband */}
      <rect x="3" y="0" width="86" height="12" rx="5" fill="#F4E6CE" />
      <line x1="3"  y1="4"  x2="89" y2="4"  stroke="rgba(0,0,0,0.13)" strokeWidth="0.9" strokeDasharray="7 3" />
      <line x1="3"  y1="7"  x2="89" y2="7"  stroke="rgba(0,0,0,0.13)" strokeWidth="0.9" strokeDasharray="7 3" />
      <line x1="3"  y1="10" x2="89" y2="10" stroke="rgba(0,0,0,0.08)" strokeWidth="0.6" />

      {/* body */}
      <path
        d="M 6 11
           C 3 29, 1 47, 6 63
           Q 9 74 19 77
           Q 28 79 34 68
           C 38 58 40 47 46 41
           C 52 47 54 58 58 68
           Q 64 79 73 77
           Q 83 74 86 63
           C 91 47 89 29 86 11 Z"
        fill="#F4E6CE"
      />
      {/* side shading */}
      <path
        d="M 6 11
           C 3 29, 1 47, 6 63
           Q 9 74 19 77
           Q 28 79 34 68
           C 38 58 40 47 46 41
           C 52 47 54 58 58 68
           Q 64 79 73 77
           Q 83 74 86 63
           C 91 47 89 29 86 11 Z"
        fill="url(#bl-g)"
      />

      {/* left leg lace */}
      <path
        d="M 6 62 Q 9 69 13 62 Q 17 69 21 62 Q 25 69 29 65 Q 32 60 34 68"
        fill="none" stroke="rgba(0,0,0,0.20)" strokeWidth="1.6" strokeDasharray="2.8 1.6"
      />
      {/* right leg lace */}
      <path
        d="M 86 62 Q 83 69 79 62 Q 75 69 71 62 Q 67 69 63 65 Q 60 60 58 68"
        fill="none" stroke="rgba(0,0,0,0.20)" strokeWidth="1.6" strokeDasharray="2.8 1.6"
      />

      {/* fabric fold lines */}
      <path d="M 20 18 Q 19 38 18 58" fill="none" stroke="rgba(0,0,0,0.055)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 72 18 Q 73 38 74 58" fill="none" stroke="rgba(0,0,0,0.055)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 46 22 Q 45 31 46 41"  fill="none" stroke="rgba(0,0,0,0.04)"  strokeWidth="1"   strokeLinecap="round" />

      {/* outline */}
      <path
        d="M 6 11
           C 3 29, 1 47, 6 63
           Q 9 74 19 77
           Q 28 79 34 68
           C 38 58 40 47 46 41
           C 52 47 54 58 58 68
           Q 64 79 73 77
           Q 83 74 86 63
           C 91 47 89 29 86 11 Z"
        fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1.1"
      />
    </svg>
  )
}

// ── BRA ───────────────────────────────────────────────────────────────────────
function Bra() {
  return (
    <svg width="82" height="48" viewBox="0 0 82 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bra-g" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#000" stopOpacity="0.06" />
          <stop offset="55%"  stopColor="#000" stopOpacity="0.00" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.09" />
        </linearGradient>
      </defs>

      {/* straps (drawn first so cups sit on top) */}
      <path d="M 15 27 L 11 4"  stroke="#F4E6CE" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 15 27 L 11 4"  stroke="rgba(0,0,0,0.16)" strokeWidth="1" strokeLinecap="round" />
      <path d="M 67 27 L 71 4"  stroke="#F4E6CE" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 67 27 L 71 4"  stroke="rgba(0,0,0,0.16)" strokeWidth="1" strokeLinecap="round" />

      {/* left cup */}
      <path d="M 5 28 C 2 20, 5 7, 15 4 C 26 1, 36 11, 39 27 Z"
        fill="#F4E6CE" stroke="rgba(0,0,0,0.16)" strokeWidth="1" />
      {/* right cup */}
      <path d="M 77 28 C 80 20, 77 7, 67 4 C 56 1, 46 11, 43 27 Z"
        fill="#F4E6CE" stroke="rgba(0,0,0,0.16)" strokeWidth="1" />
      {/* shading */}
      <path d="M 5 28 C 2 20, 5 7, 15 4 C 26 1, 36 11, 39 27 Z" fill="url(#bra-g)" />
      <path d="M 77 28 C 80 20, 77 7, 67 4 C 56 1, 46 11, 43 27 Z" fill="url(#bra-g)" />

      {/* underwire */}
      <path d="M 5 28 Q 20 33 39 27" fill="none" stroke="rgba(0,0,0,0.11)" strokeWidth="0.9" />
      <path d="M 77 28 Q 62 33 43 27" fill="none" stroke="rgba(0,0,0,0.11)" strokeWidth="0.9" />

      {/* cup seam detail */}
      <path d="M 12 20 Q 22 15 31 20" fill="none" stroke="rgba(0,0,0,0.09)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M 70 20 Q 60 15 51 20" fill="none" stroke="rgba(0,0,0,0.09)" strokeWidth="0.9" strokeLinecap="round" />

      {/* band */}
      <rect x="3" y="28" width="76" height="8" rx="4" fill="#F4E6CE" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      <line x1="3" y1="32" x2="79" y2="32" stroke="rgba(0,0,0,0.09)" strokeWidth="0.8" strokeDasharray="5 2.5" />

      {/* center clasp */}
      <rect x="37" y="24" width="8" height="12" rx="2.5" fill="#DDD0B6" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" />
      <circle cx="41" cy="30" r="1.8" fill="rgba(0,0,0,0.18)" />
      <line x1="41" y1="26" x2="41" y2="36" stroke="rgba(0,0,0,0.12)" strokeWidth="0.7" />
    </svg>
  )
}

// ── CANOTTIERA (Italian undershirt) ──────────────────────────────────────────
function Canottiera() {
  return (
    <svg width="62" height="86" viewBox="0 0 62 86" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="can-g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#000" stopOpacity="0.10" />
          <stop offset="22%"  stopColor="#000" stopOpacity="0.01" />
          <stop offset="78%"  stopColor="#000" stopOpacity="0.01" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* body */}
      <path
        d="M 12 11 L 9 86 L 53 86 L 50 11
           Q 45 5 39 4 C 37 11, 33 14 31 14 C 29 14, 25 11, 23 4
           Q 17 5 12 11 Z"
        fill="#FFFBF2"
      />
      <path
        d="M 12 11 L 9 86 L 53 86 L 50 11
           Q 45 5 39 4 C 37 11, 33 14 31 14 C 29 14, 25 11, 23 4
           Q 17 5 12 11 Z"
        fill="url(#can-g)"
      />

      {/* left strap */}
      <path d="M 12 11 Q 14 2 23 4" fill="none" stroke="#FFFBF2" strokeWidth="7" strokeLinecap="round" />
      <path d="M 12 11 Q 14 2 23 4" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeLinecap="round" />
      {/* right strap */}
      <path d="M 50 11 Q 48 2 39 4" fill="none" stroke="#FFFBF2" strokeWidth="7" strokeLinecap="round" />
      <path d="M 50 11 Q 48 2 39 4" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeLinecap="round" />
      {/* neckline */}
      <path d="M 23 4 C 26 13 29 15 31 15 C 33 15 36 13 39 4"
        fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeLinecap="round" />

      {/* subtle ribbing */}
      {[20, 27, 34, 41, 48, 55, 62, 69, 76].map(y => (
        <line key={y} x1={9 + (y - 11) * 0.04} y1={y} x2={53 - (y - 11) * 0.04} y2={y}
          stroke="rgba(0,0,0,0.038)" strokeWidth="0.9" />
      ))}

      {/* side seams */}
      <path d="M 12 11 L 9 86"   fill="none" stroke="rgba(0,0,0,0.09)" strokeWidth="0.8" />
      <path d="M 50 11 L 53 86"  fill="none" stroke="rgba(0,0,0,0.09)" strokeWidth="0.8" />

      {/* outline */}
      <path
        d="M 12 11 L 9 86 L 53 86 L 50 11
           Q 45 5 39 4 C 37 11, 33 14 31 14 C 29 14, 25 11, 23 4
           Q 17 5 12 11 Z"
        fill="none" stroke="rgba(0,0,0,0.16)" strokeWidth="1"
      />
    </svg>
  )
}

// ── SOCK PAIR ─────────────────────────────────────────────────────────────────
function SockPair() {
  const sock = (ox: number) => (
    <g transform={`translate(${ox}, 0)`}>
      {/* cuff */}
      <rect x="0" y="0" width="24" height="10" rx="3.5" fill="#9F1429" />
      <line x1="0" y1="3.5" x2="24" y2="3.5" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />
      <line x1="0" y1="6.5" x2="24" y2="6.5" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />
      {/* leg */}
      <rect x="0" y="9" width="24" height="38" rx="2" fill="#F4E6CE" />
      {/* heel gusset */}
      <path d="M 0 47 Q -1 59 6 64 L 18 64 Q 23 59 24 47 Z" fill="#F4E6CE" />
      {/* heel accent */}
      <path d="M 1 50 Q 0 58 6 63 L 18 63 Q 22 58 23 50" fill="#E8D5B8" />
      {/* foot */}
      <path d="M 6 64 Q -1 67 -1 76 L 26 76 Q 26 69 18 64 Z" fill="#F4E6CE" />
      {/* toe accent */}
      <path d="M -1 73 Q 1 76 13 76 Q 24 76 26 73" fill="none" stroke="#E8D5B8" strokeWidth="3" strokeLinecap="round" />
      {/* outline */}
      <path
        d="M 0 0 L 24 0 L 24 47 Q 23 59 18 64 Q 26 69 26 76 L -1 76 Q -1 67 6 64 Q 0 59 0 47 Z"
        fill="none" stroke="rgba(0,0,0,0.17)" strokeWidth="1" strokeLinejoin="round"
      />
    </g>
  )
  return (
    <svg width="58" height="76" viewBox="0 0 58 76" xmlns="http://www.w3.org/2000/svg">
      {sock(0)}
      {sock(31)}
    </svg>
  )
}

// ── PANTIES (bikini brief) ────────────────────────────────────────────────────
function Panties() {
  return (
    <svg width="66" height="50" viewBox="0 0 66 50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pan-g" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#fff" stopOpacity="0.10" />
          <stop offset="50%"  stopColor="#fff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.10" />
        </linearGradient>
      </defs>

      {/* waistband */}
      <rect x="2" y="0" width="62" height="9" rx="4.5" fill="#9F1429" />
      <line x1="2"  y1="3.5" x2="64" y2="3.5" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
      <line x1="2"  y1="6.5" x2="64" y2="6.5" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />

      {/* body */}
      <path
        d="M 4 8
           C 2 22, 1 35, 8 44
           Q 14 50 22 46
           C 27 42, 30 36 33 28
           C 36 36, 39 42, 44 46
           Q 52 50, 58 44
           C 65 35, 64 22, 62 8 Z"
        fill="#9F1429"
      />
      {/* shading */}
      <path
        d="M 4 8
           C 2 22, 1 35, 8 44
           Q 14 50 22 46
           C 27 42, 30 36 33 28
           C 36 36, 39 42, 44 46
           Q 52 50, 58 44
           C 65 35, 64 22, 62 8 Z"
        fill="url(#pan-g)"
      />

      {/* left leg seam / opening */}
      <path d="M 8 44 Q 13 51 22 46" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round" />
      {/* right leg seam */}
      <path d="M 58 44 Q 53 51 44 46" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round" />

      {/* center front panel seam */}
      <path d="M 33 14 Q 33 22 33 28" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="0.9" strokeLinecap="round" />

      {/* outline */}
      <path
        d="M 4 8
           C 2 22, 1 35, 8 44
           Q 14 50 22 46
           C 27 42, 30 36 33 28
           C 36 36, 39 42, 44 46
           Q 52 50, 58 44
           C 65 35, 64 22, 62 8 Z"
        fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1"
      />
    </svg>
  )
}

function renderLaundry(type: string) {
  if (type === 'bloomers')   return <Bloomers />
  if (type === 'bra')        return <Bra />
  if (type === 'canottiera') return <Canottiera />
  if (type === 'socks')      return <SockPair />
  if (type === 'totti') return (
    <Image
      src="/stickers/maglietta-totti.svg"
      alt=""
      width={110}
      height={128}
      unoptimized
      style={{ display: 'block', filter: 'drop-shadow(1px 4px 10px rgba(0,0,0,0.55))' }}
    />
  )
  return <Panties />
}

// desktop: false = always visible (including mobile)
// desktop: true  = hidden on mobile, shown md+
const LAUNDRY = [
  { type: 'bloomers',   x: '12%', y: 88, rot: -4, phase: 0,   dur: 9,   desktop: false },
  { type: 'bra',        x: '30%', y: 76, rot:  2, phase: 2.0, dur: 8,   desktop: true  },
  { type: 'totti',      x: '50%', y: 60, rot: -1, phase: 0.8, dur: 10,  desktop: false },
  { type: 'socks',      x: '70%', y: 38, rot:  3, phase: 3.5, dur: 7.5, desktop: true  },
  { type: 'panties',    x: '87%', y: 20, rot: -3, phase: 1.5, dur: 8.5, desktop: false },
]

// ─────────────────────────────────────────────────────────────────────────────

export function HeroContent() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ backgroundColor: '#9F1429' }}
      aria-label="Bocato di Roma — Street Food Italiano en Murcia"
    >
      <HeroBackground />
      {/* Dark overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#9F1429]/50" style={{ zIndex: 2 }} />

      {/* Ricotta — desktop: bottom left, same layer as Miguelico */}
      <div
        aria-hidden="true"
        className="hidden md:flex items-end"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '5%',
          height: '38%',
          width: 'auto',
          zIndex: 6,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/stickers/ricotta.svg"
          alt=""
          width={200}
          height={340}
          unoptimized
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom left',
            filter: 'drop-shadow(6px 0px 24px rgba(0,0,0,0.55))',
          }}
          priority
        />
      </div>

      {/* Ricotta — mobile: smaller, more central */}
      <div
        aria-hidden="true"
        className="flex md:hidden items-end"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '4%',
          height: '24%',
          width: 'auto',
          zIndex: 6,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/stickers/ricotta.svg"
          alt=""
          width={160}
          height={260}
          unoptimized
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom left',
            filter: 'drop-shadow(4px 0px 16px rgba(0,0,0,0.5))',
          }}
          priority
        />
      </div>

      {/* Miguelico — desktop: full height flush to right edge */}
      <div
        aria-hidden="true"
        className="hidden md:flex items-end"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: '92%',
          width: 'auto',
          zIndex: 6,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/stickers/miguelico.svg"
          alt=""
          width={480}
          height={800}
          unoptimized
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom right',
            filter: 'drop-shadow(-6px 0px 24px rgba(0,0,0,0.55))',
          }}
          priority
        />
      </div>

      {/* Miguelico — mobile: 60% height, 40% off right edge */}
      <div
        aria-hidden="true"
        className="flex md:hidden items-end"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: '60%',
          width: 'auto',
          zIndex: 6,
          pointerEvents: 'none',
          transform: 'translateX(40%)',
        }}
      >
        <Image
          src="/stickers/miguelico.svg"
          alt=""
          width={300}
          height={500}
          unoptimized
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom right',
            filter: 'drop-shadow(-4px 0px 16px rgba(0,0,0,0.5))',
          }}
          priority
        />
      </div>

      {/* Main content */}
      <div className="relative text-center max-w-2xl w-full mt-16 md:mt-0 pb-20 md:pb-0" style={{ zIndex: 10 }}>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 mb-2 md:mt-0 md:mb-8"
        >
          <Image
            src="/logo-bocato-di-roma-yellow.svg"
            alt="Bocato di Roma"
            width={300}
            height={300}
            priority
            className="mx-auto block md:hidden"
            style={{ filter: 'drop-shadow(0 8px 48px rgba(0,0,0,0.65))' }}
          />
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

        {/* Tagline sticker — below logo */}
        <motion.div
          initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, type: 'spring', bounce: 0.4 }}
          className="inline-block bg-[#361E1E] px-4 py-1.5 mb-9 md:mb-6 md:px-6 md:py-2"
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
          className="text-white/80 text-sm md:text-lg uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold mb-8 md:mb-8 px-2"
        >
          De las calles del Trastevere a Murcia
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
        </motion.div>
      </div>

      {/* ── CLOTHESLINE — Italian neighbourhood, top of hero ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 28,
          left: 0,
          right: 0,
          height: 320,
          zIndex: 8,
          pointerEvents: 'none',
          overflow: 'visible',
        }}
      >
        {/* Rope */}
        <svg
          viewBox="0 0 1400 110"
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 110, overflow: 'visible' }}
        >
          <defs>
            <filter id="rope-shadow" x="-5%" y="-80%" width="110%" height="350%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>
          <path
            d="M-10,95 C200,103 450,84 700,62 C950,40 1180,18 1410,8"
            stroke="#4A2D0E"
            strokeWidth="2.8"
            fill="none"
            filter="url(#rope-shadow)"
            strokeLinecap="round"
          />
        </svg>

        {/* Laundry items */}
        {LAUNDRY.map((item, i) => (
          <div
            key={i}
            className={item.desktop ? 'hidden md:block' : ''}
            style={{ position: 'absolute', top: item.y, left: item.x, transform: 'translateX(-50%)' }}
          >
            <motion.div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transformOrigin: 'top center',
                opacity: 0.92,
              }}
              animate={{
                rotate: [item.rot - 2.5, item.rot + 2.5, item.rot - 1.5, item.rot + 1, item.rot - 2.5],
              }}
              transition={{
                duration: item.dur,
                delay: item.phase,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              <Clothespin />
              <div style={{ marginTop: 3, filter: 'drop-shadow(1px 4px 10px rgba(0,0,0,0.55))' }}>
                {renderLaundry(item.type)}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  )
}

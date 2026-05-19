'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Each floating element has: position (%), size, rotation, animation phase
const FLOAT_ELEMENTS = [
  // Food photo stickers
  { type: 'photo', src: 'unnamed.webp',        x: 5,   y: 10,  w: 160, rot: -8,  phase: 0,    dur: 8  },
  { type: 'photo', src: 'unnamed (1).webp',    x: 78,  y: 8,   w: 140, rot: 6,   phase: 1.5,  dur: 9  },
  { type: 'photo', src: 'unnamed (2).webp',    x: 62,  y: 55,  w: 130, rot: -4,  phase: 2.5,  dur: 7  },
  { type: 'photo', src: 'unnamed (3).webp',    x: 2,   y: 52,  w: 120, rot: 5,   phase: 3,    dur: 10 },
  { type: 'photo', src: '2025-11-05.webp',     x: 82,  y: 60,  w: 150, rot: -7,  phase: 0.8,  dur: 8  },
  { type: 'photo', src: 'unnamed (4).webp',    x: 40,  y: 70,  w: 110, rot: 9,   phase: 2,    dur: 11 },
  { type: 'photo', src: '2025-12-14.webp',     x: 20,  y: 68,  w: 125, rot: -3,  phase: 4,    dur: 9  },
  // Brand poster stickers (paste-up style)
  { type: 'sticker', src: '3.png',             x: 88,  y: 5,   w: 80,  rot: 8,   phase: 0.3,  dur: 11 },
  { type: 'sticker', src: '5.png',             x: -2,  y: 60,  w: 75,  rot: -12, phase: 2.8,  dur: 9  },
  { type: 'sticker', src: '6.png',             x: 68,  y: 70,  w: 85,  rot: 5,   phase: 1.4,  dur: 10 },
  { type: 'sticker', src: '1.png',             x: 46,  y: 3,   w: 72,  rot: -7,  phase: 3.2,  dur: 12 },
  // Badge/stamp SVG stickers
  { type: 'badge', label: 'EST.\n2025',        x: 88,  y: 28,  w: 90,  rot: 12,  phase: 1,    dur: 12 },
  { type: 'badge', label: 'NAPOLI',            x: 50,  y: 4,   w: 80,  rot: -6,  phase: 2.2,  dur: 10 },
  { type: 'badge', label: 'MURCIA',            x: 14,  y: 82,  w: 70,  rot: 8,   phase: 0.5,  dur: 9  },
  // Text stickers
  { type: 'text',  label: 'GOD SAVES\nPIZZA', x: 72,  y: 78,  w: 100, rot: -11, phase: 3.5,  dur: 8  },
  { type: 'text',  label: 'VENI VIDI\nY COMI', x: 0,  y: 30,  w: 110, rot: 6,   phase: 1.2,  dur: 11 },
  // Paint splash decorations
  { type: 'splash', x: 55,  y: 20,  w: 120, rot: 0,   phase: 0,    dur: 15 },
  { type: 'splash', x: 30,  y: 85,  w: 90,  rot: 45,  phase: 2,    dur: 13 },
] as const

type FloatElement = (typeof FLOAT_ELEMENTS)[number]

// Floating animation: each element bobs up/down with slight rotation, looping forever
function FloatAnim({ phase, duration, children }: { phase: number; duration: number; children: React.ReactNode }) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0, -6, 0],
        rotate: [0, 1, 0, -1, 0],
      }}
      transition={{
        duration,
        delay: phase,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

// A polaroid photo sticker
function PhotoSticker({ src, width, rotation }: { src: string; width: number; rotation: number }) {
  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
        background: 'white',
        padding: '6px 6px 22px 6px',
        boxShadow: '3px 4px 16px rgba(0,0,0,0.45)',
        width,
        opacity: 0.82,
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
        <Image src={`/images/${src}`} alt="Bocato di Roma" fill style={{ objectFit: 'cover' }} sizes="160px" />
      </div>
    </div>
  )
}

// Circular stamp/seal badge
function BadgeSticker({ label, width, rotation }: { label: string; width: number; rotation: number }) {
  const lines = label.split('\n')
  return (
    <div style={{ transform: `rotate(${rotation}deg)`, width, height: width, opacity: 0.75 }}>
      <svg viewBox="0 0 100 100" width={width} height={width} xmlns="http://www.w3.org/2000/svg">
        {/* Outer circle with dashed border */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="#FEB428" strokeWidth="2.5" strokeDasharray="4 3" />
        {/* Inner circle */}
        <circle cx="50" cy="50" r="38" fill="#9F1429" stroke="#FEB428" strokeWidth="1.5" />
        {/* Stars at top */}
        <text x="50" y="22" textAnchor="middle" fill="#FEB428" fontSize="8" fontWeight="bold">★ ★ ★</text>
        {/* Main text */}
        {lines.map((line, i) => (
          <text key={i} x="50" y={lines.length === 1 ? 56 : 48 + i * 14}
            textAnchor="middle" fill="#FEB428" fontSize={lines.length === 1 ? 16 : 14}
            fontWeight="900" fontFamily="sans-serif" letterSpacing="1"
          >{line}</text>
        ))}
        {/* Bottom text */}
        <text x="50" y="80" textAnchor="middle" fill="#FEB428" fontSize="7" fontFamily="sans-serif" letterSpacing="2">MURCIA</text>
      </svg>
    </div>
  )
}

// Sticker label (rectangular, like a price tag or sticker)
function TextSticker({ label, width, rotation }: { label: string; width: number; rotation: number }) {
  const lines = label.split('\n')
  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
        background: '#FEB428',
        border: '2px solid #361E1E',
        padding: '6px 10px',
        width,
        opacity: 0.8,
        boxShadow: '2px 3px 10px rgba(0,0,0,0.4)',
      }}
    >
      {lines.map((line, i) => (
        <div key={i} style={{
          color: '#361E1E',
          fontSize: 11,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          lineHeight: 1.2,
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}>{line}</div>
      ))}
    </div>
  )
}

// Brand poster sticker (paste-up style)
function StickerPNG({ src, width, rotation }: { src: string; width: number; rotation: number }) {
  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
        width,
        opacity: 0.78,
        boxShadow: '2px 4px 18px rgba(0,0,0,0.5)',
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
        <Image src={`/stickers/${src}`} alt="Bocato di Roma sticker" fill style={{ objectFit: 'cover' }} sizes="100px" />
      </div>
    </div>
  )
}

// Paint splash SVG
function PaintSplash({ width, rotation }: { width: number; rotation: number }) {
  return (
    <div style={{ transform: `rotate(${rotation}deg)`, opacity: 0.25, width }}>
      <svg viewBox="0 0 120 120" width={width} height={width} xmlns="http://www.w3.org/2000/svg">
        <path d="M60 10 C40 5, 15 25, 20 50 C25 75, 50 90, 60 110 C70 90, 95 75, 100 50 C105 25, 80 5, 60 10Z" fill="#FEB428" />
        <circle cx="35" cy="35" r="12" fill="#FEB428" />
        <circle cx="85" cy="40" r="8" fill="#FEB428" />
        <circle cx="45" cy="85" r="10" fill="#FEB428" />
        <ellipse cx="70" cy="75" rx="7" ry="12" fill="#FEB428" transform="rotate(-20 70 75)" />
      </svg>
    </div>
  )
}

function renderElement(el: FloatElement) {
  if (el.type === 'photo') {
    return <PhotoSticker src={el.src} width={el.w} rotation={el.rot} />
  }
  if (el.type === 'sticker') {
    return <StickerPNG src={el.src} width={el.w} rotation={el.rot} />
  }
  if (el.type === 'badge') {
    return <BadgeSticker label={el.label} width={el.w} rotation={el.rot} />
  }
  if (el.type === 'text') {
    return <TextSticker label={el.label} width={el.w} rotation={el.rot} />
  }
  // splash
  return <PaintSplash width={el.w} rotation={el.rot} />
}

// Indices of elements that cluster at the bottom-centre on small screens
const MOBILE_HIDE_INDICES = new Set([5, 6, 9, 13, 14, 17])

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true" style={{ zIndex: 1 }}>
      {FLOAT_ELEMENTS.map((el, i) => (
        <div
          key={i}
          className={`absolute${MOBILE_HIDE_INDICES.has(i) ? ' hidden md:block' : ''}`}
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
          }}
        >
          <FloatAnim phase={el.phase} duration={el.dur}>
            {renderElement(el)}
          </FloatAnim>
        </div>
      ))}
    </div>
  )
}

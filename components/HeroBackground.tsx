import React from 'react'
import Image from 'next/image'

// ─────────────────────────────────────────────────────────────────────────────
// POSTER WALL — large-format panels wheat-pasted to the wall (static, no float)
// ─────────────────────────────────────────────────────────────────────────────
interface PosterPanel {
  src: string
  posStyle: React.CSSProperties
  overlay: string
  label?: { lines: string[]; size?: string; rotation?: string }
  tape?: 'top' | 'left' | 'bottom'
  mobileHide?: boolean
}

const POSTER_PANELS: PosterPanel[] = [
  // ── Left — tall, deep-red tinted, with brand label at bottom
  {
    src: '/images/unnamed (6).webp',
    posStyle: { left: '-4%', top: '-8%', width: '47%', height: '92%', transform: 'rotate(-2.5deg)', zIndex: 2 },
    overlay: 'rgba(159,20,41,0.14)',
    label: { lines: ['BOCATO', 'DI ROMA'], size: 'clamp(22px,3.5vw,44px)', rotation: '0deg' },
    tape: 'top',
    mobileHide: false,
  },
  // ── Center — amber-tinted (desktop only)
  {
    src: '/images/unnamed (5).webp',
    posStyle: { left: '36%', top: '-14%', width: '35%', height: '82%', transform: 'rotate(1.8deg)', zIndex: 1 },
    overlay: 'rgba(254,180,40,0.18)',
    tape: 'top',
    mobileHide: true,
  },
  // ── Right — dark-maroon tinted, ghost "AUTENTICO" watermark
  {
    src: '/images/unnamed (2).webp',
    posStyle: { right: '-3%', top: '-4%', width: '38%', height: '80%', transform: 'rotate(2.8deg)', zIndex: 2 },
    overlay: 'rgba(54,30,30,0.32)',
    label: { lines: ['AUTENTICO'], size: 'clamp(28px,6vw,72px)', rotation: '-8deg' },
    tape: 'left',
    mobileHide: false,
  },
]

// Masking-tape strip on each poster
function Tape({ position }: { position: 'top' | 'left' | 'bottom' }) {
  const base: React.CSSProperties = {
    position: 'absolute',
    width: 62,
    height: 20,
    background: 'rgba(254,180,40,0.30)',
    backdropFilter: 'blur(2px)',
    clipPath: 'polygon(4% 0%, 96% 1%, 100% 50%, 96% 100%, 4% 100%, 0% 50%)',
    zIndex: 5,
  }
  const pos: React.CSSProperties =
    position === 'top'
      ? { top: -9, left: '50%', transform: 'translateX(-50%) rotate(-0.5deg)' }
      : position === 'left'
      ? { top: 22, left: -9, transform: 'rotate(90deg)' }
      : { bottom: -9, left: '50%', transform: 'translateX(-50%) rotate(0.5deg)' }
  return <div style={{ ...base, ...pos }} />
}

// ─────────────────────────────────────────────────────────────────────────────
// BRAND STICKER FLOATERS — kept for personality (badges, text, paste-ups)
// ─────────────────────────────────────────────────────────────────────────────
type StickerEl =
  | { type: 'badge';   label: string; x: string; y: string; w: number; rot: number; phase: number; dur: number}
  | { type: 'text';    label: string; x: string; y: string; w: number; rot: number; phase: number; dur: number}
  | { type: 'sticker'; src: string;   x: string; y: string; w: number; rot: number; phase: number; dur: number}
  | { type: 'splash';                 x: string; y: string; w: number; rot: number; phase: number; dur: number}

const STICKERS: StickerEl[] = [
  { type: 'badge',   label: 'EST.\n2025',         x: '88%', y: '28%', w: 164, rot:  12, phase: 1,   dur: 12 },
  { type: 'badge',   label: 'ROMA',               x: '50%', y: '4%',  w: 141, rot:  -6, phase: 2.2, dur: 10 },
  { type: 'text',    label: 'GOD SAVES\nBOCATO',  x: '72%', y: '76%', w: 200, rot: -11, phase: 3.5, dur:  8 },
  { type: 'text',    label: 'VENI VIDI\nY COMÍ',  x:  '1%', y: '30%', w: 200, rot:   6, phase: 1.2, dur: 11 },
  { type: 'sticker', src: '3.png',                 x: '88%', y:  '5%', w: 146, rot:   8, phase: 0.3, dur: 11 },
  { type: 'sticker', src: '1.png',                 x: '46%', y:  '3%', w: 132, rot:  -7, phase: 3.2, dur: 12 },
  { type: 'splash',                                x: '55%', y: '20%', w: 218, rot:   0, phase:   0, dur: 15 },
]

const MOBILE_HIDE_STICKERS = new Set([1, 2, 5, 6])


function BadgeSticker({ label, width, rotation }: { label: string; width: number; rotation: number }) {
  const lines = label.split('\n')
  return (
    <div style={{ transform: `rotate(${rotation}deg)`, width, height: width, opacity: 0.95 }}>
      <svg viewBox="0 0 100 100" width={width} height={width} xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="none" stroke="#FEB428" strokeWidth="2.5" strokeDasharray="4 3" />
        <circle cx="50" cy="50" r="38" fill="#9F1429" stroke="#FEB428" strokeWidth="1.5" />
        <text x="50" y="22" textAnchor="middle" fill="#FEB428" fontSize="8" fontWeight="bold">★ ★ ★</text>
        {lines.map((line, i) => (
          <text key={i} x="50" y={lines.length === 1 ? 56 : 48 + i * 14}
            textAnchor="middle" fill="#FEB428" fontSize={lines.length === 1 ? 16 : 14}
            fontWeight="900" fontFamily="sans-serif" letterSpacing="1"
          >{line}</text>
        ))}
        <text x="50" y="80" textAnchor="middle" fill="#FEB428" fontSize="7" fontFamily="sans-serif" letterSpacing="2">MURCIA</text>
      </svg>
    </div>
  )
}

function TextSticker({ label, width, rotation }: { label: string; width: number; rotation: number }) {
  const lines = label.split('\n')
  return (
    <div style={{
      transform: `rotate(${rotation}deg)`,
      background: '#FEB428', border: '2px solid #361E1E',
      padding: '6px 10px', width, opacity: 1,
      boxShadow: '2px 3px 10px rgba(0,0,0,0.45)',
    }}>
      {lines.map((line, i) => (
        <div key={i} style={{
          color: '#361E1E', fontSize: 11, fontWeight: 900,
          textTransform: 'uppercase', letterSpacing: '0.1em',
          lineHeight: 1.2, textAlign: 'center', fontFamily: 'sans-serif',
        }}>{line}</div>
      ))}
    </div>
  )
}

function StickerPNG({ src, width, rotation }: { src: string; width: number; rotation: number }) {
  return (
    <div style={{ transform: `rotate(${rotation}deg)`, width, opacity: 1, boxShadow: '2px 4px 18px rgba(0,0,0,0.5)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/stickers/${src}`} alt="" width={width} style={{ display: 'block', width: '100%', height: 'auto' }} />
    </div>
  )
}

function PaintSplash({ width, rotation }: { width: number; rotation: number }) {
  return (
    <div style={{ transform: `rotate(${rotation}deg)`, opacity: 0.45, width }}>
      <svg viewBox="0 0 120 120" width={width} height={width} xmlns="http://www.w3.org/2000/svg">
        <path d="M60 10 C40 5,15 25,20 50 C25 75,50 90,60 110 C70 90,95 75,100 50 C105 25,80 5,60 10Z" fill="#FEB428" />
        <circle cx="35" cy="35" r="12" fill="#FEB428" />
        <circle cx="85" cy="40" r="8"  fill="#FEB428" />
        <circle cx="45" cy="85" r="10" fill="#FEB428" />
        <ellipse cx="70" cy="75" rx="7" ry="12" fill="#FEB428" transform="rotate(-20 70 75)" />
      </svg>
    </div>
  )
}

function renderSticker(el: StickerEl) {
  if (el.type === 'badge')   return <BadgeSticker  label={el.label} width={el.w} rotation={el.rot} />
  if (el.type === 'text')    return <TextSticker   label={el.label} width={el.w} rotation={el.rot} />
  if (el.type === 'sticker') return <StickerPNG    src={el.src}     width={el.w} rotation={el.rot} />
  return                            <PaintSplash                     width={el.w} rotation={el.rot} />
}

// ─────────────────────────────────────────────────────────────────────────────
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true" style={{ zIndex: 1 }}>

      {/* ── Base: the actual Bocato di Roma vintage Italian poster wall photo ── */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {/* Mobile */}
        <Image
          src="/poster-wall-mobile.jpg"
          alt=""
          fill
          className="object-cover object-center md:hidden"
          sizes="100vw"
          loading="lazy"
        />
        {/* Desktop */}
        <Image
          src="/poster-wall.jpg"
          alt=""
          fill
          className="object-cover object-top hidden md:block"
          sizes="100vw"
          loading="lazy"
        />
      </div>

      {/* ── Large-format poster panels pasted over the wall ── */}
      {POSTER_PANELS.map((panel, i) => (
        <div
          key={i}
          className={panel.mobileHide ? 'hidden md:block' : ''}
          style={{ position: 'absolute', overflow: 'hidden', ...panel.posStyle,
            boxShadow: '6px 8px 28px rgba(0,0,0,0.65), 2px 3px 8px rgba(0,0,0,0.4)',
          }}
        >
          {/* Photo */}
          <Image
            src={panel.src}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            sizes="50vw"
          />
          {/* Colour-grade overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: panel.overlay,
            mixBlendMode: 'multiply',
          }} />
          {/* Grain texture */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E\")",
            opacity: 0.08,
            pointerEvents: 'none',
          }} />
          {/* Brand label */}
          {panel.label && (
            <div style={{
              position: 'absolute',
              ...(panel.label.lines.length > 1 && panel.label.rotation === '0deg'
                ? { bottom: 0, left: 0, right: 0, padding: '1.25rem 1rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }
                : { top: 10, left: 10, right: 10 }),
              zIndex: 4,
            }}>
              {panel.label.lines.map((line, li) => (
                <div key={li} style={{
                  fontFamily: 'sans-serif',
                  color: panel.label!.lines.length > 1 ? '#FEB428' : 'rgba(254,180,40,0.22)',
                  fontSize: panel.label!.size ?? '2rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  transform: `rotate(${panel.label!.rotation ?? '0deg'})`,
                }}>{line}</div>
              ))}
            </div>
          )}
          {/* Tape strip */}
          {panel.tape && <Tape position={panel.tape} />}
        </div>
      ))}

      {/* ── Brand stickers (static) ── */}
      {STICKERS.map((el, i) => (
        <div
          key={i}
          className={`absolute${MOBILE_HIDE_STICKERS.has(i) ? ' hidden md:block' : ''}`}
          style={{ left: el.x, top: el.y, zIndex: 8 }}
        >
          {renderSticker(el)}
        </div>
      ))}

      {/* ── Global readability darkening (gradient, not flat) ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 9,
        background: 'linear-gradient(158deg, rgba(8,3,1,0.32) 0%, rgba(8,3,1,0.14) 38%, rgba(8,3,1,0.20) 62%, rgba(8,3,1,0.40) 100%)',
      }} />
    </div>
  )
}

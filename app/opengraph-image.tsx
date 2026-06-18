import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Bocato di Roma — Bocatos Romanos en Murcia'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: '#9F1429',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Decorative stripe top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 12,
          background: 'repeating-linear-gradient(90deg, #9F1429 0px, #9F1429 12px, white 12px, white 24px)'
        }} />
        {/* Decorative stripe bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 12,
          background: 'repeating-linear-gradient(90deg, #9F1429 0px, #9F1429 12px, white 12px, white 24px)'
        }} />

        {/* Stencil corners */}
        <div style={{ position: 'absolute', top: 32, left: 32, width: 60, height: 60, borderTop: '4px solid #FEB428', borderLeft: '4px solid #FEB428' }} />
        <div style={{ position: 'absolute', top: 32, right: 32, width: 60, height: 60, borderTop: '4px solid #FEB428', borderRight: '4px solid #FEB428' }} />
        <div style={{ position: 'absolute', bottom: 32, left: 32, width: 60, height: 60, borderBottom: '4px solid #FEB428', borderLeft: '4px solid #FEB428' }} />
        <div style={{ position: 'absolute', bottom: 32, right: 32, width: 60, height: 60, borderBottom: '4px solid #FEB428', borderRight: '4px solid #FEB428' }} />

        {/* Main title */}
        <div style={{ color: '#FEB428', fontSize: 96, fontWeight: 700, letterSpacing: '-2px', textTransform: 'uppercase', lineHeight: 1, marginBottom: 16, textShadow: '4px 4px 0 rgba(0,0,0,0.4)' }}>
          BOCATO DI ROMA
        </div>

        {/* Subtitle */}
        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 28, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 32 }}>
          Street Food Romano · Murcia
        </div>

        {/* Diamond divider */}
        <div style={{ color: '#FEB428', fontSize: 20, letterSpacing: '1em' }}>◆ ◆ ◆</div>

        {/* Address */}
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 20, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 24 }}>
          Gran Vía Alfonso X · 30008 Murcia
        </div>
      </div>
    ),
    { ...size }
  )
}

import React from 'react'

const TICKER_ITEMS = [
  'VENI VIDI Y COMÍ',
  '◆',
  'GOD SAVES PIZZA',
  '◆',
  'QUE RICOTTA MAMI',
  '◆',
  'ACHO CHE BELLO',
  '◆',
  'MASA FERMENTADA 72H',
  '◆',
  'DIME DE QUÉ PASTA ESTÁS HECHO',
  '◆',
  'BOCATO DI ROMA · MURCIA',
  '◆',
]

export function Marquee({ bgColor = '#361E1E', textColor = '#FEB428' }: { bgColor?: string; textColor?: string }) {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS] // duplicate for seamless loop
  return (
    <div
      className="overflow-hidden py-2.5 select-none"
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <div
        className="flex gap-6 whitespace-nowrap"
        style={{
          animation: 'marquee 30s linear infinite',
          width: 'max-content',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: textColor }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

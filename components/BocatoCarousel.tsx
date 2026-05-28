'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  { name: 'Imperfecto',  src: '/images/imperfecto.png'  },
  { name: 'Carbonara',   src: '/images/carbonara.png'   },
  { name: 'Tartufato',   src: '/images/tartufato.png'   },
  { name: 'Cicciolina',  src: '/images/cicciolina.png'  },
  { name: 'Polpette',    src: '/images/polpette.png'    },
  { name: 'Diavolo',     src: '/images/diavolo.png'     },
  { name: 'Capitano',    src: '/images/capitano.png'    },
  { name: 'Sorrento',    src: '/images/sorrento.png'    },
  { name: 'Emperifollá', src: '/images/emperifolla.png' },
]

export function BocatoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function scrollTo(index: number) {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index] as HTMLElement
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    setActive(index)
  }

  function prev() { scrollTo(Math.max(0, active - 1)) }
  function next() { scrollTo(Math.min(SLIDES.length - 1, active + 1)) }

  return (
    <div className="bg-[#361E1E] py-10 px-0 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-6 px-6">
        <p className="text-[#FEB428]/60 uppercase tracking-[0.3em] text-xs font-bold mb-1">
          I Nostri Bocatos
        </p>
        <div className="ornament-divider" />
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-2 scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={(e) => {
          const track = e.currentTarget
          const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth + 16
          setActive(Math.round(track.scrollLeft / cardWidth))
        }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.name}
            className="snap-center flex-shrink-0"
            style={{ width: 'clamp(200px, 60vw, 280px)' }}
          >
            <div
              className="relative overflow-hidden cursor-pointer"
              style={{
                aspectRatio: '3/4',
                boxShadow: '4px 6px 20px rgba(0,0,0,0.6)',
                transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
              }}
              onClick={() => scrollTo(i)}
            >
              <Image
                src={slide.src}
                alt={slide.name}
                fill
                className="object-cover"
                sizes="280px"
                loading="lazy"
              />
              {/* Name badge */}
              <div
                className="absolute bottom-0 left-0 right-0 py-2 px-3"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}
              >
                <p className="text-[#FEB428] font-stencil uppercase text-sm tracking-widest text-center">
                  {slide.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <div className="flex justify-center gap-4 mt-5 px-6">
        <button
          onClick={prev}
          disabled={active === 0}
          className="w-10 h-10 flex items-center justify-center border border-[#FEB428]/40 text-[#FEB428] hover:bg-[#FEB428] hover:text-[#361E1E] transition-colors disabled:opacity-25"
          aria-label="Anterior"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="transition-all"
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                background: i === active ? '#FEB428' : 'rgba(254,180,40,0.3)',
                borderRadius: 3,
              }}
              aria-label={`Ir a ${SLIDES[i].name}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={active === SLIDES.length - 1}
          className="w-10 h-10 flex items-center justify-center border border-[#FEB428]/40 text-[#FEB428] hover:bg-[#FEB428] hover:text-[#361E1E] transition-colors disabled:opacity-25"
          aria-label="Siguiente"
        >
          →
        </button>
      </div>
    </div>
  )
}

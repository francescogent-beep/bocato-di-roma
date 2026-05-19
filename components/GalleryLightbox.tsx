'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  images: string[]
  captions: string[]
  rotations: string[]
}

export function GalleryLightbox({ images, captions, rotations }: Props) {
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
      if (e.key === 'ArrowRight' && selected !== null) setSelected((selected + 1) % images.length)
      if (e.key === 'ArrowLeft' && selected !== null) setSelected((selected - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected, images.length])

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <>
      {/* Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4" style={{ columnGap: '1rem' }}>
        {images.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, y: 32, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: (index % 8) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className={`polaroid ${rotations[index % rotations.length]} break-inside-avoid mb-4 cursor-pointer`}
            style={{ display: 'inline-block', width: '100%' }}
            onClick={() => setSelected(index)}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 10, transition: { duration: 0.2 } }}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={`/images/${img}`}
                alt={`${captions[index % captions.length]} — Bocato di Roma Murcia`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#9F1429]/0 hover:bg-[#9F1429]/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 hover:opacity-100 transition-opacity">
                  <div className="absolute inset-2">
                    <span className="corner-tl" style={{ color: '#FEB428' }} />
                    <span className="corner-tr" style={{ color: '#FEB428' }} />
                    <span className="corner-bl" style={{ color: '#FEB428' }} />
                    <span className="corner-br" style={{ color: '#FEB428' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2 pb-1 text-center">
              <span className="text-[#361E1E]/70 text-xs uppercase tracking-widest font-bold">
                {captions[index % captions.length]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: 'rgba(54,30,30,0.95)' }}
            onClick={() => setSelected(null)}
          >
            {/* Stencil corners on lightbox */}
            <span className="corner-tl fixed top-8 left-8" style={{ color: '#FEB428', width: 48, height: 48 }} />
            <span className="corner-tr fixed top-8 right-8" style={{ color: '#FEB428', width: 48, height: 48 }} />
            <span className="corner-bl fixed bottom-8 left-8" style={{ color: '#FEB428', width: 48, height: 48 }} />
            <span className="corner-br fixed bottom-8 right-8" style={{ color: '#FEB428', width: 48, height: 48 }} />

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl w-full mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="polaroid" style={{ transform: 'none', maxHeight: '80vh' }}>
                <div className="relative" style={{ height: '65vh' }}>
                  <Image
                    src={`/images/${images[selected]}`}
                    alt={captions[selected % captions.length]}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="pt-3 pb-2 text-center">
                  <span className="text-[#361E1E]/70 text-sm uppercase tracking-widest font-bold">
                    {captions[selected % captions.length]}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Prev/Next */}
            <button
              className="fixed left-4 top-1/2 -translate-y-1/2 text-[#FEB428] p-3 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length) }}
              aria-label="Foto anterior"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button
              className="fixed right-4 top-1/2 -translate-y-1/2 text-[#FEB428] p-3 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length) }}
              aria-label="Foto siguiente"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            {/* Close */}
            <button
              className="fixed top-6 right-6 text-[#FEB428] hover:text-white transition-colors z-10"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Counter */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-[#FEB428]/60 text-xs uppercase tracking-widest">
              {selected + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

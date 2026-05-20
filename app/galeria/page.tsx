import type { Metadata } from 'next'
import { GalleryLightbox } from '@/components/GalleryLightbox'
import { StampSeal } from '@/components/Stickers'
import { foodImages } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Galería',
  description:
    'Imágenes de Bocato di Roma Murcia. Bocatos napoletanos artesanales, ambiente del local y nuestros ingredientes.',
  alternates: {
    canonical: 'https://bocatodiroma.com/galeria',
  },
}

const imageCaptions = [
  'Bocato Napoletano',
  'Hecho al Momento',
  'Ingredientes DOP',
  'Masa Fermentada Mínimo 72h',
  'Street Food Italiano',
  'Bocato di Roma',
  'Sabor de Italia',
  'Fresco · Artesanal',
  'Con Mucho Amor',
  'Murcia x Nápoles',
  'Bocato Perfecto',
  'God Saves Pizza',
  'Que Ricotta Mami',
  'Veni Vidi y Comí',
  'Acho che Bello',
  'Imperfecto · Perfecto',
  'El Sabor de Siempre',
]

const rotations = [
  '-rotate-[1.5deg]',
  'rotate-[1deg]',
  '-rotate-[0.5deg]',
  'rotate-[2deg]',
  '-rotate-[1deg]',
  'rotate-[0.5deg]',
  '-rotate-[1.5deg]',
  'rotate-[1.5deg]',
  '-rotate-[1deg]',
  'rotate-[0.5deg]',
  '-rotate-[2deg]',
  'rotate-[1deg]',
  '-rotate-[0.5deg]',
  'rotate-[1.5deg]',
  '-rotate-[1deg]',
  'rotate-[0.5deg]',
  '-rotate-[1.5deg]',
]

export default function GaleriaPage() {
  return (
    <>
      {/* Header */}
      <header
        className="bg-[#361E1E] py-16 px-6 text-center texture-noise relative overflow-hidden"
        aria-labelledby="galeria-title"
      >
        {/* Stamp seal — top right */}
        <div
          className="absolute top-4 right-4 z-10 hidden md:block"
          style={{ transform: 'rotate(-8deg)', color: '#FEB428' }}
          aria-hidden="true"
        >
          <StampSeal text="NUESTROS" subtext="BOCATOS" size={80} />
        </div>
        <div className="relative z-10">
          <p className="text-[#FEB428]/70 uppercase tracking-[0.4em] text-xs mb-2">
            Bocato di Roma · Murcia
          </p>
          <h1
            id="galeria-title"
            className="font-stencil text-[#FEB428] leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', textShadow: '4px 4px 0px rgba(0,0,0,0.4)' }}
          >
            GALERÍA
          </h1>
          <p className="text-white/60 uppercase tracking-widest text-sm mt-2">
            Nuestros bocatos · El local · Los ingredientes
          </p>
          <div className="ornament-divider mt-4 text-lg" />
        </div>
      </header>

      {/* Gallery with lightbox */}
      <section className="bg-[#F4E6CE] py-16 px-4 md:px-8" aria-label="Galería de fotos">
        <div className="max-w-6xl mx-auto">
          <GalleryLightbox
            images={foodImages}
            captions={imageCaptions}
            rotations={rotations}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#9F1429] py-12 px-6 text-center">
        <div className="checker-tape mb-8" />
        <h2 className="font-stencil text-[#FEB428] text-2xl md:text-3xl mb-3">
          ¿TE APETECE UNO?
        </h2>
        <p className="text-white/80 uppercase tracking-widest text-sm mb-6">
          Ven a probarlo o pídelo por Glovo
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contacto"
            className="bg-[#F4E6CE] text-[#361E1E] font-bold uppercase tracking-widest px-8 py-3 text-sm hover:bg-white transition-colors"
          >
            Cómo Llegar
          </a>
          <a
            href="https://glovoapp.com/es/es/murcia/stores/bocato-di-roma-murcia?content=menu-c.2958601997&section=bocatos-s.6285422442"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FEB428] text-[#361E1E] font-bold uppercase tracking-widest px-8 py-3 text-sm hover:bg-white transition-colors"
          >
            Pedir en Glovo
          </a>
        </div>
        <div className="checker-tape mt-8" />
      </section>
    </>
  )
}

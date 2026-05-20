import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FadeUp } from '@/components/FadeUp'
import { StaggerChildren, StaggerItem } from '@/components/StaggerChildren'
import { StencilBorder } from '@/components/StencilBorder'
import { Marquee } from '@/components/Marquee'
import { StampSeal, ItalianBadge, VintageArrow, PaintDrip } from '@/components/Stickers'
import { foodImages } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Nosotros — Bocato di Roma Murcia | La Historia Detrás del Bocato',
  description:
    'Conoce la historia de Bocato di Roma: el amor por las calles de Roma, los ingredientes DOP e IGP y el espíritu de calle que llegó al centro de Murcia.',
  alternates: {
    canonical: 'https://bocatodiroma.com/nosotros',
  },
}

const VALUES = [
  {
    icon: '🇮🇹',
    title: 'Producto Italiano Real',
    body: 'Mozzarella di bufala DOP, mortadela di Bologna IGP, tomate San Marzano DOP. No hay atajos cuando el producto es la razón de existir.',
  },
  {
    icon: '⏱️',
    title: 'Fermentación Mínimo 72 Horas',
    body: 'La masa no se puede acelerar. Mínimo 72 horas de fermentación, punto. Si no está lista, no sale. Si sale, está brutal.',
  },
  {
    icon: '🔥',
    title: 'Horno al Momento',
    body: 'Cada bocato se hornea cuando llega el pedido. No hay bocatos esperando bajo una lámpara. Caliente de verdad significa caliente de verdad.',
  },
  {
    icon: '🛵',
    title: 'Espíritu de Calle',
    body: 'Bocato di Roma no es un restaurante fino. Es una esquina de Roma en el centro de Murcia. Ven, come de pie, mancha la camisa, vuelve.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* HERO HEADER */}
      <section
        className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20"
        style={{ backgroundColor: '#9F1429' }}
        aria-label="Página Nosotros — Bocato di Roma"
      >
        {/* Large background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-stencil text-white/5 whitespace-nowrap"
            style={{ fontSize: 'clamp(6rem, 22vw, 20rem)', letterSpacing: '0.05em' }}
          >
            STORIA
          </span>
        </div>

        <div className="relative z-10 max-w-3xl">
          <div
            className="absolute top-0 right-4 hidden md:block"
            style={{ transform: 'rotate(12deg)', color: '#FEB428' }}
            aria-hidden="true"
          >
            <StampSeal text="EST." subtext="2025" size={70} />
          </div>

          <p className="text-[#FEB428] uppercase tracking-[0.4em] text-xs font-bold mb-3">
            Chi Siamo · Quiénes Somos
          </p>
          <h1
            className="font-stencil text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 7rem)', textShadow: '4px 4px 0px rgba(0,0,0,0.4)' }}
          >
            ROMA ×<br />MURCIA
          </h1>
          <div className="checker-tape mb-6 max-w-md mx-auto" />
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Una historia de bocatos, calles y productos italianos que terminó
            en el corazón de la huerta más famosa del sur.
          </p>
        </div>

        {/* Drip bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
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

      {/* MARQUEE */}
      <Marquee bgColor="#361E1E" textColor="#FEB428" />

      {/* THE STORY */}
      <FadeUp delay={0.1}>
        <section className="bg-[#F4E6CE] py-16 px-6 relative paper-spots" aria-labelledby="story-heading">
          <div className="max-w-5xl mx-auto">
            <StencilBorder color="#9F1429" className="p-6 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Images collage */}
                <div className="relative">
                  <div
                    className="absolute -top-4 -right-4 z-10 hidden md:block"
                    style={{ transform: 'rotate(8deg)', color: '#9F1429' }}
                    aria-hidden="true"
                  >
                    <ItalianBadge line1="ROMA" line2="→" line3="MURCIA" size={80} />
                  </div>

                  {/* Main photo */}
                  <div
                    className="relative h-64 md:h-80 overflow-hidden mb-4"
                    style={{ transform: 'rotate(-1.5deg)' }}
                  >
                    <Image
                      src="/images/unnamed (3).webp"
                      alt="Bocato di Roma — el local por dentro"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-2 pointer-events-none">
                      <span className="corner-tl" style={{ color: '#FEB428' }} />
                      <span className="corner-tr" style={{ color: '#FEB428' }} />
                      <span className="corner-bl" style={{ color: '#FEB428' }} />
                      <span className="corner-br" style={{ color: '#FEB428' }} />
                    </div>
                  </div>

                  {/* Second photo — smaller, offset */}
                  <div
                    className="relative h-40 md:h-48 overflow-hidden ml-8"
                    style={{ transform: 'rotate(2deg)' }}
                  >
                    <Image
                      src="/images/unnamed (5).webp"
                      alt="Ingredientes DOP de Bocato di Roma"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80vw, 40vw"
                    />
                    <div className="absolute inset-2 pointer-events-none">
                      <span className="corner-tl" style={{ color: '#9F1429' }} />
                      <span className="corner-tr" style={{ color: '#9F1429' }} />
                      <span className="corner-bl" style={{ color: '#9F1429' }} />
                      <span className="corner-br" style={{ color: '#9F1429' }} />
                    </div>
                  </div>
                </div>

                {/* Story copy */}
                <div>
                  <p className="text-[#9F1429] uppercase tracking-[0.3em] text-xs font-bold mb-2">
                    La Storia
                  </p>
                  <h2
                    id="story-heading"
                    className="font-stencil text-[#361E1E] text-3xl md:text-4xl mb-4 leading-tight"
                  >
                    DE LAS CALLES<br />DE NÁPOLES<br />A GRAN VÍA
                  </h2>
                  <div className="checker-tape mb-6" />
                  <p className="text-[#361E1E]/80 text-base leading-relaxed mb-4">
                    Todo empezó en una calle estrecha de Roma, tarde de verano, olor a pan recién horneado
                    saliendo de un tugurio del tamaño de un baño. Ahí estaba el bocato. No en un restaurante
                    con mantel y carta laminada — en la calle, con los dedos, de pie.
                  </p>
                  <p className="text-[#361E1E]/80 text-base leading-relaxed mb-4">
                    La obsesión por replicar eso fue lo que trajo Bocato di Roma a Murcia en 2025.
                    Un local pequeño, sin artificios, donde la estrella es el producto: masa fermentada
                    mínimo 72 horas, ingredientes italianos con denominación de origen, horno al momento.
                  </p>
                  <p className="text-[#361E1E]/80 text-base leading-relaxed mb-6">
                    Murcia puso la energía, la huerta y las ganas. Roma puso la receta, los productos
                    y esa actitud de que la comida buena no necesita excusas.
                  </p>
                  <div className="ornament-divider mb-4" />
                  <p className="text-[#9F1429] font-bold italic text-lg uppercase tracking-wide">
                    "Veni Vidi y Comí"
                  </p>
                </div>
              </div>
            </StencilBorder>
          </div>
          <div className="checker-tape mt-16" />
        </section>
      </FadeUp>

      {/* OUR VALUES */}
      <FadeUp delay={0.1}>
        <section
          className="bg-[#361E1E] py-16 px-6 texture-noise relative"
          aria-labelledby="values-heading"
        >
          <div className="absolute top-0 left-0 right-0 w-full opacity-20 pointer-events-none" aria-hidden="true">
            <PaintDrip color="#FEB428" className="w-full h-12" />
          </div>
          {/* Brand sticker — corner paste-up */}
          <div
            className="absolute bottom-5 right-3 z-10 hidden md:block pointer-events-none"
            style={{ transform: 'rotate(9deg)', opacity: 0.65 }}
            aria-hidden="true"
          >
            <Image src="/stickers/3.png" alt="" width={72} height={96} className="object-cover" />
          </div>

          <div className="max-w-5xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="text-center mb-12">
                <h2
                  id="values-heading"
                  className="font-stencil text-[#FEB428] text-4xl md:text-5xl mb-2"
                  style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}
                >
                  LO QUE NOS MUEVE
                </h2>
                <p className="text-white/50 uppercase tracking-widest text-xs">
                  Principios no negociables
                </p>
                <div className="ornament-divider mt-3" />
              </div>
            </FadeUp>

            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {VALUES.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="relative border border-[#FEB428]/20 p-6 hover:border-[#FEB428]/50 transition-colors">
                    <span className="corner-tl" style={{ color: '#FEB428', opacity: 0.4 }} />
                    <span className="corner-tr" style={{ color: '#FEB428', opacity: 0.4 }} />
                    <span className="corner-bl" style={{ color: '#FEB428', opacity: 0.4 }} />
                    <span className="corner-br" style={{ color: '#FEB428', opacity: 0.4 }} />
                    <div className="text-2xl mb-3" aria-hidden="true">{v.icon}</div>
                    <h3 className="text-[#FEB428] font-bold uppercase tracking-wider text-base mb-2">
                      {v.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{v.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
          <div className="checker-tape mt-16" />
        </section>
      </FadeUp>

      {/* MURCIA × ITALIA */}
      <FadeUp delay={0.1}>
        <section className="bg-[#FEB428] py-16 px-6 texture-noise relative overflow-hidden" aria-labelledby="murcia-heading">
          {/* Decoration */}
          <div
            className="absolute top-4 right-6 z-10 hidden md:block"
            style={{ transform: 'rotate(-8deg)', color: '#9F1429' }}
            aria-hidden="true"
          >
            <StampSeal text="MURCIA" subtext="STYLE" size={80} />
          </div>
          {/* Brand sticker — bottom left paste-up */}
          <div
            className="absolute bottom-3 left-2 z-10 hidden md:block pointer-events-none"
            style={{ transform: 'rotate(-11deg)', opacity: 0.6 }}
            aria-hidden="true"
          >
            <Image src="/stickers/1.png" alt="" width={65} height={87} className="object-cover" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#9F1429] uppercase tracking-[0.3em] text-xs font-bold mb-2">
                Murcia Style
              </p>
              <h2
                id="murcia-heading"
                className="font-stencil text-[#361E1E] text-3xl md:text-4xl mb-4 leading-tight"
              >
                TAMBIÉN SOMOS<br />DE AQUÍ
              </h2>
              <div className="checker-tape mb-4" />
              <p className="text-[#361E1E]/80 text-base leading-relaxed mb-4">
                El bocato es romano, pero Murcia tiene productos que dan envidia a media Italia.
                Por eso creamos la sección Murcia Style: bocatos que combinan la masa italiana con
                productos murcianos de primera.
              </p>
              <p className="text-[#361E1E]/80 text-base leading-relaxed mb-4">
                Queso de cabra El Roano, sobrasada y chorizo de Chato Murciano, melocotones de Cieza...
                Italia pone la base, Murcia pone el alma local.
              </p>
              <p className="text-[#361E1E] font-bold italic text-lg uppercase tracking-wide">
                "Separados al Nacer"
              </p>
            </div>

            <div className="relative h-72 md:h-88 overflow-hidden" style={{ transform: 'rotate(1.5deg)' }}>
              <Image
                src="/images/unnamed (6).webp"
                alt="Bocato Murcia Style — Emperifollá con productos murcianos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-2 pointer-events-none">
                <span className="corner-tl" style={{ color: '#9F1429' }} />
                <span className="corner-tr" style={{ color: '#9F1429' }} />
                <span className="corner-bl" style={{ color: '#9F1429' }} />
                <span className="corner-br" style={{ color: '#9F1429' }} />
              </div>

              {/* Arrow decoration */}
              <div
                className="absolute top-4 -left-6 hidden md:block"
                style={{ color: '#361E1E' }}
                aria-hidden="true"
              >
                <VintageArrow direction="right" size={40} />
              </div>
            </div>
          </div>
          <div className="checker-tape mt-12" />
        </section>
      </FadeUp>

      {/* PHOTO COLLAGE */}
      <FadeUp delay={0.1}>
        <section className="bg-[#9F1429] py-16 px-6 relative overflow-hidden" aria-labelledby="fotos-heading">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2
                id="fotos-heading"
                className="font-stencil text-white text-3xl md:text-4xl mb-2"
              >
                ASÍ SE VE BOCATO
              </h2>
              <p className="text-white/50 uppercase tracking-widest text-xs">
                Sin retoques · Sin estudio · Solo bocatos reales
              </p>
              <div className="ornament-divider mt-3" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {foodImages.slice(2, 10).map((img, i) => {
                const rotations = [-2, 1, -1.5, 2, -2.5, 1.5, -1, 2.5]
                return (
                  <div
                    key={img}
                    className="polaroid bg-white p-2 pb-6 shadow-xl"
                    style={{ transform: `rotate(${rotations[i]}deg)` }}
                  >
                    <div className="relative h-32 md:h-40 overflow-hidden">
                      <Image
                        src={`/images/${img}`}
                        alt={`Bocato di Roma — imagen del local ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/galeria"
                className="inline-block border-2 border-white text-white font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-white hover:text-[#9F1429] transition-colors"
              >
                Ver Galería Completa →
              </Link>
            </div>
          </div>
          <div className="checker-tape mt-12" />
        </section>
      </FadeUp>

      {/* CTA FINAL */}
      <FadeUp delay={0.1}>
        <section
          className="bg-[#F4E6CE] py-16 px-6 text-center paper-spots relative overflow-hidden"
          aria-labelledby="cta-nosotros-heading"
        >
          <div className="max-w-3xl mx-auto relative z-10">
            <h2
              id="cta-nosotros-heading"
              className="font-stencil text-[#9F1429] leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 7vw, 5rem)', textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}
            >
              QUE RICOTTA MAMI
            </h2>
            <p className="text-[#361E1E]/80 text-base md:text-lg font-bold uppercase tracking-widest mb-6">
              Gran Vía Alfonso X, 2-A · Murcia
            </p>
            <div className="checker-tape mb-6" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-block bg-[#9F1429] text-white font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-[#361E1E] transition-colors"
              >
                Ver La Carta →
              </Link>
              <Link
                href="/contacto"
                className="inline-block border-2 border-[#9F1429] text-[#9F1429] font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-[#9F1429] hover:text-white transition-colors"
              >
                Cómo Llegar →
              </Link>
            </div>
          </div>
        </section>
      </FadeUp>
    </>
  )
}

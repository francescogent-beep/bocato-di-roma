import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ReviewCard } from '@/components/ReviewCard'
import { StencilBorder } from '@/components/StencilBorder'
import { FadeUp } from '@/components/FadeUp'
import { StaggerChildren, StaggerItem } from '@/components/StaggerChildren'
import { Marquee } from '@/components/Marquee'
import { HeroContent } from '@/components/HeroContent'
import { StampSeal, ItalianBadge, VintageArrow, PaintDrip } from '@/components/Stickers'
import { bocatos, reviews, foodImages } from '@/lib/data'
import { ImageParallax } from '@/components/ImageParallax'
import { getWebSiteSchema, getFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://bocatodiroma.com',
  },
}

export default function HomePage() {
  const featuredBocatos = bocatos.slice(0, 4)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />

      <ImageParallax />

      {/* ─── 1. HERO ─────────────────────────────────────────────────────── */}
      <HeroContent />

      {/* ─── MARQUEE STRIP ───────────────────────────────────────────────── */}
      <Marquee bgColor="#361E1E" textColor="#FEB428" />

      {/* ─── 2. BOCATO DEL MES ───────────────────────────────────────────── */}
      <div className="bg-[#9F1429] py-6 md:py-8 px-6 text-center">
        <p
          className="text-[#FEB428] font-stencil uppercase text-sm md:text-base"
          style={{ letterSpacing: '0.12em', lineHeight: 1.8 }}
        >
          <span aria-hidden="true" style={{ marginRight: '0.6em' }}>✦</span>
          Pregunta por el{' '}
          <strong className="text-white" style={{ letterSpacing: '0.14em' }}>Bocato del Mes</strong>
          {' '}—{' '}cada mes un nuevo producto de un rincón distinto de Italia
          <span aria-hidden="true" style={{ marginLeft: '0.6em' }}>✦</span>
        </p>
      </div>

      {/* ─── BOCATO DEL MES — featured section ─────────────────────────── */}
      <FadeUp delay={0.1}>
        <section className="bg-[#FAF3E5] py-16 px-6 relative paper-spots overflow-hidden" aria-labelledby="bdm-heading">

          {/* Sticker background decoration — desktop */}
          <div aria-hidden="true" className="hidden md:block" style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0, overflow: 'hidden', bottom: '-70px', right: '-60px' }}>
            <img src="/stickers/3.svg" alt="" style={{ display: 'block', width: 680, opacity: 0.16, transform: 'rotate(18deg)' }} />
          </div>
          {/* Sticker background decoration — mobile */}
          <div aria-hidden="true" className="block md:hidden" style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0, overflow: 'hidden', bottom: '-20px', right: '-30px' }}>
            <img src="/stickers/3.svg" alt="" style={{ display: 'block', width: 280, opacity: 0.16, transform: 'rotate(18deg)' }} />
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* Image — manifesto only */}
              <div className="relative">
                <div data-parallax="true" className="relative h-80 md:h-[460px] overflow-hidden" style={{ transform: 'rotate(-1.5deg)' }}>
                  <Image
                    src="/images/arancia-bocato.svg"
                    alt="Bocato del Mes — Arancia in Vespa"
                    unoptimized
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Amber label strip at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#FEB428] py-2 px-4">
                    <p className="text-[#361E1E] font-stencil text-sm uppercase tracking-widest text-center">
                      Bocato del Mes
                    </p>
                  </div>
                  <div className="absolute inset-2 pointer-events-none">
                    <span className="corner-tl" style={{ color: '#9F1429' }} />
                    <span className="corner-tr" style={{ color: '#9F1429' }} />
                    <span className="corner-bl" style={{ color: '#9F1429' }} />
                    <span className="corner-br" style={{ color: '#9F1429' }} />
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div>
                <p className="text-[#9F1429] uppercase tracking-[0.35em] text-xs font-bold mb-2">
                  Este Mes
                </p>
                <h2
                  id="bdm-heading"
                  className="font-graffiti text-[#361E1E] text-3xl md:text-5xl mb-4 leading-none"
                >
                  ARANCIA<br />IN VESPA
                </h2>
                <div className="checker-tape mb-5" />
                <p className="text-[#361E1E]/80 text-base leading-relaxed mb-4">
                  Un bocato con personalidad propia: masa napolitana fermentada 72 horas, rellena de
                  ingredientes de temporada seleccionados de un rincón distinto de Italia cada mes.
                  Este mes — notas cítricas, frescor mediterráneo, y esa actitud de quien llega en vespa y no pide perdón.
                </p>
                <p className="text-[#361E1E]/60 text-sm uppercase tracking-widest mb-6">
                  Disponible mientras haya stock · Pregunta en barra
                </p>
                <div className="ornament-divider mb-5" />
                <Link
                  href="/menu"
                  className="inline-block bg-[#9F1429] text-white font-bold uppercase tracking-widest px-8 py-3 text-sm hover:bg-[#361E1E] transition-colors"
                >
                  Ver La Carta →
                </Link>
              </div>
            </div>
          </div>
          <div className="checker-tape mt-16" />
        </section>
      </FadeUp>

      {/* ─── 3. CARTA PREVIEW ────────────────────────────────────────────── */}
      <section
        className="bg-[#361E1E] py-16 px-6 texture-noise relative"
        aria-labelledby="carta-heading"
      >
        {/* Paint drip decorative top border */}
        <div className="absolute top-0 left-0 right-0 w-full opacity-20 pointer-events-none" aria-hidden="true">
          <PaintDrip color="#FEB428" className="w-full h-12" />
        </div>


        {/* Artesanal stamp — top right */}
        <div
          className="absolute top-6 right-6 z-10 hidden md:block"
          style={{ transform: 'rotate(-10deg)', color: '#FEB428' }}
          aria-hidden="true"
        >
          <StampSeal text="ARTESANAL" subtext="72H FERMENTO" size={85} />
        </div>

        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0.1}>
            <div className="text-center mb-10">
              <h2
                id="carta-heading"
                className="font-graffiti text-[#FEB428] text-4xl md:text-6xl mb-2"
                style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}
              >
                LA CARTA
              </h2>
              <p className="text-white/60 uppercase tracking-widest text-xs">
                Bocatos romanos artesanales · Ingredientes DOP e IGP
              </p>
              <div className="ornament-divider mt-3" />
            </div>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {featuredBocatos.map((bocato) => (
              <StaggerItem key={bocato.name}>
                <div className="relative border border-[#FEB428]/20 p-5 hover:border-[#FEB428]/50 transition-colors">
                  <span className="corner-tl" style={{ color: '#FEB428', opacity: 0.4 }} />
                  <span className="corner-tr" style={{ color: '#FEB428', opacity: 0.4 }} />
                  <span className="corner-bl" style={{ color: '#FEB428', opacity: 0.4 }} />
                  <span className="corner-br" style={{ color: '#FEB428', opacity: 0.4 }} />
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[#FEB428] font-bold uppercase tracking-wider text-lg">
                      {bocato.name}
                    </h3>
                    <span className="text-[#9F1429] font-bold text-lg bg-[#FEB428]/10 px-2 py-0.5 rounded">
                      {bocato.price}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {bocato.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-block bg-[#FEB428] text-[#361E1E] font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-white transition-colors"
            >
              Ver Carta Completa →
            </Link>
          </div>
        </div>
        <div className="checker-tape mt-16" />
      </section>

      {/* ─── 4. MASA SECTION ─────────────────────────────────────────────── */}
      <FadeUp delay={0.1}>
        <section className="bg-[#F4E6CE] py-16 px-6 relative paper-spots overflow-hidden" aria-labelledby="bocato-heading">

          {/* Sticker background decoration — desktop */}
          <div aria-hidden="true" className="hidden md:block" style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0, overflow: 'hidden', top: '-50px', right: '-70px' }}>
            <img src="/stickers/1.svg" alt="" style={{ display: 'block', width: 620, opacity: 0.16, transform: 'rotate(-22deg)' }} />
          </div>
          {/* Sticker background decoration — mobile */}
          <div aria-hidden="true" className="block md:hidden" style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0, overflow: 'hidden', top: '-15px', right: '-25px' }}>
            <img src="/stickers/1.svg" alt="" style={{ display: 'block', width: 260, opacity: 0.16, transform: 'rotate(-22deg)' }} />
          </div>
          <div className="max-w-5xl mx-auto">
            <StencilBorder color="#9F1429" className="p-6 md:p-10 relative">

              {/* Stamp seal decoration — top right */}
              <div
                className="absolute top-4 right-4 z-10 hidden md:block"
                style={{ transform: 'rotate(12deg)', color: '#9F1429' }}
                aria-hidden="true"
              >
                <StampSeal text="DOP" subtext="Origen Protegido" size={80} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Copy */}
                <div>
                  <p className="text-[#9F1429] uppercase tracking-[0.3em] text-xs font-bold mb-2">
                    Visita Italia a través de Roma
                  </p>
                  <h2
                    id="bocato-heading"
                    className="font-graffiti text-[#361E1E] text-3xl md:text-4xl mb-4 leading-tight"
                  >
                    MASA FERMENTADA<br />MÍNIMO 72H
                  </h2>
                  <div className="checker-tape mb-4" />
                  <p className="text-[#361E1E]/80 text-base leading-relaxed mb-4">
                    Masa napolitana auténtica fermentada un mínimo de 72 horas, horneada al momento en horno
                    napolitano y rellena con ingredientes italianos DOP e IGP. Sin atajos, sin trampa.
                  </p>
                  <p className="text-[#361E1E]/80 text-base leading-relaxed mb-6">
                    Mozzarella di bufala Campana, mortadela di Bologna, tomate San Marzano, guanciale, pecorino...
                    Producto italiano real. Pregunta siempre por el{' '}
                    <strong className="text-[#9F1429]">bocato del mes</strong>.
                  </p>
                  <div className="ornament-divider" />
                  <p className="text-[#9F1429] font-bold italic text-lg mt-2 uppercase tracking-wide">
                    "Acho che Bello"
                  </p>
                </div>

                {/* Image — masa.png */}
                <div className="relative">
                  <div
                    className="absolute -top-4 -left-4 z-10 hidden md:block"
                    style={{ transform: 'rotate(-8deg)' }}
                    aria-hidden="true"
                  >
                    <ItalianBadge line1="ROMA x" line2="MURCIA" line3="EST. 2025" size={75} />
                  </div>

                  {/* Main: masa photo */}
                  <div
                    data-parallax="true"
                    className="relative h-72 md:h-96 overflow-hidden"
                    style={{ transform: 'rotate(-1deg)' }}
                  >
                    <Image
                      src="/images/masa.png"
                      alt="Bocato di Roma — masa napolitana fermentada 72 horas"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-2 pointer-events-none">
                      <span className="corner-tl" style={{ color: '#FEB428' }} />
                      <span className="corner-tr" style={{ color: '#FEB428' }} />
                      <span className="corner-bl" style={{ color: '#FEB428' }} />
                      <span className="corner-br" style={{ color: '#FEB428' }} />
                    </div>
                  </div>

                  <div
                    className="absolute bottom-4 -left-8 hidden md:block"
                    style={{ color: '#9F1429' }}
                    aria-hidden="true"
                  >
                    <VintageArrow direction="right" size={50} />
                  </div>
                </div>
              </div>
            </StencilBorder>
          </div>
          <div className="checker-tape mt-16" />
        </section>
      </FadeUp>

      {/* ─── 5. ABOUT SECTION ────────────────────────────────────────────── */}
      <FadeUp delay={0.1}>
        <section
          className="bg-[#9F1429] py-16 px-6 relative overflow-hidden texture-noise"
          aria-labelledby="nosotros-heading"
        >
          {/* Background stencil text decoration */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="font-graffiti text-white text-hollow whitespace-nowrap"
              style={{ fontSize: 'clamp(6rem, 20vw, 18rem)', letterSpacing: '0.05em' }}
            >
              ROMA
            </span>
          </div>


          <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: image */}
            <div data-parallax="true" className="relative h-72 md:h-96 overflow-hidden" style={{ transform: 'rotate(-1.5deg)' }}>
              <Image
                src="/images/unnamed (3).webp"
                alt="El equipo de Bocato di Roma en Murcia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Vintage amber overlay strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#FEB428] py-2 px-4">
                <p className="text-[#361E1E] font-stencil text-sm uppercase tracking-widest text-center">
                  Trastevere → Murcia · Est. 2025
                </p>
              </div>
              <div className="absolute inset-2 pointer-events-none">
                <span className="corner-tl" style={{ color: '#FEB428' }} />
                <span className="corner-tr" style={{ color: '#FEB428' }} />
                <span className="corner-bl" style={{ color: '#FEB428' }} />
                <span className="corner-br" style={{ color: '#FEB428' }} />
              </div>
            </div>

            {/* Right: copy */}
            <div>
              <p className="text-[#FEB428] uppercase tracking-[0.3em] text-xs font-bold mb-2">
                Chi Siamo
              </p>
              <h2
                id="nosotros-heading"
                className="font-graffiti text-white text-3xl md:text-4xl mb-4 leading-tight"
              >
                DE LAS CALLES DEL<br />TRASTEVERE A MURCIA
              </h2>
              <div className="checker-tape mb-4" />
              <p className="text-white/80 text-base leading-relaxed mb-4">
                Bocato di Roma nació del amor por las calles del Trastevere y la pasión por los productos
                italianos auténticos. Cada bocato es una ventana a esas noches en las que el mejor
                plan era parar en la esquina y comer algo brutal. Visita Italia a través de Roma — sin coger un avión.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                Ingredientes DOP e IGP, masa fermentada mínimo 72 horas, horno a tope. Sin atajos. Sin trampa.
                Solo producto italiano de verdad, con actitud de calle.
              </p>
              <div className="ornament-divider mb-6" />
              <Link
                href="/nosotros"
                className="inline-block border-2 border-[#FEB428] text-[#FEB428] font-bold uppercase tracking-widest px-8 py-3 text-sm hover:bg-[#FEB428] hover:text-[#361E1E] transition-colors"
              >
                Nuestra Historia →
              </Link>
            </div>
          </div>
          <div className="checker-tape mt-12" />
        </section>
      </FadeUp>

      {/* ─── 6. REVIEWS ──────────────────────────────────────────────────── */}
      <FadeUp delay={0.1}>
        <section className="bg-[#F4E6CE] py-16 px-6 relative overflow-hidden" aria-labelledby="reviews-heading">

          {/* Sticker background decoration — desktop */}
          <div aria-hidden="true" className="hidden md:block" style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0, overflow: 'hidden', bottom: '-50px', left: '-55px' }}>
            <img src="/stickers/6.png" alt="" style={{ display: 'block', width: 600, opacity: 0.17, transform: 'rotate(-12deg)' }} />
          </div>
          {/* Sticker background decoration — mobile */}
          <div aria-hidden="true" className="block md:hidden" style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0, overflow: 'hidden', bottom: '-15px', left: '-30px' }}>
            <img src="/stickers/6.png" alt="" style={{ display: 'block', width: 260, opacity: 0.17, transform: 'rotate(-12deg)' }} />
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2
                id="reviews-heading"
                className="font-graffiti text-[#9F1429] text-4xl md:text-5xl mb-2"
              >
                LO QUE DICEN
              </h2>
              <p className="text-[#361E1E]/60 uppercase tracking-widest text-xs">
                Reseñas reales de Google
              </p>
              <div className="ornament-divider mt-3" />
            </div>

            <StaggerChildren className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin">
              {reviews.map((review) => (
                <StaggerItem key={review.author}>
                  <ReviewCard review={review} />
                </StaggerItem>
              ))}
            </StaggerChildren>

            <div className="text-center mt-10">
              <a
                href="https://www.google.com/maps/search/Bocato+di+Roma+Murcia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FEB428] text-[#361E1E] font-bold uppercase tracking-widest px-10 py-4 text-sm border-2 border-[#361E1E] hover:bg-white transition-colors"
                style={{ transform: 'rotate(-1.5deg)', display: 'inline-flex' }}
              >
                <span aria-hidden="true">★</span>
                Déjanos tu Reseña en Google
                <span aria-hidden="true">★</span>
              </a>
            </div>
          </div>
          <div className="checker-tape mt-12" />
        </section>
      </FadeUp>

      {/* ─── 7. GALLERY PREVIEW ──────────────────────────────────────────── */}
      <FadeUp delay={0.1}>
        <section
          className="bg-[#361E1E] py-16 px-6 texture-noise relative overflow-hidden"
          aria-labelledby="gallery-heading"
        >

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#9F1429] uppercase tracking-[0.3em] text-xs font-bold mb-2">Fotogalería</p>
              <h2
                id="gallery-heading"
                className="font-graffiti text-[#FEB428] text-4xl md:text-5xl mb-2"
                style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}
              >
                SCATTI DI STRADA
              </h2>
              <p className="text-white/50 uppercase tracking-widest text-xs">
                Fotos reales · Sin filtros de estudio
              </p>
              <div className="ornament-divider mt-3" />
            </div>

            {/* Polaroid grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {foodImages.slice(0, 6).map((img, i) => {
                const rotations = [-2, 1.5, -1, 2.5, -1.5, 1]
                const captions = ['Imperfecto', 'Carbonara', 'Tartufato', 'Cicciolina', 'Polpette', 'Diavolo']
                return (
                  <div
                    key={img}
                    className="polaroid bg-white p-3 pb-8 shadow-xl"
                    style={{ transform: `rotate(${rotations[i]}deg)` }}
                  >
                    <div className="relative h-40 md:h-52 overflow-hidden">
                      <Image
                        src={`/images/${img}`}
                        alt={`Bocato di Roma — ${captions[i]}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                    <p className="text-[#361E1E] text-center text-xs font-bold uppercase tracking-wider mt-2 opacity-60">
                      {captions[i]}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="text-center">
              <Link
                href="/galeria"
                className="inline-block border-2 border-[#FEB428] text-[#FEB428] font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-[#FEB428] hover:text-[#361E1E] transition-colors"
              >
                Ver Galería Completa →
              </Link>
            </div>
          </div>
          <div className="checker-tape mt-12" />
        </section>
      </FadeUp>

      {/* ─── 8. LOCATION + MAP ───────────────────────────────────────────── */}
      <FadeUp delay={0.1}>
        <section
          className="bg-[#FEB428] py-16 px-6 texture-noise relative overflow-hidden"
          aria-labelledby="location-heading"
        >
          {/* Italian badge — top right */}
          <div
            className="absolute top-4 right-4 z-10 opacity-90 hidden md:block"
            style={{ transform: 'rotate(10deg)' }}
            aria-hidden="true"
          >
            <ItalianBadge line1="BOCATO" line2="DI ROMA" line3="MURCIA" size={100} bgColor="#9F1429" textColor="#FEB428" />
          </div>

          {/* Stamp seal — bottom left */}
          <div
            className="absolute bottom-4 left-4 z-10 hidden md:block"
            style={{ transform: 'rotate(-6deg)', color: '#361E1E' }}
            aria-hidden="true"
          >
            <StampSeal text="ACHO QUE" subtext="BELLO" size={70} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2
                id="location-heading"
                className="font-graffiti text-[#9F1429] leading-none mb-4"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textShadow: '2px 2px 0px rgba(0,0,0,0.15)' }}
              >
                ACHO CHE BELLO
              </h2>
              <p className="text-[#361E1E] font-bold uppercase tracking-widest text-sm md:text-base mb-2">
                Gran Vía Alfonso X, 2-A · Murcia · +34 652 47 33 45
              </p>
              <div className="checker-tape mb-6 max-w-sm mx-auto" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/contacto"
                  className="inline-block bg-[#9F1429] text-white font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-[#361E1E] transition-colors"
                >
                  Cómo Llegar →
                </Link>
                <a
                  href="https://wa.me/34652473345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#361E1E] text-[#FEB428] font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-[#9F1429] transition-colors"
                >
                  Pedir por WhatsApp →
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="relative" style={{ transform: 'rotate(-0.5deg)' }}>
              <div className="absolute inset-0 pointer-events-none z-10">
                <span className="corner-tl" style={{ color: '#9F1429' }} />
                <span className="corner-tr" style={{ color: '#9F1429' }} />
                <span className="corner-bl" style={{ color: '#9F1429' }} />
                <span className="corner-br" style={{ color: '#9F1429' }} />
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Bocato+di+Roma+Murcia&hl=es&z=17&output=embed"
                width="100%"
                height="380"
                style={{ border: '3px solid #9F1429', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bocato di Roma en Google Maps — Gran Vía Alfonso X, 2-A, Murcia"
                aria-label="Mapa de ubicación de Bocato di Roma en Murcia"
              />
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ─── 9. FAQS ─────────────────────────────────────────────────────── */}
      <FadeUp delay={0.1}>
        <section
          className="bg-[#F4E6CE] py-16 px-6 paper-spots relative overflow-hidden"
          aria-labelledby="faq-heading"
        >

          {/* Sticker background decoration — desktop */}
          <div aria-hidden="true" className="hidden md:block" style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0, overflow: 'hidden', top: '-40px', right: '-65px' }}>
            <img src="/stickers/4.svg" alt="" style={{ display: 'block', width: 580, opacity: 0.16, transform: 'rotate(15deg)' }} />
          </div>
          {/* Sticker background decoration — mobile */}
          <div aria-hidden="true" className="block md:hidden" style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0, overflow: 'hidden', top: '-10px', right: '-25px' }}>
            <img src="/stickers/4.svg" alt="" style={{ display: 'block', width: 240, opacity: 0.16, transform: 'rotate(15deg)' }} />
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#9F1429] uppercase tracking-[0.3em] text-xs font-bold mb-2">FAQ</p>
              <h2
                id="faq-heading"
                className="font-graffiti text-[#361E1E] text-4xl md:text-5xl mb-2"
              >
                PREGUNTATE
              </h2>
              <p className="text-[#361E1E]/60 uppercase tracking-widest text-xs">
                Las dudas más frecuentes
              </p>
              <div className="ornament-divider mt-3" />
            </div>

            <div className="space-y-3">
              {[
                {
                  q: '¿Qué es un bocato?',
                  a: 'El bocato es una masa napolitana auténtica con forma de bocadillo o panuozzo, fermentada un mínimo de 72 horas, horneada al momento en horno napolitano a alta temperatura y rellena con ingredientes italianos DOP e IGP. Sin atajos, sin trampa — masa auténtica con alma de calle.',
                },
                {
                  q: '¿Hay opciones sin gluten, vegetarianas o veganas?',
                  a: 'Sí. Tenemos opciones sin gluten con previo aviso — consúltanos antes de venir. También tenemos bocatos vegetarianos (Melanzane, Sorrento) y opciones veganas con queso vegano. Cuéntanos tu alergia o intolerancia y buscamos la mejor opción.',
                },
                {
                  q: '¿Es necesario reservar?',
                  a: 'Somos un local de street food con ritmo de barra. No tomamos reservas — ven, pide y en minutos tienes tu bocato. Si hay espera, será corta y vale la pena.',
                },
                {
                  q: '¿Cuál es el horario?',
                  a: 'Martes: 19:00–23:00. Miércoles y Jueves: 13:00–16:00 y 18:30–23:30. Viernes: 13:00–16:00 y 18:30–00:30. Sábado: 13:00–16:30 y 18:30–00:00. Domingo: 13:30–16:00 y 19:00–23:30. Lunes: cerrado.',
                },
                {
                  q: '¿Dónde puedo aparcar?',
                  a: 'Estamos en Gran Vía Alfonso X el Sabio, 2-A — pleno centro de Murcia. Los parkings públicos más cercanos son el de Plaza de la Universidad y el de Avenida de la Libertad. En coche, en bici, a pie o en la moto de tu abuela: llegarás.',
                },
                {
                  q: '¿Puedo comprar para llevar o a peso?',
                  a: 'Sí. Vendemos el bocato bajo pedido por WhatsApp y también a peso. Escríbenos para consultarlo — y si algo ya está vendido, ya está vendido. Así somos.',
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-[#9F1429]/30 bg-white/60 overflow-hidden"
                >
                  <summary className="cursor-pointer flex items-center justify-between px-5 py-4 text-[#361E1E] font-bold uppercase tracking-wide text-sm list-none select-none hover:bg-[#9F1429]/5 transition-colors">
                    <span>{q}</span>
                    <span
                      className="font-stencil text-[#9F1429] text-xl ml-4 flex-shrink-0 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-4 pt-1 border-t border-[#9F1429]/20">
                    <p className="text-[#361E1E]/80 text-sm leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div className="checker-tape mt-12" />
        </section>
      </FadeUp>

      {/* ─── 10. CERDO ───────────────────────────────────────────────────── */}
      <section className="bg-[#361E1E] relative overflow-hidden" style={{ minHeight: '60vw' }}>
        <img
          src="/stickers/cerdo.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            pointerEvents: 'none',
          }}
        />
      </section>
    </>
  )
}

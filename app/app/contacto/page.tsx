import type { Metadata } from 'next'
import { businessHours } from '@/lib/data'
import { StencilBorder } from '@/components/StencilBorder'
import { getFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contacto y Ubicación',
  description:
    'Dónde encontrar Bocato di Roma en Murcia. Gran Vía Alfonso X el Sabio, 2-A. Horarios, teléfono y cómo llegar.',
  alternates: {
    canonical: 'https://bocatodiroma.com/contacto',
  },
}

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />

      {/* Header */}
      <header
        className="bg-[#9F1429] py-16 px-6 text-center texture-noise relative overflow-hidden"
        aria-labelledby="contacto-title"
      >
        <div className="relative z-10">
          <p className="text-[#FEB428]/70 uppercase tracking-[0.4em] text-xs mb-2">
            Bocato di Roma · Murcia
          </p>
          <h1
            id="contacto-title"
            className="font-stencil text-[#FEB428] leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textShadow: '4px 4px 0px rgba(0,0,0,0.4)' }}
          >
            VISITA ROMA
          </h1>
          <p className="text-white/80 uppercase tracking-widest text-sm mt-2 font-bold">
            Gran Vía Alfonso X el Sabio, 2-A · 30008 Murcia
          </p>
          <div className="ornament-divider mt-4 text-lg" />
        </div>
      </header>

      <div className="bg-[#F4E6CE] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left: Contact info + Hours */}
          <div className="space-y-8">

            {/* Contact info */}
            <StencilBorder color="#9F1429">
              <h2 className="font-stencil text-[#9F1429] text-2xl mb-4 uppercase">
                Contacto
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-[#361E1E]/60 text-xs uppercase tracking-widest mb-1 font-bold">
                    Teléfono
                  </p>
                  <a
                    href="tel:+34652473345"
                    className="text-[#9F1429] font-bold text-2xl tracking-wider hover:text-[#361E1E] transition-colors"
                  >
                    +34 652 47 33 45
                  </a>
                </div>
                <div>
                  <p className="text-[#361E1E]/60 text-xs uppercase tracking-widest mb-1 font-bold">
                    Dirección
                  </p>
                  <address
                    className="not-italic text-[#361E1E] font-bold text-base leading-snug"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">
                      Gran Vía Alfonso X el Sabio, 2-A
                    </span>
                    <br />
                    <span>(Esquina C/Enrique Villar)</span>
                    <br />
                    <span itemProp="postalCode">30008</span>{' '}
                    <span itemProp="addressLocality">Murcia</span>,{' '}
                    <span itemProp="addressCountry">España</span>
                  </address>
                </div>
                <div>
                  <p className="text-[#361E1E]/60 text-xs uppercase tracking-widest mb-1 font-bold">
                    Redes sociales
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/bocatodiroma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9F1429] font-bold hover:text-[#361E1E] transition-colors uppercase tracking-widest text-sm"
                    >
                      Instagram
                    </a>
                    <span className="text-[#361E1E]/30">·</span>
                    <a
                      href="https://www.facebook.com/bocatodiroma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9F1429] font-bold hover:text-[#361E1E] transition-colors uppercase tracking-widest text-sm"
                    >
                      Facebook
                    </a>
                  </div>
                  <p className="text-[#361E1E]/60 text-sm mt-1">@bocatodiroma</p>
                </div>
              </div>
            </StencilBorder>

            {/* Hours */}
            <StencilBorder color="#9F1429">
              <h2 className="font-stencil text-[#9F1429] text-2xl mb-4 uppercase">
                Horarios
              </h2>
              <div className="checker-tape mb-4" />
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#9F1429] text-white">
                    <th className="px-3 py-2 text-left uppercase tracking-wider font-bold text-xs">
                      Día
                    </th>
                    <th className="px-3 py-2 text-left uppercase tracking-wider font-bold text-xs">
                      Horario
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {businessHours.map((entry, index) => (
                    <tr
                      key={entry.day}
                      className={index % 2 === 0 ? 'bg-[#F4E6CE]' : 'bg-[#FAF3E5]'}
                    >
                      <td className="px-3 py-2.5 font-bold uppercase tracking-wide text-[#361E1E]">
                        {entry.day}
                      </td>
                      <td
                        className={`px-3 py-2.5 font-medium ${
                          entry.closed
                            ? 'text-[#9F1429] font-bold uppercase tracking-widest'
                            : 'text-[#361E1E]'
                        }`}
                      >
                        {entry.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="checker-tape mt-4" />
            </StencilBorder>
          </div>

          {/* Right: Map */}
          <div className="space-y-4">
            <StencilBorder color="#9F1429" className="p-2 md:p-4">
              <h2 className="font-stencil text-[#9F1429] text-2xl mb-4 uppercase">
                Cómo Llegar
              </h2>
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.543123897949!2d-1.1320290236821948!3d37.98779027193253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6383f88602d5e3%3A0x9b8f95958a0217d!2sBocato%20di%20Roma!5e0!3m2!1sit!2ses!4v1771364022279!5m2!1sit!2ses"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Bocato di Roma en Murcia"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=Bocato+di+Roma+Murcia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#9F1429] text-white font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-[#361E1E] transition-colors"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </StencilBorder>

            {/* Extra info */}
            <div className="bg-[#361E1E] p-5 relative">
              <span className="corner-tl" style={{ color: '#FEB428' }} />
              <span className="corner-tr" style={{ color: '#FEB428' }} />
              <span className="corner-bl" style={{ color: '#FEB428' }} />
              <span className="corner-br" style={{ color: '#FEB428' }} />
              <h3 className="text-[#FEB428] font-bold uppercase tracking-widest text-sm mb-2">
                También disponible en
              </h3>
              <a
                href="https://glovoapp.com/es/es/murcia/stores/bocato-di-roma-murcia?content=menu-c.2958601997&section=bocatos-s.6285422442"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FEB428] transition-colors font-bold uppercase tracking-wider text-sm"
              >
                Glovo — Pedidos a domicilio →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

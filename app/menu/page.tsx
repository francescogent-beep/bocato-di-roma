import type { Metadata } from 'next'
import { MenuSection } from '@/components/MenuSection'
import { FadeUp } from '@/components/FadeUp'
import { ItalianBadge } from '@/components/Stickers'
import { menuCategories } from '@/lib/data'
import { getMenuSchema } from '@/lib/schema'
import MenuTabs from './MenuTabs'
import { BocatoCarousel } from '@/components/BocatoCarousel'

export const metadata: Metadata = {
  title: 'La Carta',
  description:
    'Carta completa de Bocato di Roma Murcia: Imperfecto, Carbonara, Tartufato, Sorrento... Bocatos romanos artesanales con ingredientes DOP e IGP. También Murcia Style con productos locales.',
  alternates: {
    canonical: 'https://bocatodiroma.com/menu',
  },
}

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getMenuSchema()) }}
      />

      {/* Page header */}
      <header
        className="bg-[#9F1429] py-16 px-6 text-center texture-noise relative overflow-hidden"
        aria-labelledby="menu-title"
      >
        {/* Italian badge — top right */}
        <div
          className="absolute top-4 right-4 z-10 hidden md:block"
          style={{ transform: 'rotate(15deg)' }}
          aria-hidden="true"
        >
          <ItalianBadge line1="LA CARTA" line2="2025" line3="MURCIA" size={80} bgColor="#361E1E" textColor="#FEB428" />
        </div>
        <FadeUp>
          <div className="relative z-10">
            <p className="text-[#FEB428]/70 uppercase tracking-[0.4em] text-xs mb-2">
              Bocato di Roma · Murcia
            </p>
            <h1
              id="menu-title"
              className="font-stencil text-[#FEB428] leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', textShadow: '4px 4px 0px rgba(0,0,0,0.4)' }}
            >
              LA CARTA
            </h1>
            <p className="text-white/70 uppercase tracking-widest text-sm mt-2">
              Masa napolitana auténtica · Mínimo 72h · Horno napolitano · Ingredientes DOP e IGP
            </p>
            <div className="ornament-divider mt-4 text-lg" />
          </div>
        </FadeUp>
      </header>

      {/* Category tabs — client component */}
      <MenuTabs categories={menuCategories} />

      {/* Full menu sections */}
      <div className="bg-[#F4E6CE] px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {menuCategories.map((category) => (
            <div key={category.id}>
              <MenuSection category={category} />
              {category.id === 'bocatos' && (
                <div className="-mx-6">
                  <BocatoCarousel />
                </div>
              )}
              {category.id === 'bebidas' && (
                <div className="flex justify-center mt-4 mb-2 -mx-6 overflow-hidden">
                  <img
                    src="/stickers/spellegrino.png"
                    alt="San Pellegrino"
                    style={{ width: '100%', maxWidth: 480, display: 'block', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}

          {/* Allergen note */}
          <div className="mt-8 p-4 border border-[#9F1429]/30 bg-white/50">
            <p className="text-[#361E1E]/60 text-xs leading-relaxed">
              🌿 Vegetariano · 🌿🥛 Vegano (con queso vegano) · 🌶️ Picante · Sin gluten disponible con previo aviso.
              Infórmenos de cualquier alergia o intolerancia. Algunos productos pueden contener trazas de gluten, lácteos, huevo, frutos secos y otros alérgenos.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

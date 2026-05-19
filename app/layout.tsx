import type { Metadata } from 'next'
import '../styles/globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Marquee } from '@/components/Marquee'
import { FloatingOrder } from '@/components/FloatingOrder'
import { getRestaurantSchema, getWebSiteSchema } from '@/lib/schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://bocatodiroma.com'),
  title: {
    default: 'Bocato di Roma | Bocatos Napoletanos en Murcia',
    template: '%s | Bocato di Roma',
  },
  description:
    'El mejor bocato napoletano en Murcia. Masa fermentada 24h, ingredientes italianos DOP e IGP. En Gran Vía Alfonso X, 2-A. ¡Veni Vidi y Comí!',
  keywords: [
    'bocato napoletano murcia',
    'comida italiana murcia',
    'street food murcia',
    'pizzeta murcia',
    'bocato di roma',
    'bocatos murcia',
    'restaurante italiano murcia',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://bocatodiroma.com',
    siteName: 'Bocato di Roma',
    title: 'Bocato di Roma | Bocatos Napoletanos en Murcia',
    description:
      'El mejor bocato napoletano en Murcia. Masa fermentada 24h, ingredientes italianos DOP e IGP. En Gran Vía Alfonso X, 2-A.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Bocato di Roma — Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bocato di Roma | Bocatos Napoletanos en Murcia',
    description:
      'El mejor bocato napoletano en Murcia. Masa fermentada 24h, ingredientes italianos DOP e IGP.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://bocatodiroma.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getRestaurantSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema()),
          }}
        />
        <Nav />
        <Marquee bgColor="#361E1E" textColor="#FEB428" />
        <main className="pt-[68px]">{children}</main>
        <Footer />
        <FloatingOrder />
      </body>
    </html>
  )
}

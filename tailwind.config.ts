import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bocato: {
          red: '#9F1429',
          amber: '#FEB428',
          beige: '#F4E6CE',
          dark: '#361E1E',
          cream: '#FAF3E5',
        },
      },
      fontFamily: {
        gothic: ['var(--font-gothic)', 'sans-serif'],
        mincho: ['"BIZ UDMincho"', 'serif'],
        stencil: ['"Big Shoulders Stencil Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

# Bocato di Roma — Next.js Website

**Live site:** bocatodiroma.com  
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion  
**Client:** Bocato di Roma — street food romano in Murcia, Spain

---

## Critical facts

- The product is **bocato ROMANO** — never "napoletano" or "napolitano" anywhere in copy, metadata, schema, or OG images. `Ciccioli Napoletano` is an ingredient name and is the only correct exception.
- Address: Gran Vía Alfonso X el Sabio, 2-A (esquina C/Enrique Villar), 30008 Murcia
- Phone: +34 652 47 33 45
- Closed: **Monday**
- Delivery: Glovo only (URL in `lib/data.ts` → `GLOVO_URL`)

---

## Project structure

```
app/
  layout.tsx          — root metadata (title template, OG, Twitter, robots, JSON-LD)
  page.tsx            — homepage (hero, product intro, menu preview, reviews, about preview, map, FAQ)
  menu/page.tsx       — full menu with tabs
  nosotros/page.tsx   — about / brand story
  galeria/page.tsx    — photo gallery with lightbox
  contacto/page.tsx   — contact, hours table, embedded map
  robots.ts           — robots rules + sitemap URL
  sitemap.ts          — all 5 pages with priorities
  opengraph-image.tsx — dynamic OG image 1200×630 (edge runtime)
  llms.txt/route.ts   — LLM-readable plain-text content file

lib/
  data.ts             — all content: bocatos, murciaStyle, entrantes, bebidas, reviews, businessHours, foodImages, GLOVO_URL
  schema.ts           — JSON-LD factories: getRestaurantSchema, getWebSiteSchema, getMenuSchema, getFAQSchema

components/
  Nav.tsx, Footer.tsx, Marquee.tsx, FloatingOrder.tsx
  HeroContent.tsx, HeroAnimations.tsx, HeroBackground.tsx, AnimatedHeroTitle.tsx
  MenuSection.tsx, AnimatedMenuList.tsx, MenuTabs.tsx (client)
  GalleryLightbox.tsx (client)
  ReviewCard.tsx, FadeUp.tsx, StaggerChildren.tsx, StencilBorder.tsx, StampSeal + Stickers.tsx

public/
  images/             — 17 food/venue photos (all .webp, currently named unnamed.webp etc.)
  stickers/           — brand sticker PNGs (1.png–6.png)
  logo.png, logo-bocato-di-roma-yellow.svg, one-line-*.svg
```

---

## Data is centralised in `lib/data.ts`

All menu items, reviews, hours and image lists live here. **Edit content here first**, then schema/copy may need updating to match.

Menu categories: `bocatos` (9 items) · `murciaStyle` (2 items) · `entrantes` (5 items) · `bebidas` (15 items)

Price range: bocatos €7–9, entrantes €2.50–3.90, bebidas €1.20–3.50

---

## SEO setup

- `metadataBase`: `https://bocatodiroma.com`
- Title template in layout: `%s | Bocato di Roma`
- Canonical set on every page
- JSON-LD injected in layout (Restaurant + WebSite) and per-page where relevant (FAQ, Menu)
- **Known issue:** `getWebSiteSchema()` is duplicated in both `layout.tsx` and `page.tsx` — remove from `page.tsx`
- **Known issue:** `layout.tsx` explicitly sets `openGraph.images: [{url: '/logo.png'}]` which blocks the dynamic `opengraph-image.tsx`. Remove that images array to let the 1200×630 OG image work.
- `robots.ts` allows all bots; sitemap referenced at `/sitemap.xml`
- `llms.txt` served at `/llms.txt` for AI crawlers

---

## Brand palette

| Token | Hex |
|-------|-----|
| Dark brown (bg, text) | `#361E1E` |
| Crimson red | `#9F1429` |
| Amber yellow | `#FEB428` |
| Cream paper | `#F4E6CE` |
| White | `#FFFFFF` |

Font: `BIZ_UDGothic` (Google Fonts, weights 400/700), CSS var `--font-gothic`  
Stencil style class: `font-stencil` (defined in globals.css)

---

## Opening hours

| Day | Hours |
|-----|-------|
| Monday | **Closed** |
| Tuesday | 19:00–23:00 |
| Wed–Thu | 13:00–16:00 · 18:30–23:30 |
| Friday | 13:00–16:00 · 18:30–00:30 |
| Saturday | 13:00–16:30 · 18:30–00:00 |
| Sunday | 13:30–16:00 · 19:00–23:30 |

---

## Dev commands

```bash
npm run dev    # localhost:3000
npm run build
npm run start
```

Node modules are installed. Never run `npm install` unless package.json changed.

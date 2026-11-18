# Professional Spa — Bahria Town Phase 4, Rawalpindi

A massage and spa centre in Civic Center, Bahria Town Phase 4, Rawalpindi (Punjab). Open 24 hours.
The site's job is phone calls and WhatsApp bookings from people searching locally
("massage in Bahria Town", "spa in Civic Center").

## Design direction (current)

- Violet and lavender glass theme (current): light lavender background, frosted white cards with a soft
  glow, violet accent (`--v2-rose: #6d4ff0`, a legacy token name kept on purpose), ink text
  (`#17132b`). Tokens are defined on `.v2` in `src/styles/home-v2.css`. Cards use `.svc-card` from
  `src/styles/svc-cards.css`. Trust points use `.v2-trust`, and closing bands use `.v2-band`.
- Type scale: `src/styles/type.css` (body 16px, section headings 44px, page headings 72px).
- Animation is switched off site-wide (`initV2` runs the static path). Touch screens drop the blur.
- Display font Fraunces (Google Fonts, serif). Body and UI font Inter (self-hosted woff2).
- Homepage: intro typewriter loader, hero with glass chips and stats row, ritual index,
  price ledger, steps, offer cards, booking band, visit/map section, FAQ.
- Inner pages use the same system via `src/styles/v2-pages.css` (page hero with a backdrop word,
  breadcrumbs, tables, cards, split layouts, the blog article style, and the footer).
- Photos: `public/images/spa-1.jpg` to `spa-6.jpg` are free Pexels spa and massage photos (Pexels licence,
  no attribution required). Only `spa-2.jpg` is used so far (homepage hero). `og-thai-spa.jpg` is still the
  share image and should be replaced.
- Old light-blue, pink, lavender and DriveLuxe-layout directions are retired. Do not revive them.

Files:
- `src/styles/home-v2.css`: homepage (scoped under `.v2`, classes `.v2-*`)
- `src/styles/v2-pages.css`: inner pages, footer block
- `src/styles/site.css`: legacy shared styles (colours converted to the dark palette)
- `src/lib/motion-v2.js`: intro loader, word reveal, fade-up, spotlight, parallax (exports `initV2`)

## Stack

React 18 + Vite 8 (JavaScript, not TypeScript) · vite-react-ssg (static pre-render of every route) ·
react-router-dom v6 · GSAP + ScrollTrigger · Lenis · lucide-react · Tailwind 3 (installed; the v2 pages use plain CSS).

No jQuery, Bootstrap, Webflow or component library.

## Single source of truth

- `src/data/business.js`: name, address, phone, WhatsApp, hours, geo, policies, share image.
- `src/data/services.js`: every treatment, rate card and price helper. All prices live here.
- `src/data/service-content.js`: per-treatment copy (intro, best for, steps, who should skip, aftercare).
- `src/data/faqs.js`: FAQ answers. Built from business.js and services.js.
- `src/data/keywords.js`: primary and secondary keywords per route. `src/lib/seoTitles.js` builds titles from it.
- `src/data/blog/*.js`: blog posts.
- `src/lib/richText.jsx`: supports `[label](/path)` links and `{{price:slug:minutes}}` tokens.

Changing a price in `services.js` must update the price tables, service pages, FAQ and JSON-LD together.
Do not hardcode prices or hours in a component.

### Business facts (as of this file)

- Name: **Professional Spa** (not "Professional Spa Rawalpindi" or "Thai Spa").
- Address: Plaza #40, Civic Center, Bahria Town Phase 4, Rawalpindi, Punjab 46220.
- Hours: open 24 hours, 7 days (stored as 00:00–23:59).
- Phone: +92 346 4460192 (from the Google listing). WhatsApp is set to the same number, **owner to confirm**.
- Google listing address matches: Plaza #40, Civic Center, Bahria Town Phase 4, open 24 hours.
- Email: info@thaispa.pk. **Unconfirmed**: mailbox not created.
- Domain in config: https://www.thaispa.pk. **Unconfirmed**: may change to a Professional Spa domain.
- geo lat/lng: null. Owner to supply the exact pin from Google Maps. Do not invent it.
- Share image: `/images/og-thai-spa.jpg`. Replace with a 1200×630 image for Professional Spa.
- Service areas for schema: Bahria Town, Civic Center, Rawalpindi, Islamabad.

### Treatments and rates (PKR, from services.js)

Full-body (all share one rate card, to be confirmed for the men's massage):
30 min Rs 3,500 · 40 min Rs 4,000 · 60 min Rs 5,500 · 90 min Rs 8,000
Thai · Deep Tissue · Swedish Relaxing · Aromatherapy · Hot Stone · Sports · Full Body Massage · Full Body Massage for Men

Targeted:
- Head & Shoulder — 30/3,000 · 40/3,500 · 60/5,000 · 90/7,000
- Back & Neck — 30/2,500 · 40/3,000 · 60/4,000
- Foot Massage — 30/2,500 · 40/3,500

Prices were last updated 8 October 2026 (`business.pricesUpdated`). Bump it when a price changes.

## Hard rules — do not break these without asking

1. WhatsApp green is used only on WhatsApp actions.
2. Every route must pre-render to static HTML. After any build, confirm the body text is in the built HTML, not injected by JS.
3. No `AggregateRating` or `Review` schema.
4. Invent nothing. No therapist names, qualifications, review counts, founding years, awards or star ratings. Where a fact is missing, write a `TODO:` comment and keep the wording to "ask when you book".
5. No clinical or medical language. This is massage, not physiotherapy. `offersPhysiotherapy` stays false.
6. No doorway pages per area ("Massage in Phase 5", "DHA"). Location keywords use "Bahria Town" (owner's choice).
7. The intro loader runs on the homepage only, is skipped under reduced motion, and has a CSS failsafe so it can never trap the page.
8. Lenis is disabled below 768px and under `prefers-reduced-motion`. It must never break keyboard tabbing or in-page anchors.
9. Numbered markers only on real sequences (the session steps). Not on lists of independent items.
10. Keep the primary keyword in the H1 and the first 100 words of each page. `npm run keywords` checks this.

## Commands

```bash
npm run dev        # dev server (port 5180 in the preview tool)
npm run build      # must pass before any phase is called done
npm run preview    # serve the built output
npm run check      # title length, meta and JSON-LD checks (scripts/check-build.mjs)
npm run keywords   # keyword placement checks (scripts/check-keywords.mjs)
npm run links      # internal link check
```

## Definition of done for every change

- `npm run build` completes with no errors and no console warnings
- `npm run check` and `npm run keywords` pass
- Built HTML for each changed route contains its visible body text
- Works at 375px, 768px, 1024px and 1440px with no horizontal scroll
- Keyboard reaches every control with a visible focus ring

## Open items

- Owner to confirm phone, WhatsApp, email and domain (see Business facts).
- Owner to supply the Google Maps pin (lat/lng) and confirm the address wording.
- Replace the share image and the placeholder photography.
- Male therapist TODO in `service-content.js`, and confirm the men's rate card.
- Confirm policies (tax, cancellation, tipping, walk-ins) before stating them on the site.
- Optional cleanup: `src/data/images.js` and `src/components/sections/Media.jsx` are unused.

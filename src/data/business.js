import { minPrice, maxPrice } from './services'

export const business = {
  name: 'Professional Spa',
  domain: 'https://www.thaispa.pk',
  phone: '+92 346 4460192', // From the Google Business Profile listing
  phoneHref: 'tel:+923464460192',
  whatsapp: '923464460192', // OWNER: confirm this number is on WhatsApp
  email: 'info@thaispa.pk', // OWNER: create this mailbox, or change it
  address: {
    street: 'Plaza #40, Civic Center, Bahria Town Phase 4',
    landmark: '',
    city: 'Rawalpindi',
    region: 'Punjab',
    postalCode: '46220',
    country: 'PK',
  },
  geo: { lat: null, lng: null }, // OWNER: exact pin from Google Maps
  // Open 24 hours, every day (owner confirmed). 00:00-23:59 is how schema.org expresses "all day".
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
  ],
  // Derived from services.js so it can never drift from the price list.
  priceRange: `PKR ${minPrice.toLocaleString('en-US')} – ${maxPrice.toLocaleString('en-US')}`,
  // The menu is massage only. Leave false — no clinical or medical language anywhere.
  offersPhysiotherapy: false,
  pricesUpdated: '8 October 2026', // shown on /prices — bump whenever a price changes
  ogImage: '/images/og-thai-spa.jpg', // OWNER: 1200x630 share image
  areaServed: ['Bahria Town', 'Civic Center', 'Rawalpindi', 'Islamabad'],
  // TODO owner: confirm each policy, then replace null with a plain sentence. Until then the site says "ask when you book".
  policies: { tax: null, cancellation: null, tipping: null, walkIns: null },
  social: { facebook: '', instagram: '', googleMaps: '' },
}

export const waLink = (msg) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`

export const bookingMessage = (serviceName) =>
  serviceName
    ? `Assalam o Alaikum, I'd like to book a ${serviceName} at ${business.name}.`
    : `Assalam o Alaikum, I'd like to book a massage at ${business.name}.`

export const fullAddress = () => {
  const a = business.address
  return `${a.street}, ${a.city}`
}

const to12h = (t) => {
  const [h, m] = t.split(':').map(Number)
  const suffix = h >= 12 ? 'pm' : 'am'
  const h12 = h % 12 || 12
  return m ? `${h12}:${String(m).padStart(2, '0')} ${suffix}` : `${h12} ${suffix}`
}

export const isAllDay = (block) => block.opens === '00:00' && block.closes === '23:59'

export const formatHours = (block) => (isAllDay(block) ? 'Open 24 hours' : `${to12h(block.opens)} – ${to12h(block.closes)}`)

export const hoursLabel = (block) =>
  block.days.length > 1 ? `${block.days[0].slice(0, 3)} – ${block.days.at(-1).slice(0, 3)}` : block.days[0]

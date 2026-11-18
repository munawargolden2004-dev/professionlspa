import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Phone } from 'lucide-react'
import Seo from '../components/seo/Seo'
import FaqSchema from '../components/seo/FaqSchema'
import MapEmbed from '../components/sections/MapEmbed'
import OfferCards from '../components/sections/OfferCards'
import BookingForm from '../components/sections/BookingForm'
import { business, waLink, bookingMessage, formatHours } from '../data/business'
import { faqs } from '../data/faqs'
import { services, fullBodyRates, shortSessions, getService, fromPrice, formatPrice, minPrice } from '../data/services'
import { artStyle } from '../data/photos'
import { initV2 } from '../lib/motion-v2'
import '../styles/home-v2.css'
import '../styles/svc-cards.css'

// v3 homepage. Order: hero, the sessions grid, the price list, steps, gallery, booking, visit, FAQ.
// Prices and session names come from data/services.js, so a change there updates this page.
const FEATURED = ['thai-massage', 'deep-tissue-massage', 'swedish-massage', 'hot-stone-massage', 'sports-massage', 'head-shoulder-massage']

const rate30 = fullBodyRates.find((r) => r.minutes === 30)
const waStart = waLink(bookingMessage())

export default function Home() {
  useEffect(() => {
    const off = initV2(document)
    return () => off()
  }, [])

  const featured = FEATURED.map((slug) => getService(slug)).filter(Boolean)

  return (
    <div className="v2">
      <Seo
        title="Massage in Bahria Town Phase 4 | Spa, Rawalpindi | Professional Spa"
        description="Massage and spa centre in Civic Center, Bahria Town Phase 4, Rawalpindi. Thai, deep tissue, Swedish and hot stone massage. Open 24 hours, prices on the website."
        path="/"
      />
      <FaqSchema faqs={faqs} />

      {/* HERO */}
      <section className="v2-hero" aria-labelledby="hero-title" style={{ padding: 0 }}>
        <div className="v2-hero-copy" style={{ padding: 'calc(var(--hh, 72px) + 40px) 0 72px var(--v2-gutter)' }}>
          <p className="v2-mono">PROFESSIONAL SPA / CIVIC CENTER, BAHRIA TOWN</p>
          <h1 className="v2-h1" id="hero-title">
            <span className="v2-line"><span>Massage in Bahria Town Phase 4,</span></span>
            <span className="v2-line"><span><em>slows the day down.</em></span></span>
          </h1>
          <p className="v2-lead">
            We are a massage centre in Civic Center, Bahria Town Phase 4. Thai, deep tissue, Swedish and hot stone sessions, open all day and night. Check the price first, then book in a minute on WhatsApp.
          </p>
          <div className="v2-actions">
            <a className="v2-btn v2-btn--solid" href={waStart} target="_blank" rel="noopener noreferrer">
              Book on WhatsApp <ArrowUpRight aria-hidden="true" />
            </a>
            <Link className="v2-btn v2-btn--line" to="/prices">See prices</Link>
          </div>
          <ul className="v2-stats">
            <li><strong>24h</strong><span>Open every day</span></li>
            <li><strong>{services.length}</strong><span>Treatments</span></li>
            <li><strong>{formatPrice(minPrice)}</strong><span>From for 30 minutes</span></li>
            <li><strong>7</strong><span>Days a week</span></li>
          </ul>
          <ul className="v2-trust" aria-label="Why book with us">
            <li>Every price is listed before you arrive</li>
            <li>Book in a minute on WhatsApp, and we confirm your slot</li>
            <li>Open 24 hours, every day of the week</li>
          </ul>
        </div>
        <div className="v2-hero-art" style={{ paddingRight: 'var(--v2-gutter)' }}>
          {/* Hero photo: replace public/images/hero/hero-spa.webp to change it */}
          <div className="v2-arch">
            <div className="v2-hero-photo" role="img" aria-label="A calm massage room at Professional Spa" />
          </div>
          <div className="v2-glass v2-glass--hours">
            <span className="v2-dot" aria-hidden="true" />
            <div>
              <small>Open</small>
              <strong>24 hours, 7 days</strong>
            </div>
          </div>
          <Link className="v2-glass v2-glass--count" to="/services">
            <div>
              <small>Treatments</small>
              <strong>{services.length} options</strong>
            </div>
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <div className="v2-chip">
            <small>Thirty minutes to start</small>
            <strong>{formatPrice(rate30.price)}</strong>
            <span>Send your preferred time on WhatsApp and we confirm your slot.</span>
          </div>
        </div>
      </section>

      {/* SESSIONS GRID */}
      <section aria-labelledby="sessions-title" className="v2-block">
        <div className="v2-block-head">
          <p className="v2-eyebrow">Choose a session</p>
          <h2 className="v2-h2" id="sessions-title">Sessions, <em>chosen by need</em></h2>
        </div>
        <div className="v2-cards">
          {featured.map((s) => (
            <article key={s.slug} className="svc-card">
              <Link className="svc-media" to={`/services/${s.slug}`} tabIndex={-1} aria-hidden="true">
                <span className="svc-img" style={artStyle(s.slug)} />
              </Link>
              <div className="svc-chips">
                <span>{s.group === 'full' ? 'Full body' : 'Targeted'}</span>
                <span>From {formatPrice(fromPrice(s))}</span>
              </div>
              <h3 className="svc-title"><Link to={`/services/${s.slug}`}>{s.name}</Link></h3>
              <p className="svc-desc">{s.bestFor}.</p>
              <div className="svc-foot">
                <Link className="svc-btn svc-btn--line" to={`/services/${s.slug}`}>Details</Link>
                <a className="svc-btn svc-btn--solid" href={waLink(bookingMessage(s.name))} target="_blank" rel="noopener noreferrer">Book</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRICE LIST */}
      <section aria-labelledby="price-title" className="v2-block">
        <div className="v2-ledger-wrap">
          <div className="v2-ledger-head">
            <div>
              <p className="v2-eyebrow">Price list</p>
              <h2 className="v2-h2" id="price-title">Rates, <em>written down</em></h2>
            </div>
            <Link className="v2-btn v2-btn--line" to="/prices">Full price list</Link>
          </div>
          <ul className="v2-ledger">
            {fullBodyRates.map((r) => (
              <li key={`full-${r.minutes}`} className="v2-ledger-row">
                <span className="name">Full body <em className="v2-badge">Full body</em></span>
                <small>{r.minutes} min</small>
                <span className="dots" aria-hidden="true" />
                <strong>{formatPrice(r.price)}</strong>
              </li>
            ))}
            {shortSessions.map(({ service: s, price }) => (
              <li key={s.slug} className="v2-ledger-row">
                <span className="name">{s.name} <em className="v2-badge">Targeted</em></span>
                <small>30 min</small>
                <span className="dots" aria-hidden="true" />
                <strong>{formatPrice(price)}</strong>
              </li>
            ))}
          </ul>
          <p className="v2-note">Starting from {formatPrice(fromPrice(getService('full-body-massage')))}. Prices as listed on this website.</p>
        </div>
      </section>

      {/* STEPS */}
      <section aria-labelledby="steps-title" className="v2-block">
        <p className="v2-eyebrow">How a visit works</p>
        <h2 className="v2-h2" id="steps-title">Three steps, <em>no surprises</em></h2>
        <div className="v2-steps">
          <article className="v2-step">
            <span className="big" aria-hidden="true">01</span>
            <h3>Message us</h3>
            <p>Tell us the session you want and a time that works. We reply on WhatsApp to confirm.</p>
          </article>
          <article className="v2-step">
            <span className="big" aria-hidden="true">02</span>
            <h3>Talk it through</h3>
            <p>Your therapist asks a few questions about where it hurts, so the technique and pressure suit you.</p>
          </article>
          <article className="v2-step">
            <span className="big" aria-hidden="true">03</span>
            <h3>Leave lighter</h3>
            <p>Relax for the full session, then head out with a simple tip you can use at home that evening.</p>
          </article>
        </div>
      </section>

      {/* GALLERY: session photos from our own set. Not photos of staff. */}
      <section aria-labelledby="gallery-title" className="v2-block">
        <p className="v2-eyebrow">Massage, shown by example</p>
        <h2 className="v2-h2" id="gallery-title">A session, <em>step by step</em></h2>
        <p className="v2-lede" style={{ marginTop: 14, maxWidth: 560 }}>These are illustrative images to show how a session looks. They are not photos of our staff.</p>
        <ul className="v2-gallery" role="list">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <li key={n} className="v2-gallery-item">
              <img src={`/images/illustrative/illustrative-${n}.webp`} alt="A massage session at Professional Spa" width="600" height="800" loading="lazy" decoding="async" />
              <span className="v2-gallery-cap">Massage session</span>
            </li>
          ))}
        </ul>
      </section>

      {/* OFFERS (renders only when a real offer is running) */}
      <OfferCards />

      {/* BOOKING */}
      <section aria-labelledby="book-title" id="booking" style={{ padding: 'var(--v2-pad) 0' }}>
        <div className="v2-book">
          <div className="v2-book-grid">
            <div>
              <p className="v2-eyebrow" style={{ color: 'var(--v2-rose-soft)' }}>Book a session</p>
              <h2 className="v2-h2" id="book-title">Pick a time, <em>we will confirm</em></h2>
              <p className="intro">Fill in the form and we open a WhatsApp message with your details. Or message us directly.</p>
              <div className="v2-actions">
                <a className="v2-btn v2-btn--rose" href={waStart} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
                <a className="v2-btn v2-btn--line" href={business.phoneHref}><Phone aria-hidden="true" />Call</a>
              </div>
            </div>
            <div style={{ color: 'var(--v2-plum)' }}>
              <BookingForm className="booking-form" id="booking-form" />
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section aria-labelledby="visit-title" className="v2-block">
        <div className="v2-visit">
          <div>
            <p className="v2-eyebrow">Visit us</p>
            <h2 className="v2-h2" id="visit-title">Find us in <em>Civic Center</em></h2>
            <address className="v2-address">
              <strong style={{ fontWeight: 600 }}>{business.name}</strong><br />
              {business.address.street}<br />
              {business.address.city}, {business.address.region}
            </address>
            <p className="v2-note" style={{ fontSize: 15 }}>{formatHours(business.hours[0])}, every day</p>
            <div className="v2-actions">
              <a className="v2-btn v2-btn--solid" href={business.phoneHref}>Call {business.phone}</a>
              <Link className="v2-btn v2-btn--line" to="/contact">Contact page</Link>
            </div>
          </div>
          <div className="v2-map"><MapEmbed /></div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="v2-block">
        <div className="v2-faq-grid">
          <div>
            <p className="v2-eyebrow">Questions</p>
            <h2 className="v2-h2" id="faq-title">Before you <em>come in</em></h2>
          </div>
          <div className="v2-faq">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

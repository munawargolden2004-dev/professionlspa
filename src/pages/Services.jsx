import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import JsonLd from '../components/seo/JsonLd'
import PageHero from '../components/ui/PageHero'
import { absUrl } from '../components/seo/Seo'
import { business, waLink, bookingMessage } from '../data/business'
import { services, fullBodyServices, targetedServices, fullBodyRates, fromPrice, formatPrice } from '../data/services'
import { artStyle } from '../data/photos'
import '../styles/svc-cards.css'

function Card({ s, label }) {
  return (
    <article className="svc-card">
      <Link className="svc-media" to={`/services/${s.slug}`} tabIndex={-1} aria-hidden="true">
        <span className="svc-img" style={artStyle(s.slug)} />
      </Link>
      <div className="svc-chips">
        <span>{label}</span>
        <span>{s.rates[0].minutes} min</span>
        <span>Bahria Town</span>
      </div>
      <h3 className="svc-title"><Link to={`/services/${s.slug}`}>{s.name}</Link></h3>
      <p className="svc-sub">From {formatPrice(fromPrice(s))}</p>
      <p className="svc-desc">{s.bestFor}.</p>
      <div className="svc-foot">
        <Link className="svc-btn svc-btn--line" to={`/services/${s.slug}`}>Details</Link>
        <Link className="svc-btn svc-btn--solid" to={`/services/${s.slug}`}>See prices</Link>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <div className="page v2">
      <Seo
        title="Spa & Massage Services in Bahria Town, Rawalpindi | Professional Spa"
        description="Thai, deep tissue, Swedish, aromatherapy, hot stone and sports massage in Civic Center, Bahria Town Phase 4. Plus back, neck, head and foot sessions."
        path="/services"
      />
      <BreadcrumbSchema items={[{ name: 'Services', path: '/services' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: `${business.name} massage services`,
          itemListElement: services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.name,
            url: absUrl(`/services/${s.slug}`),
          })),
        }}
      />
      <PageHero
        crumbs={[{ name: 'Services' }]}
        light="Massage services,"
        bold="chosen by need"
        intro="Full-body sessions share one rate card. Targeted sessions focus on one area and are a shorter, lower-cost first visit."
      />
      <ul className="v2-trust" style={{ margin: '0 var(--v2-gutter) 8px' }} aria-label="Why book with us">
        <li>Every price is listed before you arrive</li>
        <li>Book in a minute on WhatsApp, and we confirm your slot</li>
        <li>Open 24 hours, every day of the week</li>
      </ul>

      <section className="v2-block" aria-labelledby="full-title">
        <div className="v2-block-head">
          <p className="v2-eyebrow">Full-body</p>
          <h2 className="v2-h3" id="full-title">One rate card, <em>{fullBodyServices.length} styles</em></h2>
          <p className="v2-lede">Pick the style that suits you. The price depends only on the length of the session.</p>
        </div>
        <div className="v2-tiles" style={{ marginBottom: 36 }}>
          {fullBodyRates.map((r) => (
            <div key={r.minutes} className="v2-tile">
              <strong>{formatPrice(r.price)}</strong>
              <span>{r.minutes} minutes</span>
            </div>
          ))}
        </div>
        <div className="v2-cards">
          {fullBodyServices.map((s) => <Card key={s.slug} s={s} label="Full-body" />)}
        </div>
      </section>

      <section className="v2-block" aria-labelledby="targeted-title" style={{ paddingTop: 0 }}>
        <div className="v2-block-head">
          <p className="v2-eyebrow">Targeted</p>
          <h2 className="v2-h3" id="targeted-title">Focused on <em>one area</em></h2>
          <p className="v2-lede">Shorter sessions for the neck, back, shoulders and feet. Each has its own rates.</p>
        </div>
        <div className="v2-cards">
          {targetedServices.map((s) => <Card key={s.slug} s={s} label="Targeted" />)}
        </div>
        <p style={{ marginTop: 36 }}>
          <Link className="v2-btn v2-btn--solid" to="/prices">See the full price list</Link>
        </p>
      </section>

      <section className="v2-band" aria-labelledby="svc-band">
        <div>
          <p className="v2-eyebrow">Not sure which one?</p>
          <h2 className="v2-h3" id="svc-band">Tell us where it hurts, <em>we will suggest a session</em></h2>
        </div>
        <div className="v2-actions">
          <Link className="v2-btn v2-btn--line" to="/pain-map">Open the pain map</Link>
          <a className="v2-btn v2-btn--solid" href={waLink(bookingMessage())} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import Seo, { absUrl } from '../components/seo/Seo'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import JsonLd from '../components/seo/JsonLd'
import PageHero from '../components/ui/PageHero'
import { business, waLink, bookingMessage } from '../data/business'
import { services, fullBodyServices, targetedServices, fullBodyRates, formatPrice, minPrice } from '../data/services'
import { artStyle } from '../data/photos'
import '../styles/svc-cards.css'

const ASK = 'Please ask when you book and we will tell you before you come.'
const policy = (v) => v || ASK

export default function Prices() {
  const notes = [
    ['Tax', policy(business.policies.tax)],
    ['Cancellation', policy(business.policies.cancellation)],
    ['Tipping', policy(business.policies.tipping)],
    ['Walk-ins', policy(business.policies.walkIns)],
  ]
  // Shorter treatments first: the lowest barrier to a first visit.
  const targeted = [...targetedServices].sort((a, b) => a.rates[0].price - b.rates[0].price)

  return (
    <div className="page v2">
      <Seo
        title="Massage Price in Bahria Town: Full Rate List | Professional Spa"
        description={`Massage price in Bahria Town at Professional Spa, Civic Center Phase 4. Full body from ${formatPrice(fullBodyRates[0].price)}, targeted sessions from ${formatPrice(minPrice)}. Full rate list.`}
        path="/prices"
      />
      <BreadcrumbSchema items={[{ name: 'Prices', path: '/prices' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'OfferCatalog',
          name: `${business.name} massage price list`,
          url: absUrl('/prices'),
          itemListElement: services.map((s) => ({
            '@type': 'OfferCatalog',
            name: s.name,
            itemListElement: s.rates.map((r) => ({
              '@type': 'Offer',
              name: `${s.name}, ${r.minutes} minutes`,
              price: r.price,
              priceCurrency: 'PKR',
              itemOffered: { '@type': 'Service', name: s.name, url: absUrl(`/services/${s.slug}`) },
            })),
          })),
        }}
      />
      <PageHero
        crumbs={[{ name: 'Prices' }]}
        light="Massage price in"
        bold="Bahria Town, all on one page"
        intro={`Every price is listed here before you book. Full-body sessions share one rate card from ${formatPrice(fullBodyRates[0].price)}. Targeted sessions start from ${formatPrice(minPrice)}. Last updated ${business.pricesUpdated}.`}
      />
      <ul className="v2-trust" style={{ margin: '0 var(--v2-gutter) 8px' }} aria-label="Why book with us">
        <li>Every price is listed before you arrive</li>
        <li>Book in a minute on WhatsApp, and we confirm your slot</li>
        <li>Open 24 hours, every day of the week</li>
      </ul>

      <section className="v2-block" aria-labelledby="fb-title">
        <div className="v2-block-head">
          <p className="v2-eyebrow">Full-body</p>
          <h2 className="v2-h3" id="fb-title">Same rates, <em>any style</em></h2>
          <p className="v2-lede">{fullBodyServices.map((s) => s.name).join(', ')}.</p>
        </div>
        <div className="v2-tiles">
          {fullBodyRates.map((r) => (
            <div key={r.minutes} className="v2-tile">
              <strong>{formatPrice(r.price)}</strong>
              <span>{r.minutes} minutes</span>
            </div>
          ))}
        </div>
      </section>

      <section className="v2-block" aria-labelledby="tg-title" style={{ paddingTop: 0 }}>
        <div className="v2-block-head">
          <p className="v2-eyebrow">Targeted</p>
          <h2 className="v2-h3" id="tg-title">Each has <em>its own rates</em></h2>
        </div>
        <div className="v2-cards">
          {targeted.map((s) => (
            <article key={s.slug} className="svc-card svc-card--compact">
              <Link className="svc-media" to={`/services/${s.slug}`} tabIndex={-1} aria-hidden="true">
                <span className="svc-img" style={artStyle(s.slug)} />
              </Link>
              <div className="svc-chips">
                <span>Targeted</span>
                <span>From {formatPrice(s.rates[0].price)}</span>
              </div>
              <h3 className="svc-title"><Link to={`/services/${s.slug}`}>{s.name}</Link></h3>
              <p className="svc-desc">{s.bestFor}.</p>
              <table className="v2-table">
                <tbody>
                  {s.rates.map((r) => (
                    <tr key={r.minutes}><th scope="row">{r.minutes} min</th><td>{formatPrice(r.price)}</td></tr>
                  ))}
                </tbody>
              </table>
              <div className="svc-foot">
                <a className="svc-btn svc-btn--solid" href={waLink(bookingMessage(s.name))} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-block" aria-labelledby="notes-title" style={{ paddingTop: 0 }}>
        <div className="v2-block-head">
          <p className="v2-eyebrow">Good to know</p>
          <h2 className="v2-h3" id="notes-title">Before you <em>come in</em></h2>
        </div>
        <dl className="v2-notes">
          {notes.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p style={{ marginTop: 36 }}>
          <Link className="v2-btn v2-btn--rose" to="/contact">Book a session</Link>
        </p>
      </section>

      <section className="v2-band" aria-labelledby="prices-band">
        <div>
          <p className="v2-eyebrow">Not sure which price?</p>
          <h2 className="v2-h3" id="prices-band">Pick a session by <em>area or by length</em></h2>
        </div>
        <div className="v2-actions">
          <Link className="v2-btn v2-btn--line" to="/services">Compare sessions</Link>
          <a className="v2-btn v2-btn--solid" href={waLink(bookingMessage())} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
        </div>
      </section>
    </div>
  )
}

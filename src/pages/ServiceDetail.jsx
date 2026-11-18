import { Link, useParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import ServiceSchema from '../components/seo/ServiceSchema'
import PageHero from '../components/ui/PageHero'
import NotFound from './NotFound'
import { business, waLink, bookingMessage } from '../data/business'
import { content, commonSkip, skipClosing, leads } from '../data/service-content'
import { RichText } from '../lib/richText'
import { serviceTitle, serviceLocation } from '../lib/seoTitles'
import { getService, fromPrice, formatPrice } from '../data/services'
import { artStyle } from '../data/photos'
import '../styles/svc-detail.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  const c = content[slug]
  if (!service || !c) return <NotFound />

  const full = service.group === 'full'
  const from = fromPrice(service)
  const location = serviceLocation(slug)
  const description = c.metaLead
    ? `${c.metaLead} From ${formatPrice(from)} for ${service.rates[0].minutes} minutes.`
    : `${service.name} at Professional Spa, Civic Center, Bahria Town Phase 4. ${service.bestFor}. From ${formatPrice(from)} for ${service.rates[0].minutes} minutes.`
  // H1 keeps the searched wording. The menu calls Swedish massage "Swedish Relaxing Massage".
  const h1Name = slug === 'swedish-massage' ? 'Swedish Massage' : service.name
  const book = (min) => waLink(bookingMessage(min ? `${service.name} (${min} minutes)` : service.name))
  const path = `/services/${service.slug}`
  const crumb = [{ name: 'Services', path: '/services' }, { name: service.name, path }]

  return (
    <div className="page v2 svc-page">
      <Seo title={serviceTitle(slug)} description={description} path={path} />
      <BreadcrumbSchema items={crumb} />
      <ServiceSchema service={service} description={description} />

      <PageHero
        crumbs={[{ name: 'Services', to: '/services' }, { name: service.name }]}
        light={h1Name}
        bold={`in ${location}`}
        intro={leads[slug]}
      />

      <section className="v2-block" aria-labelledby="about-title" style={{ paddingTop: 0 }}>
        <div className="v2-split">
          <div className="v2-prose">
            <p className="v2-eyebrow">About this massage</p>
            <h2 className="v2-h3" id="about-title" style={{ marginBottom: 24 }}>What to <em>expect</em></h2>
            {c.intro.map((p, i) => <p key={i}><RichText text={p} /></p>)}
            {c.note && <p className="v2-note" style={{ fontSize: 15, marginTop: 24 }}>{c.note}</p>}
            <h3 className="v2-h3" style={{ fontSize: 28, marginTop: 40 }}>Best for</h3>
            <ul className="v2-ticks" style={{ marginTop: 18 }}>
              {c.best.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>

          <aside className="svc-price-glass" aria-labelledby="price-title">
            <p className="svc-price-eyebrow">Duration &amp; price</p>
            <h2 id="price-title" className="svc-price-title">
              {full ? 'One rate card for all full-body' : 'Targeted session'}
            </h2>
            <table className="svc-price-table">
              <tbody>
                {service.rates.map((r) => (
                  <tr key={r.minutes}>
                    <th scope="row">{r.minutes} minutes</th>
                    <td>{formatPrice(r.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="svc-price-actions">
              {service.rates.map((r) => (
                <a key={r.minutes} className="v2-btn v2-btn--rose" href={book(r.minutes)} target="_blank" rel="noopener noreferrer">
                  Book {r.minutes} min
                </a>
              ))}
            </div>
            <p className="svc-price-note">
              Opens WhatsApp with this treatment filled in. We confirm your slot there. Phone: {business.phone}.
            </p>
          </aside>
        </div>
      </section>

      <section className="v2-block" aria-labelledby="steps-title" style={{ paddingTop: 0 }}>
        <div className="v2-block-head">
          <p className="v2-eyebrow">During the session</p>
          <h2 className="v2-h3" id="steps-title">How a visit <em>unfolds</em></h2>
        </div>
        <ol className="v2-list" style={{ maxWidth: 780 }}>
          {c.steps.map((t) => (
            <li key={t}><div><span>{t}</span></div></li>
          ))}
        </ol>
      </section>

      <section className="v2-block" aria-labelledby="safety-title" style={{ paddingTop: 0 }}>
        <dl className="v2-notes">
          <div>
            <dt>Who should skip this</dt>
            <dd>
              Please do not book, or check with your doctor first, if:
              <ul className="v2-ticks" style={{ marginTop: 12, gridTemplateColumns: '1fr' }}>
                {[...commonSkip, ...c.skip].map((t) => <li key={t}>{t}</li>)}
              </ul>
              <span style={{ display: 'block', marginTop: 14 }}>{skipClosing}</span>
            </dd>
          </div>
          <div>
            <dt>Aftercare</dt>
            <dd>{c.aftercare}</dd>
          </div>
        </dl>
      </section>

      <section className="v2-block" aria-labelledby="related-title" style={{ paddingTop: 0 }}>
        <div className="v2-block-head">
          <p className="v2-eyebrow">You might also like</p>
          <h2 className="v2-h3" id="related-title">Related <em>sessions</em></h2>
        </div>
        <div className="v2-cards">
          {c.related.map((rs) => {
            const r = getService(rs)
            return (
              <article key={rs} className="v2-card">
                <div className="art has-photo" style={artStyle(rs)} aria-hidden="true" />
                <p className="kicker">{r.group === 'full' ? 'Full-body' : 'Targeted'}</p>
                <h3><Link to={`/services/${rs}`}>{r.name}</Link></h3>
                <p>{r.bestFor}.</p>
                <div className="foot">
                  <p className="price"><small>from</small>{formatPrice(fromPrice(r))}</p>
                  <Link className="v2-btn v2-btn--line" to={`/services/${rs}`}>Details</Link>
                </div>
              </article>
            )
          })}
        </div>
        <p style={{ marginTop: 36, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a className="v2-btn v2-btn--solid" href={book()} target="_blank" rel="noopener noreferrer">Book {service.name} on WhatsApp</a>
          <Link className="v2-btn v2-btn--line" to="/prices">See all prices</Link>
        </p>
      </section>
    </div>
  )
}

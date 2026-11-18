import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import PageHero from '../components/ui/PageHero'
import { business, waLink, bookingMessage } from '../data/business'
import { getService, formatPrice, fromPrice } from '../data/services'
import { views, zones } from '../data/pain-zones'
import '../styles/pain-map.css'

const path = '/pain-map'

export default function PainMap() {
  const [view, setView] = useState('back')
  const [activeId, setActiveId] = useState('lower-back')
  const current = views[view]
  const visible = zones.filter((z) => z.view === view)
  const zone = zones.find((z) => z.id === activeId) || visible[0]
  const service = zone ? getService(zone.service) : null
  const book = service ? waLink(bookingMessage(service.name)) : waLink(bookingMessage())

  const switchView = (v) => {
    setView(v)
    const first = zones.find((z) => z.view === v)
    if (first) setActiveId(first.id)
  }

  return (
    <div className="page v2 pm-page">
      <Seo
        title="Body Pain Map: Massage by Area | Professional Spa"
        description="Use this body pain map to pick the area that feels tight. See which massage style may help ease tension there, at Professional Spa in Bahria Town Phase 4, Rawalpindi."
        path={path}
      />
      <BreadcrumbSchema items={[{ name: 'Pain map', path }]} />
      <PageHero
        crumbs={[{ name: 'Pain map' }]}
        light="Body pain map:"
        bold="massage by area"
        intro="Use this body pain map to find the area that feels tight. Tap a point on the figure to see which massage may help ease tension there, and book the session on WhatsApp."
      />
      <ul className="v2-trust" style={{ margin: '0 var(--v2-gutter) 8px' }} aria-label="Why book with us">
        <li>Every price is listed before you arrive</li>
        <li>Book in a minute on WhatsApp, and we confirm your slot</li>
        <li>Open 24 hours, every day of the week</li>
      </ul>

      <section className="v2-block" aria-labelledby="pm-title" style={{ paddingTop: 0 }}>
        <h2 id="pm-title" className="sr-only">Body pain map</h2>

        <div className="pm-toggle" role="group" aria-label="Choose the view of the body">
          {Object.entries(views).map(([key, v]) => (
            <button
              key={key}
              type="button"
              className={`pm-tab${view === key ? ' is-on' : ''}`}
              aria-pressed={view === key}
              onClick={() => switchView(key)}
            >
              {v.label}
            </button>
          ))}
        </div>

        <div className="pm-grid">
          <figure className="pm-figure">
            <img src={current.src} alt={`Anatomy ${current.label.toLowerCase()} of the body. Select a marked area to read about it.`} width="900" height="1200" loading="lazy" decoding="async" />
            {visible.map((z) => (
              <button
                key={z.id}
                type="button"
                className={`pm-dot${zone && zone.id === z.id ? ' is-on' : ''}`}
                style={{ left: `${z.x}%`, top: `${z.y}%` }}
                aria-label={`${z.name}`}
                aria-pressed={zone && zone.id === z.id}
                onClick={() => setActiveId(z.id)}
              >
                <span className="pm-label">{z.name}</span>
              </button>
            ))}
          </figure>

          {zone && (
            <article className="pm-panel" aria-live="polite">
              <p className="v2-eyebrow">{zone.name}</p>
              <h2 className="v2-h3 pm-title">Massage that suits <em>this area</em></h2>
              <img className="pm-photo" src={zone.photo} alt={`${zone.name}: massage on this area`} width="900" height="900" loading="lazy" decoding="async" />
              <p className="pm-text">{zone.text}</p>
              <p className="pm-rec">
                Suggested: <strong>{zone.massage}</strong>
                {service && <> · from {formatPrice(fromPrice(service))}</>}
              </p>
              <div className="v2-actions">
                {service && <Link className="v2-btn v2-btn--line" to={`/services/${service.slug}`}>See {service.name}</Link>}
                <a className="v2-btn v2-btn--solid" href={book} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
              </div>
              <p className="pm-note">Massage may help ease tension and stiffness. For pain that does not go away, or comes with swelling, numbness or weakness, speak to a doctor first. Phone: {business.phone}.</p>
            </article>
          )}
        </div>
      </section>

      <section className="v2-block" aria-labelledby="pm-how" style={{ paddingTop: 0 }}>
        <div className="v2-block-head">
          <p className="v2-eyebrow">How it works</p>
          <h2 className="v2-h3" id="pm-how">Choose the area, then <em>the session</em></h2>
        </div>
        <div className="v2-split">
          <div className="v2-prose">
            <p>Start by choosing the view, front or back, and tap the point where you feel tightness. Each point names the area, and explains in plain words how that kind of tension is often felt.</p>
            <p>Next, read the suggested massage. A firm style such as <Link to="/services/deep-tissue-massage">deep tissue</Link> suits knots that come back. A gentler style such as <Link to="/services/swedish-massage">Swedish massage</Link> suits a first visit or general tension.</p>
          </div>
          <div className="v2-prose">
            <p>If you are not sure what to choose, send us a WhatsApp message and tell us the area. We will suggest a session, and you can see every price on the <Link to="/prices">prices page</Link> before you arrive.</p>
            <p>This map gives general guidance only. It is not a diagnosis. For pain that lasts, or that comes with swelling, numbness or weakness, please speak to a doctor.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

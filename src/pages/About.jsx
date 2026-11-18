import Seo, { absUrl } from '../components/seo/Seo'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import JsonLd from '../components/seo/JsonLd'
import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'
import { business, waLink, bookingMessage } from '../data/business'
import { team } from '../data/team'

// Only facts the owner has confirmed appear here. Add staff and policies on business.js / team.js once confirmed.
const STEPS = [
  ['Tell us what you need', 'Choose a full-body session or a targeted one, and send a time on WhatsApp.'],
  ['We confirm your slot', 'We reply to confirm the time and answer any questions before you come.'],
  ['Relax at your own pace', 'Speak up at any point if the pressure or the technique is not right for you.'],
]

export default function About() {
  const a = business.address
  return (
    <div className="page v2">
      <Seo
        title="About Professional Spa | Civic Center, Bahria Town Phase 4"
        description="Professional Spa is a massage and spa centre in Civic Center, Bahria Town Phase 4, Rawalpindi. Open 24 hours, with prices published on the website."
        path="/about"
      />
      <BreadcrumbSchema items={[{ name: 'About', path: '/about' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: `About ${business.name}`,
          url: absUrl('/about'),
          about: { '@id': `${business.domain}/#business` },
        }}
      />
      <PageHero crumbs={[{ name: 'About' }]} light="About" bold="Professional Spa" />
      <ul className="v2-trust" style={{ margin: '0 var(--v2-gutter) 8px' }} aria-label="Why book with us">
        <li>Every price is listed before you arrive</li>
        <li>Book in a minute on WhatsApp, and we confirm your slot</li>
        <li>Open 24 hours, every day of the week</li>
      </ul>

      <section className="v2-block" aria-labelledby="who-title">
        <div className="v2-split">
          <div>
            <p className="v2-eyebrow">Who we are</p>
            <h2 className="v2-h3" id="who-title">A massage centre in <em>Civic Center</em></h2>
            <div className="v2-prose" style={{ marginTop: 24 }}>
              <p>
                Professional Spa is a massage and spa centre in {a.street}, {a.city}. We offer Thai, deep-tissue, Swedish,
                aromatherapy, hot-stone and sports massage, plus shorter back, neck, head and foot sessions.
              </p>
              <p>
                We are open 24 hours a day, seven days a week. Every price is published on the website before you come in.
              </p>
            </div>
          </div>
          <aside className="v2-panel" aria-label="Visit us">
            <p className="v2-eyebrow" style={{ color: 'var(--v2-rose-soft)' }}>Visit us</p>
            <address>
              <strong style={{ fontWeight: 600 }}>{business.name}</strong><br />
              {a.street}<br />{a.city}, {a.region}
            </address>
            <p>Phone: {business.phone}</p>
            <div className="v2-actions">
              <a className="v2-btn v2-btn--rose" href={waLink(bookingMessage())} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
              <Link className="v2-btn v2-btn--line" to="/contact">Directions &amp; hours</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="v2-block" aria-labelledby="steps-title" style={{ paddingTop: 0 }}>
        <div className="v2-block-head">
          <p className="v2-eyebrow">Your visit</p>
          <h2 className="v2-h3" id="steps-title">Three steps, <em>no surprises</em></h2>
        </div>
        <ol className="v2-list" style={{ maxWidth: 760 }}>
          {STEPS.map(([t, d]) => (
            <li key={t}>
              <div>
                <strong>{t}</strong>
                <span>{d}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {team.length > 0 && (
        <section className="v2-block" aria-labelledby="team-title" style={{ paddingTop: 0 }}>
          <div className="v2-block-head">
            <p className="v2-eyebrow">Our therapists</p>
            <h2 className="v2-h3" id="team-title">The people <em>behind your session</em></h2>
          </div>
          <div className="v2-cards">
            {team.map((m) => (
              <article key={m.name} className="v2-card">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
                {m.training && <p>{m.training}</p>}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="v2-block" aria-label="Book" style={{ paddingTop: 0 }}>
        <p>
          <a className="v2-btn v2-btn--rose" href={waLink(bookingMessage())} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>{' '}
          <Link className="v2-btn v2-btn--line" to="/prices">See all prices</Link>
        </p>
      </section>
    </div>
  )
}

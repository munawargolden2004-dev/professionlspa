import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo, { absUrl } from '../components/seo/Seo'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import FaqSchema from '../components/seo/FaqSchema'
import JsonLd from '../components/seo/JsonLd'
import PageHero from '../components/ui/PageHero'
import ContactForm from '../components/sections/ContactForm'
import MapEmbed, { mapLinks } from '../components/sections/MapEmbed'
import { business, formatHours, waLink, bookingMessage } from '../data/business'
import { faqs } from '../data/faqs'

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function Contact() {
  const a = business.address
  const [today, setToday] = useState('')
  useEffect(() => setToday(DAYS[new Date().getDay()]), [])

  const directions = mapLinks().directions

  return (
    <div className="page v2">
      <Seo
        title="Massage Centre Civic Center Bahria Town | Professional Spa"
        description="Contact Professional Spa in Civic Center, Bahria Town Phase 4, Rawalpindi. Call, message on WhatsApp or send the booking form. Open 24 hours."
        path="/contact"
      />
      <BreadcrumbSchema items={[{ name: 'Contact', path: '/contact' }]} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${business.name}`, url: absUrl('/contact'), about: { '@id': `${business.domain}/#business` } }} />
      <FaqSchema faqs={faqs} />
      <PageHero
        crumbs={[{ name: 'Contact' }]}
        light="Massage centre in"
        bold="Civic Center, Bahria Town"
        intro="Call, message us on WhatsApp, or send the form. We are open 24 hours a day."
      />
      <ul className="v2-trust" style={{ margin: '0 var(--v2-gutter) 8px' }} aria-label="Why book with us">
        <li>Every price is listed before you arrive</li>
        <li>Book in a minute on WhatsApp, and we confirm your slot</li>
        <li>Open 24 hours, every day of the week</li>
      </ul>

      <section className="v2-block" aria-labelledby="visit-title" style={{ paddingTop: 0 }}>
        <div className="v2-split">
          <div>
            <aside className="v2-panel" aria-labelledby="visit-title">
              <p className="v2-eyebrow" style={{ color: 'var(--v2-rose-soft)' }}>Visit or call</p>
              <h2 id="visit-title" className="v2-h3" style={{ color: 'var(--v2-cream)', marginTop: 12 }}>{business.name}</h2>
              <address style={{ marginTop: 16 }}>
                {a.street}<br />{a.city}, {a.region}
              </address>
              <div className="v2-actions">
                <a className="v2-btn v2-btn--rose" href={business.phoneHref}>Call {business.phone}</a>
                <a className="v2-btn v2-btn--line" href={waLink(bookingMessage())} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a className="v2-btn v2-btn--line" href={directions} target="_blank" rel="noopener noreferrer">Directions</a>
              </div>
            </aside>

            <h2 className="v2-h3" style={{ fontSize: 30, marginTop: 40 }}>Opening hours</h2>
            <table className="v2-table" style={{ marginTop: 14 }}>
              <tbody>
                {business.hours.flatMap((h) =>
                  h.days.map((d) => (
                    <tr key={d} className={d === today ? 'is-today' : undefined}>
                      <th scope="row">{d}{d === today ? ' (today)' : ''}</th>
                      <td>{formatHours(h)}</td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>

          <div className="v2-formcard">
            <p className="v2-eyebrow">Request a booking</p>
            <h2 className="v2-h3" style={{ fontSize: 34, marginTop: 12 }}>Tell us <em>when suits you</em></h2>
            <p className="v2-lede" style={{ marginBottom: 24 }}>
              The form opens WhatsApp with your details ready to send. We confirm your slot there.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="v2-block" aria-label="Map" style={{ paddingTop: 0 }}>
        <div className="v2-map"><MapEmbed /></div>
      </section>

      <section className="v2-block" aria-labelledby="faq-title" style={{ paddingTop: 0 }}>
        <div className="v2-block-head">
          <p className="v2-eyebrow">Questions</p>
          <h2 className="v2-h3" id="faq-title">Common <em>questions</em></h2>
        </div>
        <div className="v2-faq" style={{ maxWidth: 820 }}>
          {faqs.map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
        <p style={{ marginTop: 32 }}>
          <Link className="v2-btn v2-btn--line" to="/prices">See all prices</Link>
        </p>
      </section>
    </div>
  )
}

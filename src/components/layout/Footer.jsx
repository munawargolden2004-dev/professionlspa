import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { business, formatHours, hoursLabel } from '../../data/business'
import { fullBodyServices, targetedServices } from '../../data/services'

export default function Footer() {
  const a = business.address
  return (
    <footer className="site-footer v2-footer">
      <div className="v2-footer-top">
        <div>
          <Link to="/" className="logo">Professional <span>Spa</span></Link>
          <p className="v2-footer-lede">
            Massage and spa in Civic Center, Bahria Town Phase 4. Open 24 hours, with every price published on the website.
          </p>
          <Link className="v2-btn v2-btn--rose" to="/contact">Book a session</Link>
        </div>
        <div>
          <p className="foot-h">Full-body</p>
          <ul>
            {fullBodyServices.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="foot-h">Targeted</p>
          <ul>
            {targetedServices.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
            <li><Link to="/prices">All prices</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </div>
        <div>
          <p className="foot-h">Contact</p>
          <address>
            {a.street}<br />
            {a.city}, {a.region}<br />
            <a href={business.phoneHref}>{business.phone}</a><br />
            <a href={`mailto:${business.email}`}>{business.email}</a><br />
            {business.hours.map((h) => (
              <Fragment key={h.days[0]}>
                {hoursLabel(h)}: {formatHours(h)}<br />
              </Fragment>
            ))}
          </address>
        </div>
      </div>
      <p className="copy">
        © {new Date().getFullYear()} {business.name}, Bahria Town, Rawalpindi. Prices updated {business.pricesUpdated}.
      </p>
    </footer>
  )
}

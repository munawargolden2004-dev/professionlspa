import { Link } from 'react-router-dom'
import Seo, { absUrl } from '../components/seo/Seo'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import JsonLd from '../components/seo/JsonLd'
import PageHero from '../components/ui/PageHero'
import { business } from '../data/business'
import { posts, readMinutes } from '../data/blog'
import { artStyle } from '../data/photos'
import '../styles/svc-cards.css'

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export default function Blog() {
  return (
    <div className="page v2">
      <Seo
        title="Massage & Pain Relief Blog | Professional Spa Bahria Town"
        description="Short, practical articles on massage, back pain, sleep and recovery from Professional Spa in Civic Center, Bahria Town."
        path="/blog"
      />
      <BreadcrumbSchema items={[{ name: 'Blog', path: '/blog' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: `${business.name} blog`,
          url: absUrl('/blog'),
          blogPost: posts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: absUrl(`/blog/${p.slug}`),
            datePublished: p.datePublished,
          })),
        }}
      />
      <PageHero
        crumbs={[{ name: 'Blog' }]}
        light="Reading on"
        bold="massage"
        intro="Short, plain answers to common questions about massage, back pain, sleep and choosing a session."
      />
      <ul className="v2-trust" style={{ margin: '0 var(--v2-gutter) 8px' }} aria-label="Why book with us">
        <li>Every price is listed before you arrive</li>
        <li>Book in a minute on WhatsApp, and we confirm your slot</li>
        <li>Open 24 hours, every day of the week</li>
      </ul>
      <section className="v2-block" aria-label="Articles">
        <div className="v2-cards">
          {posts.map((p) => (
            <article key={p.slug} className="svc-card">
              <Link className="svc-media" to={`/blog/${p.slug}`} tabIndex={-1} aria-hidden="true">
                <span className="svc-img" style={artStyle(p.slug)} />
              </Link>
              <div className="svc-chips">
                <span>{formatDate(p.datePublished)}</span>
                <span>{readMinutes(p)} min read</span>
              </div>
              <h2 className="svc-title" style={{ fontSize: 'clamp(26px, 2.6vw, 32px)' }}>
                <Link to={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p className="svc-desc">{p.description}</p>
              <div className="svc-foot">
                <Link className="svc-btn svc-btn--line" to={`/blog/${p.slug}`}>Read article</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-band" aria-labelledby="blog-band">
        <div>
          <p className="v2-eyebrow">Ready to book?</p>
          <h2 className="v2-h3" id="blog-band">Read more, or <em>book a session</em></h2>
        </div>
        <div className="v2-actions">
          <Link className="v2-btn v2-btn--line" to="/prices">See prices</Link>
          <Link className="v2-btn v2-btn--solid" to="/services">Browse sessions</Link>
        </div>
      </section>
    </div>
  )
}

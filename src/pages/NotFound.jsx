import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'

export default function NotFound() {
  return (
    <div className="page v2">
      <Head>
        <title>Page not found | Professional Spa</title>
        <meta name="robots" content="noindex" />
      </Head>
      <section className="v2-block" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', paddingTop: 'calc(var(--hh, 72px) + 60px)' }}>
        <div style={{ position: 'relative' }}>
          <p className="v2-eyebrow">Page not found</p>
          <h1 className="v2-ph-title" style={{ marginTop: 18 }}>This page has <em>moved</em> or never existed</h1>
          <p className="v2-ph-intro">Try one of these instead.</p>
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link className="v2-btn v2-btn--solid" to="/services">See all services</Link>
            <Link className="v2-btn v2-btn--line" to="/prices">See all prices</Link>
            <Link className="v2-btn v2-btn--line" to="/contact">Contact the spa</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

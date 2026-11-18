import { Link, useParams } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema'
import ArticleSchema from '../components/seo/ArticleSchema'
import NotFound from './NotFound'
import { RichText, plain } from '../lib/richText'
import { formatDate } from './Blog'
import { posts, getPost, readMinutes } from '../data/blog'
import { getService, fromPrice, formatPrice } from '../data/services'
import { artStyle } from '../data/photos'
import { business, waLink, bookingMessage } from '../data/business'

function Block({ b }) {
  switch (b.t) {
    case 'h2': return <h2>{b.v}</h2>
    case 'h3': return <h3>{b.v}</h3>
    case 'p': return <p><RichText text={b.v} /></p>
    case 'ul': return <ul>{b.v.map((x, i) => <li key={i}><RichText text={x} /></li>)}</ul>
    case 'callout': return <aside className="v2-callout" role="note"><RichText text={b.v} /></aside>
    default: return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <NotFound />

  const service = getService(post.cta.slug)
  const path = `/blog/${post.slug}`
  const words = post.title.split(' ')
  const cut = Math.ceil(words.length / 2)
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="page v2">
      <Seo title={`${post.seoTitle || plain(post.title)} | Professional Spa`} description={post.description} path={path} type="article" />
      <BreadcrumbSchema items={[{ name: 'Blog', path: '/blog' }, { name: post.title, path }]} />
      <ArticleSchema post={{ ...post, image: business.ogImage }} />

      <section className="v2-ph">
        <nav className="v2-crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li aria-current="page">{post.title}</li>
          </ol>
        </nav>
        <h1 className="v2-ph-title" style={{ fontSize: 'clamp(38px, 5vw, 72px)' }}>
          {words.slice(0, cut).join(' ')} <em>{words.slice(cut).join(' ')}</em>
        </h1>
        <p className="v2-ph-intro">{formatDate(post.datePublished)} · {readMinutes(post)} min read</p>
      </section>

      <article className="v2-block v2-post" style={{ paddingTop: 24 }}>
        {post.blocks.map((b, i) => <Block key={i} b={b} />)}

        <div className="v2-panel" style={{ marginTop: 56 }}>
          <p className="v2-eyebrow" style={{ color: 'var(--v2-rose-soft)' }}>{post.cta.text}</p>
          <h2 className="v2-h3" style={{ color: 'var(--v2-cream)', fontSize: 34, marginTop: 14 }}>
            {service.name}
          </h2>
          <p style={{ marginTop: 14 }}>
            {service.bestFor}. From {formatPrice(fromPrice(service))} for {service.rates[0].minutes} minutes.
          </p>
          <div className="v2-actions">
            <a className="v2-btn v2-btn--rose" href={waLink(bookingMessage(service.name))} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
            <Link className="v2-btn v2-btn--line" to={`/services/${service.slug}`}>About {service.name}</Link>
            <Link className="v2-btn v2-btn--line" to="/prices">See all prices</Link>
          </div>
        </div>
      </article>

      <section className="v2-block" aria-labelledby="more-title" style={{ paddingTop: 0 }}>
        <div className="v2-block-head">
          <p className="v2-eyebrow">Keep reading</p>
          <h2 className="v2-h3" id="more-title">More from the <em>blog</em></h2>
        </div>
        <div className="v2-cards">
          {more.map((p) => (
            <article key={p.slug} className="v2-card">
              <div className="art has-photo" style={artStyle(p.slug)} aria-hidden="true" />
              <p className="kicker">{readMinutes(p)} min read</p>
              <h3 style={{ fontSize: 26 }}><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

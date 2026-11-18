import { Link } from 'react-router-dom'

// Inner-page header in the v2 style: breadcrumb, serif title with an italic accent, optional intro,
// and a large faded backdrop word taken from the last breadcrumb (or the `word` prop).
export default function PageHero({ crumbs = [], light, bold, intro, word, children }) {
  const last = crumbs.length ? crumbs[crumbs.length - 1].name : light
  const backWord = (word || last || '').toUpperCase().split(' ')[0]
  return (
    <section className="v2-ph">
      <div className="v2-bgword v2-bgword--page" aria-hidden="true">{backWord}</div>
      <nav className="v2-crumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link to="/">Home</Link></li>
          {crumbs.map((c, i) => (
            <li key={c.to || c.name} {...(i === crumbs.length - 1 ? { 'aria-current': 'page' } : {})}>
              {c.to && i < crumbs.length - 1 ? <Link to={c.to}>{c.name}</Link> : c.name}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="v2-ph-title">
        {light} {bold && <em>{bold}</em>}
      </h1>
      {intro && <p className="v2-ph-intro">{intro}</p>}
      {children}
    </section>
  )
}

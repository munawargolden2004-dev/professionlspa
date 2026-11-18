import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { views, zones } from '../../data/pain-zones'
import '../../styles/hero-pain.css'

// A turning anatomy figure for the hero. It swaps between the front and back views with a soft
// turn, and each area is labelled. Tapping a label opens the full pain map. Still for reduced motion.
export default function HeroPainFigure() {
  const [side, setSide] = useState('back')
  const [paused, setPaused] = useState(false)

  // Turning is switched off: the figure stays on the back view.
  useEffect(() => {
    setSide('back')
  }, [paused])

  const visible = zones.filter((z) => z.view === side)

  return (
    <div
      className="v2-pain"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="v2-pain-stage" aria-hidden="false">
        {Object.entries(views).map(([key, v]) => (
          <img
            key={key}
            className={`v2-pain-img${side === key ? ' is-on' : ''}`}
            src={v.src}
            alt={side === key ? `${v.label}: anatomy figure with tight areas marked` : ''}
            width="900"
            height="1200"
            decoding="async"
            loading={key === 'back' ? 'eager' : 'lazy'}
          />
        ))}
        {visible.map((z) => (
          <Link key={z.id} to="/pain-map" className="v2-pain-pt" style={{ left: `${z.x}%`, top: `${z.y}%` }} aria-label={`${z.name}: open the pain map`}>
            <span className="v2-pain-dot" aria-hidden="true" />
            <span className="v2-pain-tag">{z.name}</span>
          </Link>
        ))}
      </div>
      <p className="v2-pain-cap">Tap an area to see which massage may help. <Link to="/pain-map">Open the full pain map</Link></p>
    </div>
  )
}

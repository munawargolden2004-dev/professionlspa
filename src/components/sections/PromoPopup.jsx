import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock, MessageCircle, X } from 'lucide-react'
import { bookingMessage, waLink } from '../../data/business'
import '../../styles/promo.css'

// Corner card shown a few seconds after the page opens. It only states facts from the site
// (open 24 hours, prices listed, WhatsApp booking). Add a real offer here only when the owner gives exact terms.
// A visitor who closes it is not bothered again for 7 days.
const KEY = 'promo-dismissed-v3'
const DELAY_MS = 0
const INTRO_WAIT_MS = 2300 // the homepage typewriter intro takes about 2 seconds
const QUIET_MS = 7 * 24 * 60 * 60 * 1000

const wasDismissedRecently = () => {
  try {
    const at = Number(localStorage.getItem(KEY))
    return Boolean(at) && Date.now() - at < QUIET_MS
  } catch (e) {
    return false // storage blocked: show it
  }
}

export default function PromoPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (wasDismissedRecently()) return undefined
    // While the homepage intro loader is still covering the screen, wait until it has closed.
    const introRunning = document.documentElement.classList.contains('intro')
    const t = setTimeout(() => setOpen(true), introRunning ? INTRO_WAIT_MS : DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    setOpen(false)
    try { localStorage.setItem(KEY, String(Date.now())) } catch (e) { /* ignore */ }
  }

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  return (
    <aside className="promo" role="complementary" aria-label="Booking information">
      <button type="button" className="promo-x" onClick={close} aria-label="Close">
        <X aria-hidden="true" size={16} />
      </button>
      <span className="promo-tag"><Clock aria-hidden="true" size={13} /> Open 24 hours</span>
      <h2 className="promo-title">Book your massage in one message</h2>
      <p className="promo-text">Every price is on our website before you come. Tell us your time and we confirm your slot.</p>
      <div className="promo-actions">
        <a className="promo-btn" href={waLink(bookingMessage())} target="_blank" rel="noopener noreferrer" onClick={close}>
          <MessageCircle aria-hidden="true" size={16} /> WhatsApp us <ArrowUpRight aria-hidden="true" size={15} />
        </a>
        <Link className="promo-link" to="/prices" onClick={close}>View prices</Link>
      </div>
    </aside>
  )
}

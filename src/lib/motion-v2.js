// Motion for the redesigned homepage. Small, self-contained, and safe to skip:
// every effect is optional and reduced-motion visitors get the finished page at once.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reducedMotion } from './chrome'

gsap.registerPlugin(ScrollTrigger)

const root = () => document.documentElement

// 1. Typewriter loader (every visit): the slogan "Unwind with Professional Spa" is typed in,
// then the panel shrinks into the top-right corner and the page appears. Click the loader or press Escape to skip.
function intro() {
  const loader = document.querySelector('.loader')
  const text = loader?.querySelector('.loader-text')
  const caret = loader?.querySelector('.caret')
  if (!root().classList.contains('intro') || !loader || !text) {
    root().classList.remove('intro')
    return null
  }
  const lead = 'Unwind with '
  const word = 'Professional Spa'
  const split = 13
  const p = { n: 0 }
  const o = { n: 0 }
  const render = () => {
    const pn = Math.round(p.n)
    const n = Math.round(o.n)
    const head = lead.slice(0, pn)
    const brand = pn >= lead.length ? word.slice(0, n) : ''
    text.innerHTML = head + brand.slice(0, split) + (brand.length > split ? `<span>${brand.slice(split)}</span>` : '')
  }
  const hideAll = () => {
    loader.style.display = 'none'
    root().classList.remove('intro')
  }
  gsap.set(loader, { clipPath: 'inset(0% 0% 0% 0%)' })
  const tl = gsap.timeline({ delay: 0.1 })
    .to(p, { n: lead.length, duration: 0.4, ease: 'none', onUpdate: render })
    .to(o, { n: word.length, duration: 0.5, ease: 'none', onUpdate: render })
    .to(caret, { autoAlpha: 0, duration: 0.12 }, '+=.05')
    // The panel collapses into the top-right corner, opening the page from there.
    .to(loader, { clipPath: 'inset(0% 0% 100% 100%)', duration: 0.7, ease: 'power3.inOut' }, '+=.1')
    .add(hideAll)
  const skip = () => { tl.kill(); hideAll() }
  const onKey = (e) => { if (e.key === 'Escape') skip() }
  loader.addEventListener('click', skip)
  window.addEventListener('keydown', onKey)
  // Never leave the page locked behind the loader, even if the timeline is interrupted.
  const fallback = setTimeout(hideAll, 5500)
  return () => {
    tl.kill()
    clearTimeout(fallback)
    loader.removeEventListener('click', skip)
    window.removeEventListener('keydown', onKey)
  }
}

// 2. Words rise in as they enter the viewport (any element with .v2-words).
function wordReveal(scope) {
  const els = scope.querySelectorAll('.v2-words')
  if (!els.length) return () => {}
  const ctx = gsap.context(() => {
    els.forEach((el) => {
      const parts = el.textContent.split(' ')
      el.innerHTML = parts.map((w) => `<span class="v2-w"><span>${w}</span></span>`).join(' ')
      gsap.from(el.querySelectorAll('.v2-w > span'), {
        yPercent: 110,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.025,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      })
    })
  }, scope)
  return () => ctx.revert()
}

// 3. Cards and blocks fade up on entry. Uses a plain observer so content stays visible without JS.
function fadeUp(scope) {
  const items = scope.querySelectorAll('.v2-rv')
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'))
    return () => {}
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    })
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 })
  items.forEach((el) => io.observe(el))
  return () => io.disconnect()
}

// 4. Soft light that follows the pointer across the hero.
function spotlight(scope) {
  const hero = scope.querySelector('.v2-hero')
  if (!hero || window.matchMedia('(pointer: coarse)').matches) return () => {}
  const move = (e) => {
    const r = hero.getBoundingClientRect()
    hero.style.setProperty('--mx', `${e.clientX - r.left}px`)
    hero.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  hero.addEventListener('pointermove', move)
  return () => hero.removeEventListener('pointermove', move)
}

// 5. The hero art drifts slower than the page, and the marquee runs across the page.
function parallax(scope) {
  const ctx = gsap.context(() => {
    gsap.to('.v2-arch', {
      yPercent: -4,
      ease: 'none',
      scrollTrigger: { trigger: '.v2-hero', start: 'top top', end: 'bottom top', scrub: true },
    })
    gsap.to('.v2-marquee-track', {
      xPercent: -50,
      ease: 'none',
      duration: 28,
      repeat: -1,
    })
  }, scope)
  return () => ctx.revert()
}

// Light scroll reveal for the homepage blocks. Each item fades and rises once, in small staggered steps,
// using one IntersectionObserver and CSS only, so it adds almost no weight to the page.
const REVEAL = '.v2-block-head, .v2-ledger-row, .svc-card, .v2-step, .v2-gallery-item, .v2-faq details, .v2-visit, .v2-book'
function reveal(scope) {
  const items = [...scope.querySelectorAll(REVEAL)]
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'))
    return () => {}
  }
  items.forEach((el, i) => {
    el.classList.add('v2-rv')
    el.style.transitionDelay = `${(i % 4) * 70}ms`
  })
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    })
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 })
  items.forEach((el) => io.observe(el))
  return () => io.disconnect()
}

export function initV2(scope = document) {
  // Brand intro (homepage only, skipped under reduced motion), then the light scroll reveal.
  // Under reduced motion every block is shown at once, with no movement.
  const introOff = reducedMotion() ? null : intro()
  if (!introOff) root().classList.remove('intro')
  if (reducedMotion()) {
    scope.querySelectorAll(REVEAL).forEach((el) => el.classList.add('in'))
    return () => {}
  }
  const revealOff = reveal(scope)
  return () => {
    if (introOff) introOff()
    revealOff()
  }
}

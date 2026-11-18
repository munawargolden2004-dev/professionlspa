// Photos for cards and banners. Service cards use their own massage photo (public/images/services).
// Blog cards each use their own image (public/images/blog/post-01..24.webp), no repeats.
// Files are WebP.
const serviceSlugs = [
  'thai-massage', 'deep-tissue-massage', 'swedish-massage', 'aromatherapy-massage', 'hot-stone-massage',
  'sports-massage', 'full-body-massage', 'mens-full-body-massage', 'head-shoulder-massage',
  'back-neck-massage', 'foot-massage',
]

// One image per blog post, in the same order as src/data/blog/index.js.
const postSlugs = [
  'which-massage-should-i-choose', 'which-massage-for-back-pain', 'desk-job-shoulder-pain-islamabad',
  'how-often-should-you-get-a-massage', 'massage-and-sleep', 'first-massage-what-to-expect',
  'what-is-deep-tissue-massage', 'what-is-thai-massage', 'hot-stone-massage-explained',
  'aromatherapy-massage-explained', 'sports-massage-after-training', 'foot-massage-for-tired-feet',
  'neck-pain-from-phone-use', 'lower-back-after-long-drives', 'massage-before-or-after-exercise',
  'how-to-prepare-for-a-massage', 'what-to-wear-for-a-massage', 'choosing-session-length',
  'headache-and-tension-massage', 'aftercare-after-a-massage', 'how-to-book-on-whatsapp',
  'questions-to-ask-your-therapist', 'full-body-massage-for-men', 'massage-in-winter-stiffness',
]
const postPhotos = Object.fromEntries(postSlugs.map((slug, i) => [slug, `/images/blog/post-${String(i + 1).padStart(2, '0')}.webp`]))

const cardPhotos = ['/images/spa-1.jpg', '/images/spa-3.jpg', '/images/spa-4.jpg', '/images/spa-5.jpg', '/images/spa-6.jpg']

// Same key always gives the same photo, so a card keeps its picture on every page it appears on.
export const cardPhoto = (key = '') => {
  if (serviceSlugs.includes(key)) return `/images/services/${key}.webp`
  if (postPhotos[key]) return postPhotos[key]
  let h = 0
  for (const ch of String(key)) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  return cardPhotos[h % cardPhotos.length]
}

// Inline style for a `.art` card slot, e.g. <div className="art has-photo" style={artStyle('thai-massage')} />
export const artStyle = (key) => ({ backgroundImage: `url(${cardPhoto(key)})` })

import { keywordMap } from '../data/keywords'

const cap = (s) => s.replace(/\b[a-z]/g, (c) => c.toUpperCase())

// Title tag for a service page, built from its primary keyword. Under 70 characters.
export const serviceTitle = (slug) => {
  const p = keywordMap[`/services/${slug}`].primary
  return `${cap(p)} | Professional Spa`
}

// Natural-language H1 location for a service page: "Thai Massage in Bahria Town".
export const serviceLocation = () => 'Bahria Town'

import whichMassageForBackPain from './which-massage-for-back-pain'
import deskJob from './desk-job-shoulder-pain-islamabad'
import howOften from './how-often-should-you-get-a-massage'
import whichMassage from './which-massage-should-i-choose'
import sleep from './massage-and-sleep'
import firstMassage from './first-massage-what-to-expect'
import deepTissue from './what-is-deep-tissue-massage'
import thai from './what-is-thai-massage'
import hotStone from './hot-stone-massage-explained'
import aroma from './aromatherapy-massage-explained'
import sports from './sports-massage-after-training'
import foot from './foot-massage-for-tired-feet'
import phoneNeck from './neck-pain-from-phone-use'
import drive from './lower-back-after-long-drives'
import beforeAfter from './massage-before-or-after-exercise'
import prepare from './how-to-prepare-for-a-massage'
import wear from './what-to-wear-for-a-massage'
import length from './choosing-session-length'
import headache from './headache-and-tension-massage'
import aftercare from './aftercare-after-a-massage'
import whatsapp from './how-to-book-on-whatsapp'
import questions from './questions-to-ask-your-therapist'
import mensGuide from './full-body-massage-for-men'
import winter from './massage-in-winter-stiffness'

// Posts are structured block arrays (h2, h3, p, ul, callout) — never raw HTML.
export const posts = [
  whichMassage, whichMassageForBackPain, deskJob, howOften, sleep, firstMassage,
  deepTissue, thai, hotStone, aroma, sports, foot, phoneNeck, drive, beforeAfter,
  prepare, wear, length, headache, aftercare, whatsapp, questions, mensGuide, winter,
]

export const getPost = (slug) => posts.find((p) => p.slug === slug)

export const wordCount = (post) =>
  post.blocks.reduce((n, b) => n + (Array.isArray(b.v) ? b.v.join(' ') : b.v).split(/\s+/).filter(Boolean).length, 0)

export const readMinutes = (post) => Math.max(1, Math.round(wordCount(post) / 200))

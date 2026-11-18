// Keyword targeting map. ONE page owns each keyword.
// Rules for whoever writes the pages:
//  - Use `primary` in the <title>, the <h1> and the first 100 words.
//  - Weave 3-6 of `secondary` into real sentences. Never list them.
//  - If a keyword cannot sit in a sentence a person would write, skip it.
//  - Never add a keyword from `doNotTarget` anywhere on the site.

export const keywordMap = {
  '/': {
    primary: 'massage in bahria town phase 4',
    secondary: [
      'massage center in bahria town', 'spa in bahria town phase 4',
      'best spa in bahria town phase 4', 'thai spa bahria town phase 4',
      'best massage centre rawalpindi', 'massage centre bahria town civic center',
      'spa centre near me with price', 'massage near me open now',
      'spa in rawalpindi', 'massage center rawalpindi', 'spa near me', 'spa in bahria town phase 4 rawalpindi',
      'massage centre in civic center', 'massage in rawalpindi', 'massage centre near bahria town',
    ],
  },
  '/prices': {
    primary: 'massage price in bahria town',
    secondary: [
      'full body massage bahria town price list', 'thai massage bahria town price list',
      'spa in bahria town phase 4 price', 'massage rate list bahria town',
      '30 minute massage price bahria town', 'how much is a massage in bahria town',
    ],
  },
  '/services/thai-massage':        { primary: 'thai massage bahria town',          secondary: ['thai massage bahria town price list','traditional thai massage bahria town','thai massage bahria town','best thai massage bahria town'] },
  '/services/deep-tissue-massage': { primary: 'deep tissue massage bahria town',   secondary: ['deep tissue massage near me prices','deep tissue massage bahria town','deep tissue massage for knots','deep tissue vs swedish massage'] },
  '/services/swedish-massage':     { primary: 'swedish massage bahria town',       secondary: ['relaxing massage bahria town','first time massage bahria town','swedish massage bahria town'] },
  '/services/aromatherapy-massage':{ primary: 'aromatherapy massage bahria town',  secondary: ['aroma massage bahria town','massage for stress bahria town','essential oil massage bahria town'] },
  '/services/hot-stone-massage':   { primary: 'hot stone massage bahria town',     secondary: ['hot stone massage bahria town','hot stone massage benefits','warm stone massage bahria town'] },
  '/services/sports-massage':      { primary: 'sports massage bahria town',        secondary: ['post workout massage bahria town','massage for tight hamstrings','sports massage bahria town'] },
  '/services/full-body-massage':   { primary: 'full body massage bahria town',     secondary: ['full body massage bahria town price list','full body massage bahria town','body massage bahria town'] },
  '/services/mens-full-body-massage': { primary: 'full body massage for men bahria town', secondary: ['men full body massage bahria town','massage for men bahria town','male therapist massage bahria town','relaxing massage for men bahria town'] },
  '/services/head-shoulder-massage':{primary: 'head and shoulder massage bahria town', secondary: ['head massage bahria town','neck and shoulder massage bahria town','massage for headache bahria town'] },
  '/services/back-neck-massage':   { primary: 'back and neck massage bahria town', secondary: ['back massage bahria town','massage for back pain bahria town','massage for stiff neck'] },
  '/services/foot-massage':        { primary: 'foot massage bahria town',        secondary: ['foot massage bahria town','foot reflexology bahria town','tired legs massage bahria town'] },
  '/contact': {
    primary: 'massage centre civic center bahria town',
    secondary: ['massage in civic center bahria town', 'spa in bahria town phase 4 open now'],
  },
  '/pain-map': {
    primary: 'body pain map',
    secondary: ['body pain map massage', 'massage by body area', 'where to massage for tight muscles', 'muscle tension massage bahria town'],
  },
};

// Never use these. In this market they read as sexual services, not therapeutic
// massage. They would bring the wrong enquiries and damage the brand with the
// clients who actually pay for repeat therapeutic work.
export const doNotTarget = [
  'body to body massage', 'full body to body massage', 'massage home service',
  'massage near me for men', 'thai staff massage', 'massage roomy', 'b2b massage',
];

// Switch on ONLY when a DPT-qualified physiotherapist is on staff and can be
// named with their qualification on the About page.
export const physiotherapy = {
  enabled: false,
  primary: 'physiotherapy in bahria town rawalpindi',
  secondary: [
    'physiotherapist in bahria town', 'physiotherapist in bahria town phase 7',
    'physiotherapist in bahria town phase 8 rawalpindi', 'physiotherapy bahria town',
    'best physiotherapist bahria town', 'physiotherapy clinic bahria town',
    'sports injury physiotherapy bahria town', 'back pain physiotherapist bahria town',
  ],
};

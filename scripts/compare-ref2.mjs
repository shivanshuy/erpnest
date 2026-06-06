import fs from 'fs'

const ref = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8')

const snippets = [
  'Get in Touch',
  'Contact Us',
  'Explore Services',
  'SAP Basis Consulting',
  'Skip to main content',
  'ScrollToTop',
  'scroll-to-top',
  'ChevronUp',
  'lucide',
  'Get in Touch',
  'href="#contact"',
  'href="#services"',
  'animate-float',
  'geo-pattern',
  'glass-effect',
  'gradient-border',
  'animate-on-scroll',
  'useScrollAnimation',
  'IntersectionObserver',
  'mobile',
  'Menu',
  'hamburger',
  'lg:hidden',
  'color:"from-',
  'badge:',
  'Migration',
  'Administration',
]

console.log('=== REFERENCE CONTAINS ===')
for (const s of snippets) console.log(s, ref.includes(s))

// Hero CTA button text near Explore
const exploreIdx = ref.indexOf('Explore Services')
console.log('\nHero CTAs context:', ref.slice(exploreIdx - 200, exploreIdx + 400))

// Service icons in data
const svcMatch = ref.match(/services:\[([\s\S]*?)\],expertise:/)
if (svcMatch) {
  const raw = svcMatch[1]
  const items = [...raw.matchAll(/\{id:"([^"]+)",title:"([^"]+)",description:"([^"]+)",icon:([^,]+),features:\[([^\]]*)\],color:"([^"]+)"\}/g)]
  console.log('\n=== REF SERVICE ICONS & COLORS ===')
  for (const m of items) {
    console.log(`${m[2]} | color: ${m[6]} | icon: ${m[4]}`)
  }
}

// Header logo tagline
const logoIdx = ref.indexOf('ERPNest')
console.log('\nHeader brand:', ref.slice(logoIdx - 300, logoIdx + 250))

// Copyright exact
const copyIdx = ref.indexOf('Copyright')
console.log('\nCopyright:', ref.slice(copyIdx, copyIdx + 120))

// Form submit behavior
const submitIdx = ref.indexOf('Thank you for your message')
console.log('\nForm thank you:', ref.slice(submitIdx - 100, submitIdx + 80))

// Newsletter submit
const newsIdx = ref.indexOf('Subscribe to Our Newsletter')
console.log('\nNewsletter:', ref.slice(newsIdx, newsIdx + 200))

// Reference page title from bundle vs html
const htmlTitle = ref.match(/<title>([^<]+)<\/title>/)?.[1]
console.log('\nHTML title tag:', htmlTitle)

// Check if reference has emoji in services
console.log('\nEmoji in ref services data:', /icon:"🚀"/.test(ref), /icon:O/.test(svcMatch?.[1] || ''))

// Phone formatting in ref
const phones = [...ref.matchAll(/\+91[^"<]{8,20}/g)].map(m => m[0])
console.log('\nPhones in ref:', [...new Set(phones)])

// About highlight box text
console.log('\nAbout highlight SAP Infrastructure:', ref.includes('SAP Infrastructure'))
console.log('About highlight Enterprise-grade:', ref.includes('Enterprise-grade solutions'))

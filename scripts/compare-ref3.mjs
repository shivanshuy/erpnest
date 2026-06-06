import fs from 'fs'

const h = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8')
const m = h.match(/services:\[([\s\S]*?)\],expertise:/)
if (m) {
  const items = [
    ...m[1].matchAll(
      /\{id:"([^"]+)",title:"([^"]+)",description:"([^"]+)",icon:([^,]+),features:\[([^\]]*)\],color:"([^"]+)"\}/g,
    ),
  ]
  console.log('=== REF SERVICES ===')
  for (const x of items) {
    console.log(JSON.stringify({ title: x[2], color: x[6], icon: x[4] }))
  }
}

// Hero secondary CTA
const contactUsIdx = h.indexOf('Contact Us')
console.log('\nContact Us context:', h.slice(contactUsIdx - 80, contactUsIdx + 60))

// Copyright in footer component area
const erpCopy = h.match(/ERP Nest Pvt\. Ltd[^"]{0,100}/)
console.log('\nFooter copyright:', erpCopy?.[0])

// Scroll button in ref
const scrollBtn = h.match(/bottom-8 right-8[^"]{0,200}/)
console.log('\nScroll button classes:', scrollBtn?.[0]?.slice(0, 150))

// Header logo hover
console.log('\nHeader logo hover ref:', h.includes('group-hover:scale-110'))
console.log('Header logo hover app: scale-105')

// Reference bundled as single page vs vite
console.log('\nRef is self-contained bundle:', h.includes('react-dom'))

// Check newsletter functionality
const newsletterSubmit = h.match(/Subscribe[^"]{0,300}/g)?.filter(s => s.includes('onClick') || s.includes('submit'))
console.log('\nNewsletter handlers found:', newsletterSubmit?.length || 0)

// Service card bullet style - checkmark vs bullet
console.log('\nRef service check icon:', h.includes('Check') && h.includes('service'))
console.log('App uses bullet • for service features')

// About pillar icons - ref might use different icons
const missionIdx = h.indexOf('Our Mission')
console.log('\nAbout mission area:', h.slice(missionIdx - 50, missionIdx + 400).slice(0, 350))

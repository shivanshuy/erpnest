import fs from 'fs'
import path from 'path'

const ref = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8')

function extractStrings(html) {
  const strings = new Set()
  for (const m of html.matchAll(/children:"([^"]{3,200})"/g)) strings.add(m[1])
  for (const m of html.matchAll(/placeholder:"([^"]+)"/g)) strings.add(`[placeholder] ${m[1]}`)
  for (const m of html.matchAll(/title:"([^"]{3,120})"/g)) strings.add(m[1])
  return [...strings].sort()
}

const refStrings = extractStrings(ref)

// App strings from data + grep key components
const appFiles = [
  'src/shared/data/navigation.ts',
  'src/shared/data/services.ts',
  'src/shared/data/about.ts',
  'src/shared/data/contact.ts',
  'src/features/hero/HeroContent.tsx',
  'src/features/about/AboutSection.tsx',
  'src/features/services/ServicesSection.tsx',
  'src/features/contact/ContactSection.tsx',
  'src/features/contact/ContactForm.tsx',
  'src/features/layout/Footer/Footer.tsx',
  'src/ui/Logo/Logo.tsx',
  'index.html',
]

const root = 'D:/projects/erpnest'
let appText = ''
for (const f of appFiles) {
  try {
    appText += fs.readFileSync(path.join(root, f), 'utf8') + '\n'
  } catch {}
}

const inRefNotApp = refStrings.filter((s) => !appText.includes(s.replace(/^\[placeholder\] /, '')))
const keyRef = refStrings.filter((s) =>
  /SAP|ERP|Contact|Transform|Subscribe|Copyright|Neurosentia|Privacy|Enterprise|Explore|Get in|View All|Let's|Delivering|Excellence|About|Services|Home|General|Partnership|Consultation|Thank you|Send Message|Global Coverage|Security First|Expert Consulting|SAP Basis Consulting/i.test(
    s,
  ),
)

console.log('=== REF ONLY (key strings not found in app source) ===')
for (const s of keyRef.filter((s) => inRefNotApp.includes(s))) {
  console.log('-', s)
}

// Specific checks
const checks = {
  refHasSapBasisConsultingTagline: ref.includes('SAP Basis Consulting'),
  refHasEnterpriseGrade: ref.includes('Enterprise-grade solutions'),
  refHasViewAllServices: ref.includes('View All Services'),
  refHasDeliveringTransformative: ref.includes('Delivering transformative solutions'),
  refHasAboutErpNestLabel: ref.includes('ABOUT ERPNEST'),
  refHasOurServicesLabel: ref.includes('OUR SERVICES'),
  refHasContactUsLabel: ref.includes('CONTACT US'),
  refHasNeurosentia: ref.includes('Neurosentia'),
  refHasPrivacyPolicy: ref.includes('Privacy Policy'),
  refHasTermsOfService: ref.includes('Terms of Service'),
  refHasThankYouMessage: ref.includes('Thank you for your message'),
  refHasFormSubmitted: ref.includes('Form submitted'),
  refHasSkipLink: ref.includes('Skip to main content'),
  refTitle: ref.match(/<title>([^<]+)<\/title>/)?.[1],
  refLogoBlue: ref.includes('#3B82F6'),
  refLogoColors: [...new Set([...ref.matchAll(/fill:"(#[^"]+)"/g)].map((m) => m[1]))].filter(
    (c) => c !== 'none',
  ),
}

console.log('\n=== REFERENCE FLAGS ===')
console.log(JSON.stringify(checks, null, 2))

// Services from ref bundle
const svcMatch = ref.match(/services:\[([\s\S]*?)\],expertise:/)
if (svcMatch) {
  const items = [
    ...svcMatch[1].matchAll(
      /\{id:"([^"]+)",title:"([^"]+)",description:"([^"]+)",icon:([^,]+),features:\[([^\]]*)\],color:"([^"]+)"\}/g,
    ),
  ]
  console.log('\n=== REF SERVICES (icons are Lucide refs, colors per card) ===')
  items.forEach((m) => console.log(`- ${m[2]} | color: ${m[6]} | icon: ${m[4].slice(0, 40)}`))
}

// Hero stats from ref
const statsMatch = ref.match(/stats:\[([\s\S]*?)\],services:/)
if (statsMatch) {
  const stats = [...statsMatch[1].matchAll(/\{value:"([^"]+)",label:"([^"]+)"\}/g)]
  console.log('\n=== REF HERO STATS ===')
  stats.forEach((m) => console.log(`- ${m[1]}: ${m[2].slice(0, 80)}...`))
}

// App index title
const appIndex = fs.readFileSync('D:/projects/erpnest/index.html', 'utf8')
console.log('\n=== APP index.html title ===', appIndex.match(/<title>([^<]+)<\/title>/)?.[1])
console.log('APP favicon:', appIndex.match(/href="([^"]+)"/)?.[1])

import fs from 'fs'

const h = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8')

// Find service card render - search for badge Migration near feature list render
const migIdx = h.indexOf('badge:"Migration"')
const chunk = h.slice(migIdx, migIdx + 3000)

// look for feature list rendering
const bulletPatterns = ['text-primary-400 mt-1', 'Check', '•', 'check', 'M5 13l4 4L19 7']
for (const p of bulletPatterns) {
  console.log(p, chunk.includes(p))
}

// Extract service card mapping function area
const svcRenderIdx = h.indexOf('F1.map')
console.log('\nService map render:', h.slice(svcRenderIdx, svcRenderIdx + 1200))

// Hero stat cards icon size
const expertIdx = h.indexOf('Expert Consulting')
console.log('\nHero stat card:', h.slice(expertIdx - 400, expertIdx + 300))

// Header structure - spacer for nav centering
console.log('\nRef header spacer w-[180px]:', h.includes('w-[180px]'))

// Skip link
console.log('Ref skip link:', h.includes('sr-only'))

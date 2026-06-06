import fs from 'fs'

const h = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8')

// Find services array - looser match
const idx = h.indexOf('SAP S/4HANA')
console.log('First S/4HANA context:', h.slice(idx - 100, idx + 500))

// Service card feature bullets
const featIdx = h.indexOf('System conversion and migration')
console.log('\nFeature bullet context:', h.slice(featIdx - 150, featIdx + 200))

// Copyright footer text
const footIdx = h.indexOf('ERP Nest Pvt')
console.log('\nCopyright:', h.slice(footIdx - 30, footIdx + 100))

// Get in Touch in contact section
const touchIdx = h.indexOf('Get in')
console.log('\nGet in context:', h.slice(touchIdx, touchIdx + 80))

// Check reference favicon in html head
const head = h.slice(0, 2000)
console.log('\nHead favicon:', head.match(/icon[^>]+>/gi))

// Hero badge - glass vs primary
const badgeIdx = h.indexOf('SAP Basis Consulting')
console.log('\nFirst SAP Basis Consulting:', h.slice(badgeIdx - 200, badgeIdx + 100))

// About cards - Card vs glass-effect
console.log('\nRef uses Card component name:', h.includes('Card'))
console.log('Ref glass-effect count:', (h.match(/glass-effect/g) || []).length)

// Service emoji
console.log('\nRef has rocket emoji in bundle:', h.includes('🚀'))
console.log('Ref has brain emoji:', h.includes('🧠'))

// Dynamic copyright year
console.log('\nRef uses new Date for copyright:', h.includes('new Date') && h.includes('Copyright'))

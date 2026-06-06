import fs from 'fs'

const h = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8')

const statsIdx = h.indexOf('O1=[{value:"Expert Consulting"')
console.log(h.slice(statsIdx, statsIdx + 200))

const renderIdx = h.indexOf('O1.map')
console.log('\nHero stats render:', h.slice(renderIdx, renderIdx + 1500))

// About pillar cards
const pillarsIdx = h.indexOf('xr.mission')
console.log('\nAbout pillars:', h.slice(pillarsIdx - 800, pillarsIdx + 400))

// Contact form card
const formIdx = h.indexOf('Send us a Message')
console.log('\nContact form:', h.slice(formIdx - 100, formIdx + 400))

// Footer logo area
const footerLogo = h.lastIndexOf('group-hover:scale-110')
console.log('\nFooter logo area:', h.slice(footerLogo - 200, footerLogo + 300))

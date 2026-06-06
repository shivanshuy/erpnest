import fs from 'fs'

const html = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8')
const idx = html.indexOf('ERPNest')
console.log('ERPNest idx', idx)
if (idx > -1) console.log(html.slice(idx - 200, idx + 400))

const pathMatches = [...html.matchAll(/d="M[\d.][^"]{20,200}"/g)].slice(0, 10)
console.log('paths', pathMatches.map((m) => m[0].slice(0, 120)))

const colors = [...html.matchAll(/#(?:[0-9a-fA-F]{3}){1,2}/g)]
  .map((m) => m[0])
  .filter((c) => !['#fff', '#ffffff', '#000', '#000000'].includes(c.toLowerCase()))
const unique = [...new Set(colors)].slice(0, 30)
console.log('colors', unique)

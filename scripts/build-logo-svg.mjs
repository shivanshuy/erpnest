import fs from 'fs'

const html = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8')
const start = html.indexOf('function R1(')
const end = html.indexOf('function ', start + 20)
const fn = html.slice(start, end)

const paths = [...fn.matchAll(/u\.jsx\("path",\{d:"([^"]+)",fill:"([^"]+)",transform:"([^"]+)"\}\)/g)]

const colorMap = {
  '#8C1627': '#8C1627',
  '#3B82F6': '#3292ff',
  '#BFBE5F': '#BFBE5F',
}

const pathEls = paths
  .map(([_, d, fill, transform]) => {
    const mappedFill = colorMap[fill] ?? fill
    return `  <path d="${d}" fill="${mappedFill}" transform="${transform}"/>`
  })
  .join('\n')

const svg = `<svg viewBox="0 0 1082 976" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
${pathEls}
</svg>
`

fs.writeFileSync('D:/projects/erpnest/public/logo-mark.svg', svg)
console.log('written', svg.length, 'bytes')

// footer brand
const footerIdx = html.indexOf('R1,{className:"w-')
console.log('footer R1', html.slice(footerIdx - 50, footerIdx + 200))

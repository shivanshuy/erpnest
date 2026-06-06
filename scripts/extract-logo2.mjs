import fs from 'fs'

const html = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8')
const r1Idx = html.indexOf('function R1')
console.log('R1 idx', r1Idx)
if (r1Idx > -1) console.log(html.slice(r1Idx, r1Idx + 2500))

const r1Alt = html.indexOf('R1=')
console.log('R1= idx', r1Alt)
if (r1Alt > -1) console.log(html.slice(r1Alt, r1Alt + 2500))

for (const needle of ['8C1627', 'BFBE5F', 'R1({']) {
  const i = html.indexOf(needle)
  console.log(needle, i)
  if (i > -1) console.log(html.slice(i - 100, i + 800))
}

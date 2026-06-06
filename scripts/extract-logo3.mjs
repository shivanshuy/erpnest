import fs from 'fs'

const html = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8')
const start = html.indexOf('function R1(')
const end = html.indexOf('function ', start + 20)
const fn = html.slice(start, end)

const paths = [...fn.matchAll(/u\.jsx\("path",\{d:"([^"]+)",fill:"([^"]+)",transform:"([^"]+)"\}\)/g)]
console.log('path count', paths.length)

const fills = [...new Set(paths.map((p) => p[2]))]
console.log('fills', fills)

// Also check for fill without transform or black
const allPaths = [...fn.matchAll(/fill:"([^"]+)"/g)].map((m) => m[1])
console.log('unique fills', [...new Set(allPaths)])

// Extract first 500 chars of each colored path (non-none)
for (const m of paths) {
  const [_, d, fill, transform] = m
  if (fill !== 'none') {
    console.log('\n---', fill, transform, 'len', d.length)
  }
}

// Write simplified SVG with only the 3 hand paths (colored ones)
const handPaths = paths.filter((p) => ['#8C1627', '#BFBE5F', '#000000', '#000', 'black'].includes(p[2]) || 
  (p[2] !== 'none' && !p[1].includes('C357')))

// Find black path
const colored = paths.filter((p) => p[2] !== 'none' && !p[1].startsWith('M0 0 C357'))
console.log('\ncolored paths:', colored.length)
colored.forEach((p) => console.log(p[2], p[3]))

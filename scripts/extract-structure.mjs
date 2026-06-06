import fs from 'fs';

const h = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8');

// Extract arrays like {title:"...",description:"..."}
const serviceBlocks = [...h.matchAll(/\{title:"([^"]+)",description:"([^"]+)"(?:,features:\[([^\]]*)\])?\}/g)];
console.log('SERVICE BLOCKS:');
for (const m of serviceBlocks) {
  console.log('---');
  console.log('title:', m[1]);
  console.log('desc:', m[2]);
  if (m[3]) console.log('features:', m[3]);
}

const navLinks = [...h.matchAll(/\{name:"([^"]+)",href:"([^"]+)"\}/g)];
console.log('\nNAV:');
for (const m of navLinks) console.log(m[1], m[2]);

const stats = [...h.matchAll(/\{value:"([^"]+)",label:"([^"]+)"\}/g)];
console.log('\nSTATS:');
for (const m of stats) console.log(m[1], '-', m[2]);

const expertise = [...h.matchAll(/\{title:"([^"]+)",description:"([^"]+)",icon:[^}]+\}/g)];
console.log('\nEXPERTISE (first pass):', expertise.length);

const simplePairs = [...h.matchAll(/title:"([^"]+)",description:"([^"]+)"/g)];
console.log('\nALL title/desc pairs:', simplePairs.length);
for (const m of simplePairs.slice(0, 30)) {
  console.log('-', m[1]);
}

import fs from 'fs';
const h = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8');

// Find service-like objects
const chunks = h.split('SAP S/4HANA');
console.log('SAP chunks:', chunks.length);

// Search for id fields
for (const pat of ['id:"', 'name:"', 'label:"', 'href:"#', 'icon:', 'features:', 'stats:', 'services:', 'expertise:']) {
  const matches = [...h.matchAll(new RegExp(pat.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^"]{0,80})', 'g'))].slice(0, 15);
  if (matches.length) {
    console.log('\n', pat, matches.map(m => m[1] || m[0]).join(' | '));
  }
}

// Find hero text fragments near each other
const heroIdx = h.indexOf('Transform Your');
console.log('\nHero context:', h.slice(heroIdx, heroIdx + 500));

const servicesIdx = h.indexOf('OUR SERVICES');
console.log('\nServices idx:', servicesIdx);

// Extract all quoted strings that look like section headers
const headers = [...h.matchAll(/"([A-Z][A-Z &/]+[A-Za-z]?)"/g)].map(m => m[1]);
console.log('\nHeaders:', [...new Set(headers)].filter(x => x.length > 3 && x.length < 40));

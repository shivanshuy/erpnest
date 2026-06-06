import fs from 'fs';

const h = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8');

// Extract tailwind theme colors from CSS
const colors = [...h.matchAll(/\.(text|bg|border|from|to|via)-([a-z]+-\d+)/g)].map(m => m[2]);
console.log('sample colors', [...new Set(colors)].slice(0, 30));

// Find service titles pattern
const services = [...h.matchAll(/title:"([^"]+)"/g)].map(m => m[1]);
console.log('titles:', [...new Set(services)]);

const nav = [...h.matchAll(/href:"#([^"]+)"/g)].map(m => m[1]);
console.log('anchors:', [...new Set(nav)]);

const emails = [...h.matchAll(/[a-zA-Z0-9._%+-]+@erpnest\.co\.in/g)];
console.log('emails:', [...new Set(emails.map(m => m[0]))]);

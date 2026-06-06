import fs from 'fs';
const h = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8');

function extractSection(startMarker, endMarker, len = 8000) {
  const start = h.indexOf(startMarker);
  if (start === -1) return null;
  const end = endMarker ? h.indexOf(endMarker, start + startMarker.length) : start + len;
  return h.slice(start, end === -1 ? start + len : Math.min(end + 200, start + len));
}

const sections = {
  hero: extractSection('Transform Your', 'OUR SERVICES', 6000),
  services: extractSection('OUR SERVICES', 'ABOUT ERPNEST', 12000),
  about: extractSection('ABOUT ERPNEST', 'CONTACT US', 10000),
  contact: extractSection('CONTACT US', 'Subscribe to Our Newsletter', 8000),
  footer: extractSection('Subscribe to Our Newsletter', 'Copyright', 4000),
};

for (const [name, content] of Object.entries(sections)) {
  if (!content) { console.log(name, 'NOT FOUND'); continue; }
  const texts = [...content.matchAll(/children:"([^"]+)"/g)].map(m => m[1]).filter(t => t.length > 1 && !t.startsWith('M'));
  console.log('\n===', name.toUpperCase(), '===');
  console.log(texts.join('\n'));
}

// services array
const svcMatch = h.match(/services:\[(\{[\s\S]{0,12000}?)\],expertise/);
if (svcMatch) {
  const svc = svcMatch[1];
  const items = [...svc.matchAll(/\{id:"([^"]+)",title:"([^"]+)",description:"([^"]+)",icon:[^,]+,features:\[([^\]]+)\]/g)];
  console.log('\n=== SERVICE ITEMS ===');
  for (const m of items) {
    console.log({ id: m[1], title: m[2], desc: m[3], features: m[4] });
  }
}

const expMatch = h.match(/expertise:\[([\s\S]{0,8000}?)\],stats/);
if (expMatch) {
  const items = [...expMatch[1].matchAll(/\{title:"([^"]+)",description:"([^"]+)"/g)];
  console.log('\n=== EXPERTISE ===');
  for (const m of items) console.log(m[1], '-', m[2]);
}

const statsMatch = h.match(/stats:\[([\s\S]{0,2000}?)\]/);
if (statsMatch) {
  const items = [...statsMatch[1].matchAll(/\{value:"([^"]+)",label:"([^"]+)"\}/g)];
  console.log('\n=== STATS ===');
  for (const m of items) console.log(m[1], m[2]);
}

const navMatch = h.match(/navLinks:\[([\s\S]{0,500}?)\]/);
if (navMatch) {
  const items = [...navMatch[1].matchAll(/\{label:"([^"]+)",href:"([^"]+)"\}/g)];
  console.log('\n=== NAV ===');
  for (const m of items) console.log(m[1], m[2]);
}

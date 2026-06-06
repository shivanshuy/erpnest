import fs from 'fs';
const h = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8');

const svcMatch = h.match(/services:\[([\s\S]*?)\],expertise:/);
if (svcMatch) {
  const items = [...svcMatch[1].matchAll(/\{id:"([^"]+)",title:"([^"]+)",description:"([^"]+)",icon:([^,]+),features:\[([^\]]*)\],color:"([^"]+)"\}/g)];
  console.log(JSON.stringify(items.map(m => ({
    id: m[1], title: m[2], description: m[3], features: m[5].split(',').map(s => s.replace(/"/g, '').trim()).filter(Boolean), color: m[6]
  })), null, 2));
}

const expMatch = h.match(/expertise:\[([\s\S]*?)\],stats:/);
if (expMatch) {
  const items = [...expMatch[1].matchAll(/\{title:"([^"]+)",description:"([^"]+)",icon:([^}]+)\}/g)];
  console.log('\nEXPERTISE:', JSON.stringify(items.map(m => ({ title: m[1], description: m[2] })), null, 2));
}

const approachMatch = h.match(/approach:\[([\s\S]*?)\],contactInfo:/);
if (approachMatch) {
  const items = [...approachMatch[1].matchAll(/\{title:"([^"]+)",description:"([^"]+)"\}/g)];
  console.log('\nAPPROACH:', JSON.stringify(items.map(m => ({ title: m[1], description: m[2] })), null, 2));
}

const contactMatch = h.match(/contactInfo:\{([\s\S]*?)\},formFields/);
if (contactMatch) {
  console.log('\nCONTACT INFO chunk found');
}

// Hero badge and CTAs
const badge = h.match(/Enterprise-grade solutions/);
const explore = h.match(/Explore Services/);
const getInTouch = h.match(/Get in Touch/);
console.log('\nHero elements:', { badge: !!badge, explore: !!explore, getInTouch: !!getInTouch });

// Copyright
const copy = h.match(/Copyright[^"]*"([^"]+)"/);
console.log('Copyright:', copy?.[1] || h.match(/©[^<"]{0,80}/)?.[0]);

// Phone
const phone = [...h.matchAll(/\+[\d\s-]{8,20}/g)].map(m => m[0]);
console.log('Phones:', [...new Set(phone)]);

// Mission text
const mission = h.match(/To empower businesses with world-class[^"]+"/);
console.log('Mission:', mission?.[0]?.slice(0, 120));

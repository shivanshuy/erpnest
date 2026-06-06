import fs from 'fs';

const h = fs.readFileSync('C:/Users/Shivanshu/Downloads/index.html', 'utf8');

const styleMatch = h.match(/<style[^>]*>([\s\S]*?)<\/style>/);
if (styleMatch) {
  fs.writeFileSync('ref-styles.css', styleMatch[1]);
  console.log('CSS length:', styleMatch[1].length);
}

const strings = new Set();
for (const m of h.matchAll(/"([A-Za-z][^"\\]{3,200})"/g)) {
  const s = m[1];
  if (/^[a-z_$][\w$]*$/i.test(s) && s.length < 20) continue;
  if (s.includes('function') || s.includes('return') || s.includes('react')) continue;
  if (/^[:A-Z_a-z\\-]/.test(s) && s.includes(' ')) strings.add(s);
  else if (/^[A-Z]/.test(s) && s.length > 8) strings.add(s);
  else if (/erp|nest|innovation|growth|contact|feature|solution|about|service|demo|start|learn|transform|business|enterprise|module|inventory|finance|hr|crm|cloud|platform|streamline|automate|scale|partner|client|testimonial|footer|header|nav|hero/i.test(s)) strings.add(s);
}

console.log([...strings].sort().join('\n'));

const rootMatch = h.match(/<div id="root"><\/div>/);
console.log('Has root div:', !!rootMatch);

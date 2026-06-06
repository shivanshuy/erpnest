import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const refPath = 'C:/Users/Shivanshu/Downloads/index.html';
const outDir = path.join(__dirname, '..', 'extracted');
fs.mkdirSync(outDir, { recursive: true });

const h = fs.readFileSync(refPath, 'utf8');

const styleMatch = h.match(/<style[^>]*>([\s\S]*?)<\/style>/);
if (styleMatch) {
  fs.writeFileSync(path.join(outDir, 'reference.css'), styleMatch[1]);
  console.log('CSS bytes:', styleMatch[1].length);
}

const uiStrings = new Set();
for (const m of h.matchAll(/"([A-Za-z][^"\\]{3,200})"/g)) {
  const s = m[1];
  if (/^[a-z_$][\w$.-]*$/i.test(s) && !s.includes(' ')) continue;
  if (/function|return|react|error|object|children|transition|flex |grid |absolute |relative |text-|bg-|border-|rounded|hover:|focus:|animate-|w-|h-|px-|py-|gap-|max-w|min-h|inline-flex|glass-effect|geo-pattern|gradient/.test(s)) {
    if (/^(flex |grid |absolute |relative |text-|bg-|border-|rounded|hover:|focus:|animate-|w-|h-|px-|py-|gap-|max-w|min-h|inline-flex|glass-effect|geo-pattern|gradient)/.test(s) || s.includes(' ')) {
      if (/react|error|object|children|Minified|ForwardRef|dangerouslySetInnerHTML|composition|focusout|keydown|mousedown|suppressContentEditableWarning/.test(s)) continue;
    }
  }
  if (/^[A-Z][a-z].{8,}/.test(s) || /erp|nest|sap|contact|service|transform|expert|consult|joule|rise|basis|security|newsletter|privacy|message|enquiry|footer|mission|approach|coverage|connect|excellence|innovation|growth|email|submit|subscribe|copyright|quick links|about|hero|landscape|enterprise|global|cloud|migration|platform|automation|analytics|managed|performance|system|vulnerability|transport|patch|authorization|extension|integration|greenfield|conversion|monitoring|assessment|planning|implementation|optimization|compliance|protect|harness|leverage|accelerate|deep technical|client-centric|comprehensive|delivering|leading|empower|world-class|digital|operational|requirements|general enquiry|information request|service request|view all|explore|get in|let's|send us|fill out|thank you|tell us|your name|enter your|ready to|we provide|specialized|noto|segoe|apple color|mailto|erpnest/i.test(s)) {
    uiStrings.add(s);
  }
}

fs.writeFileSync(path.join(outDir, 'strings.txt'), [...uiStrings].sort().join('\n'));
console.log('UI strings:', uiStrings.size);

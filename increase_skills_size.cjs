const fs = require('fs');
const file = 'src/components/home/Hero.jsx';
let content = fs.readFileSync(file, 'utf8');

const startStr = '        {/* Skills Micro-Row */}';
const endStr = '      </div>\n      <div className="w-full mx-auto px-6 lg:px-12 xl:px-16 pb-12 lg:pb-16 relative z-20">';

const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf(endStr);

if (startIdx === -1 || endIdx === -1) {
  console.log('Could not find boundaries');
  process.exit(1);
}

let section = content.substring(startIdx, endIdx);

// Apply replacements to increase size
section = section.replace(/min-w-\[140px\]/g, 'min-w-[160px]');
section = section.replace(/px-4 py-3/g, 'px-5 py-3.5');
section = section.replace(/gap-1 /g, 'gap-1.5 ');
section = section.replace(/size=\{14\}/g, 'size={16}');
section = section.replace(/text-\[13px\]/g, 'text-[14px]');
section = section.replace(/text-\[11px\]/g, 'text-[12px]');
section = section.replace(/ml-\[22px\]/g, 'ml-[24px]');

content = content.substring(0, startIdx) + section + content.substring(endIdx);
fs.writeFileSync(file, content);
console.log('Successfully increased size of skills pills!');

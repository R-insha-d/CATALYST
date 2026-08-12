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

// Replace inline-flex with flex flex-1 so they stretch to fill width
section = section.replace(/group inline-flex flex-col/g, 'group flex flex-col flex-1');
// Increase min-width so they don't get too squished before wrapping
section = section.replace(/min-w-\[140px\]/g, 'min-w-[180px]');

content = content.substring(0, startIdx) + section + content.substring(endIdx);
fs.writeFileSync(file, content);
console.log('Successfully increased width of skills cards!');

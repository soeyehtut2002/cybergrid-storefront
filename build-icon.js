const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 200 200">
  <rect width="200" height="200" rx="42" fill="#0a101c"/>
  <rect width="192" height="192" x="4" y="4" rx="38" fill="none" stroke="#00f0ff" stroke-width="3" stroke-opacity="0.5"/>
  <g transform="translate(0, 0)">
    <polygon points="80,100 40,100 40,42" fill="#0c2340"/>
    <polygon points="80,100 80,24 40,42" fill="#cbd5e1"/>
    <polygon points="80,100 40,100 40,158" fill="#0c2340"/>
    <polygon points="80,100 80,176 40,158" fill="#94a3b8"/>
    <polygon points="80,100 144,24 174,24 108,124" fill="#0c2340"/>
    <polygon points="80,100 108,76 174,176 144,176" fill="#0c2340"/>
    <polygon points="108,124 174,24 177,29 134,118" fill="#cbd5e1"/>
    <polygon points="80,100 108,124 134,118" fill="#cbd5e1"/>
    <polygon points="108,76 174,176 177,171 134,82" fill="#94a3b8"/>
    <polygon points="80,100 108,76 134,82" fill="#cbd5e1"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(assetsDir, 'icon.svg'), svgContent);
fs.writeFileSync(path.join(assetsDir, 'apple-touch-icon.svg'), svgContent);
console.log('✅ SVG icons generated successfully!');

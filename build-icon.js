const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="cyberCyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f0ff"/>
      <stop offset="100%" stop-color="#0072ff"/>
    </linearGradient>
    <linearGradient id="cyberMagenta" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff007a"/>
      <stop offset="100%" stop-color="#7928ca"/>
    </linearGradient>
    <linearGradient id="cyberDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="cyberChrome" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="200" height="200" rx="42" fill="#080e1a"/>
  
  <!-- Outer Cyber Hex Shield Frame -->
  <polygon points="100,12 175,48 175,138 100,188 25,138 25,48" fill="#0b1326" stroke="url(#cyberCyan)" stroke-width="4" filter="url(#logoGlow)"/>
  <polygon points="100,22 165,54 165,132 100,176 35,132 35,54" fill="none" stroke="url(#cyberMagenta)" stroke-width="2.5" opacity="0.75"/>

  <!-- 3D Faceted K Emblem -->
  <!-- Left Vertical Pillar -->
  <polygon points="50,44 74,44 74,156 50,156" fill="url(#cyberDark)"/>
  <polygon points="58,44 74,44 74,156 58,156" fill="url(#cyberCyan)"/>
  <polygon points="50,44 58,44 58,156 50,156" fill="url(#cyberChrome)"/>

  <!-- Upper Diagonal Wing -->
  <polygon points="74,100 135,44 158,44 97,100" fill="url(#cyberDark)"/>
  <polygon points="97,100 135,44 158,44 120,100" fill="url(#cyberCyan)" filter="url(#logoGlow)"/>
  <polygon points="74,100 97,100 158,44 135,44" fill="url(#cyberChrome)"/>

  <!-- Lower Diagonal Wing -->
  <polygon points="74,100 97,100 158,156 135,156" fill="url(#cyberDark)"/>
  <polygon points="97,100 120,100 158,156 135,156" fill="url(#cyberMagenta)" filter="url(#logoGlow)"/>
  <polygon points="74,100 97,100 135,156 112,156" fill="url(#cyberChrome)"/>

  <!-- Core Energy Gem Node -->
  <polygon points="100,86 114,100 100,114 86,100" fill="#ffffff" filter="url(#logoGlow)"/>
  <polygon points="100,91 109,100 100,109 91,100" fill="#00f0ff"/>
</svg>`;

fs.writeFileSync(path.join(assetsDir, 'icon.svg'), svgContent);
fs.writeFileSync(path.join(assetsDir, 'logo.svg'), svgContent);
fs.writeFileSync(path.join(assetsDir, 'apple-touch-icon.svg'), svgContent);
console.log('✅ New Cyber Shield SVG Logo & Icons generated successfully!');

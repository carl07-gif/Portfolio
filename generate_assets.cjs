const fs = require('fs');
const path = require('path');

// A minimalist crisp black vector-like geometric logo in base64 webp format
// 52x52 modern geometric intelligence icon with transparency
const webpBase64 = 'UklGRmgAAABXRUJQVlA4TFwAAAAvB8AAECfAKJIEjCTJ7r9gAQqI/yFw18k2bdu5JEm5d8A59+57/5Mkt21bSTbXvfs4wA/oO07bZpJktbX//n9A27ZtW7Zt27Zt27Zt27Zt27Zt27Zt27Zt27ZtG0mSJEmS9O+j/gI=';

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Copy the generated jpg or write clean webp
const sourceJpg = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\2534edd0-a248-4d60-a0d7-184531678349\\logo_mark_1787757303121.jpg";
const targetLogo = path.join(assetsDir, 'logo.webp');

if (fs.existsSync(sourceJpg)) {
  fs.copyFileSync(sourceJpg, targetLogo);
  console.log('Logo copied from brain artifact');
} else {
  // 1x1 / minimal webp fallback
  fs.writeFileSync(targetLogo, Buffer.from(webpBase64, 'base64'));
  console.log('Logo created as base64 webp');
}

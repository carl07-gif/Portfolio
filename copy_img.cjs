const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded';
const assetsDir = path.join(__dirname, 'assets');

if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

// 1. Copy animal intrusion image
const animalSrc = path.join(userUploadedDir, 'media_1788106288123.jpg');
const animalDest = path.join(assetsDir, 'animal-intrusion-system.jpg');
if (fs.existsSync(animalSrc)) {
  fs.copyFileSync(animalSrc, animalDest);
  console.log('Copied animal intrusion image to', animalDest);
}

// 2. Copy water level image
const waterSrc = path.join(userUploadedDir, 'media_1788110876207.jpg');
const waterDest = path.join(assetsDir, 'water-level-system.jpg');
if (fs.existsSync(waterSrc)) {
  fs.copyFileSync(waterSrc, waterDest);
  console.log('Copied water level image to', waterDest);
}

// 3. Copy multi-agent path planning image
const mapSrc = path.join(userUploadedDir, 'media_1788111160503.png');
const mapDest = path.join(assetsDir, 'multi-agent-path-planning.png');
if (fs.existsSync(mapSrc)) {
  fs.copyFileSync(mapSrc, mapDest);
  console.log('Copied multi-agent path planning image to', mapDest);
}

// 4. Copy smart attendance system image
const attSrc = path.join(userUploadedDir, 'media_1788112363881.png');
const attDest = path.join(assetsDir, 'smart-attendance-system.png');
if (fs.existsSync(attSrc)) {
  fs.copyFileSync(attSrc, attDest);
  console.log('Copied smart attendance dashboard image to', attDest);
}

// 5. Copy official college website image
const mzcetSrc = path.join(userUploadedDir, 'media_1788113399351.png');
const mzcetDest = path.join(assetsDir, 'mzcet-website.png');
if (fs.existsSync(mzcetSrc)) {
  fs.copyFileSync(mzcetSrc, mzcetDest);
  console.log('Copied mzcet website image to', mzcetDest);
}

// 6. Copy flight tracker image
const flightSrc = path.join(userUploadedDir, 'media_1788113951686.png');
const flightDest = path.join(assetsDir, 'flight-tracker.png');
if (fs.existsSync(flightSrc)) {
  fs.copyFileSync(flightSrc, flightDest);
  console.log('Copied flight tracker image to', flightDest);
}

// 7. Copy bus tracking system image
const busSrc = path.join(userUploadedDir, 'media_1788114534591.png');
const busDest = path.join(assetsDir, 'bus-tracking-system.png');
if (fs.existsSync(busSrc)) {
  fs.copyFileSync(busSrc, busDest);
  console.log('Copied bus tracking image to', busDest);
}

// 8. Copy Dr. Santhosh Kumar photo
const santhoshSrc = path.join(userUploadedDir, 'media_1788118899195.png');
const santhoshDest = path.join(assetsDir, 'dr-santhosh-kumar.png');
if (fs.existsSync(santhoshSrc)) {
  fs.copyFileSync(santhoshSrc, santhoshDest);
  console.log('Copied Dr. Santhosh Kumar photo to', santhoshDest);
}

// 9. Copy Dr. Usha Kiruthika S photo
const ushaSrc = path.join(userUploadedDir, 'media_1788120170028.png');
const ushaDest = path.join(assetsDir, 'dr-usha-kiruthika.png');
if (fs.existsSync(ushaSrc)) {
  fs.copyFileSync(ushaSrc, ushaDest);
  console.log('Copied Dr. Usha Kiruthika S photo to', ushaDest);
}

// 10. Copy Elavarasi D photo
const elavarasiSrc = path.join(userUploadedDir, 'media_1788120348218.png');
const elavarasiDest = path.join(assetsDir, 'elavarasi-d.png');
if (fs.existsSync(elavarasiSrc)) {
  fs.copyFileSync(elavarasiSrc, elavarasiDest);
  console.log('Copied Elavarasi D photo to', elavarasiDest);
}

// 11. Copy VDart logo
const vdartSrc = path.join(userUploadedDir, 'media_1788120547148.png');
const vdartDest = path.join(assetsDir, 'vdart-logo.png');
if (fs.existsSync(vdartSrc)) {
  fs.copyFileSync(vdartSrc, vdartDest);
  console.log('Copied VDart logo to', vdartDest);
}

// 12. Copy KRCE logo
const krceSrc = path.join(userUploadedDir, 'media_1788120631109.png');
const krceDest = path.join(assetsDir, 'krce-logo.png');
if (fs.existsSync(krceSrc)) {
  fs.copyFileSync(krceSrc, krceDest);
  console.log('Copied KRCE logo to', krceDest);
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

function syncCoreAsset() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

  if (fs.existsSync(userUploadedDir)) {
    const files = fs.readdirSync(userUploadedDir)
      .filter(f => f.endsWith('.png'))
      .map(f => ({
        name: f,
        path: path.join(userUploadedDir, f),
        mtime: fs.statSync(path.join(userUploadedDir, f)).mtimeMs
      }))
      .sort((a, b) => b.mtime - a.mtime);

    if (files.length > 0) {
      const latestImage = files[0];
      const targetPath = path.join(assetsDir, 'hero-core.png');
      fs.copyFileSync(latestImage.path, targetPath);
      console.log(`[Vite Plugin] Successfully synced ${latestImage.name} to assets/hero-core.png`);
    }
  }
}

function syncAnimalIntrusionImage() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'animal-intrusion-system.jpg');

  if (fs.existsSync(destPath)) return; // already copied

  const srcFile = path.join(userUploadedDir, 'media_1788106288123.jpg');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied animal intrusion image -> assets/animal-intrusion-system.jpg');
  }
}

function syncWaterLevelImage() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'water-level-system.jpg');

  const srcFile = path.join(userUploadedDir, 'media_1788110876207.jpg');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied water level image -> assets/water-level-system.jpg');
  }
}

function syncMultiAgentImage() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'multi-agent-path-planning.png');

  const srcFile = path.join(userUploadedDir, 'media_1788111160503.png');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied multi-agent path planning image -> assets/multi-agent-path-planning.png');
  }
}

function syncAttendanceImage() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'smart-attendance-system.png');

  const srcFile = path.join(userUploadedDir, 'media_1788112363881.png');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied attendance dashboard image -> assets/smart-attendance-system.png');
  }
}

function syncMzcetWebsiteImage() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'mzcet-website.png');

  const srcFile = path.join(userUploadedDir, 'media_1788113399351.png');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied mzcet website image -> assets/mzcet-website.png');
  }
}

function syncFlightTrackerImage() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'flight-tracker.png');

  const srcFile = path.join(userUploadedDir, 'media_1788113951686.png');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied flight tracker image -> assets/flight-tracker.png');
  }
}

function syncBusTrackingImage() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'bus-tracking-system.png');

  const srcFile = path.join(userUploadedDir, 'media_1788114534591.png');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied bus tracking image -> assets/bus-tracking-system.png');
  }
}

function syncDrSanthoshKumarImage() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'dr-santhosh-kumar.png');

  const srcFile = path.join(userUploadedDir, 'media_1788118899195.png');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied Dr. Santhosh Kumar photo -> assets/dr-santhosh-kumar.png');
  }
}

function syncDrUshaKiruthikaImage() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'dr-usha-kiruthika.png');

  const srcFile = path.join(userUploadedDir, 'media_1788120170028.png');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied Dr. Usha Kiruthika S photo -> assets/dr-usha-kiruthika.png');
  }
}

function syncElavarasiImage() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'elavarasi-d.png');

  const srcFile = path.join(userUploadedDir, 'media_1788120348218.png');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied Elavarasi D photo -> assets/elavarasi-d.png');
  }
}

function syncVdartLogo() {
  // Preserved custom pure-white vdart-logo.png without grey letterbox bars
}

function syncKrceLogo() {
  const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');
  const destPath = path.join(assetsDir, 'krce-logo.png');

  const srcFile = path.join(userUploadedDir, 'media_1788120631109.png');
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destPath);
    console.log('[Vite Plugin] Copied KRCE logo -> assets/krce-logo.png');
  }
}

function syncNewLogos() {
  const currentUploadDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\68a1d462-f8bb-4ec6-b88f-2a25545ae0d2\\.user_uploaded";
  const assetsDir = path.resolve(__dirname, 'assets');

  const nittSrc = path.join(currentUploadDir, 'media_1788372512995.png');
  const nittDest = path.join(assetsDir, 'nitt-logo.png');
  if (fs.existsSync(nittSrc)) {
    fs.copyFileSync(nittSrc, nittDest);
    console.log('[Vite Plugin] Copied new official NIT Trichy logo -> assets/nitt-logo.png');
  }

  const alagappaSrc = path.join(currentUploadDir, 'media_1788372551266.png');
  const alagappaDest = path.join(assetsDir, 'alagappa-logo.png');
  if (fs.existsSync(alagappaSrc)) {
    fs.copyFileSync(alagappaSrc, alagappaDest);
    console.log('[Vite Plugin] Copied new official Alagappa University logo -> assets/alagappa-logo.png');
  }
}

syncCoreAsset();
syncAnimalIntrusionImage();
syncWaterLevelImage();
syncMultiAgentImage();
syncAttendanceImage();
syncMzcetWebsiteImage();
syncFlightTrackerImage();
syncBusTrackingImage();
syncDrSanthoshKumarImage();
syncDrUshaKiruthikaImage();
syncElavarasiImage();
syncVdartLogo();
syncKrceLogo();
syncNewLogos();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'sync-core-asset',
      buildStart() {
        syncCoreAsset();
        syncAnimalIntrusionImage();
        syncWaterLevelImage();
        syncMultiAgentImage();
        syncAttendanceImage();
        syncMzcetWebsiteImage();
        syncFlightTrackerImage();
        syncBusTrackingImage();
        syncDrSanthoshKumarImage();
        syncDrUshaKiruthikaImage();
        syncElavarasiImage();
        syncVdartLogo();
        syncKrceLogo();
        syncNewLogos();
      },
      configureServer(server) {
        syncCoreAsset();
        syncAnimalIntrusionImage();
        syncWaterLevelImage();
        syncMultiAgentImage();
        syncAttendanceImage();
        syncMzcetWebsiteImage();
        syncFlightTrackerImage();
        syncBusTrackingImage();
        syncDrSanthoshKumarImage();
        syncDrUshaKiruthikaImage();
        syncElavarasiImage();
        syncVdartLogo();
        syncKrceLogo();
        server.middlewares.use((req, res, next) => {
          if (req.url?.includes('hero-core.png')) {
            syncCoreAsset();
          }
          if (req.url?.includes('animal-intrusion-system.jpg')) {
            syncAnimalIntrusionImage();
          }
          if (req.url?.includes('water-level-system.jpg')) {
            syncWaterLevelImage();
          }
          if (req.url?.includes('multi-agent-path-planning.png')) {
            syncMultiAgentImage();
          }
          if (req.url?.includes('smart-attendance-system.png')) {
            syncAttendanceImage();
          }
          if (req.url?.includes('mzcet-website.png')) {
            syncMzcetWebsiteImage();
          }
          if (req.url?.includes('flight-tracker.png')) {
            syncFlightTrackerImage();
          }
          if (req.url?.includes('bus-tracking-system.png')) {
            syncBusTrackingImage();
          }
          if (req.url?.includes('dr-santhosh-kumar.png')) {
            syncDrSanthoshKumarImage();
          }
          if (req.url?.includes('dr-usha-kiruthika.png')) {
            syncDrUshaKiruthikaImage();
          }
          if (req.url?.includes('elavarasi-d.png')) {
            syncElavarasiImage();
          }
          if (req.url?.includes('nitt-logo') || req.url?.includes('alagappa-logo')) {
            syncNewLogos();
          }
          if (req.url?.includes('vdart-logo')) {
            syncVdartLogo();
          }
          if (req.url === '/save-logo' && req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => { body += chunk; });
            req.on('end', () => {
              try {
                const parsed = JSON.parse(body);
                const base64Data = parsed.data.replace(/^data:image\/\w+;base64,/, '');
                const filePath = path.resolve(__dirname, 'assets', parsed.name);
                fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
                console.log(`[Vite Plugin] Successfully saved updated ${parsed.name}`);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok' }));
              } catch (err: any) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
              }
            });
            return;
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
})

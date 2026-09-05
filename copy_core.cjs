const fs = require('fs');
const path = require('path');

const userUploadedDir = "C:\\Users\\navee\\.gemini\\antigravity-ide\\brain\\f2d42453-64ff-496c-bf6c-871ca4aa5532\\.user_uploaded";
const assetsDir = path.join(__dirname, 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

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
    console.log(`Copied ${latestImage.name} to ${targetPath}`);
  }
}

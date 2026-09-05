/**
 * serve.mjs
 *
 * Dependency-free Node.js static HTTP server for the Terranova project.
 * ES modules require HTTP; file:// will not work for module scripts.
 *
 * Usage:
 *   node serve.mjs
 *   PORT=3000 node serve.mjs
 */

import { createServer }        from 'node:http';
import { readFile }             from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath }        from 'node:url';

// Resolve the project root from the module's own URL.
// fileURLToPath is used deliberately: .pathname leaves spaces percent-encoded
// (e.g. "New%20folder") and every request 404s when the folder name has spaces.
const ROOT = fileURLToPath(new URL('.', import.meta.url));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.mjs':  'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.mp4':  'video/mp4',
};

const PORT = Number(process.env.PORT) || 8123;

const server = createServer(async (req, res) => {
  try {
    // Decode the URL and default / → /index.html
    let url = decodeURIComponent(req.url.split('?')[0]);
    if (url === '/') url = '/index.html';

    // Resolve to an absolute path and guard against directory traversal
    const resolved = normalize(join(ROOT, url));
    if (!resolved.startsWith(ROOT)) {
      res.writeHead(403);
      res.end('forbidden');
      return;
    }

    const data = await readFile(resolved);
    const ext  = extname(resolved).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type':  mime,
      'Cache-Control': 'no-store',
    });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('not found');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`\nTerranova dev server running at:\n  http://127.0.0.1:${PORT}\n`);
});

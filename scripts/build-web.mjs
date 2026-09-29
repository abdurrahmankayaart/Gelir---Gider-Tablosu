// Copies the web app into www/, the folder Capacitor packages into the iOS and Android apps.
import { mkdirSync, copyFileSync, rmSync } from 'node:fs';

const files = ['index.html', 'privacy.html', 'manifest.webmanifest', 'sw.js', 'icon.svg', 'icon-192.png', 'icon-512.png'];
rmSync('www', { recursive: true, force: true });
mkdirSync('www');
for (const f of files) copyFileSync(f, `www/${f}`);
console.log(`www/ hazır (${files.length} dosya)`);

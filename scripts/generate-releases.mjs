import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { scanApkReleases } from './release-scanner.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const publicReleasesDir = path.join(rootDir, 'public', 'releases');

// Ensure public/releases exists
if (!fs.existsSync(publicReleasesDir)) {
  fs.mkdirSync(publicReleasesDir, { recursive: true });
}

// Discover all .apk files in public/releases
const outputReleases = scanApkReleases(publicReleasesDir);
const manifestJson = JSON.stringify(outputReleases, null, 2);

// Write to public/releases/releases.json
fs.writeFileSync(path.join(publicReleasesDir, 'releases.json'), manifestJson, 'utf8');

console.log(`[Releases] Generated public/releases/releases.json with ${outputReleases.length} APK release(s):`);
outputReleases.forEach((r, idx) => {
  console.log(`  ${idx === 0 ? '★ (Latest)' : ' '} ${r.version} -> ${r.filename} (${r.size})`);
});

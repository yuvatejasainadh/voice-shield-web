import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const publicReleasesDir = path.join(rootDir, 'public', 'releases');
const rootReleasesDir = path.join(rootDir, 'releases');
const generatedDir = path.join(rootDir, 'src', 'generated');

// Ensure directories exist
if (!fs.existsSync(publicReleasesDir)) {
  fs.mkdirSync(publicReleasesDir, { recursive: true });
}
if (!fs.existsSync(generatedDir)) {
  fs.mkdirSync(generatedDir, { recursive: true });
}

// If files exist in root/releases, sync them to public/releases as well
if (fs.existsSync(rootReleasesDir)) {
  try {
    const rootFiles = fs.readdirSync(rootReleasesDir);
    for (const file of rootFiles) {
      if (file.toLowerCase().endsWith('.apk')) {
        const srcPath = path.join(rootReleasesDir, file);
        const destPath = path.join(publicReleasesDir, file);
        if (!fs.existsSync(destPath)) {
          fs.copyFileSync(srcPath, destPath);
          console.log(`[Releases] Synced ${file} from releases/ to public/releases/`);
        }
      }
    }
  } catch (err) {
    console.warn('[Releases] Warning syncing from root releases dir:', err.message);
  }
}

/**
 * Format bytes to human readable format (e.g. 24.5 MB)
 */
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

/**
 * Parse semantic version from filename
 */
function parseVersion(filename) {
  // Look for patterns like v1.0, v1.10, 1.0, 2.3.4, Voice Shield v1.0.apk
  const match = filename.match(/[vV]?(\d+(?:\.\d+)+)/) || filename.match(/[vV](\d+)/);
  if (match) {
    const rawVersion = match[1];
    const parts = rawVersion.split('.').map((n) => parseInt(n, 10));
    return {
      version: rawVersion.startsWith('v') ? rawVersion : `v${rawVersion}`,
      rawNumber: rawVersion,
      parts,
      valid: true,
    };
  }
  return {
    version: filename.replace(/\.apk$/i, ''),
    rawNumber: '',
    parts: [],
    valid: false,
  };
}

/**
 * Read optional sha256 checksum file if present
 */
function findChecksum(filename, dir) {
  const possibleChecksumFiles = [
    `${filename}.sha256`,
    `${filename.replace(/\.apk$/i, '')}.sha256`,
    `${filename}.txt`,
  ];
  for (const checkFile of possibleChecksumFiles) {
    const checkPath = path.join(dir, checkFile);
    if (fs.existsSync(checkPath)) {
      try {
        const content = fs.readFileSync(checkPath, 'utf8').trim();
        const hashMatch = content.match(/[a-fA-F0-9]{64}/);
        if (hashMatch) {
          return hashMatch[0];
        }
      } catch {
        // ignore read error
      }
    }
  }
  return undefined;
}

// Discover all .apk files in public/releases
const allEntries = fs.existsSync(publicReleasesDir) ? fs.readdirSync(publicReleasesDir) : [];
const apkFiles = allEntries.filter((f) => f.toLowerCase().endsWith('.apk'));

const releases = apkFiles.map((filename) => {
  const filePath = path.join(publicReleasesDir, filename);
  const stats = fs.statSync(filePath);
  const parsed = parseVersion(filename);
  const checksum = findChecksum(filename, publicReleasesDir);

  return {
    filename,
    version: parsed.version,
    url: `/releases/${encodeURIComponent(filename)}`,
    size: formatFileSize(stats.size),
    sizeBytes: stats.size,
    mtime: stats.mtimeMs,
    checksum,
    _parsed: parsed,
  };
});

// Sort releases: newest first (semantic version comparison, fallback to modification time)
releases.sort((a, b) => {
  if (a._parsed.valid && b._parsed.valid) {
    const maxLen = Math.max(a._parsed.parts.length, b._parsed.parts.length);
    for (let i = 0; i < maxLen; i++) {
      const partA = a._parsed.parts[i] ?? 0;
      const partB = b._parsed.parts[i] ?? 0;
      if (partA !== partB) {
        return partB - partA; // Descending (larger first)
      }
    }
  } else if (a._parsed.valid && !b._parsed.valid) {
    return -1; // Valid version comes first
  } else if (!a._parsed.valid && b._parsed.valid) {
    return 1;
  }

  // Fallback to file modification time
  return b.mtime - a.mtime;
});

// Clean internal _parsed helper
const outputReleases = releases.map(({ _parsed, ...rel }, index) => ({
  ...rel,
  isLatest: index === 0,
}));

const manifestJson = JSON.stringify(outputReleases, null, 2);

// Write to public/releases/releases.json
fs.writeFileSync(path.join(publicReleasesDir, 'releases.json'), manifestJson, 'utf8');

// Write to src/generated/releases.json for seamless static bundling
fs.writeFileSync(path.join(generatedDir, 'releases.json'), manifestJson, 'utf8');

console.log(`[Releases] Generated manifest with ${outputReleases.length} APK release(s):`);
outputReleases.forEach((r, idx) => {
  console.log(`  ${idx === 0 ? '★ (Latest)' : ' '} ${r.version} -> ${r.filename} (${r.size})`);
});

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Format bytes to human readable format (e.g. 24.5 MB)
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

/**
 * Parse semantic version from filename
 */
export function parseVersion(filename) {
  // Look for patterns like v1.0.0, v1.0, v1.10, 1.0, 2.3.4, Voice Shield v1.0.apk
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
 * Read optional sha256 checksum file if present or compute from file
 */
export function findChecksum(filename, dir) {
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

  // Compute SHA-256 directly from file if accessible
  const filePath = path.join(dir, filename);
  if (fs.existsSync(filePath)) {
    try {
      const fileBuffer = fs.readFileSync(filePath);
      return crypto.createHash('sha256').update(fileBuffer).digest('hex');
    } catch {
      // ignore
    }
  }

  return undefined;
}

/**
 * Scans public/releases for .apk files and returns sorted release metadata.
 */
export function scanApkReleases(releasesDir) {
  if (!fs.existsSync(releasesDir)) {
    return [];
  }

  const allEntries = fs.readdirSync(releasesDir);
  const apkFiles = allEntries.filter((f) => f.toLowerCase().endsWith('.apk'));

  const releases = apkFiles.map((filename) => {
    const filePath = path.join(releasesDir, filename);
    const stats = fs.statSync(filePath);
    const parsed = parseVersion(filename);
    const checksum = findChecksum(filename, releasesDir);

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

  return releases.map(({ _parsed, ...rel }, index) => ({
    ...rel,
    isLatest: index === 0,
  }));
}

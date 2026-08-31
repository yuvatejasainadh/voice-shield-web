import releases from 'virtual:releases';

export interface ApkRelease {
  filename: string;
  version: string;
  url: string;
  size: string;
  sizeBytes?: number;
  mtime?: number;
  checksum?: string;
  isLatest?: boolean;
}

/**
 * Returns all discovered APK releases, sorted newest to oldest.
 */
export function getAllApkReleases(): ApkRelease[] {
  if (!Array.isArray(releases)) {
    return [];
  }
  return releases as ApkRelease[];
}

/**
 * Returns the latest detected APK release or null if no APKs exist.
 */
export function getLatestApk(): ApkRelease | null {
  const all = getAllApkReleases();
  if (all.length === 0) {
    return null;
  }
  return all[0];
}

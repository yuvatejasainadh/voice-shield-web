import rawReleases from '../generated/releases.json';

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
  if (!Array.isArray(rawReleases)) {
    return [];
  }
  return rawReleases as ApkRelease[];
}

/**
 * Returns the latest detected APK release or null if no APKs exist.
 */
export function getLatestApk(): ApkRelease | null {
  const releases = getAllApkReleases();
  if (releases.length === 0) {
    return null;
  }
  return releases[0];
}

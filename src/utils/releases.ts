export interface ApkRelease {
  version: string;
  filename: string;
  url: string;
  size?: string;
  checksum?: string;
  releaseDate?: string;
  isLatest?: boolean;
}

const DISCOVERED_RELEASES: ApkRelease[] = [];

export function getAllApkReleases(): ApkRelease[] {
  return DISCOVERED_RELEASES;
}

export function getLatestApk(): ApkRelease | null {
  return DISCOVERED_RELEASES.find((r) => r.isLatest) || DISCOVERED_RELEASES[0] || null;
}

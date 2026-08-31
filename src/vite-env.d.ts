/// <reference types="vite/client" />

declare module 'virtual:releases' {
  export interface RawApkRelease {
    filename: string;
    version: string;
    url: string;
    size: string;
    sizeBytes?: number;
    mtime?: number;
    checksum?: string;
    isLatest?: boolean;
  }

  const releases: RawApkRelease[];
  export default releases;
}

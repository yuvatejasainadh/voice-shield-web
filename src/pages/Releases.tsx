import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Tag, Download, Github, AlertCircle, CheckCircle2, ShieldCheck, HardDrive } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { Button } from '../components/ui/Button';
import { LockedSourceButton } from '../components/ui/LockedSourceButton';
import { getAllApkReleases } from '../utils/releases';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function Releases() {
  const releases = getAllApkReleases();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header with Logo */}
        <div className="mb-10 pb-6 border-b border-[#DCE3EA] flex items-center space-x-4">
          <VoiceShieldLogo className="h-12 w-12" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">Android Releases</h1>
            <p className="text-sm text-[#5E6E82] mt-0.5">
              Discovered application builds, changelogs, and binary distribution artifacts.
            </p>
          </div>
        </div>

        {releases.length === 0 ? (
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-8 sm:p-12 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#FDF5E6] text-[#C78316] flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#13233A] mb-1">No APK Releases Found</h3>
            <p className="text-sm text-[#5E6E82] max-w-md mx-auto mb-6">
              No APK files are currently placed in <code className="text-[#1F3B64] font-mono bg-[#F1F4F8] px-1.5 py-0.5 rounded">public/releases/</code>.
            </p>
            <LockedSourceButton label="Android App LOCKED" />
          </div>
        ) : (
          <div className="space-y-6">
            {releases.map((rel) => (
              <div 
                key={rel.filename} 
                className={`p-6 sm:p-8 rounded-2xl bg-white border ${
                  rel.isLatest 
                    ? 'border-[#1F3B64] shadow-sm ring-1 ring-[#1F3B64]/10' 
                    : 'border-[#DCE3EA]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-bold text-2xl text-[#13233A] tracking-tight">{rel.version}</h3>
                    {rel.isLatest && (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                        Latest Release
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-medium text-[#5E6E82]">
                    {rel.filename} {rel.size ? `• ${rel.size}` : ''}
                  </div>
                </div>

                {rel.checksum && (
                  <div className="mb-6 p-3.5 rounded-xl bg-[#F1F4F8] border border-[#DCE3EA] text-xs font-mono text-[#1F3B64] break-all">
                    <span className="text-[#5E6E82] font-bold uppercase tracking-wider mr-2">SHA-256:</span>
                    <span>{rel.checksum}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#DCE3EA]">
                  <Button 
                    size="md" 
                    href={rel.url} 
                    download={rel.filename}
                    variant={rel.isLatest ? "primary" : "outline"} 
                    className="w-full sm:w-auto px-6"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download APK ({rel.version})
                  </Button>
                  <LockedSourceButton label="Android App LOCKED" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </Layout>
  );
}


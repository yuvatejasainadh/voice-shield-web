import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Download as DownloadIcon, Smartphone, Github, ExternalLink, AlertCircle, ShieldCheck, Check, Copy, History } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PROJECT_CONFIG } from '../config/project';
import { getLatestApk } from '../utils/releases';
import { Link } from 'react-router-dom';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function Download() {
  const latestApk = getLatestApk();
  const [copied, setCopied] = useState(false);

  const handleCopyChecksum = () => {
    if (latestApk?.checksum) {
      navigator.clipboard.writeText(latestApk.checksum);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header with Logo */}
        <div className="mb-8 pb-6 border-b border-[#DCE3EA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <VoiceShieldLogo className="h-12 w-12" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">Voice Shield for Android</h1>
              <p className="text-sm text-[#5E6E82]">Real-time on-device voice protection client</p>
            </div>
          </div>

          <Link 
            to="/releases" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F3B64] hover:underline self-start sm:self-auto"
          >
            <History className="w-4 h-4" />
            <span>All Releases & Changelog</span>
          </Link>
        </div>

        {/* Latest APK Card */}
        {latestApk ? (
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 mb-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#DCE3EA]">
              <div className="flex items-start sm:items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#F1F4F8] text-[#1F3B64] shrink-0">
                  <Smartphone className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl font-bold text-[#13233A]">{latestApk.filename}</h2>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                      Latest Release
                    </span>
                  </div>
                  <p className="text-xs text-[#5E6E82]">
                    Version {latestApk.version} {latestApk.size ? `• ${latestApk.size}` : ''}
                  </p>
                </div>
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                href={latestApk.url}
                download={latestApk.filename}
                className="w-full md:w-auto px-8 justify-center shadow-xs"
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                DOWNLOAD APK ({latestApk.version})
              </Button>
            </div>

            {/* Metadata & Architecture */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                <div className="text-[#5E6E82] font-medium mb-0.5">Architecture</div>
                <div className="font-bold text-[#13233A]">ARM64-v8a / Universal</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                <div className="text-[#5E6E82] font-medium mb-0.5">Minimum OS</div>
                <div className="font-bold text-[#13233A]">Android 8.0+ (API 26)</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                <div className="text-[#5E6E82] font-medium mb-0.5">Package ID</div>
                <div className="font-bold font-mono text-[#1F3B64]">org.sih.voiceshield</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                <div className="text-[#5E6E82] font-medium mb-0.5">Model Engine</div>
                <div className="font-bold text-[#13233A]">WavLM ONNX Embedded</div>
              </div>
            </div>

            {/* SHA-256 Checksum block if present */}
            {latestApk.checksum && (
              <div className="mt-6 p-4 rounded-xl bg-[#F1F4F8] border border-[#DCE3EA] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="overflow-hidden">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#5E6E82] mb-1">SHA-256 Integrity Hash</div>
                  <div className="font-mono text-xs text-[#1F3B64] truncate select-all">{latestApk.checksum}</div>
                </div>
                <button
                  onClick={handleCopyChecksum}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DCE3EA] text-xs font-semibold text-[#13233A] hover:bg-[#F7F9FC] shrink-0 cursor-pointer shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#159570]" />
                      <span className="text-[#159570]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#5E6E82]" />
                      <span>Copy SHA-256</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-8 mb-8 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#FDF5E6] text-[#C78316] flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#13233A] mb-1">No APK Release Detected</h2>
            <p className="text-sm text-[#5E6E82] max-w-md mx-auto mb-4">
              Place your APK in <code className="font-mono bg-[#F1F4F8] px-1.5 py-0.5 rounded text-[#1F3B64]">public/releases/</code> or view our repository.
            </p>
            <Button variant="outline" size="sm" href={PROJECT_CONFIG.repositories.android}>
              <ExternalLink className="w-4 h-4 mr-2" />
              View Android Repository
            </Button>
          </div>
        )}

        {/* Installation Steps */}
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 mb-8 shadow-xs">
          <h2 className="text-lg font-bold text-[#13233A] mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#1F3B64]" />
            Installation & Setup Guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#1F3B64] text-white flex items-center justify-center font-bold text-sm mb-3">
                1
              </div>
              <h3 className="font-bold text-sm text-[#13233A] mb-1">Download APK</h3>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Click the download button above to get the latest APK directly to your Android device.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#1F3B64] text-white flex items-center justify-center font-bold text-sm mb-3">
                2
              </div>
              <h3 className="font-bold text-sm text-[#13233A] mb-1">Allow Unknown Sources</h3>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                If prompted by Android, permit installation from unknown sources in your browser settings.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#1F3B64] text-white flex items-center justify-center font-bold text-sm mb-3">
                3
              </div>
              <h3 className="font-bold text-sm text-[#13233A] mb-1">Launch & Grant Permissions</h3>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Open Voice Shield and grant Microphone & Overlay permissions for real-time background protection.
              </p>
            </div>
          </div>
        </div>

        {/* Source Code Link */}
        <div className="p-6 rounded-2xl bg-[#F1F4F8] border border-[#DCE3EA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-sm text-[#13233A]">Looking for the source code?</h3>
            <p className="text-xs text-[#5E6E82] mt-0.5">Explore the native Android architecture, Jetpack Compose UI, and ML runtime.</p>
          </div>
          <Button variant="outline" size="sm" href={PROJECT_CONFIG.repositories.android} className="shrink-0">
            <Github className="w-4 h-4 mr-2" />
            Android Repository
            <ExternalLink className="w-3 h-3 ml-2 opacity-60" />
          </Button>
        </div>

      </div>
    </Layout>
  );
}


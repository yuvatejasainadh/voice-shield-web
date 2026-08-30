import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Download as DownloadIcon, Smartphone, FileCheck, Copy, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PROJECT_CONFIG } from '../config/project';

export function Download() {
  const [copied, setCopied] = React.useState(false);

  const copySha = () => {
    navigator.clipboard.writeText(PROJECT_CONFIG.APK_SHA256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="mb-8 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-bold text-slate-100 mb-2 tracking-tighter uppercase">Voice Shield for Android</h1>
          <p className="text-slate-400">Download the latest Android application and test voice-clone detection directly on your device.</p>
        </div>

        <div className="bg-[#0A0D12] border border-slate-800 p-8 sm:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
            <Smartphone className="w-64 h-64" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-slate-900 border border-slate-800 text-cyan-500">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-100 tracking-wider">VOICE SHIELD ANDROID</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="bg-slate-900 text-cyan-400 text-[10px] uppercase font-bold tracking-[0.2em] px-2 py-0.5 border border-slate-800">LATEST BUILD</span>
                  <span className="text-[10px] font-mono text-slate-500">{PROJECT_CONFIG.APK_VERSION}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 border-y border-slate-800 py-6">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Release</p>
                <p className="text-sm text-slate-300 font-mono">{PROJECT_CONFIG.APK_RELEASE_DATE}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Requirement</p>
                <p className="text-sm text-slate-300 font-mono">{PROJECT_CONFIG.ANDROID_MIN_VERSION}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Size</p>
                <p className="text-sm text-slate-300 font-mono">{PROJECT_CONFIG.APK_SIZE}</p>
              </div>
            </div>

            {PROJECT_CONFIG.APK_URL ? (
              <Button variant="primary" className="w-full sm:w-auto" href={PROJECT_CONFIG.APK_URL} asExternal>
                <DownloadIcon className="w-4 h-4 mr-2" />
                DOWNLOAD APK
              </Button>
            ) : (
              <div className="p-4 bg-slate-900 border border-slate-800 text-center text-slate-500 text-xs font-bold uppercase tracking-wider">
                APK release link not configured.
              </div>
            )}
            
            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">SHA-256 Checksum</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <code className="text-xs text-cyan-500 bg-slate-900 px-4 py-2 border border-slate-800 block break-all font-mono">
                  {PROJECT_CONFIG.APK_SHA256}
                </code>
                <Button variant="outline" size="sm" onClick={copySha} className="flex-shrink-0">
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? 'COPIED' : 'COPY SHA-256'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/30 border border-slate-800 p-6 sm:p-8">
          <div className="flex items-center space-x-3 mb-4">
            <FileCheck className="w-5 h-5 text-cyan-500" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Verify the APK</h3>
          </div>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            To ensure the integrity of the downloaded application and confirm it has not been tampered with, 
            we strongly recommend verifying the SHA-256 checksum before installation.
          </p>
          <div className="bg-[#0A0D12] border border-slate-800 p-4 font-mono text-xs text-slate-300 overflow-x-auto">
            <p className="text-slate-500 mb-2"># Linux / macOS</p>
            <p>sha256sum voice-shield-v1.0.0.apk</p>
            <br />
            <p className="text-slate-500 mb-2"># Windows (PowerShell)</p>
            <p>Get-FileHash voice-shield-v1.0.0.apk -Algorithm SHA256</p>
          </div>
        </div>

      </div>
    </Layout>
  );
}

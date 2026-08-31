import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Download as DownloadIcon, Smartphone, Github, ExternalLink, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PROJECT_CONFIG } from '../config/project';
import { getLatestApk } from '../utils/releases';

export function Download() {
  const latestApk = getLatestApk();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="mb-8 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-bold text-slate-100 mb-2 tracking-tighter uppercase">Voice Shield for Android</h1>
          <p className="text-slate-400">Download the Voice Shield Android application and analyze voice authenticity directly from your device.</p>
        </div>

        <div className="bg-[#0A0D12] border border-slate-800 p-8 sm:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
            <Smartphone className="w-64 h-64" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-slate-900 border border-slate-800 text-cyan-500">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-100 tracking-wider uppercase">VOICE SHIELD FOR ANDROID</h2>
                {latestApk ? (
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="bg-slate-900 text-cyan-400 text-[10px] uppercase font-bold tracking-[0.2em] px-2 py-0.5 border border-slate-800">LATEST RELEASE</span>
                    <span className="text-[10px] font-mono text-slate-400">{latestApk.version}</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="bg-slate-900 text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em] px-2 py-0.5 border border-slate-800">ANDROID APP</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-8 leading-relaxed max-w-2xl">
              {latestApk 
                ? "Download the Voice Shield Android application and analyze voice authenticity directly from your device."
                : "No APK release is currently available."}
            </p>

            {latestApk ? (
              <>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full sm:w-auto flex flex-col items-center justify-center py-3 px-8"
                    href={latestApk.url}
                    download={latestApk.filename}
                  >
                    <div className="flex items-center">
                      <DownloadIcon className="w-5 h-5 mr-2 shrink-0" />
                      <span>Download {latestApk.filename}</span>
                    </div>
                  </Button>
                </div>

                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-8">
                  Android APK • {latestApk.version} {latestApk.size ? `• ${latestApk.size}` : ''}
                </p>
              </>
            ) : (
              <div className="mb-8">
                <Button 
                  variant="outline" 
                  size="lg" 
                  disabled
                  className="opacity-50 cursor-not-allowed"
                >
                  <AlertCircle className="w-5 h-5 mr-2 shrink-0 text-slate-500" />
                  <span>No APK Available</span>
                </Button>
              </div>
            )}
            
            <div className="pt-8 border-t border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">SOURCE CODE</h3>
                  <p className="text-xs text-slate-500">Explore the Android client source code on GitHub.</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  href={PROJECT_CONFIG.repositories.android} 
                  asExternal
                >
                  <Github className="w-4 h-4 mr-2" />
                  VIEW ANDROID SOURCE
                  <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}

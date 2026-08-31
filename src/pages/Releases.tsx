import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Tag, Download, Github, AlertCircle } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { Button } from '../components/ui/Button';
import { getAllApkReleases } from '../utils/releases';

export function Releases() {
  const releases = getAllApkReleases();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="mb-12 border-b border-slate-800 pb-8 flex items-center space-x-4">
          <Tag className="w-10 h-10 text-cyan-500" />
          <div>
            <h1 className="text-4xl font-bold text-slate-100 tracking-tighter uppercase">Releases</h1>
            <p className="text-lg text-slate-400 font-light mt-1">
              Discovered application builds and distribution artifacts.
            </p>
          </div>
        </div>

        {releases.length === 0 ? (
          <div className="bg-[#0A0D12] border border-slate-800 p-8 sm:p-12 text-center">
            <AlertCircle className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold uppercase tracking-wider text-slate-200 mb-2">ANDROID APP</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
              No APK release is currently available. Place release APKs into <code className="text-cyan-400 font-mono">public/releases/</code> and rebuild to distribute.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              href={PROJECT_CONFIG.repositories.android} 
              asExternal
            >
              <Github className="w-4 h-4 mr-2" />
              VIEW ANDROID SOURCE
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {releases.map((rel) => (
              <div 
                key={rel.filename} 
                className={`p-6 sm:p-8 border ${
                  rel.isLatest 
                    ? 'border-cyan-500/40 bg-[#0A0D12] shadow-lg shadow-cyan-950/10' 
                    : 'border-slate-800 bg-[#0A0D12]/70'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-bold text-2xl text-slate-100 font-mono">{rel.version}</h3>
                    {rel.isLatest && (
                      <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase px-2.5 py-1 border border-cyan-500/30 bg-cyan-500/10">
                        LATEST
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {rel.filename} {rel.size ? `(${rel.size})` : ''}
                  </div>
                </div>

                {rel.checksum && (
                  <div className="mb-6 p-3 bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400 break-all">
                    <span className="text-slate-500 font-bold uppercase tracking-wider mr-2">SHA-256:</span>
                    <span className="text-cyan-400">{rel.checksum}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800/80">
                  <Button 
                    size="sm" 
                    href={rel.url} 
                    download={rel.filename}
                    variant={rel.isLatest ? "primary" : "outline"} 
                    className="w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    DOWNLOAD APK
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    href={PROJECT_CONFIG.repositories.android} 
                    asExternal
                    className="w-full sm:w-auto"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    ANDROID SOURCE
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </Layout>
  );
}

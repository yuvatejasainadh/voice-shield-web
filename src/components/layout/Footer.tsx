import React from 'react';
import { PROJECT_CONFIG } from '../../config/project';
import { getLatestApk } from '../../utils/releases';

export function Footer() {
  const latestApk = getLatestApk();

  return (
    <footer className="border-t border-slate-800 bg-[#0A0D12] text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-auto shrink-0 relative z-10 py-3 px-4 sm:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span>Smart India Hackathon 2026</span>
          <span>•</span>
          <span>Problem {PROJECT_CONFIG.SIH_PROBLEM_STATEMENT}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-400">
          <a 
            href={PROJECT_CONFIG.repositories.web} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href={PROJECT_CONFIG.repositories.android} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
          >
            Android
          </a>
          <a 
            href={PROJECT_CONFIG.repositories.api} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
          >
            API
          </a>
          <a 
            href={PROJECT_CONFIG.repositories.docs} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
          >
            Documentation
          </a>
          {latestApk ? (
            <a 
              href={latestApk.url} 
              download={latestApk.filename}
              className="text-cyan-500 hover:text-cyan-400 font-bold transition-colors"
            >
              Download APK ({latestApk.version})
            </a>
          ) : (
            <a 
              href="/download"
              className="text-cyan-500 hover:text-cyan-400 font-bold transition-colors"
            >
              Android App
            </a>
          )}
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            API: Online
          </span>
          <span className="text-slate-500">© Voice Shield</span>
        </div>
      </div>
    </footer>
  );
}

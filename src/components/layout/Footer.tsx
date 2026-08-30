import React from 'react';
import { PROJECT_CONFIG } from '@/src/config/project';

export function Footer() {
  return (
    <footer className="h-12 border-t border-slate-800 flex items-center justify-between px-4 sm:px-8 text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-auto shrink-0 bg-[#0A0D12] relative z-10 hidden sm:flex">
      <div>Smart India Hackathon 2026 • Problem {PROJECT_CONFIG.SIH_PROBLEM_STATEMENT}</div>
      <div className="flex gap-4 sm:gap-8">
        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> API: Online</span>
        <span className="hidden md:inline">Secure Transmission: Enabled</span>
        <span className="text-slate-300">© Voice Shield Team</span>
      </div>
    </footer>
  );
}

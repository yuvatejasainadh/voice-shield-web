import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocLayout } from '../../components/docs/DocLayout';
import { PROJECT_CONFIG } from '../../config/project';
import { getLatestApk } from '../../utils/releases';

export function AndroidApp() {
  const latestApk = getLatestApk();

  return (
    <DocLayout>
      <div className="mb-10">
        <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-4">
          <Link to="/docs" className="hover:text-slate-300">Docs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-300">Android App</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-100 tracking-tighter uppercase mb-4">Android Application</h1>
        <p className="text-lg text-slate-400 font-light">
          Client-side recording and secure payload transmission.
        </p>
      </div>

      <div className="prose prose-invert prose-cyan max-w-none">
        <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-tight mt-12 mb-6 pb-2 border-b border-slate-800">Requirements</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-400 mb-8 marker:text-cyan-500">
          <li>Android 8.0 (API level 26) or higher</li>
          <li>Microphone permissions</li>
          <li>Internet connection</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-tight mt-12 mb-6 pb-2 border-b border-slate-800">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-400 mb-8 marker:text-cyan-500">
          <li>On-device recording via AudioRecord API</li>
          <li>Real-time visualization of the audio waveform</li>
          <li>Secure transmission over TLS 1.3 to the Backend API</li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-slate-800 not-prose">
          {latestApk ? (
            <a
              href={latestApk.url}
              download={latestApk.filename}
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider transition-colors h-10 px-6 text-xs bg-cyan-500 text-[#0A0D12] hover:bg-cyan-400 rounded-none"
            >
              Download {latestApk.filename}
            </a>
          ) : (
            <Link
              to="/download"
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider transition-colors h-10 px-6 text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-none"
            >
              View Download Page
            </Link>
          )}
          <a
            href={PROJECT_CONFIG.repositories.android}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold uppercase tracking-wider transition-colors h-10 px-6 text-xs bg-[#0F172A] text-slate-100 hover:bg-slate-800 border border-slate-700 rounded-none"
          >
            View GitHub Repository ↗
          </a>
        </div>
      </div>
    </DocLayout>
  );
}

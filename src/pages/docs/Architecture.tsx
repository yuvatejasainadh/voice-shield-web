import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocLayout } from '../../components/docs/DocLayout';

export function Architecture() {
  return (
    <DocLayout>
      <div className="mb-10">
        <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-4">
          <Link to="/docs" className="hover:text-slate-300">Docs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-300">Architecture</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-100 tracking-tighter uppercase mb-4">Project Architecture</h1>
        <p className="text-lg text-slate-400 font-light">
          Voice Shield employs a multi-tiered architecture separating client capture, secure transmission, and heavy ML inference.
        </p>
      </div>

      <div className="prose prose-invert prose-cyan max-w-none">
        <div className="bg-[#0A0D12] border border-slate-800 p-6 sm:p-8 font-mono text-sm text-cyan-500 mb-8 overflow-x-auto">
          <pre className="whitespace-pre">
{`Android App (Client)
      ↓
Backend API (FastAPI)
      ↓
Audio Validation (Format checking, length constraints)
      ↓
Pre-processing (Resampling, normalization)
      ↓
Sliding Window Analysis
      ↓
WavLM Feature Extraction
      ↓
Classifier (Deep Neural Network)
      ↓
Score Aggregation
      ↓
Detection Result (JSON Response)`}
          </pre>
        </div>
        <p className="text-slate-400">
          The system is designed to minimize latency while ensuring robust analysis of the audio signal.
        </p>
      </div>
    </DocLayout>
  );
}

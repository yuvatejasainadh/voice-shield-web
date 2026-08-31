import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocLayout } from '../../components/docs/DocLayout';
import { PROJECT_CONFIG } from '../../config/project';

export function MLPipeline() {
  return (
    <DocLayout>
      <div className="mb-10">
        <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-4">
          <Link to="/docs" className="hover:text-slate-300">Docs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-300">ML Pipeline</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-100 tracking-tighter uppercase mb-4">ML Pipeline</h1>
        <p className="text-lg text-slate-400 font-light">
          Core AI logic for detecting synthetic voices and voice clones.
        </p>
      </div>

      <div className="prose prose-invert prose-cyan max-w-none">
        <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-tight mt-12 mb-6 pb-2 border-b border-slate-800">Model Architecture</h2>
        <p className="text-slate-400 mb-6">
          Our pipeline leverages a fine-tuned WavLM Base+ model, providing state-of-the-art feature extraction for spoken audio.
        </p>
        
        <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-tight mt-12 mb-6 pb-2 border-b border-slate-800">Inference Details</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-400 mb-8 marker:text-cyan-500">
          <li><strong>Input:</strong> Resampled 16kHz mono audio</li>
          <li><strong>Windowing:</strong> Sliding window of 2 seconds with 50% overlap</li>
          <li><strong>Classifier:</strong> DNN trained on synthetic voice datasets</li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-slate-800">
          <a
            href={PROJECT_CONFIG.repositories.api}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold uppercase tracking-wider transition-colors h-10 px-6 text-xs bg-[#0F172A] text-slate-100 hover:bg-slate-800 border border-slate-700 rounded-none"
          >
            FastAPI Backend Repository ↗
          </a>
        </div>
      </div>
    </DocLayout>
  );
}

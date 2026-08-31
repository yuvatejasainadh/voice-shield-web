import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocLayout } from '../../components/docs/DocLayout';
import { PROJECT_CONFIG } from '../../config/project';
import { Button } from '../../components/ui/Button';

export function Architecture() {
  return (
    <DocLayout>
      <div className="mb-8 pb-6 border-b border-[#DCE3EA]">
        <div className="flex items-center space-x-2 text-xs font-semibold text-[#5E6E82] mb-3">
          <Link to="/docs" className="hover:text-[#1F3B64]">Documentation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1F3B64]">Architecture</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-2">System Architecture</h1>
        <p className="text-sm text-[#5E6E82]">
          Multi-tiered pipeline separating real-time client capture, secure transmission, and WavLM tensor inference.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8">
          <h2 className="text-base font-bold text-[#13233A] mb-4 pb-2 border-b border-[#DCE3EA]">Pipeline Flow Diagram</h2>
          <div className="bg-[#F1F4F8] border border-[#DCE3EA] rounded-xl p-5 font-mono text-xs text-[#1F3B64] overflow-x-auto">
            <pre className="whitespace-pre leading-relaxed font-semibold">
{`Android Native Client (Jetpack Compose / AudioRecord)
      ↓ TLS 1.3 Streaming
Backend API Gateway (FastAPI / Uvicorn)
      ↓ Format Validation
Audio Pre-processing (16kHz Mono Resampling & Normalization)
      ↓ Sliding Window (2.0s chunks / 50% overlap)
Feature Extractor (WavLM Deep Acoustic Representations)
      ↓ Embedding Classification
Deep Neural Classifier (Linear Heads + Sigmoid)
      ↓ Score Aggregator
Risk Level Determination (VERIFIED_HUMAN | SUSPICIOUS | SPOOF_DETECTED)
      ↓ JSON / WebSocket Response
Client Alert UI (Real-Time Badge & Frequency Visualizer)`}
            </pre>
          </div>
        </div>

        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Design Principles</h2>
          <p className="text-sm text-[#5E6E82] leading-relaxed">
            The architecture prioritizes sub-300ms latency on edge networks while isolating all heavy model computations inside scalable GPU inference clusters. Sensitive voice frames remain strictly in memory and are discarded post-inference.
          </p>
        </div>

        <div className="flex gap-3 pt-2">
          <Button href={PROJECT_CONFIG.repositories.api} asExternal variant="outline" size="md">
            Backend API Source
            <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-60" />
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}


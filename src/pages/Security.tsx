import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ShieldCheck, Lock, AlertTriangle, EyeOff } from 'lucide-react';

export function Security() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="mb-12 text-center border-b border-slate-800 pb-12">
          <ShieldCheck className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-100 tracking-tighter uppercase mb-4">Security & Privacy</h1>
          <p className="text-lg text-slate-400 font-light max-w-xl mx-auto">
            Information regarding data handling, API security, and the limitations of AI voice analysis.
          </p>
        </div>

        <div className="space-y-8">
          
          <PolicyCard 
            icon={<EyeOff className="w-6 h-6 text-cyan-500" />}
            title="Data Retention & Privacy"
            content="Audio files uploaded via the web demo or Android application are processed in memory and are strictly transient. We do not store, log, or persist user audio samples after the inference pipeline completes. No audio data is used to further train our models without explicit opt-in."
          />

          <PolicyCard 
            icon={<Lock className="w-6 h-6 text-cyan-500" />}
            title="Audio Transmission"
            content="All communication between the client (Web/Android) and the Backend API is encrypted in transit using TLS 1.3. Uploaded payloads are subjected to strict size limits and MIME-type validation before processing begins."
          />

          <PolicyCard 
            icon={<AlertTriangle className="w-6 h-6 text-amber-500" />}
            title="Limitations & Guarantees"
            content="Voice Shield provides an AI-based assessment and should not be treated as absolute proof of authenticity. Deepfake detection is inherently probabilistic. The system may produce false positives (flagging real audio as synthetic) or false negatives (failing to detect advanced clones). This tool is designed to assist human judgment, not replace it."
            isWarning
          />

        </div>
      </div>
    </Layout>
  );
}

function PolicyCard({ icon, title, content, isWarning }: { icon: React.ReactNode, title: string, content: string, isWarning?: boolean }) {
  return (
    <div className={`p-6 sm:p-8 border ${isWarning ? 'bg-amber-500/5 border-amber-500/30' : 'bg-[#0A0D12] border-slate-800'}`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className={`p-3 ${isWarning ? 'bg-amber-500/10 border-amber-500/30' : 'bg-slate-900 border border-slate-800'}`}>
          {icon}
        </div>
        <h2 className={`text-sm font-bold tracking-wider uppercase ${isWarning ? 'text-amber-500' : 'text-slate-200'}`}>{title}</h2>
      </div>
      <p className="text-slate-400 leading-relaxed text-sm">
        {content}
      </p>
    </div>
  );
}

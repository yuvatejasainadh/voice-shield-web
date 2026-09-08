import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ShieldCheck, Lock, AlertTriangle, EyeOff } from 'lucide-react';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function Security() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        <div className="mb-10 pb-6 border-b border-[#DCE3EA] flex items-center space-x-4">
          <VoiceShieldLogo className="h-12 w-12" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">Security & Privacy</h1>
            <p className="text-sm text-[#5E6E82] mt-0.5">
              Data handling practices, encryption standards, and AI confidence boundaries.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          
          <PolicyCard 
            icon={<EyeOff className="w-5 h-5 text-[#1F3B64]" />}
            title="Privacy & Ephemeral Audio Processing"
            content="Raw call audio is never stored in the Voice Shield backend database, object storage, or application logs. Transient audio processing is strictly memory-oriented and immediately released post-analysis. Logs never contain raw audio, Base64 audio buffers, credentials, or sensitive request bodies."
          />

          <PolicyCard 
            icon={<Lock className="w-5 h-5 text-[#1F3B64]" />}
            title="Metadata Retention vs. Audio Discard"
            content="Voice Shield persists lightweight analysis and decision metadata (such as call timestamps, risk levels, and temporal event scores) rather than raw call audio. Client-to-backend communication is strictly protected via WSS/TLS, and all detector API credentials remain secure server-side."
          />

          <PolicyCard 
            icon={<AlertTriangle className="w-5 h-5 text-[#C78316]" />}
            title="Demonstrator Boundaries & Probabilistic Scores"
            content="The v1.0 Demonstrator delivers temporal risk assessment based on sliding analysis windows and external detector evaluation. Detection is probabilistic and engineered to assist human verification. v1.0 does not claim production calibration or universal deepfake robustness."
            isWarning
          />

        </div>
      </div>
    </Layout>
  );
}

function PolicyCard({ icon, title, content, isWarning }: { icon: React.ReactNode, title: string, content: string, isWarning?: boolean }) {
  return (
    <div className={`p-6 rounded-2xl border transition-all ${
      isWarning 
        ? 'bg-[#FEFAF4] border-[#F0D09B]' 
        : 'bg-white border-[#DCE3EA]'
    }`}>
      <div className="flex items-center space-x-3.5 mb-3">
        <div className={`p-2.5 rounded-xl ${
          isWarning 
            ? 'bg-[#FDF5E6]' 
            : 'bg-[#F1F4F8]'
        }`}>
          {icon}
        </div>
        <h2 className={`text-base font-bold tracking-tight ${
          isWarning ? 'text-[#C78316]' : 'text-[#13233A]'
        }`}>{title}</h2>
      </div>
      <p className="text-sm text-[#5E6E82] leading-relaxed">
        {content}
      </p>
    </div>
  );
}


import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ShieldCheck, Lock, AlertTriangle, EyeOff, UserCheck, Server } from 'lucide-react';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function Security() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        <div className="mb-10 pb-6 border-b border-[#DCE3EA] flex items-center space-x-4">
          <VoiceShieldLogo className="h-12 w-12 shrink-0" />
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-[11px] font-bold uppercase tracking-wider mb-1.5">
              Trust, Privacy &amp; Responsible AI
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">
              Security, Privacy &amp; Decision Boundaries
            </h1>
            <p className="text-sm text-[#5E6E82] mt-0.5">
              How VoiceShield handles sensitive voice data, protects transport channels, and frames probabilistic AI risk intelligence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          
          <PolicyCard 
            icon={<EyeOff className="w-5 h-5 text-[#1F3B64]" />}
            title="Ephemeral Audio Processing"
            content="Raw call audio is never stored in the VoiceShield backend database, object storage, or application logs. Incoming PCM windows and uploaded evaluation files are processed transiently in memory and released immediately after analysis."
          />

          <PolicyCard 
            icon={<Lock className="w-5 h-5 text-[#1F3B64]" />}
            title="Encrypted Transport (HTTPS & WSS/TLS)"
            content="All client-to-backend communication—both real-time Android WebSocket window streaming (WSS) and Web console file analysis (HTTPS)—is encrypted in transit using TLS."
          />

          <PolicyCard 
            icon={<Server className="w-5 h-5 text-[#1F3B64]" />}
            title="Server-Side Credential Isolation"
            content="All external detector credentials, API tokens, and database connection parameters remain strictly isolated on the backend server. No third-party keys or database credentials are exposed to the browser or mobile client."
          />

          <PolicyCard 
            icon={<ShieldCheck className="w-5 h-5 text-[#1F3B64]" />}
            title="Minimal Metadata vs. Raw Audio Discard"
            content="VoiceShield is architected to retain only lightweight session decision metadata (such as timestamps, sequence indices, and aggregated risk scores) rather than raw voice recordings or Base64 audio payloads."
          />

        </div>

        {/* Responsible AI & Human Decision Support Section */}
        <div className="space-y-5">
          <PolicyCard 
            icon={<UserCheck className="w-5 h-5 text-[#1F3B64]" />}
            title="Human-in-the-Loop Decision Support"
            content="VoiceShield is designed to assist human judgment, not replace it. Risk scores and conversational warnings are presented alongside recommended verification actions (such as performing an independent callback via a trusted number) so users and security teams remain in control."
          />

          <PolicyCard 
            icon={<AlertTriangle className="w-5 h-5 text-[#C78316]" />}
            title="Probabilistic Risk Signals & Operational Boundaries"
            content="AI-generated voice authenticity and conversational risk scores are probabilistic indicators influenced by line quality, background noise, codec compression, and speaker context. Outputs do not constitute definitive legal, forensic, or biometric proof of caller identity or fraud. VoiceShield does not claim universal deepfake detection or guaranteed fraud prevention."
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


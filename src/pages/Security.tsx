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
            title="Data Retention & Ephemeral Audio"
            content="Audio snippets analyzed via the Voice Shield Android application or live web verification portal are processed purely in ephemeral RAM. Audio streams are discarded immediately following acoustic score calculation. We never retain, store, or profile private conversations."
          />

          <PolicyCard 
            icon={<Lock className="w-5 h-5 text-[#1F3B64]" />}
            title="Encrypted Stream Transmission"
            content="All communication between client endpoints and our FastAPI inference clusters is protected via strict TLS 1.3 encryption. Dynamic payloads undergo real-time sanitization and format verification before entering the WavLM tensor pipeline."
          />

          <PolicyCard 
            icon={<AlertTriangle className="w-5 h-5 text-[#C78316]" />}
            title="Probabilistic AI Boundaries"
            content="Voice Shield provides acoustic probability scores based on neural representation models. While effective against modern zero-shot clone models, detection is probabilistic. The system is engineered to assist human verification, not act as a sole legal determination."
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


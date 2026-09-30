import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ShieldCheck, Lock, AlertTriangle, EyeOff, UserCheck, Server } from 'lucide-react';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../config/project';

export function Security() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        <div className="mb-10 pb-6 border-b border-[#DCE3EA] flex items-center gap-4">
          <VoiceShieldLogo className="h-12 w-12 shrink-0" />
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F7F2] border border-[#B4E8D7] text-[#159570] text-[11px] font-bold uppercase tracking-wider mb-1">
              {PROJECT_CONFIG.PUBLIC_NAME}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">
              Security, Privacy &amp; Responsible AI
            </h1>
            <p className="text-sm text-[#5E6E82] mt-1">
              Ephemeral voice processing, credential isolation, and responsible probabilistic risk reporting in VOICE SHIELD.
            </p>
          </div>
        </div>

        {/* Core Responsible AI Banner */}
        <div className="mb-8 bg-[#FEFAF4] border border-[#F0D09B] rounded-2xl p-6 flex items-start gap-3.5">
          <AlertTriangle className="w-5 h-5 text-[#C78316] shrink-0 mt-0.5" />
          <div>
            <h2 className="text-sm font-bold text-[#13233A] mb-1">
              Probabilistic AI Disclosure
            </h2>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
              AI-generated signals are probabilistic indicators and should not be treated as definitive proof of identity, fraud or malicious intent. VOICE SHIELD is designed to support human verification and safer decision-making during voice interactions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Ephemeral Audio Handling */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <EyeOff className="w-5 h-5 text-[#159570]" />
              <h2 className="text-base font-bold text-[#13233A]">Ephemeral Audio Processing</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
              Audio windows streamed from the Android client (<code className="font-mono text-[#1F3B64]">16 kHz mono pcm_s16le</code>) and audio files uploaded via the web evaluation console are processed transiently in memory. Raw call audio is never stored in backend databases, disk volumes, or logs.
            </p>
          </div>

          {/* Transport Encryption */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <Lock className="w-5 h-5 text-[#1F3B64]" />
              <h2 className="text-base font-bold text-[#13233A]">Encrypted Streaming &amp; Transport</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
              All communication between the Android application, the web evaluation interface, and the VOICE SHIELD FastAPI backend is transmitted over HTTPS and encrypted WebSocket (<code className="font-mono text-[#1F3B64]">WSS/TLS</code>) channels.
            </p>
          </div>

          {/* Strict API Boundary & Credential Isolation */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <Server className="w-5 h-5 text-[#1F3B64]" />
              <h2 className="text-base font-bold text-[#13233A]">Backend API Boundary &amp; Secret Isolation</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
              External AI/ML provider credentials and database connection strings reside strictly on the backend server. Neither the Android client nor the browser client ever holds upstream API keys or direct database credentials.
            </p>
          </div>

          {/* Human-in-the-Loop Decision Support */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <UserCheck className="w-5 h-5 text-[#159570]" />
              <h2 className="text-base font-bold text-[#13233A]">Human-in-the-Loop Verification</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
              VOICE SHIELD does not automatically block calls or replace human judgment. Instead, it provides real-time risk indicators, temporal consistency evidence, and clear verification guidance so users can confirm high-risk requests through independent channels.
            </p>
          </div>

        </div>

        {/* Operational Boundaries */}
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <ShieldCheck className="w-5 h-5 text-[#1F3B64]" />
            <h2 className="text-lg font-bold text-[#13233A]">
              System Scope &amp; Responsible Boundaries
            </h2>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
            <li>
              <strong className="text-[#13233A]">• Probabilistic Risk Signals:</strong> Acoustic spoofing and conversational fraud scores can be influenced by severe background noise, ultra-low-bitrate codecs, or very short utterances.
            </li>
            <li>
              <strong className="text-[#13233A]">• Not Legal or Forensic Proof:</strong> Output scores and classifications are operational risk indicators for prevention and decision support, not standalone legal or forensic certification.
            </li>
            <li>
              <strong className="text-[#13233A]">• Minimal Session Telemetry:</strong> Where session persistence is enabled (V1 SQLite baseline or V2 PostgreSQL track), only structured session metadata, timestamps, and numerical risk summaries are recorded—never raw audio recordings.
            </li>
          </ul>
        </div>

      </div>
    </Layout>
  );
}

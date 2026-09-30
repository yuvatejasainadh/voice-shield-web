import React from 'react';
import { DocLayout } from '../../components/docs/DocLayout';
import { VoiceShieldLogo } from '../../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../../config/project';
import { Layers, CheckCircle2, Clock, Calendar } from 'lucide-react';

export function Architecture() {
  return (
    <DocLayout>
      <div className="space-y-10">
        
        {/* Official Technical Documentation Header */}
        <div className="pb-6 border-b border-[#DCE3EA] flex items-start gap-4">
          <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
          <div>
            <div className="text-xs font-extrabold text-[#1F3B64] uppercase tracking-wider mb-1">
              {PROJECT_CONFIG.PROJECT_TAGLINE}
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#13233A] tracking-tight leading-snug">
              {PROJECT_CONFIG.TECHNICAL_NAME}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-[#5E6E82] mt-1">
              Module Reference: System Architecture &amp; Infrastructure Boundaries
            </p>
          </div>
        </div>

        {/* System Topology */}
        <section className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <Layers className="w-5 h-5 text-[#1F3B64]" />
            <h2 className="text-base font-bold text-[#13233A]">
              End-to-End System Topology
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
            VOICE SHIELD separates real-time client audio windowing (Android) and browser file evaluation (Web) from the stateless FastAPI inference and risk-assessment boundary.
          </p>
          <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-5 font-mono text-xs text-[#13233A] overflow-x-auto">
            <pre className="whitespace-pre leading-relaxed">{`Android Client (16 kHz mono PCM windows: 5000 ms / 2500 ms stride)
        │
        ▼ (WSS / TLS)
VOICE SHIELD FastAPI Backend
  ├── Direct WebSocket Window Consumer (no double-windowing)
  ├── REST Multipart Evaluation (POST /analyze)
  ├── Voice Impersonation / Authenticity Adapter (${PROJECT_CONFIG.MODEL_NAME})
  └── Detection Decision Engine (Basic TCED & Session Risk)
        │
        ├──► CURRENT (V1 Baseline): Render Cloud + SQLite Session Metadata
        └──► IN DEVELOPMENT (V2 Track): AWS RDS PostgreSQL via API Boundary`}</pre>
          </div>
        </section>

        {/* Maturity Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#E8F7F2] border border-[#B4E8D7] rounded-2xl p-5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#159570] mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>CURRENT (V1 Baseline)</span>
            </div>
            <p className="text-xs text-[#13233A] leading-relaxed">
              Android real-time audio capture &amp; windowing, FastAPI WebSocket &amp; REST ingestion, {PROJECT_CONFIG.MODEL_NAME} integration, Basic TCED, and Render/SQLite deployment.
            </p>
          </div>

          <div className="bg-[#FDF5E6] border border-[#F0D09B] rounded-2xl p-5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#C78316] mb-2">
              <Clock className="w-4 h-4" />
              <span>IN DEVELOPMENT (V2 Track)</span>
            </div>
            <p className="text-xs text-[#13233A] leading-relaxed">
              PostgreSQL-backed production architecture (AWS RDS via API boundary), identity verification workflows, cybercrime intelligence signals, and multilingual LACR/AASIST-L routing.
            </p>
          </div>

          <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-2xl p-5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#5E6E82] mb-2">
              <Calendar className="w-4 h-4" />
              <span>ROADMAP (Future Scale)</span>
            </div>
            <p className="text-xs text-[#13233A] leading-relaxed">
              Organization-wide deployments, enterprise contact-center integrations, additional communication channels, and distributed multi-region architecture.
            </p>
          </div>
        </div>

      </div>
    </DocLayout>
  );
}

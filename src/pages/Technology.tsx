import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../config/project';
import {
  Cpu,
  Smartphone,
  Server,
  Layers,
  Database,
  ArrowRight,
  BookText,
  Lock,
  Activity,
} from 'lucide-react';

export function Technology() {
  const contract = PROJECT_CONFIG.AUDIO_WINDOW_CONTRACT;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Technical Identity Header */}
        <div className="mb-12 pb-8 border-b border-[#DCE3EA] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-[11px] font-bold uppercase tracking-wider mb-2">
                Technical Architecture Specification
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#13233A] tracking-tight leading-snug">
                {PROJECT_CONFIG.TECHNICAL_NAME}
              </h1>
              <p className="text-sm sm:text-base text-[#5E6E82] mt-2 max-w-3xl leading-relaxed">
                System architecture, real-time audio windowing contract, probabilistic AI/ML inference pipeline, and backend infrastructure boundaries for {PROJECT_CONFIG.PUBLIC_NAME}.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="primary" size="md" href="/docs/architecture">
              <BookText className="w-4 h-4 mr-2" />
              Full Engineering Docs
            </Button>
            <Button variant="outline" size="md" href="/demo">
              <Activity className="w-4 h-4 mr-2 text-[#1F3B64]" />
              Try Live Demo
            </Button>
          </div>
        </div>

        {/* System Architecture Diagram */}
        <section className="mb-14 bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#DCE3EA]">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#13233A]">
                1. End-to-End System Architecture
              </h2>
              <p className="text-xs text-[#5E6E82] mt-0.5">
                Current V1 deployed baseline vs. V2 PostgreSQL production stabilization track
              </p>
            </div>
            <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7] self-start sm:self-auto">
              CONTRACT-ALIGNED ARCHITECTURE
            </span>
          </div>

          <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-5 font-mono text-xs text-[#13233A] overflow-x-auto">
            <pre className="whitespace-pre leading-relaxed">{`┌──────────────────────────────────────────────────────────────────────┐
│ ANDROID APPLICATION (Real-Time Client — CURRENT)                     │
│  • Call Monitor & Foreground Service                                 │
│  • Audio Window Manager (16 kHz mono pcm_s16le)                      │
│  • 5000 ms max window | 2500 ms stride | 50% overlap (W001, W002...) │
└──────────────────────────────────┬───────────────────────────────────┘
                                   │ WSS / TLS (Pre-Windowed PCM Stream)
                                   ▼
┌──────────────────────────────────────────────────────────────────────┐
│ VOICE SHIELD BACKEND (FastAPI Service Boundary)                      │
│  • Direct WebSocket Window Consumer (no backend re-windowing)        │
│  • REST Multipart Audio Ingestion (POST /analyze)                    │
│  • Voice Impersonation / Authenticity Analysis (${PROJECT_CONFIG.MODEL_NAME} v${PROJECT_CONFIG.MODEL_VERSION})      │
│  • Temporal Consistency & Evidence Decision (Basic TCED)             │
│  • Session Risk Scoring & Decision-Support Recommendations           │
└───────────────┬──────────────────────────────────┬───────────────────┘
                │                                  │
                ▼ (CURRENT V1 BASELINE)            ▼ (IN DEVELOPMENT — V2 TRACK)
┌───────────────────────────────┐  ┌───────────────────────────────────┐
│ V1 Lightweight Persistence    │  │ V2 Production Persistence Track   │
│  • Render Cloud Runtime       │  │  • Separate PostgreSQL (AWS RDS)  │
│  • SQLite Session Metadata    │  │  • Accessed strictly via API      │
│  • Zero Raw Audio Retention   │  │  • Zero Raw Audio Retention       │
└───────────────────────────────┘  └───────────────────────────────────┘`}</pre>
          </div>
        </section>

        {/* Five Technical Architecture Pillars */}
        <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Real-Time Processing & Audio Window Contract */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DCE3EA]">
              <div className="flex items-center gap-2.5">
                <Smartphone className="w-5 h-5 text-[#1F3B64]" />
                <h3 className="text-base font-bold text-[#13233A]">
                  Real-Time Audio Windowing Contract
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                CURRENT
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
              Android owns real-time audio windowing. The backend WebSocket pipeline consumes already-windowed PCM payloads directly without double-windowing.
            </p>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono bg-[#F7F9FC] p-3.5 rounded-xl border border-[#DCE3EA]">
              <div>
                <span className="text-[#7A8798] block text-[10px]">FORMAT</span>
                <span className="font-bold text-[#13233A]">{contract.sampleRateHz} Hz Mono {contract.encoding}</span>
              </div>
              <div>
                <span className="text-[#7A8798] block text-[10px]">WINDOW / STRIDE</span>
                <span className="font-bold text-[#13233A]">{contract.maxWindowMs} ms / {contract.strideMs} ms</span>
              </div>
              <div>
                <span className="text-[#7A8798] block text-[10px]">OVERLAP</span>
                <span className="font-bold text-[#13233A]">{contract.normalOverlapMs} ms ({contract.normalOverlapPercent}%)</span>
              </div>
              <div>
                <span className="text-[#7A8798] block text-[10px]">MIN PARTIAL FLUSH</span>
                <span className="font-bold text-[#13233A]">&gt;= {contract.minPartialMs} ms</span>
              </div>
            </div>
          </div>

          {/* AI / ML Pipeline */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DCE3EA]">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-[#1F3B64]" />
                <h3 className="text-base font-bold text-[#13233A]">
                  AI / ML Analysis &amp; Temporal Evidence
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                CURRENT + IN DEV
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
              Each audio window or uploaded segment is evaluated for synthetic and impersonated speech indicators using {PROJECT_CONFIG.MODEL_NAME}, followed by session-level Temporal Consistency &amp; Evidence Decision (Basic TCED).
            </p>
            <ul className="space-y-2 text-xs text-[#5E6E82]">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#159570]">• CURRENT:</span>
                <span>{PROJECT_CONFIG.MODEL_NAME} inference adapter + Basic TCED window aggregation + fraud risk indicator extraction.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#C78316]">• IN DEVELOPMENT:</span>
                <span>Language-Aware Call Routing (LACR), multilingual AASIST-L acoustic verification, and Dynamic Spoof Risk (DSR) calibration.</span>
              </li>
            </ul>
          </div>

          {/* Backend Architecture */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DCE3EA]">
              <div className="flex items-center gap-2.5">
                <Server className="w-5 h-5 text-[#1F3B64]" />
                <h3 className="text-base font-bold text-[#13233A]">
                  Backend API Service Boundary
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                CURRENT
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
              Stateless FastAPI service exposing <code className="font-mono text-[#1F3B64]">POST /analyze</code>, <code className="font-mono text-[#1F3B64]">GET /health</code>, and encrypted WebSocket streaming endpoints.
            </p>
            <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA] text-xs text-[#5E6E82]">
              All external provider keys and database credentials remain strictly isolated inside the backend environment. Neither the Android app nor the Web portal connects directly to upstream ML providers or databases.
            </div>
          </div>

          {/* Database & Storage Boundary */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DCE3EA]">
              <div className="flex items-center gap-2.5">
                <Database className="w-5 h-5 text-[#1F3B64]" />
                <h3 className="text-base font-bold text-[#13233A]">
                  Storage Evolution &amp; Ephemeral Audio
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#FDF5E6] text-[#C78316] border border-[#F0D09B]">
                V1 → V2 TRACK
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
              The active V1 deployment runs on Render with lightweight SQLite metadata storage. A separate V2 production stabilization track uses PostgreSQL (AWS RDS) accessed exclusively through the VOICE SHIELD API.
            </p>
            <div className="p-3.5 rounded-xl bg-[#E8F7F2] border border-[#B4E8D7] text-xs text-[#159570] font-medium flex items-center gap-2">
              <Lock className="w-4 h-4 shrink-0" />
              <span>Zero raw call audio is stored in either V1 SQLite or V2 PostgreSQL.</span>
            </div>
          </div>

        </section>

        {/* Deep-Dive Documentation Links */}
        <section className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-[#13233A]">
                Engineering Reference Modules
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6E82]">
                Detailed specifications for each layer of {PROJECT_CONFIG.TECHNICAL_NAME}.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" size="md" href="/docs/architecture" className="justify-between w-full">
              <span>System Architecture</span>
              <ArrowRight className="w-4 h-4 text-[#1F3B64]" />
            </Button>
            <Button variant="outline" size="md" href="/docs/android" className="justify-between w-full">
              <span>Android Windowing</span>
              <ArrowRight className="w-4 h-4 text-[#1F3B64]" />
            </Button>
            <Button variant="outline" size="md" href="/docs/ml" className="justify-between w-full">
              <span>AI / ML Pipeline</span>
              <ArrowRight className="w-4 h-4 text-[#1F3B64]" />
            </Button>
            <Button variant="outline" size="md" href="/docs/api" className="justify-between w-full">
              <span>REST &amp; WebSocket API</span>
              <ArrowRight className="w-4 h-4 text-[#1F3B64]" />
            </Button>
          </div>
        </section>

      </div>
    </Layout>
  );
}

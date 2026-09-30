import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../config/project';
import {
  Cpu,
  Network,
  Layers,
  Database,
  Shield,
  Terminal,
  ArrowRight,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export function Technology() {
  const contract = PROJECT_CONFIG.AUDIO_WINDOW_CONTRACT;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#DCE3EA] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-[11px] font-bold uppercase tracking-wider mb-2">
                Engineering &amp; Architecture
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#13233A] tracking-tight">
                VoiceShield Technology Stack
              </h1>
              <p className="text-sm sm:text-base text-[#5E6E82] mt-2 max-w-2xl leading-relaxed">
                Technical specifications of VoiceShield’s real-time audio window contract, voice authenticity evaluation pipeline, temporal decision engine, and next-phase R&amp;D architecture.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="primary" size="md" href="/docs">
              <Terminal className="w-4 h-4 mr-2" />
              Read Developer Docs
            </Button>
            <Button variant="outline" size="md" href="/docs/api">
              API Contract Reference
            </Button>
          </div>
        </div>

        {/* 1. Audio Window Synchronization Contract */}
        <section className="mb-12 bg-white border-2 border-[#1F3B64] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[#DCE3EA]">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-[#13233A]">
                  1. Real-Time Audio Window Synchronization Contract
                </h2>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                  IMPLEMENTED
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6E82] mt-1">
                Deterministic PCM framing between the Android Audio Window Manager and the FastAPI WebSocket ingestion engine.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono text-xs mb-6">
            <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-4 space-y-1.5 text-[#13233A]">
              <div className="text-[11px] font-bold text-[#7A8798] uppercase mb-2">Audio Encoding Specs</div>
              <div>Sample Rate:   {contract.sampleRateHz} Hz</div>
              <div>Channels:      {contract.channels} (Mono)</div>
              <div>Encoding:      {contract.encoding}</div>
              <div>Sample Format: {contract.sampleFormat}</div>
            </div>

            <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-4 space-y-1.5 text-[#13233A]">
              <div className="text-[11px] font-bold text-[#7A8798] uppercase mb-2">Window Cadence Specs</div>
              <div>Maximum Window:  {contract.maxWindowMs} ms</div>
              <div>Initial Step:    {contract.initialStepMs} ms</div>
              <div>Stride:          {contract.strideMs} ms</div>
              <div>Normal Overlap:  {contract.normalOverlapMs} ms / {contract.normalOverlapPercent}%</div>
              <div>Minimum Partial: {contract.minPartialMs} ms</div>
              <div>Sequence Base:   {contract.sequenceBase}</div>
            </div>

            <div className="bg-[#F1F4F8] border border-[#DCE3EA] rounded-xl p-4 space-y-1.5 text-[#1F3B64]">
              <div className="text-[11px] font-bold text-[#7A8798] uppercase mb-2">Expected Window Progression</div>
              {contract.expectedWindows.map((win) => (
                <div key={win.id} className="font-semibold">
                  {win.id} → {win.range}
                </div>
              ))}
              <div className="text-[#5E6E82] pt-1">W005 → 7500 – 12500 ms</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
            By keeping window slicing authoritative on the Android client, each WebSocket message represents a self-contained temporal segment with explicit start/end timestamps and 1-based sequence numbers. The backend decodes Base64 PCM payloads and routes them directly to the detector without performing redundant server-side windowing.
          </p>
        </section>

        {/* 2. Current Detection & Temporal Evidence Stack */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-[#F1F4F8] text-[#1F3B64]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                ACTIVE DETECTOR
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#13233A] mb-2">
              Voice Authenticity Analysis ({PROJECT_CONFIG.MODEL_NAME})
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
              In the current platform foundation, VoiceShield integrates {PROJECT_CONFIG.MODEL_NAME} as the primary voice authenticity analysis provider. The backend normalizes provider outputs into a unified schema containing classification, AI probability, confidence, risk score, and segment-level timelines.
            </p>
            <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA] text-xs text-[#5E6E82]">
              Provider API keys and detector credentials are isolated strictly on the backend server and are never exposed to browser or Android clients.
            </div>
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-[#F1F4F8] text-[#1F3B64]">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                ACTIVE DECISION ENGINE
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#13233A] mb-2">
              Temporal Consistency &amp; Evidence Decision (Basic TCED)
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
              Single-window predictions can be sensitive to brief line noise or compression artifacts. Basic TCED maintains session-level state across sequential audio windows, smoothing transient spikes and updating the call risk level as cumulative acoustic evidence strengthens.
            </p>
            <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA] text-xs text-[#5E6E82]">
              Produces structured session outputs: <code className="font-mono text-[#1F3B64]">risk_score</code>, <code className="font-mono text-[#1F3B64]">risk_level</code>, <code className="font-mono text-[#1F3B64]">confidence</code>, and <code className="font-mono text-[#1F3B64]">recommendation</code>.
            </div>
          </div>
        </section>

        {/* 3. Next-Phase R&D & In-Development Architecture */}
        <section className="mb-12 bg-[#F7F9FC] border border-dashed border-[#B8C5D3] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[#DCE3EA]">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-[#13233A]">
                  2. Next-Phase Engineering &amp; R&amp;D Architecture
                </h2>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#FDF5E6] text-[#C78316] border border-[#F0D09B]">
                  IN DEVELOPMENT / ROADMAP
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6E82] mt-1">
                Capabilities currently being engineered for upcoming product stages. Clearly distinguished from the active foundation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#DCE3EA] rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-[#13233A] flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#C78316]" />
                  PostgreSQL Production Persistence Boundary
                </h3>
                <span className="text-[10px] font-bold text-[#C78316] uppercase">In Development</span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                The VoiceShield backend is evolving toward a PostgreSQL-backed persistence architecture for structured session metadata, audit trails, and risk telemetry while strictly preserving ephemeral non-retention of raw call audio. The Web Application communicates exclusively through the VoiceShield API boundary and never connects directly to the database.
              </p>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-[#13233A] flex items-center gap-2">
                  <Network className="w-4 h-4 text-[#C78316]" />
                  Language-Aware Acoustic Routing &amp; AASIST-L
                </h3>
                <span className="text-[10px] font-bold text-[#C78316] uppercase">In Development</span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Ongoing R&amp;D into Language-Aware Cascading Routing (LACR) and graph-attention acoustic spoofing models (AASIST-L) combined with Dynamic Spoof Risk (DSR) calibration to improve resilience across diverse regional languages and telephony codecs.
              </p>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-[#13233A] flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#C78316]" />
                  Identity Verification &amp; Cybercrime Intelligence
                </h3>
                <span className="text-[10px] font-bold text-[#C78316] uppercase">In Development</span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Expanding beyond acoustic spoofing detection to incorporate contextual caller verification workflows, conversational coercion scoring, and structured incident evidence export for security teams.
              </p>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-[#13233A] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#5E6E82]" />
                  Distributed Multi-Region Enterprise Scale
                </h3>
                <span className="text-[10px] font-bold text-[#5E6E82] uppercase">Future Roadmap</span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Long-term architectural roadmap for high-concurrency organizational deployments, contact-center desk integrations, and multi-channel enterprise voice security.
              </p>
            </div>
          </div>
        </section>

        {/* Core Engineering Stack Badges */}
        <section className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-4">
            Current Implementation Technologies
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {[
              'Android 8.0+ (Kotlin & Jetpack Compose)',
              'Android Audio Window Manager (16 kHz pcm_s16le)',
              'FastAPI (Python 3.10+)',
              'Secure WebSockets (WSS / TLS)',
              'REST Multipart Audio Analysis (/analyze)',
              'Aurigin.AI Voice Authenticity Integration',
              'Basic TCED Decision Engine',
              'React 19 + TypeScript + Vite + Tailwind CSS',
            ].map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 bg-[#F7F9FC] border border-[#DCE3EA] text-[#1F3B64] text-xs font-semibold rounded-lg"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}

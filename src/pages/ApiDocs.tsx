import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { Button } from '../components/ui/Button';
import { PROJECT_CONFIG } from '../config/project';
import { Server, Activity, Lock } from 'lucide-react';

export function ApiDocs() {
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
              Module Reference: Backend &amp; API Contract (REST &amp; WebSocket)
            </p>
          </div>
        </div>

        {/* Service Boundary Notice */}
        <section className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <Server className="w-5 h-5 text-[#1F3B64]" />
            <h2 className="text-base font-bold text-[#13233A]">
              FastAPI Service Boundary
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
            The VOICE SHIELD Backend exposes two primary ingestion paths: a real-time WebSocket stream for pre-windowed Android PCM frames and a REST multipart upload endpoint (<code className="font-mono text-[#1F3B64]">POST /analyze</code>) for web and batch audio evaluation.
          </p>
          <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA] text-xs text-[#5E6E82] flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#159570] shrink-0" />
            <span>
              In both the V1 (Render / SQLite) baseline and the V2 (AWS RDS PostgreSQL) stabilization track, database access occurs strictly through this backend API boundary.
            </span>
          </div>
        </section>

        {/* Endpoint 1: POST /analyze */}
        <section className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#1F3B64] text-white font-mono text-xs font-bold">
              POST
            </span>
            <code className="font-mono text-sm font-bold text-[#13233A]">/analyze</code>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
              CURRENT
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
            Accepts a multipart form-data upload with field name <code className="font-mono text-[#1F3B64]">audio</code> (WAV, MP3, FLAC, M4A) and returns normalized voice impersonation / authenticity probabilities, segment-level evidence, and fraud risk indicators.
          </p>
          <pre className="p-4 rounded-xl bg-[#13233A] text-[#E2E8F0] font-mono text-xs overflow-x-auto">{`{
  "analysis_id": "vs-session-01",
  "status": "completed",
  "voice_analysis": {
    "classification": "AI_GENERATED",
    "risk_level": "HIGH",
    "risk_score": 0.84,
    "ai_probability": 0.84,
    "confidence": 0.89,
    "detector": "Aurigin.AI",
    "model_version": "1.0",
    "segments_analyzed": 3
  }
}`}</pre>
        </section>

        {/* Endpoint 2: GET /health */}
        <section className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#159570] text-white font-mono text-xs font-bold">
              GET
            </span>
            <code className="font-mono text-sm font-bold text-[#13233A]">/health</code>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
              CURRENT
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
            Returns backend service readiness and active inference adapter status.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="md" href="/demo">
            <Activity className="w-4 h-4 mr-2" />
            Test Live API in Web Console
          </Button>
        </div>

      </div>
    </DocLayout>
  );
}

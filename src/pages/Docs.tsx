import React from 'react';
import { DocLayout } from '../components/docs/DocLayout';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { Button } from '../components/ui/Button';
import { PROJECT_CONFIG } from '../config/project';
import {
  Cpu,
  Smartphone,
  Server,
  Layers,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export function Docs() {
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
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#13233A] tracking-tight leading-snug">
              {PROJECT_CONFIG.TECHNICAL_NAME}
            </h1>
            <p className="text-sm text-[#5E6E82] mt-2 leading-relaxed">
              Official technical documentation covering system architecture, real-time Android audio windowing, FastAPI WebSocket &amp; REST interfaces, and probabilistic AI/ML voice risk assessment.
            </p>
          </div>
        </div>

        {/* Central Conceptual Flow */}
        <section className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
          <h2 className="text-base font-bold text-[#13233A] mb-2">
            End-to-End Voice Security Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-[#5E6E82] mb-4">
            {PROJECT_CONFIG.PROJECT_DESCRIPTION}
          </p>
          <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-4 font-mono text-xs text-[#13233A] overflow-x-auto">
            <pre className="whitespace-pre leading-relaxed font-semibold">{`VOICE INTERACTION → REAL-TIME AUDIO CAPTURE → AUDIO WINDOWING (16 kHz PCM)
  → SECURE STREAMING (WSS/TLS) → VOICE IMPERSONATION / AUTHENTICITY ANALYSIS
  → TEMPORAL EVIDENCE (Basic TCED) → RISK ASSESSMENT → PREVENTION / DECISION SUPPORT`}</pre>
          </div>
        </section>

        {/* Documentation Modules Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <Layers className="w-5 h-5 text-[#1F3B64]" />
                <h3 className="text-base font-bold text-[#13233A]">System Architecture</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                Detailed topology of the Android client, FastAPI service boundary, V1 Render/SQLite baseline, and V2 AWS RDS PostgreSQL stabilization track.
              </p>
            </div>
            <Button variant="outline" size="sm" href="/docs/architecture" className="w-full justify-between">
              <span>Read Architecture Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <Smartphone className="w-5 h-5 text-[#1F3B64]" />
                <h3 className="text-base font-bold text-[#13233A]">Android Client &amp; Windowing</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                Specification for the Android Audio Window Manager (16 kHz mono pcm_s16le, 5000 ms max window, 2500 ms stride, 50% overlap).
              </p>
            </div>
            <Button variant="outline" size="sm" href="/docs/android" className="w-full justify-between">
              <span>Read Android Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <Cpu className="w-5 h-5 text-[#1F3B64]" />
                <h3 className="text-base font-bold text-[#13233A]">Real-Time AI / ML Pipeline</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                Voice authenticity analysis ({PROJECT_CONFIG.MODEL_NAME}), Temporal Consistency &amp; Evidence Decision (Basic TCED), and planned LACR/AASIST-L routing.
              </p>
            </div>
            <Button variant="outline" size="sm" href="/docs/ml" className="w-full justify-between">
              <span>Read AI / ML Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <Server className="w-5 h-5 text-[#1F3B64]" />
                <h3 className="text-base font-bold text-[#13233A]">Backend &amp; API Specification</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                Endpoint documentation for <code className="font-mono text-[#1F3B64]">POST /analyze</code>, <code className="font-mono text-[#1F3B64]">GET /health</code>, and real-time WebSocket window streaming.
              </p>
            </div>
            <Button variant="outline" size="sm" href="/docs/api" className="w-full justify-between">
              <span>Read API Reference</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </section>

        {/* Responsible AI Notice */}
        <section className="bg-[#FEFAF4] border border-[#F0D09B] rounded-2xl p-5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#C78316] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
            <strong className="text-[#13233A]">Responsible Engineering Boundary:</strong> AI-generated signals are probabilistic indicators and should not be treated as definitive proof of identity, fraud or malicious intent.
          </p>
        </section>

      </div>
    </DocLayout>
  );
}

import React from 'react';
import { Layout } from '../components/layout/Layout';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { Button } from '../components/ui/Button';
import { PROJECT_CONFIG } from '../config/project';
import {
  Shield,
  Cpu,
  Layers,
  UserCheck,
  Code2,
  ArrowRight,
  Award,
  CheckCircle2,
} from 'lucide-react';

export function About() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Official Identity Header */}
        <div className="mb-10 pb-8 border-b border-[#DCE3EA] flex items-start gap-4">
          <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F7F2] border border-[#B4E8D7] text-[#159570] text-[11px] font-bold uppercase tracking-wider mb-2">
              Official Project Identity
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#13233A] tracking-tight">
              {PROJECT_CONFIG.PUBLIC_NAME}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-[#1F3B64] mt-1">
              Technical Name: {PROJECT_CONFIG.TECHNICAL_NAME}
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="mb-10 bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-[#13233A] mb-3">
            Mission &amp; Product Positioning
          </h2>
          <p className="text-sm sm:text-base text-[#5E6E82] leading-relaxed mb-4">
            {PROJECT_CONFIG.PROJECT_DESCRIPTION}
          </p>
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
            As synthetic voice generation, voice cloning, and high-pressure social engineering converge, individuals and organizations face real-time verification challenges during live calls. VOICE SHIELD is built to analyze voice interactions as they happen—combining controlled Android audio windowing, encrypted streaming, probabilistic voice authenticity analysis, and temporal evidence aggregation to help users verify before they trust.
          </p>
        </section>

        {/* Canonical Identity Reference Card */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs">
            <div className="text-[11px] font-bold text-[#7A8798] uppercase tracking-wider mb-1">
              Public / Product Name
            </div>
            <div className="text-base font-extrabold text-[#13233A] mb-2">
              {PROJECT_CONFIG.PUBLIC_NAME}
            </div>
            <p className="text-xs text-[#5E6E82] leading-relaxed">
              Primary public-facing product identity representing human-centered AI voice protection and decision support.
            </p>
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs">
            <div className="text-[11px] font-bold text-[#7A8798] uppercase tracking-wider mb-1">
              Technical Framework Name
            </div>
            <div className="text-sm font-extrabold text-[#13233A] mb-2 leading-snug">
              {PROJECT_CONFIG.TECHNICAL_NAME}
            </div>
            <p className="text-xs text-[#5E6E82] leading-relaxed">
              Canonical engineering and technical evaluation title covering the end-to-end Android, FastAPI, and AI/ML risk assessment architecture.
            </p>
          </div>
        </section>

        {/* Core Focus Areas */}
        <section className="mb-10 bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg font-bold text-[#13233A] mb-4">
            Eight Core Focus Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#13233A]">
            {[
              '1. Voice Impersonation Detection',
              '2. Real-Time Voice Analysis',
              '3. Risk Assessment',
              '4. Fraud / Scam Risk Intelligence',
              '5. Identity Verification Support',
              '6. Prevention & Decision Support',
              '7. Cybercrime Intelligence',
              '8. Privacy-Conscious Voice Processing',
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA] font-semibold"
              >
                <CheckCircle2 className="w-4 h-4 text-[#159570] shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Founding & Engineering Leadership */}
        <section className="mb-10 bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 mb-4">
            <Award className="w-5 h-5 text-[#1F3B64]" />
            <h2 className="text-lg font-bold text-[#13233A]">
              Founding &amp; Engineering Architecture
            </h2>
          </div>

          <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-5 mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-base font-bold text-[#13233A]">Yuva Teja Sainadh</h3>
                <p className="text-xs font-semibold text-[#1F3B64]">
                  Founder, Lead Product Engineer &amp; AI Systems Architect
                </p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded bg-white border border-[#DCE3EA] text-[11px] font-semibold text-[#5E6E82] self-start sm:self-auto">
                AWS Builder &amp; Cloud Architecture Track
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
              Designed and engineered the end-to-end VOICE SHIELD architecture across the Android real-time audio windowing client, the FastAPI WebSocket &amp; REST backend boundary, temporal evidence scoring (Basic TCED), and the V2 AWS RDS PostgreSQL stabilization track.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-[#DCE3EA] bg-white">
              <div className="flex items-center gap-2 font-bold text-[#13233A] mb-1">
                <Cpu className="w-4 h-4 text-[#1F3B64]" />
                <span>Real-Time Engineering</span>
              </div>
              <p className="text-[#5E6E82]">
                16 kHz mono PCM windowing on Android with direct WSS/TLS backend ingestion.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#DCE3EA] bg-white">
              <div className="flex items-center gap-2 font-bold text-[#13233A] mb-1">
                <Layers className="w-4 h-4 text-[#1F3B64]" />
                <span>Temporal Evidence</span>
              </div>
              <p className="text-[#5E6E82]">
                Multi-window aggregation (Basic TCED) rather than isolated single-chunk guesses.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#DCE3EA] bg-white">
              <div className="flex items-center gap-2 font-bold text-[#13233A] mb-1">
                <UserCheck className="w-4 h-4 text-[#1F3B64]" />
                <span>Human-Centered AI</span>
              </div>
              <p className="text-[#5E6E82]">
                Probabilistic decision support that empowers human verification rather than replacing it.
              </p>
            </div>
          </div>
        </section>

        {/* Responsible AI Statement */}
        <section className="bg-[#FEFAF4] border border-[#F0D09B] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#C78316] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
              <strong className="text-[#13233A]">Responsible AI Commitment:</strong> AI-generated signals are probabilistic indicators and should not be treated as definitive proof of identity, fraud or malicious intent.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button variant="primary" size="sm" href="/contact">
              Contact Team
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
            <Button variant="outline" size="sm" href="/docs">
              <Code2 className="w-3.5 h-3.5 mr-1.5" />
              Documentation
            </Button>
          </div>
        </section>

      </div>
    </Layout>
  );
}

import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import {
  Smartphone,
  FileAudio,
  Shield,
  Activity,
  Layers,
  AlertTriangle,
  UserCheck,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  Building2,
  Users,
  Headphones,
  Radio,
} from 'lucide-react';

export function Product() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#DCE3EA] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F7F2] border border-[#B4E8D7] text-[#159570] text-[11px] font-bold uppercase tracking-wider mb-2">
                Platform Overview
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#13233A] tracking-tight">
                The VoiceShield Voice Safety Platform
              </h1>
              <p className="text-sm sm:text-base text-[#5E6E82] mt-2 max-w-2xl leading-relaxed">
                Real-time AI voice safety, fraud-risk intelligence, and voice authenticity protection engineered to help individuals and organizations evaluate high-risk voice interactions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="primary" size="md" href="/demo">
              <Activity className="w-4 h-4 mr-2" />
              Try Web Analysis Demo
            </Button>
            <Button variant="outline" size="md" href="/contact">
              Request Pilot / Demo
            </Button>
          </div>
        </div>

        {/* Core Platform Components */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-4">
            Platform Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#1F3B64] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F1F4F8] text-[#1F3B64]">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                    IMPLEMENTED FOUNDATION
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#13233A] mb-2">
                  Android Real-Time Call Client
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                  Monitors supported active calls via an Android Foreground Service, extracts and normalizes 16 kHz mono PCM windows on-device, and streams temporal windows over encrypted WSS/TLS for live risk guidance.
                </p>
              </div>
              <Button variant="outline" size="sm" href="/download" className="w-full justify-center">
                View Android Client Status
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>

            <div className="bg-white border-2 border-[#1F3B64] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F1F4F8] text-[#1F3B64]">
                    <FileAudio className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                    LIVE WEB CONSOLE
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#13233A] mb-2">
                  Web Audio Evaluation Console
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                  Interactive browser-based inspection environment allowing evaluators to upload voice recordings (`POST /analyze`) and inspect voice authenticity probabilities, segment-level evidence, and transcript fraud indicators.
                </p>
              </div>
              <Button variant="primary" size="sm" href="/demo" className="w-full justify-center">
                Launch Live Demo
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F1F4F8] text-[#1F3B64]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                    ACTIVE BACKEND
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#13233A] mb-2">
                  Risk &amp; Evidence Engine
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                  FastAPI backend orchestrating direct WebSocket window ingestion, voice authenticity detection (Aurigin.AI), temporal evidence aggregation (Basic TCED), and conversational fraud risk scoring.
                </p>
              </div>
              <Button variant="outline" size="sm" href="/technology" className="w-full justify-center">
                Explore Technical Stack
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Six Core Capabilities */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#13233A] tracking-tight">
              What VoiceShield Delivers
            </h2>
            <p className="text-sm text-[#5E6E82] mt-1">
              Clear separation between implemented capabilities available for evaluation today and capabilities currently in development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FeatureDetailCard
              icon={<Smartphone className="w-5 h-5 text-[#1F3B64]" />}
              title="1. Real-Time Call Monitoring"
              status="Implemented"
              statusColor="now"
              description="Monitors growing call recording streams on Android 8.0+ devices, extracting 16 kHz mono 16-bit signed PCM windows (5000 ms maximum window, 2500 ms stride) without requiring root or carrier-level integration."
            />
            <FeatureDetailCard
              icon={<Activity className="w-5 h-5 text-[#1F3B64]" />}
              title="2. Voice Authenticity Analysis"
              status="Implemented"
              statusColor="now"
              description="Evaluates audio windows and uploaded audio files for acoustic indicators of synthetic speech, voice cloning, or deepfake generation, surfacing probabilistic authenticity scores."
            />
            <FeatureDetailCard
              icon={<AlertTriangle className="w-5 h-5 text-[#1F3B64]" />}
              title="3. Conversational Risk Intelligence"
              status="Implemented + Expanding"
              statusColor="dev"
              description="Analyzes speech transcripts and conversational context for social-engineering indicators including urgency manipulation, financial demands, OTP/credential requests, and authority pretexts."
            />
            <FeatureDetailCard
              icon={<Layers className="w-5 h-5 text-[#1F3B64]" />}
              title="4. Temporal Evidence & Session Risk Scoring"
              status="Implemented"
              statusColor="now"
              description="Applies Temporal Consistency & Evidence Decision (Basic TCED) logic across consecutive windows so transient acoustic noise does not trigger isolated false alarms."
            />
            <FeatureDetailCard
              icon={<UserCheck className="w-5 h-5 text-[#1F3B64]" />}
              title="5. Human-Centered Risk Guidance"
              status="Implemented"
              statusColor="now"
              description="Translates probabilistic detector outputs into clear risk levels (Low, Medium, High, Critical) and actionable verification recommendations to support human judgment."
            />
            <FeatureDetailCard
              icon={<EyeOff className="w-5 h-5 text-[#1F3B64]" />}
              title="6. Privacy-Conscious Ephemeral Processing"
              status="Implemented"
              statusColor="now"
              description="Raw call audio is processed transiently in memory over TLS-encrypted channels and is never retained in backend databases, object storage, or application logs."
            />
          </div>
        </section>

        {/* Target Segments & Use Cases */}
        <section className="mb-14 bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="mb-6 pb-4 border-b border-[#DCE3EA]">
            <h2 className="text-xl font-bold text-[#13233A] tracking-tight">
              Target Deployment Scenarios &amp; Incubation Pathways
            </h2>
            <p className="text-xs sm:text-sm text-[#5E6E82] mt-1">
              VoiceShield is structured for staged adoption—starting with individual and pilot evaluation today and scaling toward organizational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-[#13233A] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#1F3B64]" />
                  Consumer &amp; Family Call Safety
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F7F2] text-[#159570]">
                  Current Foundation
                </span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                On-device Android protection designed to alert individuals when an incoming call exhibits synthetic voice characteristics or high-pressure scam patterns.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-[#13233A] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#1F3B64]" />
                  Financial &amp; Banking Fraud Prevention
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FDF5E6] text-[#C78316]">
                  Pilot / Roadmap
                </span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Supplementary risk intelligence for high-value telephone authorizations, wealth management callbacks, and fraud investigation workflows.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-[#13233A] flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-[#1F3B64]" />
                  Customer Support &amp; Helpdesk Verification
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FDF5E6] text-[#C78316]">
                  Pilot / Roadmap
                </span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Assisting contact-center agents with live authenticity and social-engineering risk indicators before executing sensitive account recovery actions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-[#13233A] flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#1F3B64]" />
                  Enterprise &amp; Telecom Integrations
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F1F4F8] text-[#5E6E82]">
                  Future Capability
                </span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Long-term roadmap for multi-channel communication platforms, executive impersonation defense, and regional language-aware routing clusters.
              </p>
            </div>
          </div>
        </section>

        {/* Honest Product Boundaries */}
        <section className="bg-[#FEFAF4] border border-[#F0D09B] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-3">
            <Shield className="w-5 h-5 text-[#C78316]" />
            <h2 className="text-base font-bold text-[#13233A]">
              Responsible Product Positioning &amp; Scope Boundaries
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
            VoiceShield is an evolving technology platform built for real-world evaluation, incubation, and pilot partnerships. To maintain engineering transparency:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-[#5E6E82]">
            <li className="flex items-start gap-2">
              <span className="text-[#C78316] font-bold">•</span>
              <span>AI risk scores are probabilistic indicators and do not constitute definitive legal or forensic proof of caller identity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C78316] font-bold">•</span>
              <span>VoiceShield is designed as a human decision-support tool and does not guarantee universal deepfake detection or automatic fraud prevention.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C78316] font-bold">•</span>
              <span>Capabilities labeled as <strong>In Development</strong> or <strong>Roadmap</strong> (such as PostgreSQL telemetry, identity verification workflows, and multi-VM LACR) are under active engineering and not claimed as deployed in the current baseline.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C78316] font-bold">•</span>
              <span>Raw call audio is never stored by the backend service; only transient in-memory windows are evaluated.</span>
            </li>
          </ul>
        </section>

      </div>
    </Layout>
  );
}

function FeatureDetailCard({
  icon,
  title,
  status,
  statusColor,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  status: string;
  statusColor: 'now' | 'dev' | 'future';
  description: string;
}) {
  const badgeMap = {
    now: 'bg-[#E8F7F2] text-[#159570] border-[#B4E8D7]',
    dev: 'bg-[#FDF5E6] text-[#C78316] border-[#F0D09B]',
    future: 'bg-[#F1F4F8] text-[#5E6E82] border-[#DCE3EA]',
  };

  return (
    <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="p-2 rounded-lg bg-[#F1F4F8]">{icon}</div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${badgeMap[statusColor]}`}>
          {status}
        </span>
      </div>
      <h3 className="text-base font-bold text-[#13233A] mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">{description}</p>
    </div>
  );
}

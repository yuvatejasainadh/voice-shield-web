import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../config/project';
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
  PhoneCall,
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
                {PROJECT_CONFIG.PUBLIC_NAME}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#13233A] tracking-tight">
                VOICE SHIELD Product Capabilities
              </h1>
              <p className="text-sm sm:text-base text-[#5E6E82] mt-2 max-w-2xl leading-relaxed">
                {PROJECT_CONFIG.PROJECT_DESCRIPTION}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="primary" size="md" href="/contact">
              Request a Demo
            </Button>
            <Button variant="outline" size="md" href="/demo">
              <Activity className="w-4 h-4 mr-2 text-[#1F3B64]" />
              Try Web Analysis Demo
            </Button>
          </div>
        </div>

        {/* Six Structured Product Pillars */}
        <section className="mb-14">
          <div className="mb-8">
            <div className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-1">
              Six-Pillar Capability Model
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#13233A] tracking-tight">
              DETECT • ANALYZE • ASSESS • PREVENT • VERIFY • RESPOND
            </h2>
            <p className="text-sm text-[#5E6E82] mt-1 max-w-3xl">
              Each capability area below details its operational purpose, current implementation status, and transparent demarcation between active V1 foundations and V2/Roadmap tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductPillarCard
              pillar="DETECT"
              title="VOICE IMPERSONATION DETECTION"
              status="CURRENT"
              statusColor="now"
              icon={<Activity className="w-5 h-5 text-[#1F3B64]" />}
              purpose="Detects potential voice impersonation and suspicious synthetic speech signals during voice interactions and uploaded audio evaluations."
              currentImplementation="Integrated voice authenticity analysis pipeline (Aurigin.AI in the current V1 baseline) inspecting 16 kHz mono PCM windows and uploaded audio recordings for probabilistic synthetic speech indicators."
              roadmapNote="Expanded multilingual acoustic spoofing models (AASIST-L) are in development."
            />

            <ProductPillarCard
              pillar="ANALYZE"
              title="REAL-TIME ANALYSIS"
              status="CURRENT"
              statusColor="now"
              icon={<PhoneCall className="w-5 h-5 text-[#1F3B64]" />}
              purpose="Evaluates real-time acoustic and conversational evidence across active call streams without waiting for a call to end."
              currentImplementation="Android Audio Window Manager slices controlled 16 kHz mono PCM windows (5000 ms max window, 2500 ms stride) and streams them over WSS/TLS to the FastAPI backend for direct window analysis."
              roadmapNote="Expanded real-time conversational risk signal extraction is in development."
            />

            <ProductPillarCard
              pillar="ASSESS"
              title="RISK ASSESSMENT"
              status="CURRENT"
              statusColor="now"
              icon={<Layers className="w-5 h-5 text-[#1F3B64]" />}
              purpose="Computes communication and session-level risk by aggregating evidence across sequential windows rather than relying on isolated single-frame predictions."
              currentImplementation="Detection Decision Engine applies Basic TCED (Temporal Consistency & Evidence Decision) across successive windows, combining acoustic probabilities and transcript risk indicators into a session risk score."
              roadmapNote="Dynamic Spoof Risk (DSR) calibration across multilingual routing groups is in development."
            />

            <ProductPillarCard
              pillar="PREVENT"
              title="PREVENTION"
              status="CURRENT"
              statusColor="now"
              icon={<Shield className="w-5 h-5 text-[#1F3B64]" />}
              purpose="Provides timely risk guidance and decision support before users make unsafe financial, disclosure, or authorization decisions."
              currentImplementation="Surfaces structured risk levels (Low, Medium, High, Critical), confidence metrics, and actionable verification recommendations to assist human decision-making."
              roadmapNote="Organization policy alerting and contact-center desk prevention hooks are on the long-term roadmap."
            />

            <ProductPillarCard
              pillar="VERIFY"
              title="IDENTITY VERIFICATION"
              status="IN DEVELOPMENT"
              statusColor="dev"
              icon={<UserCheck className="w-5 h-5 text-[#1F3B64]" />}
              purpose="Supports identity verification workflows when a caller claims authority, urgency, or institutional identity."
              currentImplementation="Currently provides human verification guidance prompts alongside probabilistic voice analysis results."
              roadmapNote="Dedicated multi-factor identity verification workflows and contextual caller verification protocols are actively in development."
            />

            <ProductPillarCard
              pillar="RESPOND"
              title="CYBERCRIME INTELLIGENCE"
              status="IN DEVELOPMENT"
              statusColor="dev"
              icon={<AlertTriangle className="w-5 h-5 text-[#1F3B64]" />}
              purpose="Supports evidence-oriented incident tracking, scam pattern recognition, and cybercrime intelligence workflows."
              currentImplementation="Retains lightweight session decision metadata (without storing raw call audio) and highlights scam-related transcript indicators on the Web analysis console."
              roadmapNote="PostgreSQL-backed session telemetry (AWS RDS V2 track) and structured cybercrime intelligence signals are in development."
            />
          </div>
        </section>

        {/* Core Platform Interfaces */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-4">
            Implemented Platform Surfaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F1F4F8] text-[#1F3B64]">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                    CURRENT
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#13233A] mb-2">
                  Android Real-Time Client
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                  Captures audio on the Android device during active calls, executes controlled 16 kHz PCM windowing, and streams windows over WSS/TLS for live risk assessment.
                </p>
              </div>
              <Button variant="outline" size="sm" href="/download" className="w-full justify-center">
                Android Client Details
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F1F4F8] text-[#1F3B64]">
                    <FileAudio className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                    CURRENT
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#13233A] mb-2">
                  Web Audio Analysis Console
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                  Browser-based evaluation interface connected to <code className="font-mono text-[#1F3B64]">POST /analyze</code> for inspecting voice authenticity probabilities, segment timelines, and fraud risk indicators.
                </p>
              </div>
              <Button variant="primary" size="sm" href="/demo" className="w-full justify-center">
                Open Live Demo
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F1F4F8] text-[#1F3B64]">
                    <EyeOff className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                    BY DESIGN
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#13233A] mb-2">
                  Privacy-Conscious Voice Processing
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                  Raw call audio is processed ephemerally in memory and never retained in backend databases, object storage, or application logs.
                </p>
              </div>
              <Button variant="outline" size="sm" href="/security" className="w-full justify-center">
                Security &amp; Responsible AI
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Responsible Product Positioning Notice */}
        <section className="bg-[#FEFAF4] border border-[#F0D09B] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-5 h-5 text-[#C78316]" />
            <h2 className="text-base font-bold text-[#13233A]">
              Responsible AI &amp; Decision-Support Statement
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
            AI-generated signals are probabilistic indicators and should not be treated as definitive proof of identity, fraud or malicious intent. VOICE SHIELD is engineered to detect potential risk signals, assess probability, and provide human-in-the-loop decision support rather than claiming guaranteed fraud prevention.
          </p>
        </section>

      </div>
    </Layout>
  );
}

function ProductPillarCard({
  pillar,
  title,
  status,
  statusColor,
  icon,
  purpose,
  currentImplementation,
  roadmapNote,
}: {
  pillar: string;
  title: string;
  status: string;
  statusColor: 'now' | 'dev' | 'future';
  icon: React.ReactNode;
  purpose: string;
  currentImplementation: string;
  roadmapNote: string;
}) {
  const badgeMap = {
    now: 'bg-[#E8F7F2] text-[#159570] border-[#B4E8D7]',
    dev: 'bg-[#FDF5E6] text-[#C78316] border-[#F0D09B]',
    future: 'bg-[#F1F4F8] text-[#5E6E82] border-[#DCE3EA]',
  };

  return (
    <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#DCE3EA]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#F1F4F8]">{icon}</div>
            <span className="text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#1F3B64] text-white">
              {pillar}
            </span>
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${badgeMap[statusColor]}`}>
            {status}
          </span>
        </div>

        <h3 className="text-base font-bold text-[#13233A] mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">{purpose}</p>

        <div className="space-y-2.5 text-xs bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-3.5">
          <div>
            <span className="font-bold text-[#13233A]">Current Status: </span>
            <span className="text-[#5E6E82]">{currentImplementation}</span>
          </div>
          <div>
            <span className="font-bold text-[#1F3B64]">In Development / Roadmap: </span>
            <span className="text-[#5E6E82]">{roadmapNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

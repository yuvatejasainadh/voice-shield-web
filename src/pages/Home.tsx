import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { 
  FileAudio, 
  Download, 
  BookText, 
  Shield, 
  CheckCircle2, 
  Cpu, 
  Activity, 
  Layers, 
  ArrowRight, 
  Linkedin, 
  Github,
  ExternalLink,
  AlertTriangle,
  PhoneCall,
  Users,
  Building2,
  Headphones,
  Radio,
  UserCheck,
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLatestApk } from '../utils/releases';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { VersionRoadmap } from '../components/roadmap/VersionRoadmap';

export function Home() {
  const latestApk = getLatestApk();

  return (
    <Layout>
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col justify-center">
        
        {/* ============================================================ */}
        {/* 1. HERO SECTION */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-14 border-b border-[#DCE3EA]">
          
          {/* Left Column: Hero Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Brand & Platform Status Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <VoiceShieldLogo className="h-12 sm:h-14 w-auto" />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#E8F7F2] border border-[#B4E8D7] text-[#159570] text-xs font-bold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#159570] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#159570]"></span>
                </span>
                VOICE SHIELD - AI FOR A SAFER TOMORROW
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#13233A] mb-2 leading-tight">
              VOICE SHIELD
            </h1>
            <div className="text-lg sm:text-xl font-bold tracking-tight text-[#1F3B64] mb-4">
              AI for a Safer Tomorrow
            </div>

            <p className="text-[#5E6E82] text-base sm:text-lg leading-relaxed max-w-2xl mb-4">
              Real-time AI-powered voice impersonation detection, prevention and risk assessment for safer voice interactions.
            </p>
            <p className="text-[#5E6E82] text-xs sm:text-sm leading-relaxed max-w-2xl mb-7">
              VOICE SHIELD is a real-time AI-powered voice security framework designed to detect potential voice impersonation, identify communication risk signals, support prevention workflows, and assist users in making safer decisions during voice interactions.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto mb-6">
              <Button variant="primary" size="lg" href="/product" className="justify-center">
                Explore Voice Shield
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/contact" className="justify-center">
                Request a Demo
              </Button>
              <Button variant="ghost" size="lg" href="/demo" className="justify-center border border-[#DCE3EA] bg-white">
                <Activity className="w-4 h-4 mr-2 text-[#1F3B64]" />
                Try Live Demo
              </Button>
            </div>

            {/* Key Architectural Highlights */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-[#5E6E82]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#159570]"></span>
                Probabilistic Voice Analysis
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1F3B64]"></span>
                Privacy-Conscious Processing
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C78316]"></span>
                Human Decision Support
              </span>
            </div>
          </div>

          {/* Right Column: Platform Access & Live Status Summary */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <AccessCard 
                to="/demo"
                icon={<FileAudio className="w-5 h-5 text-[#1F3B64]" />}
                title="Web Analysis Console"
                description="Evaluate audio samples for suspicious voice & risk signals"
              />
              <AccessCard 
                to="/how-it-works"
                icon={<Activity className="w-5 h-5 text-[#1F3B64]" />}
                title="How It Works"
                description="Real-time capture, windowing & decision support"
              />
              <AccessCard 
                to="/download"
                icon={<Download className="w-5 h-5 text-[#1F3B64]" />}
                title="Android Client"
                description={latestApk ? `Android ${latestApk.version} Client` : 'On-device real-time audio capture'}
              />
              <AccessCard 
                to="/docs"
                icon={<BookText className="w-5 h-5 text-[#1F3B64]" />}
                title="Technical Docs"
                description="Framework architecture, API contracts & privacy specs"
              />
            </div>

            {/* Platform Status Panel */}
            <div className="bg-white border border-[#DCE3EA] rounded-xl p-5 shadow-xs">
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#DCE3EA]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#1F3B64]" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#13233A]">Framework Maturity</h2>
                </div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                  CURRENT: V1 Baseline
                </span>
              </div>
              <div className="space-y-2.5">
                <StatusRow label="Real-Time Audio Capture & Windowing" status="CURRENT" isSuccess={true} />
                <StatusRow label="Voice Analysis & Risk Assessment" status="CURRENT" isSuccess={true} />
                <StatusRow label="PostgreSQL / Verification / Cybercrime" status="IN DEVELOPMENT" isUpcoming={true} />
                <StatusRow label="Organization & Multi-Region Scale" status="ROADMAP" isFuture={true} />
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. PROBLEM SECTION ("Why Voice Safety Matters Now") */}
        {/* ============================================================ */}
        <section className="py-14 border-b border-[#DCE3EA]">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FDF5E6] border border-[#F0D09B] text-[#C78316] text-xs font-bold uppercase tracking-wide mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              Why Voice Safety Matters Now
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-3">
              Supporting Safer Decisions During High-Risk Voice Interactions
            </h2>
            <p className="text-sm sm:text-base text-[#5E6E82] leading-relaxed">
              Accessible voice cloning and low-latency speech synthesis have lowered the barrier for convincing voice impersonation. Modern communication threats combine synthetic speech with urgency and social engineering to pressure recipients before caller identity can be verified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C78316] mb-2">Risk Vector 01</div>
              <h3 className="text-base font-bold text-[#13233A] mb-2">AI Voice Impersonation &amp; Cloning</h3>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
                Short reference audio can be used to synthesize familiar voices, creating impersonation risks involving relatives, executives, colleagues, or institutional representatives during live calls.
              </p>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C78316] mb-2">Risk Vector 02</div>
              <h3 className="text-base font-bold text-[#13233A] mb-2">Urgency, Coercion &amp; Social Engineering</h3>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
                High-risk calls frequently rely on manufactured urgency, authority pretexts, or intimidation to rush individuals or support desks into acting without independent verification.
              </p>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C78316] mb-2">Risk Vector 03</div>
              <h3 className="text-base font-bold text-[#13233A] mb-2">Financial &amp; Identity Fraud Exposure</h3>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
                Both individuals and verification teams face growing exposure to unauthorized payment requests, credential harvesting, and social-engineering scams conducted over voice channels.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. PRODUCT CAPABILITY MODEL (DETECT / ANALYZE / ASSESS / VERIFY / PREVENT / RESPOND) */}
        {/* ============================================================ */}
        <section className="py-14 border-b border-[#DCE3EA]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-xs font-bold uppercase tracking-wide mb-3">
                <Cpu className="w-3.5 h-3.5" />
                VOICE SHIELD Capability Model
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">
                Detect, Analyze, Assess, Verify, Prevent &amp; Respond
              </h2>
              <p className="text-sm text-[#5E6E82] max-w-2xl mt-1 leading-relaxed">
                Organized around six structured operational pillars with transparent distinction between current capabilities and in-development tracks.
              </p>
            </div>
            <Button variant="outline" size="sm" href="/product">
              Explore Product Architecture
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CapabilityCard
              icon={<Activity className="w-5 h-5 text-[#1F3B64]" />}
              pillar="DETECT"
              title="Voice Impersonation Detection"
              badge="CURRENT"
              badgeType="now"
              description="Detects potential voice impersonation and suspicious synthetic speech signals across real-time call windows and uploaded voice samples."
            />
            <CapabilityCard
              icon={<PhoneCall className="w-5 h-5 text-[#1F3B64]" />}
              pillar="ANALYZE"
              title="Real-Time Acoustic & Conversational Evidence"
              badge="CURRENT"
              badgeType="now"
              description="Evaluates 16 kHz mono PCM windows and conversational fraud indicators (such as urgency, coercion, and credential requests) as evidence accumulates."
            />
            <CapabilityCard
              icon={<Layers className="w-5 h-5 text-[#1F3B64]" />}
              pillar="ASSESS"
              title="Communication & Session-Level Risk"
              badge="CURRENT"
              badgeType="now"
              description="Aggregates window-level probabilities over time (Basic TCED) to assess session-level communication risk without overreacting to isolated audio noise."
            />
            <CapabilityCard
              icon={<UserCheck className="w-5 h-5 text-[#1F3B64]" />}
              pillar="VERIFY"
              title="Identity Verification Support"
              badge="IN DEVELOPMENT"
              badgeType="dev"
              description="Supports contextual identity verification workflows to assist users and verification desks when caller authenticity is uncertain."
            />
            <CapabilityCard
              icon={<Shield className="w-5 h-5 text-[#1F3B64]" />}
              pillar="PREVENT"
              title="Prevention & Decision Support"
              badge="CURRENT"
              badgeType="now"
              description="Provides timely risk indicators and actionable verification recommendations before users make unsafe financial or disclosure decisions."
            />
            <CapabilityCard
              icon={<AlertTriangle className="w-5 h-5 text-[#1F3B64]" />}
              pillar="RESPOND"
              title="Incident & Cybercrime Intelligence"
              badge="IN DEVELOPMENT"
              badgeType="dev"
              description="Supports evidence-oriented incident metadata and cybercrime intelligence workflows while preserving privacy-conscious ephemeral audio handling."
            />
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. CENTRAL PRODUCT FLOW SECTION */}
        {/* ============================================================ */}
        <section className="py-14 border-b border-[#DCE3EA]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-xs font-bold uppercase tracking-wide mb-3">
                <Network className="w-3.5 h-3.5" />
                End-to-End Framework Flow
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">
                From Voice Interaction to Decision Support
              </h2>
              <p className="text-sm text-[#5E6E82] max-w-2xl mt-1 leading-relaxed">
                VOICE SHIELD goes beyond standalone file classification by coordinating real-time capture, controlled windowing, temporal evidence accumulation, and human-centered prevention guidance.
              </p>
            </div>
            <div className="flex gap-2.5">
              <Button variant="outline" size="sm" href="/how-it-works">
                How It Works
              </Button>
              <Button variant="ghost" size="sm" href="/technology" className="border border-[#DCE3EA] bg-white">
                Technology Stack
              </Button>
            </div>
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FlowStepCard
                step="01"
                title="VOICE INTERACTION"
                detail="An active voice call or communication session begins."
              />
              <FlowStepCard
                step="02"
                title="REAL-TIME AUDIO CAPTURE"
                detail="Audio is captured on the Android device via the Foreground Service."
              />
              <FlowStepCard
                step="03"
                title="AUDIO WINDOWING"
                detail="Normalized into 16 kHz mono PCM windows (5000 ms max, 2500 ms stride)."
              />
              <FlowStepCard
                step="04"
                title="SECURE STREAMING"
                detail="Sequenced windows stream over encrypted WSS/TLS to the backend."
              />
              <FlowStepCard
                step="05"
                title="VOICE IMPERSONATION / AUTHENTICITY ANALYSIS"
                detail="Probabilistic AI/ML evaluation inspects each window for suspicious voice signals."
              />
              <FlowStepCard
                step="06"
                title="TEMPORAL EVIDENCE"
                detail="Evidence accumulates across successive windows (Basic TCED)."
              />
              <FlowStepCard
                step="07"
                title="RISK ASSESSMENT"
                detail="Session-level risk and confidence indicators are computed."
              />
              <FlowStepCard
                step="08"
                title="PREVENTION / DECISION SUPPORT"
                detail="Actionable guidance assists the user before unsafe decisions are made."
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. USE CASES SECTION ("Who VOICE SHIELD Is Built For") */}
        {/* ============================================================ */}
        <section className="py-14 border-b border-[#DCE3EA]">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-xs font-bold uppercase tracking-wide mb-3">
              <Users className="w-3.5 h-3.5" />
              Target Applications &amp; Use Cases
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-2">
              Who VOICE SHIELD Is Built For
            </h2>
            <p className="text-sm text-[#5E6E82] leading-relaxed">
              VOICE SHIELD is designed to support personal call safety today while evolving toward pilot evaluations and enterprise verification workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard
              icon={<Users className="w-5 h-5 text-[#1F3B64]" />}
              title="Individual Users & Families"
              stage="CURRENT"
              stageType="now"
              description="On-device call risk awareness to help individuals identify potential voice impersonation scams, urgency pretexts, and suspicious speech signals."
            />
            <UseCaseCard
              icon={<Building2 className="w-5 h-5 text-[#1F3B64]" />}
              title="Banking & Financial Fraud Teams"
              stage="IN DEVELOPMENT"
              stageType="dev"
              description="Decision-support signals for high-risk telephone transactions, account recovery requests, and voice-assisted verification workflows."
            />
            <UseCaseCard
              icon={<Headphones className="w-5 h-5 text-[#1F3B64]" />}
              title="Customer Support & Verification Desks"
              stage="IN DEVELOPMENT"
              stageType="dev"
              description="Real-time risk indicators to assist support agents when callers request sensitive account changes or urgent escalations."
            />
            <UseCaseCard
              icon={<Shield className="w-5 h-5 text-[#1F3B64]" />}
              title="Enterprise Security & Trust Teams"
              stage="ROADMAP"
              stageType="future"
              description="Decision support against executive voice impersonation, vishing campaigns, and social-engineering attempts targeting internal operations."
            />
            <UseCaseCard
              icon={<Radio className="w-5 h-5 text-[#1F3B64]" />}
              title="Telecom & Communication Platforms"
              stage="ROADMAP"
              stageType="future"
              description="API and streaming inspection hooks for communication providers exploring network-adjacent or client-assisted voice security."
            />
            <UseCaseCard
              icon={<CheckCircle2 className="w-5 h-5 text-[#1F3B64]" />}
              title="Cybercrime Awareness & Safety Programs"
              stage="CURRENT"
              stageType="now"
              description="Interactive demonstration and analysis tools for digital safety initiatives, researchers, and technical evaluators."
            />
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. PLATFORM STATUS / MATURITY SECTION */}
        {/* ============================================================ */}
        <VersionRoadmap />

        {/* ============================================================ */}
        {/* 7. CONNECT WITH BUILDERS & INCUBATION CTA */}
        {/* ============================================================ */}
        <div className="mt-12 mb-8 border-t border-[#DCE3EA] pt-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#13233A] tracking-tight mb-3">
              Engineering Team &amp; Product Journey
            </h2>
            <p className="text-[#5E6E82] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Connect with the engineers building VOICE SHIELD for real-time voice security, pilot evaluations, and technical incubation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            {/* Yuvateja Sainadh */}
            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-[#1F3B64] hover:shadow-sm transition-all group">
              <div>
                <h3 className="text-lg font-bold text-[#13233A] mb-1 group-hover:text-[#1F3B64] transition-colors">Yuvateja Sainadh</h3>
                <p className="text-[13px] font-semibold text-[#5E6E82] mb-5">Applied AI Engineer &amp; Systems Architect</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/yuvateja-sainadh-b8b428321?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F1F4F8] hover:bg-[#1F3B64] hover:text-white text-[#1F3B64] border border-[#DCE3EA] rounded-lg text-xs font-bold transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a href="https://github.com/yuvatejasainadh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F1F4F8] hover:bg-[#1F3B64] hover:text-white text-[#1F3B64] border border-[#DCE3EA] rounded-lg text-xs font-bold transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
            
            {/* Varun */}
            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-[#1F3B64] hover:shadow-sm transition-all group">
              <div>
                <h3 className="text-lg font-bold text-[#13233A] mb-1 group-hover:text-[#1F3B64] transition-colors">Varun</h3>
                <p className="text-[13px] font-semibold text-[#5E6E82] mb-5">MLOps Architect &amp; ML Infrastructure Engineer</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/varun-padavala-89463035b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F1F4F8] hover:bg-[#1F3B64] hover:text-white text-[#1F3B64] border border-[#DCE3EA] rounded-lg text-xs font-bold transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a href="https://github.com/varun-padavala" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F1F4F8] hover:bg-[#1F3B64] hover:text-white text-[#1F3B64] border border-[#DCE3EA] rounded-lg text-xs font-bold transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* AWS Builder Journey & Pilot Inquiry Callout */}
          <div className="bg-[#F8FAFC] border border-[#DCE3EA] rounded-2xl p-8 text-center max-w-4xl mx-auto flex flex-col items-center justify-center shadow-xs">
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#1F3B64] text-white uppercase tracking-wider mb-3">
              Engineering Publication &amp; Pilot Inquiries
            </span>
            <h3 className="text-lg font-bold text-[#13233A] mb-2">
              Why We Started Building VOICE SHIELD — Fighting AI Voice Impersonation
            </h3>
            <p className="text-[#5E6E82] text-[13px] max-w-lg mb-6 leading-relaxed">
              Read the public engineering article on AWS Builder or get in touch for incubation, pilot demonstrations, and research collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="primary" size="md" href="/contact" className="px-6">
                Request a Demo
              </Button>
              <Button variant="outline" size="md" href="https://builder.aws.com/content/3Ij4hQiorLDzSVYPJdQ74MYkqF6/why-i-started-building-voiceshield-fighting-ai-voice-impersonation" asExternal className="px-6">
                Read on AWS Builder
                <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-80" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}

function AccessCard({ to, icon, title, description }: { to: string, icon: React.ReactNode, title: string, description: string }) {
  return (
    <Link 
      to={to}
      className="group p-4 sm:p-5 bg-white border border-[#DCE3EA] hover:border-[#1F3B64] hover:shadow-sm rounded-xl transition-all flex flex-col justify-between"
    >
      <div className="mb-3 p-2.5 rounded-lg bg-[#F1F4F8] w-fit group-hover:bg-[#1F3B64]/10 transition-colors">
        {icon}
      </div>
      <div>
        <div className="font-bold text-sm text-[#13233A] mb-1 group-hover:text-[#1F3B64] transition-colors">{title}</div>
        <div className="text-xs text-[#5E6E82] leading-snug">{description}</div>
      </div>
    </Link>
  );
}

function CapabilityCard({
  icon,
  pillar,
  title,
  badge,
  badgeType = 'now',
  description,
}: {
  icon: React.ReactNode;
  pillar?: string;
  title: string;
  badge: string;
  badgeType?: 'now' | 'dev' | 'future';
  description: string;
}) {
  const badgeStyles = {
    now: 'bg-[#E8F7F2] text-[#159570] border-[#B4E8D7]',
    dev: 'bg-[#FDF5E6] text-[#C78316] border-[#F0D09B]',
    future: 'bg-[#F1F4F8] text-[#5E6E82] border-[#DCE3EA]',
  };

  return (
    <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs flex flex-col justify-between hover:border-[#1F3B64]/50 transition-all">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-xl bg-[#F1F4F8]">{icon}</div>
            {pillar && (
              <span className="text-xs font-mono font-bold tracking-wider text-[#1F3B64]">
                {pillar}
              </span>
            )}
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${badgeStyles[badgeType]}`}>
            {badge}
          </span>
        </div>
        <h3 className="text-base font-bold text-[#13233A] mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FlowStepCard({
  step,
  title,
  detail,
}: {
  step: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#1F3B64] text-white">
            STEP {step}
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#7A8798] hidden lg:block" />
        </div>
        <h3 className="text-xs sm:text-sm font-bold text-[#13233A] mb-1.5">{title}</h3>
        <p className="text-[11px] text-[#5E6E82] leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

function UseCaseCard({
  icon,
  title,
  stage,
  stageType,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  stage: string;
  stageType: 'now' | 'dev' | 'future';
  description: string;
}) {
  const badgeStyles = {
    now: 'bg-[#E8F7F2] text-[#159570] border-[#B4E8D7]',
    dev: 'bg-[#FDF5E6] text-[#C78316] border-[#F0D09B]',
    future: 'bg-[#F1F4F8] text-[#5E6E82] border-[#DCE3EA]',
  };

  return (
    <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="p-2.5 rounded-xl bg-[#F1F4F8]">{icon}</div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${badgeStyles[stageType]}`}>
            {stage}
          </span>
        </div>
        <h3 className="text-base font-bold text-[#13233A] mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function StatusRow({ 
  label, 
  status, 
  isSuccess, 
  isUpcoming, 
  isFuture 
}: { 
  label: string; 
  status: string; 
  isSuccess?: boolean; 
  isUpcoming?: boolean; 
  isFuture?: boolean; 
}) {
  const getBadgeStyle = () => {
    if (isSuccess) return 'text-[#159570]';
    if (isUpcoming) return 'text-[#C78316]';
    if (isFuture) return 'text-[#7A8798] font-mono';
    return 'text-[#5E6E82]';
  };

  const getDotStyle = () => {
    if (isSuccess) return 'bg-[#159570]';
    if (isUpcoming) return 'bg-[#C78316]';
    if (isFuture) return 'bg-[#7A8798]';
    return 'bg-[#B8C5D3]';
  };

  return (
    <div className="flex justify-between items-center text-xs">
      <span className="text-[#5E6E82] font-medium">{label}</span>
      <span className={`inline-flex items-center gap-1.5 font-bold ${getBadgeStyle()}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${getDotStyle()}`}></span>
        {status}
      </span>
    </div>
  );
}

import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PROJECT_CONFIG } from '../config/project';
import { Button } from '../components/ui/Button';
import { FileAudio, Download, Github, BookText, Shield, CheckCircle2, Cpu, Activity, Layers, ArrowRight, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLatestApk } from '../utils/releases';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { VersionRoadmap } from '../components/roadmap/VersionRoadmap';

export function Home() {
  const latestApk = getLatestApk();

  return (
    <Layout>
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-14 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Logo and System Status badge */}
            <div className="flex items-center gap-3 mb-5">
              <VoiceShieldLogo 
                className="h-14 sm:h-16 w-auto" 
              />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F7F2] border border-[#B4E8D7] text-[#159570] text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#159570] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#159570]"></span>
                </span>
                SIH {PROJECT_CONFIG.SIH_PROBLEM_STATEMENT} • Active Protection
              </div>
            </div>

            {/* Maturity Stage Indicator Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1F3B64] text-white text-[11px] font-bold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#159570] animate-pulse"></span>
                <span>v1.0 — DEMONSTRATOR</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] bg-[#159570] text-white font-extrabold uppercase">
                  CURRENT
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F7F9FC] border border-[#DCE3EA] text-[#5E6E82] text-[11px] font-medium">
                <span>v2.0 — SIH PROTOTYPE</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] bg-[#FDF5E6] text-[#C78316] font-bold uppercase border border-[#F0D09B]">
                  UPCOMING
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F7F9FC] border border-[#DCE3EA] text-[#7A8798] text-[11px] font-medium">
                <span>v3.0 — PRODUCTION</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] bg-[#F1F4F8] text-[#5E6E82] font-mono font-bold">
                  #FUTURE
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#13233A] mb-2 leading-tight">
              VOICE SHIELD
            </h1>
            <div className="text-sm sm:text-base font-bold tracking-normal text-[#1F3B64] mb-4">
              Real-Time AI-Powered Voice Impersonation Detection, Prevention & Risk Assessment Framework
            </div>

            <p className="text-[#5E6E82] text-sm sm:text-base leading-relaxed max-w-xl mb-6">
              Demonstrates an application-level real-time cellular-call analysis pipeline. Ingests temporal speech windows from call recordings over secure WSS/TLS for synthetic voice indicators, basic temporal evidence aggregation (TCED), and call-level risk scoring.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-6">
              <Button variant="primary" size="lg" href="/demo" className="justify-center">
                <Activity className="w-4 h-4 mr-2" />
                TRY LIVE DEMO
              </Button>
              {latestApk ? (
                <Button 
                  variant="outline" 
                  size="lg" 
                  href={latestApk.url}
                  download={latestApk.filename}
                  className="justify-center"
                >
                  <Download className="w-4 h-4 mr-2 text-[#1F3B64]" />
                  DOWNLOAD ANDROID APP
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  size="lg" 
                  href="/download"
                  className="justify-center"
                >
                  <Download className="w-4 h-4 mr-2 text-[#1F3B64]" />
                  VIEW ANDROID APP
                </Button>
              )}
            </div>

            {/* Android version info */}
            <div className="flex items-center gap-3 text-xs font-medium text-[#7A8798]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#159570]"></span>
              <span>
                v1.0 — Demonstrator • CURRENT • Application-Level Real-Time Pipeline
              </span>
            </div>
          </div>

          {/* Right Column: Cards & Status Dashboard */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Quick Access Navigation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <AccessCard 
                to="/demo"
                icon={<FileAudio className="w-5 h-5 text-[#1F3B64]" />}
                title="Live Demo"
                description="Analyze audio authenticity & windowed risk"
              />
              <AccessCard 
                to="/download"
                icon={<Download className="w-5 h-5 text-[#1F3B64]" />}
                title="Download App"
                description={latestApk ? `Latest Android ${latestApk.version} APK` : 'Android Application'}
              />
              <AccessCard 
                to="/github"
                icon={<Github className="w-5 h-5 text-[#1F3B64]" />}
                title="Source Code"
                description="Android, API & Web repositories"
              />
              <AccessCard 
                to="/docs"
                icon={<BookText className="w-5 h-5 text-[#1F3B64]" />}
                title="Documentation"
                description="Architecture & technical specifications"
              />
            </div>

            {/* System & Version Status Panel */}
            <div className="bg-white border border-[#DCE3EA] rounded-xl p-5 shadow-xs">
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#DCE3EA]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#1F3B64]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#13233A]">Maturity & Status</h3>
                </div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                  v1.0 Demonstrator
                </span>
              </div>
              <div className="space-y-2.5">
                <StatusRow label="v1.0 — Demonstrator" status="CURRENT" isSuccess={true} />
                <StatusRow label="Demonstrator Pipeline" status="Active" isSuccess={true} />
                <StatusRow label="v2.0 — SIH Prototype" status="UPCOMING" isUpcoming={true} />
                <StatusRow label="v3.0 — Production" status="#FUTURE" isFuture={true} />
              </div>
            </div>

          </div>

        </div>

        {/* Three-Stage Version Roadmap Section */}
        <VersionRoadmap />

        {/* Connect with Builders Section */}
        <div className="mt-20 mb-8 border-t border-[#DCE3EA] pt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#13233A] tracking-tight mb-3">Connect with Builders</h2>
            <p className="text-[#5E6E82] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Meet the builders behind VOICE SHIELD and follow the project's engineering journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            {/* Yuvateja Sainadh */}
            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-[#1F3B64] hover:shadow-sm transition-all group">
              <div>
                <h3 className="text-lg font-bold text-[#13233A] mb-1 group-hover:text-[#1F3B64] transition-colors">Yuvateja Sainadh</h3>
                <p className="text-[13px] font-semibold text-[#5E6E82] mb-5">Applied AI Engineer & Systems Architect</p>
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
                <p className="text-[13px] font-semibold text-[#5E6E82] mb-5">MLOps Architect & ML Infrastructure Engineer</p>
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
          
          {/* Project Journey */}
          <div className="bg-[#F8FAFC] border border-[#DCE3EA] rounded-2xl p-8 text-center max-w-4xl mx-auto flex flex-col items-center justify-center shadow-xs">
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#1F3B64] text-white uppercase tracking-wider mb-3">Project Journey</span>
            <h3 className="text-lg font-bold text-[#13233A] mb-2">Project Journey — AWS Builder</h3>
            <p className="text-[#5E6E82] text-[13px] max-w-lg mb-6 leading-relaxed">
              Follow the public technical journey of building VOICE SHIELD on AWS Builder.
            </p>
            <Button variant="primary" size="md" href="https://builder.aws.com/content/3Ij4hQiorLDzSVYPJdQ74MYkqF6/why-i-started-building-voiceshield-fighting-ai-voice-impersonation" asExternal className="px-6">
              Read Project Journey
              <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-80" />
            </Button>
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


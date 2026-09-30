import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Shield, ChevronRight } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { Link } from 'react-router-dom';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        <div className="mb-10 pb-6 border-b border-[#DCE3EA] flex items-center gap-4">
          <VoiceShieldLogo className="h-12 w-12" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">About VoiceShield</h1>
            <p className="text-sm text-[#5E6E82] mt-0.5">
              Real-Time AI Voice Safety, Fraud-Risk Intelligence &amp; Voice Authenticity Protection Platform
            </p>
          </div>
        </div>

        <div className="space-y-8 text-[#5E6E82] leading-relaxed">
          
          <section>
            <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-3">Platform Overview</h2>
            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-[#DCE3EA] pb-3">
                <span className="text-xs font-semibold text-[#5E6E82]">Platform Name</span>
                <span className="sm:col-span-2 text-[#13233A] font-bold">{PROJECT_CONFIG.PROJECT_NAME}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-[#DCE3EA] pb-3">
                <span className="text-xs font-semibold text-[#5E6E82]">Domain Focus</span>
                <span className="sm:col-span-2 text-[#13233A] font-medium">AI Voice Safety, Impersonation Defense &amp; Conversational Risk Intelligence</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-[#DCE3EA] pb-3">
                <span className="text-xs font-semibold text-[#5E6E82]">Core Mission</span>
                <span className="sm:col-span-2 text-sm text-[#13233A] font-semibold">
                  {PROJECT_CONFIG.PROJECT_DESCRIPTION}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                <span className="text-xs font-semibold text-[#5E6E82]">Platform Maturity</span>
                <span className="sm:col-span-2 text-xs text-[#159570] font-bold">
                  NOW — Real-Time Foundation (ACTIVE) • IN DEVELOPMENT — Expanded Verification • FUTURE — Global Scale
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-3">Product Evolution Roadmap</h2>
            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-[#1F3B64] rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#13233A] text-sm">NOW — Real-Time Call Protection Foundation</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">ACTIVE</span>
                  </div>
                  <p className="text-xs text-[#5E6E82] mt-1">Real-time Android call monitoring, 16 kHz PCM window synchronization, WSS/TLS streaming, voice authenticity analysis, and Basic TCED session risk scoring.</p>
                </div>
              </div>

              <div className="p-4 bg-[#F7F9FC] border border-dashed border-[#B8C5D3] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#5E6E82] text-sm">IN DEVELOPMENT — Expanded Risk &amp; Verification</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FDF5E6] text-[#C78316] border border-[#F0D09B]">IN DEVELOPMENT</span>
                  </div>
                  <p className="text-xs text-[#5E6E82] mt-1">PostgreSQL-backed session telemetry via the VoiceShield API boundary, identity verification workflows, cybercrime intelligence signals, and multilingual acoustic routing (LACR / AASIST-L).</p>
                </div>
              </div>

              <div className="p-4 bg-[#F7F9FC] border border-dashed border-[#B8C5D3] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#7A8798] text-sm">FUTURE — Global &amp; Organizational Scale</span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#F1F4F8] text-[#5E6E82] border border-[#DCE3EA]">ROADMAP</span>
                  </div>
                  <p className="text-xs text-[#7A8798] mt-1">Organization deployments, enterprise contact-center integrations, additional communication channels, and distributed regional routing.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-3">Technology Stack</h2>
            <div className="flex flex-wrap gap-2.5">
              {['Android', 'Kotlin', 'Jetpack Compose', 'FastAPI', 'Python', 'WebSockets (WSS/TLS)', 'Aurigin.AI', 'Basic TCED', 'React', 'TypeScript', 'Tailwind CSS'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-white border border-[#DCE3EA] text-[#1F3B64] text-xs font-semibold rounded-lg shadow-2xs">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-3">Quick Navigation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <AboutLink to="/demo" label="Try the Live Demo" />
              <AboutLink to="/download" label="Download Android App" />
              <AboutLink to="/github" label="View Source Code" />
              <AboutLink to="/docs" label="Read Documentation" />
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}

function AboutLink({ to, label }: { to: string, label: string }) {
  return (
    <Link to={to} className="flex items-center justify-between p-4 bg-white border border-[#DCE3EA] rounded-xl hover:border-[#1F3B64] hover:shadow-xs transition-all group">
      <span className="text-sm font-bold text-[#13233A] group-hover:text-[#1F3B64] transition-colors">{label}</span>
      <ChevronRight className="w-4 h-4 text-[#7A8798] group-hover:text-[#1F3B64] transition-colors" />
    </Link>
  );
}


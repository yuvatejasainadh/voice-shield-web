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
            <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">About Voice Shield</h1>
            <p className="text-sm text-[#5E6E82] mt-0.5">
              Smart India Hackathon 2026 Submission
            </p>
          </div>
        </div>

        <div className="space-y-8 text-[#5E6E82] leading-relaxed">
          
          <section>
            <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-3">Project Specifications</h2>
            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-[#DCE3EA] pb-3">
                <span className="text-xs font-semibold text-[#5E6E82]">Project Name</span>
                <span className="sm:col-span-2 text-[#13233A] font-bold">{PROJECT_CONFIG.PROJECT_NAME}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-[#DCE3EA] pb-3">
                <span className="text-xs font-semibold text-[#5E6E82]">Hackathon</span>
                <span className="sm:col-span-2 text-[#13233A] font-medium">Smart India Hackathon 2026</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-[#DCE3EA] pb-3">
                <span className="text-xs font-semibold text-[#5E6E82]">Problem Statement</span>
                <span className="sm:col-span-2 text-[#1F3B64] font-bold font-mono">SIH {PROJECT_CONFIG.SIH_PROBLEM_STATEMENT}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-[#DCE3EA] pb-3">
                <span className="text-xs font-semibold text-[#5E6E82]">Core Objective</span>
                <span className="sm:col-span-2 text-sm text-[#13233A] font-semibold">VOICE SHIELD — Real-Time AI-Powered Voice Impersonation Detection, Prevention &amp; Risk Assessment Framework</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                <span className="text-xs font-semibold text-[#5E6E82]">Active Maturity</span>
                <span className="sm:col-span-2 text-xs text-[#159570] font-bold">
                  v1.0 — Demonstrator (CURRENT) • v2.0 — SIH Prototype (UPCOMING) • v3.0 — Production (#FUTURE)
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-3">Version Maturity Roadmap</h2>
            <div className="space-y-3">
              <div className="p-4 bg-white border-2 border-[#1F3B64] rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#13233A] text-sm">v1.0 — Demonstrator</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">CURRENT</span>
                  </div>
                  <p className="text-xs text-[#5E6E82] mt-1">Application-level real-time cellular-call analysis pipeline with temporal windowing and basic TCED risk scoring.</p>
                </div>
              </div>

              <div className="p-4 bg-[#F7F9FC] border border-dashed border-[#B8C5D3] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#5E6E82] text-sm">v2.0 — SIH Prototype</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FDF5E6] text-[#C78316] border border-[#F0D09B]">UPCOMING</span>
                  </div>
                  <p className="text-xs text-[#5E6E82] mt-1">Planned 3-VM Language-Aware Cascading Routing (LACR) with Voice Shield-owned AASIST-L and calibrated risk evaluation.</p>
                </div>
              </div>

              <div className="p-4 bg-[#F7F9FC] border border-dashed border-[#B8C5D3] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#7A8798] text-sm">v3.0 — Production</span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#F1F4F8] text-[#5E6E82] border border-[#DCE3EA]">#FUTURE</span>
                  </div>
                  <p className="text-xs text-[#7A8798] mt-1">Planned 7-VM distributed routing clusters, language-specific AASIST-L, and active prevention.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-3">Technology Stack</h2>
            <div className="flex flex-wrap gap-2.5">
              {['Android', 'Kotlin', 'Jetpack Compose', 'FastAPI', 'Python', 'PyTorch', 'WavLM', 'React', 'TypeScript', 'Tailwind CSS'].map(tech => (
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


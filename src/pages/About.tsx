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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                <span className="text-xs font-semibold text-[#5E6E82]">Core Objective</span>
                <span className="sm:col-span-2 text-sm text-[#13233A]">AI-Powered Real-Time Detection and Prevention of Voice Cloning Threats</span>
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


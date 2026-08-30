import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Shield, ExternalLink } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="mb-12 border-b border-slate-800 pb-8">
          <Shield className="w-12 h-12 text-cyan-500 mb-6" />
          <h1 className="text-4xl font-bold text-slate-100 tracking-tighter uppercase mb-2">About the Project</h1>
          <p className="text-lg text-slate-400 font-light">
            Smart India Hackathon 2026 Submission
          </p>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed">
          
          <section>
            <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Project Details</h2>
            <div className="bg-[#0A0D12] border border-slate-800 p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-slate-800/50 pb-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Name</span>
                <span className="sm:col-span-2 text-slate-100 font-bold uppercase tracking-wider">{PROJECT_CONFIG.PROJECT_NAME}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-slate-800/50 pb-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Event</span>
                <span className="sm:col-span-2 font-mono text-sm">Smart India Hackathon 2026</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-slate-800/50 pb-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Problem ID</span>
                <span className="sm:col-span-2 text-cyan-500 font-mono text-sm">{PROJECT_CONFIG.SIH_PROBLEM_STATEMENT}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Core Objective</span>
                <span className="sm:col-span-2 text-sm text-slate-300">AI-Powered Real-Time Detection of Voice Cloning</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {['Android', 'Kotlin', 'FastAPI', 'Python', 'PyTorch', 'WavLM', 'React', 'TypeScript', 'Tailwind CSS'].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-cyan-500 text-[10px] font-mono uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Quick Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    <Link to={to} className="flex items-center justify-between p-4 bg-slate-900/30 border border-slate-800 hover:border-cyan-500 transition-colors group">
      <span className="text-sm font-bold tracking-wider uppercase text-slate-300 group-hover:text-cyan-400 transition-colors">{label}</span>
      <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-500 transition-colors" />
    </Link>
  );
}

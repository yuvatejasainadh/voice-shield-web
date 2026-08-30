import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Terminal, Cpu, Network, Lock, Code } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { DocLayout } from '../components/docs/DocLayout';

export function Docs() {
  return (
    <DocLayout>
      <div className="mb-10">
        <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-4">
          <span>Docs</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-300">Getting Started</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-100 tracking-tighter uppercase mb-4">VOICE SHIELD DOCUMENTATION</h1>
        <p className="text-lg text-slate-400 font-light">
          Technical documentation for the {PROJECT_CONFIG.PROJECT_NAME} voice-clone detection platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <QuickLink to="/docs" icon={<BookOpen className="w-5 h-5" />} label="Getting Started" />
        <QuickLink to="/docs/architecture" icon={<Network className="w-5 h-5" />} label="Architecture" />
        <QuickLink to="/docs/api" icon={<Terminal className="w-5 h-5" />} label="API" />
        <QuickLink to="/docs/android" icon={<Code className="w-5 h-5" />} label="Android" />
        <QuickLink to="/docs/ml" icon={<Cpu className="w-5 h-5" />} label="ML Pipeline" />
        <QuickLink to="/security" icon={<Lock className="w-5 h-5" />} label="Security" />
      </div>

      <div className="prose prose-invert prose-cyan max-w-none">
        <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-tight mt-12 mb-6 pb-2 border-b border-slate-800">Prerequisites</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-400 mb-8 marker:text-cyan-500">
          <li>Android device running Android 8.0 (API 26) or higher.</li>
          <li>Stable internet connection for API inference.</li>
          <li>(For developers) Python 3.10+, PyTorch, and CUDA for ML development.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-tight mt-12 mb-6 pb-2 border-b border-slate-800">Next Steps</h2>
        <p className="text-slate-400 mb-6">
          Explore the documentation to understand the system architecture, integrate with the backend API, or build the ML pipeline.
        </p>
      </div>
    </DocLayout>
  );
}

function QuickLink({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <Link 
      to={to}
      className="flex items-center space-x-3 bg-slate-900/30 border border-slate-800 p-4 hover:border-cyan-500 transition-colors group"
    >
      <div className="text-cyan-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="font-bold text-sm tracking-wider uppercase text-slate-200">{label}</span>
    </Link>
  );
}

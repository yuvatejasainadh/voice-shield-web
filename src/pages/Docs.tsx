import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Terminal, Cpu, Network, Lock, Code, ExternalLink } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { DocLayout } from '../components/docs/DocLayout';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function Docs() {
  return (
    <DocLayout>
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#DCE3EA]">
        <div className="flex items-start gap-3.5">
          <VoiceShieldLogo className="h-10 w-10 mt-1" />
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#5E6E82] mb-1.5">
              <span>Documentation</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#1F3B64]">Getting Started</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-1">Voice Shield Documentation</h1>
            <p className="text-sm text-[#5E6E82] max-w-2xl">
              Technical specifications, architecture overviews, and integration references for the Voice Shield security ecosystem.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            href={PROJECT_CONFIG.repositories.docs}
            asExternal
            className="shrink-0"
          >
            Docs Repository
            <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-60" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10">
        <QuickLink to="/docs" icon={<BookOpen className="w-5 h-5 text-[#1F3B64]" />} label="Getting Started" description="Setup & essentials" />
        <QuickLink to="/docs/architecture" icon={<Network className="w-5 h-5 text-[#1F3B64]" />} label="Architecture" description="End-to-end system" />
        <QuickLink to="/docs/api" icon={<Terminal className="w-5 h-5 text-[#1F3B64]" />} label="Backend API" description="FastAPI endpoints" />
        <QuickLink to="/docs/android" icon={<Code className="w-5 h-5 text-[#1F3B64]" />} label="Android Client" description="Jetpack Compose & Kotlin" />
        <QuickLink to="/docs/ml" icon={<Cpu className="w-5 h-5 text-[#1F3B64]" />} label="ML Pipeline" description="WavLM audio embeddings" />
        <QuickLink to="/security" icon={<Lock className="w-5 h-5 text-[#1F3B64]" />} label="Security" description="Privacy & telemetry" />
      </div>

      <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-[#13233A] mb-3 pb-2 border-b border-[#DCE3EA]">Prerequisites</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#5E6E82]">
            <li><strong className="text-[#13233A]">Android:</strong> Device running Android 8.0 (API 26) or higher for standalone client installation.</li>
            <li><strong className="text-[#13233A]">Network:</strong> Active network access for high-precision cloud inference streaming.</li>
            <li><strong className="text-[#13233A]">Development:</strong> Python 3.10+, PyTorch, and CUDA drivers for training or retraining WavLM weights.</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-bold text-[#13233A] mb-3 pb-2 border-b border-[#DCE3EA]">Next Steps</h2>
          <p className="text-sm text-[#5E6E82] leading-relaxed">
            Explore the documentation sections above to understand the system pipeline, integrate custom audio capture hooks, or learn about the architecture.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

function QuickLink({ to, icon, label, description }: { to: string, icon: React.ReactNode, label: string, description?: string }) {
  return (
    <Link 
      to={to}
      className="flex items-center space-x-3.5 bg-white border border-[#DCE3EA] rounded-xl p-4 hover:border-[#1F3B64] hover:shadow-xs transition-all group"
    >
      <div className="p-2.5 rounded-lg bg-[#F1F4F8] group-hover:bg-[#1F3B64]/10 transition-colors">
        {icon}
      </div>
      <div>
        <div className="font-bold text-sm text-[#13233A] group-hover:text-[#1F3B64] transition-colors">{label}</div>
        {description && <div className="text-[11px] text-[#7A8798]">{description}</div>}
      </div>
    </Link>
  );
}


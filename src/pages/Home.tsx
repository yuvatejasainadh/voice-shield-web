import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PROJECT_CONFIG } from '../config/project';
import { Button } from '../components/ui/Button';
import { FileAudio, Download, Github, BookText, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Layout>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 relative w-full h-full">
        <div className="lg:col-span-7 flex flex-col justify-center px-8 lg:px-16 py-12 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            System Active • SIH {PROJECT_CONFIG.SIH_PROBLEM_STATEMENT}
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tighter mb-4">
            PROTECTING<br/><span className="text-cyan-500">CONVERSATIONS</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
            {PROJECT_CONFIG.PROJECT_DESCRIPTION} Shielding individuals and enterprises from advanced deepfake audio threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="primary" size="lg" href="/demo">
              TRY LIVE DEMO
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href={PROJECT_CONFIG.download.apk}
              download="Voice Shield v1.0.apk"
            >
              <Download className="w-4 h-4 mr-2" />
              DOWNLOAD ANDROID APP
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-cyan-500 self-center"></div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Android APK • v1.0 • WavLM Architecture
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-900/30 backdrop-blur-sm p-8 lg:p-12 flex flex-col justify-center gap-6 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AccessCard 
              to="/demo"
              icon={<FileAudio className="w-6 h-6" />}
              title="Try Demo"
              description="Analyze an audio sample in real-time"
            />
            <AccessCard 
              to="/download"
              icon={<Download className="w-6 h-6" />}
              title="Download App"
              description={`Latest Android ${PROJECT_CONFIG.APK_VERSION} APK`}
            />
            <AccessCard 
              to="/github"
              icon={<Github className="w-6 h-6" />}
              title="Source Code"
              description="Explore our GitHub repositories"
            />
            <AccessCard 
              to="/docs"
              icon={<BookText className="w-6 h-6" />}
              title="Documentation"
              description="Technical API and ML architecture docs"
            />
          </div>

          <div className="mt-8 p-6 bg-[#0F172A] border border-cyan-500/20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Project Status</h3>
              <span className="text-[10px] font-mono text-cyan-500">BUILD {PROJECT_CONFIG.APK_VERSION}-STABLE</span>
            </div>
            <div className="space-y-3">
              <StatusRow label="ANDROID APP" status={PROJECT_CONFIG.STATUS.android} />
              <StatusRow label="BACKEND API" status={PROJECT_CONFIG.STATUS.backendApi} />
              <StatusRow label="DETECTION MODEL" status="LOADED" />
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
      className="group p-6 border border-slate-800 bg-[#0A0D12] hover:border-cyan-500 transition-all cursor-pointer flex flex-col h-full"
    >
      <div className="mb-4 text-cyan-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="font-bold text-sm text-slate-100 uppercase tracking-wider mb-1">{title}</div>
      <div className="text-[10px] text-slate-500 uppercase leading-tight">{description}</div>
    </Link>
  );
}

function StatusRow({ label, status }: { label: string, status: string }) {
  const isAvailable = status.toUpperCase() === 'AVAILABLE' || status.toUpperCase() === 'ONLINE' || status.toUpperCase() === 'LOADED';
  return (
    <div className="flex justify-between text-[10px] font-mono">
      <span className="text-slate-500">{label}</span>
      <span className={isAvailable ? 'text-emerald-400' : 'text-amber-400'}>{status.toUpperCase()}</span>
    </div>
  );
}

import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PROJECT_CONFIG } from '../config/project';
import { Button } from '../components/ui/Button';
import { FileAudio, Download, Github, BookText, Shield, CheckCircle2, Cpu, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLatestApk } from '../utils/releases';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function Home() {
  const latestApk = getLatestApk();

  return (
    <Layout>
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Logo and System Status badge */}
            <div className="flex items-center gap-3 mb-6">
              <VoiceShieldLogo 
                className="h-16 sm:h-20 w-auto" 
              />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F7F2] border border-[#B4E8D7] text-[#159570] text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#159570] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#159570]"></span>
                </span>
                SIH {PROJECT_CONFIG.SIH_PROBLEM_STATEMENT} • Active Protection
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#13233A] mb-3 leading-tight">
              VOICE SHIELD
            </h1>
            <div className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#1F3B64] mb-4">
              AI-Powered Voice Security
            </div>

            <p className="text-[#5E6E82] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              {PROJECT_CONFIG.PROJECT_DESCRIPTION} Real-time detection of synthetic audio and deepfake voice clones engineered for mobile and enterprise protection.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-8">
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
              <span className="inline-block w-2 h-2 rounded-full bg-[#1F3B64]"></span>
              <span>
                {latestApk 
                  ? `Android Release • ${latestApk.version} • WavLM Acoustic Architecture`
                  : 'Android Application • WavLM Acoustic Architecture'}
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
                description="Upload and analyze audio authenticity"
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
                description="ML Pipeline & API reference"
              />
            </div>

            {/* System Status Panel */}
            <div className="bg-white border border-[#DCE3EA] rounded-xl p-5 shadow-xs">
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-[#DCE3EA]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#1F3B64]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#13233A]">System Status</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#F1F4F8] text-[#1F3B64]">
                  {latestApk ? `${latestApk.version} Stable` : 'Active'}
                </span>
              </div>
              <div className="space-y-2.5">
                <StatusRow label="Android Client" status={latestApk ? 'Available' : 'Pending'} isSuccess={!!latestApk} />
                <StatusRow label="Backend API" status={PROJECT_CONFIG.STATUS.backendApi} isSuccess={true} />
                <StatusRow label="Detection Engine" status="WavLM Active" isSuccess={true} />
              </div>
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

function StatusRow({ label, status, isSuccess }: { label: string, status: string, isSuccess?: boolean }) {
  return (
    <div className="flex justify-between items-center text-xs">
      <span className="text-[#5E6E82] font-medium">{label}</span>
      <span className={`inline-flex items-center gap-1 font-semibold ${isSuccess ? 'text-[#159570]' : 'text-[#C78316]'}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${isSuccess ? 'bg-[#159570]' : 'bg-[#C78316]'}`}></span>
        {status}
      </span>
    </div>
  );
}


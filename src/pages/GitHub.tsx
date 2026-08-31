import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Github as GithubIcon, ExternalLink, Code2, Database, Smartphone, FileText } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function GitHub() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header with Logo */}
        <div className="mb-10 pb-6 border-b border-[#DCE3EA] flex items-center space-x-4">
          <VoiceShieldLogo className="h-12 w-12" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">Source Code Repositories</h1>
            <p className="text-sm text-[#5E6E82] mt-0.5">
              Open source components powering the Voice Shield security ecosystem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <RepositoryCard 
            title="Voice Shield Android"
            description="Native Kotlin Android client featuring Jetpack Compose UI, on-device audio streaming, and ONNX Runtime inference."
            technology="Kotlin / Jetpack Compose"
            url={PROJECT_CONFIG.repositories.android}
            icon={<Smartphone className="w-6 h-6 text-[#1F3B64]" />}
          />
          <RepositoryCard 
            title="Voice Shield API"
            description="High-throughput FastAPI inference server deploying WavLM deep learning audio classification models."
            technology="Python / FastAPI / PyTorch"
            url={PROJECT_CONFIG.repositories.api}
            icon={<Database className="w-6 h-6 text-[#1F3B64]" />}
          />
          <RepositoryCard 
            title="Voice Shield Web"
            description="React & Vite distribution portal, dynamic APK discovery system, and live audio testing playground."
            technology="React / TypeScript / Vite"
            url={PROJECT_CONFIG.repositories.web}
            icon={<Code2 className="w-6 h-6 text-[#1F3B64]" />}
          />
          <RepositoryCard 
            title="Voice Shield Docs"
            description="Comprehensive technical specifications, acoustic benchmark results, and integration guidelines."
            technology="Technical Documentation"
            url={PROJECT_CONFIG.repositories.docs}
            icon={<FileText className="w-6 h-6 text-[#1F3B64]" />}
          />
        </div>

      </div>
    </Layout>
  );
}

function RepositoryCard({ 
  title, 
  description, 
  technology, 
  url, 
  icon 
}: { 
  title: string, 
  description: string, 
  technology: string, 
  url: string,
  icon: React.ReactNode
}) {
  return (
    <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:border-[#1F3B64] hover:shadow-sm transition-all group">
      <div className="flex justify-between items-start mb-5">
        <div className="p-3 bg-[#F1F4F8] rounded-xl group-hover:bg-[#1F3B64]/10 transition-colors">
          {icon}
        </div>
        <div className="text-xs font-semibold text-[#1F3B64] bg-[#F1F4F8] border border-[#DCE3EA] px-2.5 py-1 rounded-full">
          {technology}
        </div>
      </div>
      
      <h2 className="text-base font-bold text-[#13233A] tracking-tight mb-2 group-hover:text-[#1F3B64] transition-colors">{title}</h2>
      <p className="text-[#5E6E82] text-xs leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {url ? (
        <Button variant="outline" className="w-full justify-center" href={url} asExternal>
          <GithubIcon className="w-4 h-4 mr-2" />
          View on GitHub
          <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-60" />
        </Button>
      ) : (
        <div className="p-3 bg-[#F1F4F8] rounded-xl text-center text-xs font-medium text-[#7A8798]">
          Repository link not configured.
        </div>
      )}
    </div>
  );
}


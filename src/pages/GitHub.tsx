import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Github as GithubIcon, ExternalLink, Code2, Database, Smartphone, FileText } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { Button } from '../components/ui/Button';

export function GitHub() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="mb-8 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4 mb-2">
            <GithubIcon className="w-8 h-8 text-cyan-500" />
            <h1 className="text-3xl font-bold text-slate-100 tracking-tighter uppercase">Source Code</h1>
          </div>
          <p className="text-slate-400">
            Explore the implementation behind Voice Shield.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <RepositoryCard 
            title="ANDROID APP"
            description="Mobile application for real-time and file-based voice analysis."
            technology="Kotlin · Android"
            url={PROJECT_CONFIG.GITHUB_REPOSITORIES.android}
            icon={<Smartphone className="w-6 h-6" />}
          />
          <RepositoryCard 
            title="BACKEND"
            description="API and inference services handling audio processing and model interaction."
            technology="Python · FastAPI"
            url={PROJECT_CONFIG.GITHUB_REPOSITORIES.backend}
            icon={<Database className="w-6 h-6" />}
          />
          <RepositoryCard 
            title="ML"
            description="Voice-clone detection pipeline, fine-tuning scripts, and model architecture."
            technology="Python · PyTorch"
            url={PROJECT_CONFIG.GITHUB_REPOSITORIES.ml}
            icon={<Code2 className="w-6 h-6" />}
          />
          <RepositoryCard 
            title="DOCUMENTATION"
            description="Source files for this documentation portal and project architecture."
            technology="TypeScript · React"
            url={PROJECT_CONFIG.GITHUB_REPOSITORIES.documentation}
            icon={<FileText className="w-6 h-6" />}
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
    <div className="bg-[#0A0D12] border border-slate-800 p-8 flex flex-col h-full hover:border-cyan-500 transition-colors group">
      <div className="flex justify-between items-start mb-6">
        <div className="text-cyan-500 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-500 border border-slate-800 bg-slate-900 px-2 py-1">
          {technology}
        </div>
      </div>
      
      <h2 className="text-sm font-bold text-slate-100 tracking-wider mb-2">{title}</h2>
      <p className="text-slate-400 text-xs uppercase tracking-widest mb-8 flex-grow leading-relaxed">
        {description}
      </p>

      {url ? (
        <Button variant="secondary" className="w-full justify-center group/btn" href={url} asExternal>
          <GithubIcon className="w-4 h-4 mr-2" />
          VIEW REPOSITORY
          <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
        </Button>
      ) : (
        <div className="p-3 bg-slate-900 border border-slate-800 flex justify-center items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
          Repository link not configured.
        </div>
      )}
    </div>
  );
}

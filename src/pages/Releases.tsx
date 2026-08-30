import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Tag, Download, Github, CheckCircle2 } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { Button } from '../components/ui/Button';

export function Releases() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="mb-12 border-b border-slate-800 pb-8 flex items-center space-x-4">
          <Tag className="w-10 h-10 text-cyan-500" />
          <div>
            <h1 className="text-4xl font-bold text-slate-100 tracking-tighter uppercase">Releases</h1>
            <p className="text-lg text-slate-400 font-light mt-1">
              Project versions and changelogs.
            </p>
          </div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-slate-800">
          
          {/* Release Item */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-6 h-6 rounded-none border-[6px] border-[#0A0D12] bg-cyan-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-2 md:ml-0">
            </div>
            
            {/* Content card */}
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-8 border border-slate-800 bg-[#0A0D12]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-slate-100">{PROJECT_CONFIG.APK_VERSION}</h3>
                <span className="text-[10px] font-bold tracking-widest text-cyan-500 uppercase px-2 py-1 border border-slate-800 bg-slate-900">Latest Build</span>
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
                Released: <span className="text-slate-300">{PROJECT_CONFIG.APK_RELEASE_DATE}</span>
              </div>
              
              <div className="prose prose-sm prose-invert mb-6 text-slate-300 prose-ul:marker:text-cyan-500">
                <p>Initial public prototype for Smart India Hackathon 2026.</p>
                <ul>
                  <li>Android APK with on-device recording</li>
                  <li>FastAPI backend integration</li>
                  <li>WavLM Base+ fine-tuned detection model</li>
                  <li>Web Demo interface</li>
                  <li>Full documentation portal</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-800">
                <Button size="sm" href="/download" variant="primary" className="w-full sm:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  GET APK
                </Button>
                <Button size="sm" variant="outline" href="/github" className="w-full sm:w-auto">
                  <Github className="w-4 h-4 mr-2" />
                  SOURCE
                </Button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}

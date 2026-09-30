import React from 'react';
import { Layout } from '../components/layout/Layout';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { LockedSourceButton } from '../components/ui/LockedSourceButton';
import { Button } from '../components/ui/Button';
import { PROJECT_CONFIG } from '../config/project';
import { ExternalLink, BookText, Smartphone, Server, Globe } from 'lucide-react';

export function GitHub() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        <div className="mb-10 pb-8 border-b border-[#DCE3EA] flex items-start gap-4">
          <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-[11px] font-bold uppercase tracking-wider mb-2">
              {PROJECT_CONFIG.PUBLIC_NAME}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#13233A] tracking-tight">
              VOICE SHIELD Source &amp; Documentation Repositories
            </h1>
            <p className="text-sm text-[#5E6E82] mt-1 max-w-2xl leading-relaxed">
              Repository overview for {PROJECT_CONFIG.TECHNICAL_NAME}. Core runtime repositories are access-controlled while technical documentation remains openly accessible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Smartphone className="w-5 h-5 text-[#1F3B64]" />
                <h2 className="text-base font-bold text-[#13233A]">VOICE SHIELD Android Client</h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-5">
                Kotlin Android application implementing the Foreground Call Monitor, Audio Window Manager (16 kHz mono PCM), and real-time WebSocket streaming client.
              </p>
            </div>
            <LockedSourceButton label="Android Source Restricted" />
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Server className="w-5 h-5 text-[#1F3B64]" />
                <h2 className="text-base font-bold text-[#13233A]">VOICE SHIELD FastAPI Backend</h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-5">
                Real-time WebSocket window consumer, REST audio evaluation service, Aurigin.AI inference integration, and Basic TCED temporal risk engine.
              </p>
            </div>
            <LockedSourceButton label="Backend API Source Restricted" />
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Globe className="w-5 h-5 text-[#1F3B64]" />
                <h2 className="text-base font-bold text-[#13233A]">VOICE SHIELD Web Platform</h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-5">
                React + TypeScript product platform, interactive audio analysis console, and technical documentation portal.
              </p>
            </div>
            <LockedSourceButton label="Web Platform Source Restricted" />
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <BookText className="w-5 h-5 text-[#159570]" />
                <h2 className="text-base font-bold text-[#13233A]">VOICE SHIELD Technical Documentation</h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-5">
                Public system architecture specifications, audio windowing contract, API schemas, and roadmap documentation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="sm" href="/docs">
                Browse Docs Portal
              </Button>
              <Button variant="outline" size="sm" href={PROJECT_CONFIG.repositories.docs} asExternal>
                <span>GitHub Docs</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}

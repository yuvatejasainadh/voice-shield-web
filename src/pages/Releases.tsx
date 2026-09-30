import React from 'react';
import { Layout } from '../components/layout/Layout';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { Button } from '../components/ui/Button';
import { PROJECT_CONFIG } from '../config/project';
import { getAllApkReleases } from '../utils/releases';
import { Package, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Releases() {
  const releases = getAllApkReleases();

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
              VOICE SHIELD Release Log &amp; Builds
            </h1>
            <p className="text-sm text-[#5E6E82] mt-1 max-w-2xl leading-relaxed">
              Platform release milestones and Android client build artifacts.
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <Package className="w-5 h-5 text-[#1F3B64]" />
              <h2 className="text-lg font-bold text-[#13233A]">
                CURRENT — Real-Time Voice Security Foundation (V1 Baseline)
              </h2>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
              ACTIVE
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
            Includes the Android Audio Window Manager (16 kHz mono PCM, 5000 ms window / 2500 ms stride), FastAPI WebSocket &amp; REST ingestion endpoints, Aurigin.AI voice authenticity integration, and Basic TCED session risk scoring.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="sm" href="/demo">
              Open Web Evaluation Console
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
            <Button variant="outline" size="sm" href="/roadmap">
              View Full Product Roadmap
            </Button>
          </div>
        </div>

        {releases.length > 0 && (
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
            <h3 className="text-base font-bold text-[#13233A] mb-4">Published APK Artifacts</h3>
            <div className="space-y-3">
              {releases.map((rel) => (
                <div
                  key={rel.filename}
                  className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA] flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#159570]" />
                    <span className="font-mono text-xs font-bold text-[#13233A]">
                      {rel.filename} ({rel.version})
                    </span>
                  </div>
                  <Button variant="outline" size="sm" href={rel.url} asExternal>
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}

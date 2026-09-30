import React from 'react';
import { DocLayout } from '../../components/docs/DocLayout';
import { VoiceShieldLogo } from '../../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../../config/project';
import { Cpu, ShieldCheck } from 'lucide-react';

export function MLPipeline() {
  return (
    <DocLayout>
      <div className="space-y-10">
        
        {/* Official Technical Documentation Header */}
        <div className="pb-6 border-b border-[#DCE3EA] flex items-start gap-4">
          <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
          <div>
            <div className="text-xs font-extrabold text-[#1F3B64] uppercase tracking-wider mb-1">
              {PROJECT_CONFIG.PROJECT_TAGLINE}
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#13233A] tracking-tight leading-snug">
              {PROJECT_CONFIG.TECHNICAL_NAME}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-[#5E6E82] mt-1">
              Module Reference: Real-Time AI / ML Inference &amp; Temporal Evidence Pipeline
            </p>
          </div>
        </div>

        {/* Pipeline Stages */}
        <section className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-[#1F3B64]" />
            <h2 className="text-base font-bold text-[#13233A]">
              Probabilistic Voice Impersonation &amp; Risk Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-[#B4E8D7] bg-[#E8F7F2]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-bold text-[#13233A] text-sm">CURRENT — Active Foundation</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-[#159570]">
                  IMPLEMENTED
                </span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Uses {PROJECT_CONFIG.MODEL_NAME} (v{PROJECT_CONFIG.MODEL_VERSION}) for acoustic voice authenticity analysis alongside Basic TCED (Temporal Consistency &amp; Evidence Decision) to aggregate risk across sequential audio windows.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#F0D09B] bg-[#FDF5E6]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-bold text-[#13233A] text-sm">IN DEVELOPMENT — V2 Track</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-[#C78316]">
                  IN DEV
                </span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Expands the pipeline with Language-Aware Call Routing (LACR), multilingual AASIST-L acoustic spoofing verification, Dynamic Spoof Risk (DSR) calibration, and identity verification signals.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#DCE3EA] bg-[#F7F9FC]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-bold text-[#13233A] text-sm">ROADMAP — Multi-Signal Scale</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-[#5E6E82]">
                  ROADMAP
                </span>
              </div>
              <p className="text-xs text-[#5E6E82] leading-relaxed">
                Multi-channel acoustic + behavioral fusion, distributed low-latency inference clusters, and enterprise contact-center risk intelligence hooks.
              </p>
            </div>
          </div>
        </section>

        {/* Responsible AI Disclosure */}
        <section className="bg-[#FEFAF4] border border-[#F0D09B] rounded-2xl p-5 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#C78316] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
            <strong className="text-[#13233A]">Probabilistic Output Boundary:</strong> AI-generated signals are probabilistic indicators and should not be treated as definitive proof of identity, fraud or malicious intent.
          </p>
        </section>

      </div>
    </DocLayout>
  );
}

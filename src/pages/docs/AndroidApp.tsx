import React from 'react';
import { DocLayout } from '../../components/docs/DocLayout';
import { VoiceShieldLogo } from '../../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../../config/project';
import { Smartphone } from 'lucide-react';

export function AndroidApp() {
  const contract = PROJECT_CONFIG.AUDIO_WINDOW_CONTRACT;

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
              Module Reference: Android Real-Time Client &amp; Audio Windowing Contract
            </p>
          </div>
        </div>

        {/* Audio Windowing Contract */}
        <section className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <Smartphone className="w-5 h-5 text-[#1F3B64]" />
            <h2 className="text-base font-bold text-[#13233A]">
              Android Audio Window Manager Contract
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-5">
            In the real-time WebSocket architecture, the Android client owns audio windowing. The backend consumes each transmitted PCM window directly without re-slicing.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono bg-[#F7F9FC] p-4 rounded-xl border border-[#DCE3EA] mb-6">
            <div>
              <span className="text-[#7A8798] block text-[10px]">SAMPLE RATE</span>
              <span className="font-bold text-[#13233A]">{contract.sampleRateHz} Hz Mono</span>
            </div>
            <div>
              <span className="text-[#7A8798] block text-[10px]">ENCODING</span>
              <span className="font-bold text-[#13233A]">{contract.encoding}</span>
            </div>
            <div>
              <span className="text-[#7A8798] block text-[10px]">MAX WINDOW</span>
              <span className="font-bold text-[#13233A]">{contract.maxWindowMs} ms</span>
            </div>
            <div>
              <span className="text-[#7A8798] block text-[10px]">STRIDE / INITIAL STEP</span>
              <span className="font-bold text-[#13233A]">{contract.strideMs} ms</span>
            </div>
            <div>
              <span className="text-[#7A8798] block text-[10px]">OVERLAP</span>
              <span className="font-bold text-[#13233A]">{contract.normalOverlapMs} ms ({contract.normalOverlapPercent}%)</span>
            </div>
            <div>
              <span className="text-[#7A8798] block text-[10px]">MIN PARTIAL FLUSH</span>
              <span className="font-bold text-[#13233A]">&gt;= {contract.minPartialMs} ms</span>
            </div>
          </div>

          <h3 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-2.5">
            Expected Window Sequence Progression
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            {contract.expectedWindows.map((win) => (
              <div key={win.id} className="p-3 rounded-xl bg-[#F1F4F8] border border-[#DCE3EA]">
                <div className="font-bold text-[#1F3B64]">{win.id}</div>
                <div className="text-[#5E6E82] mt-0.5">{win.range}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </DocLayout>
  );
}

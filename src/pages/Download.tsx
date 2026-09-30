import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../config/project';
import { getLatestApk } from '../utils/releases';
import {
  Smartphone,
  Download as DownloadIcon,
  ShieldCheck,
  Activity,
  Cpu,
  ArrowRight,
  Info,
} from 'lucide-react';

export function Download() {
  const latestApk = getLatestApk();
  const contract = PROJECT_CONFIG.AUDIO_WINDOW_CONTRACT;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header */}
        <div className="mb-10 pb-8 border-b border-[#DCE3EA] flex items-start gap-4">
          <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F7F2] border border-[#B4E8D7] text-[#159570] text-[11px] font-bold uppercase tracking-wider mb-2">
              {PROJECT_CONFIG.PUBLIC_NAME}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#13233A] tracking-tight">
              VOICE SHIELD Android Real-Time Client
            </h1>
            <p className="text-sm text-[#5E6E82] mt-1 max-w-2xl leading-relaxed">
              Application-level real-time call monitoring, controlled 16 kHz PCM audio windowing, and encrypted WebSocket streaming for live voice risk assessment.
            </p>
          </div>
        </div>

        {/* Download Card */}
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F1F4F8] text-[#1F3B64] text-xs font-bold mb-3">
                <Smartphone className="w-4 h-4" />
                <span>Android Client Package</span>
              </div>
              <h2 className="text-xl font-bold text-[#13233A] mb-2">
                {latestApk ? `VOICE SHIELD Android (${latestApk.version})` : 'Active Development & Pilot Builds'}
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6E82] max-w-xl leading-relaxed">
                {latestApk
                  ? `Download ${latestApk.filename} to test real-time audio windowing and backend WebSocket risk assessment on supported Android devices.`
                  : 'The VOICE SHIELD Android application is under active development and pilot evaluation. You can request a pilot build or evaluate the live backend immediately through the Web Analysis Console.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              {latestApk ? (
                <Button variant="primary" size="md" href={latestApk.url} asExternal>
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Download APK
                </Button>
              ) : (
                <Button variant="primary" size="md" href="/contact">
                  Request Pilot APK Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
              <Button variant="outline" size="md" href="/demo">
                <Activity className="w-4 h-4 mr-2 text-[#1F3B64]" />
                Try Web Analysis Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Technical Capabilities of the Android Client */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-5 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-sm text-[#13233A] mb-2">
              <Cpu className="w-4 h-4 text-[#1F3B64]" />
              <span>Audio Window Manager</span>
            </div>
            <p className="text-xs text-[#5E6E82] leading-relaxed">
              Normalizes captured audio into {contract.sampleRateHz} Hz mono {contract.encoding} with {contract.maxWindowMs} ms max window, {contract.strideMs} ms stride, and {contract.normalOverlapPercent}% overlap.
            </p>
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-5 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-sm text-[#13233A] mb-2">
              <ShieldCheck className="w-4 h-4 text-[#159570]" />
              <span>Direct WSS/TLS Streaming</span>
            </div>
            <p className="text-xs text-[#5E6E82] leading-relaxed">
              Streams sequenced PCM windows (<code className="font-mono text-[#1F3B64]">W001</code>, <code className="font-mono text-[#1F3B64]">W002</code>...) over encrypted WebSockets for immediate backend inference without double-windowing.
            </p>
          </div>

          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-5 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-sm text-[#13233A] mb-2">
              <Info className="w-4 h-4 text-[#C78316]" />
              <span>Live Decision Support</span>
            </div>
            <p className="text-xs text-[#5E6E82] leading-relaxed">
              Displays incremental session risk scores and verification prompts during the call so users can verify before trusting high-risk requests.
            </p>
          </div>
        </div>

      </div>
    </Layout>
  );
}

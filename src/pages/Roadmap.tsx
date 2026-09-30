import React from 'react';
import { Layout } from '../components/layout/Layout';
import { VersionRoadmap } from '../components/roadmap/VersionRoadmap';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { Button } from '../components/ui/Button';
import { Shield, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';

export function Roadmap() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Page Header */}
        <div className="mb-6 pb-8 border-b border-[#DCE3EA] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-[11px] font-bold uppercase tracking-wider mb-2">
                Product Direction &amp; Incubation Roadmap
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#13233A] tracking-tight">
                VoiceShield Product Roadmap
              </h1>
              <p className="text-sm sm:text-base text-[#5E6E82] mt-2 max-w-2xl leading-relaxed">
                Our staged engineering progression from the active real-time call protection foundation to expanded verification workflows and global organizational scale.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="primary" size="md" href="/contact">
              Inquire About Pilots
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="md" href="/demo">
              Try Active Foundation Demo
            </Button>
          </div>
        </div>

        {/* Three-Stage Product Evolution */}
        <VersionRoadmap />

        {/* Stage Comparison Matrix */}
        <section className="mt-8 bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-[#13233A] mb-2">
            Capability Readiness Matrix
          </h2>
          <p className="text-xs sm:text-sm text-[#5E6E82] mb-6">
            Transparent breakdown of what is implemented today versus what is in active development or planned for future releases.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#DCE3EA] text-[#7A8798] uppercase text-[11px] font-bold">
                  <th className="py-3 pr-4">Capability / System Layer</th>
                  <th className="py-3 px-4">Current Status</th>
                  <th className="py-3 pl-4">Engineering Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE3EA] text-[#13233A]">
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">Android Audio Window Manager (16 kHz pcm_s16le)</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#E8F7F2] text-[#159570] text-[11px] font-bold">
                      <CheckCircle2 className="w-3 h-3" /> NOW (Implemented)
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-xs text-[#5E6E82]">5000 ms max window, 2500 ms stride, 50% overlap (W001–W004+)</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">Real-Time WSS/TLS Direct Window Ingestion</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#E8F7F2] text-[#159570] text-[11px] font-bold">
                      <CheckCircle2 className="w-3 h-3" /> NOW (Implemented)
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-xs text-[#5E6E82]">FastAPI WebSocket path consumes already-windowed Android PCM directly</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">Web Audio Upload &amp; Evaluation Console (/analyze)</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#E8F7F2] text-[#159570] text-[11px] font-bold">
                      <CheckCircle2 className="w-3 h-3" /> NOW (Implemented)
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-xs text-[#5E6E82]">Supports WAV, MP3, FLAC, M4A with voice authenticity &amp; transcript signals</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">Voice Authenticity Detection &amp; Basic TCED</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#E8F7F2] text-[#159570] text-[11px] font-bold">
                      <CheckCircle2 className="w-3 h-3" /> NOW (Implemented)
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-xs text-[#5E6E82]">Aurigin.AI integration with temporal evidence aggregation across windows</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">PostgreSQL-Backed Production Architecture</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FDF5E6] text-[#C78316] text-[11px] font-bold">
                      <Clock className="w-3 h-3" /> IN DEVELOPMENT
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-xs text-[#5E6E82]">Session metadata persistence via VoiceShield API boundary (no raw audio stored)</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">Identity Verification &amp; Cybercrime Intelligence Signals</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FDF5E6] text-[#C78316] text-[11px] font-bold">
                      <Clock className="w-3 h-3" /> IN DEVELOPMENT
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-xs text-[#5E6E82]">Contextual caller verification workflows and expanded scam pattern scoring</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">Multilingual Acoustic Routing (LACR &amp; AASIST-L)</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FDF5E6] text-[#C78316] text-[11px] font-bold">
                      <Clock className="w-3 h-3" /> IN DEVELOPMENT
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-xs text-[#5E6E82]">Language-aware acoustic model routing and calibrated risk thresholds</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold">Enterprise Contact-Center &amp; Telecom Integrations</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F1F4F8] text-[#5E6E82] text-[11px] font-bold">
                      <Calendar className="w-3 h-3" /> FUTURE ROADMAP
                    </span>
                  </td>
                  <td className="py-3.5 pl-4 text-xs text-[#5E6E82]">Organization deployments, multi-channel coverage, and partner APIs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </Layout>
  );
}

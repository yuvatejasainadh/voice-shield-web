import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocLayout } from '../../components/docs/DocLayout';
import { PROJECT_CONFIG } from '../../config/project';
import { Button } from '../../components/ui/Button';
import { LockedSourceButton } from '../../components/ui/LockedSourceButton';

export function Architecture() {
  return (
    <DocLayout>
      <div className="mb-8 pb-6 border-b border-[#DCE3EA]">
        <div className="flex items-center space-x-2 text-xs font-semibold text-[#5E6E82] mb-3">
          <Link to="/docs" className="hover:text-[#1F3B64]">Documentation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1F3B64]">Architecture</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-2">System Architecture</h1>
        <p className="text-sm text-[#5E6E82]">
          VOICE SHIELD — Real-Time AI-Powered Voice Impersonation Detection, Prevention &amp; Risk Assessment Framework architecture specifications across version maturity stages.
        </p>
      </div>

      <div className="space-y-6">
        
        {/* v1.0 Demonstrator Architecture */}
        <div className="bg-white border-2 border-[#1F3B64] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DCE3EA]">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-[#13233A]">v1.0 — Demonstrator Architecture</h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                  CURRENT / AVAILABLE
                </span>
              </div>
              <p className="text-xs text-[#5E6E82] mt-0.5">Application-level real-time cellular-call analysis pipeline</p>
            </div>
          </div>

          <div className="bg-[#F1F4F8] border border-[#DCE3EA] rounded-xl p-5 font-mono text-xs text-[#1F3B64] overflow-x-auto">
            <pre className="whitespace-pre leading-relaxed font-semibold">
{`Cellular Call
  ↓
OEM Call Recording
  ↓
Growing Recording File
  ↓
Android Foreground Service
  ↓
PCM Extraction / Normalization
  ↓
Temporal Analysis Windows
  ↓
WSS / TLS
  ↓
Backend Direct Window Ingestion
  ↓
Aurigin.AI API
  ↓
Basic TCED (Temporal Correlation & Evidence Decay)
  ↓
Risk / Confidence / Recommendation
  ↓
Android UI / History`}
            </pre>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-[#F8FAFC] border border-[#DCE3EA] text-xs text-[#5E6E82] space-y-1.5">
            <div className="font-bold text-[#13233A] uppercase tracking-wider text-[11px]">Demonstrator Baseline Boundaries:</div>
            <p>• Proves application-level real-time ingestion of growing cellular call recordings and temporal window streaming.</p>
            <p>• The v1.0 Demonstrator does NOT claim AASIST-L, LACR, DSR, DST, complete multilingual routing, production-calibrated FAR/FRR/EER, privileged Android telephony audio access, or universal deepfake robustness.</p>
            <p>• Not claimed as production-ready.</p>
          </div>
        </div>

        {/* Roadmap: v2.0 and v3.0 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* v2.0 SIH Prototype */}
          <div className="bg-[#F7F9FC] border border-dashed border-[#B8C5D3] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#DCE3EA]">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FDF5E6] text-[#C78316] border border-[#F0D09B]">
                  UPCOMING
                </span>
                <h3 className="font-bold text-[#13233A] text-sm mt-1">v2.0 — SIH Prototype</h3>
              </div>
            </div>
            <p className="text-xs text-[#5E6E82] mb-3">Planned 3-VM Language-Aware Cascading Routing (LACR) with Voice Shield-owned AASIST-L inference.</p>
            
            <div className="bg-white border border-[#DCE3EA] rounded-xl p-3 font-mono text-[11px] text-[#5E6E82] mb-3">
              <pre className="whitespace-pre leading-relaxed">
{`Android
  ↓ WSS
3-VM LACR
  ↓ Language ID / Group Routing
Voice Shield-owned AASIST-L
  ↓
TCED + DSR
  ↓
Calibrated Risk`}
              </pre>
            </div>
            <div className="text-[11px] text-[#7A8798] italic">
              * In development. Not currently deployed.
            </div>
          </div>

          {/* v3.0 Production */}
          <div className="bg-[#F7F9FC] border border-dashed border-[#B8C5D3] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#DCE3EA]">
              <div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#F1F4F8] text-[#5E6E82] border border-[#DCE3EA]">
                  #FUTURE
                </span>
                <h3 className="font-bold text-[#13233A] text-sm mt-1">v3.0 — Production</h3>
              </div>
            </div>
            <p className="text-xs text-[#5E6E82] mb-3">Planned 7-VM distributed LACR with language-specific routing clusters and active prevention.</p>
            
            <div className="bg-white border border-[#DCE3EA] rounded-xl p-3 font-mono text-[11px] text-[#5E6E82] mb-3">
              <pre className="whitespace-pre leading-relaxed">
{`7-VM LACR
  ↓
Language-Specific AASIST-L
  ↓
TCED + DSR + DST
  ↓
Advanced Risk / Prevention`}
              </pre>
            </div>
            <div className="text-[11px] text-[#7A8798] italic">
              * Long-term production roadmap. Not implemented.
            </div>
          </div>

        </div>

        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Privacy &amp; Data Handling Principles</h2>
          <p className="text-sm text-[#5E6E82] leading-relaxed">
            Raw call audio is not stored in the Voice Shield backend database, object storage, or logs. Temporal window processing is transient and memory-oriented, released immediately post-analysis. Client-to-backend transport is encrypted with WSS/TLS.
          </p>
        </div>

        <div className="flex gap-3 pt-2">
          <LockedSourceButton label="Voice Shield API LOCKED" />
        </div>
      </div>
    </DocLayout>
  );
}


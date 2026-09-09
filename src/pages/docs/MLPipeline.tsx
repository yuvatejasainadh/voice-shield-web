import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocLayout } from '../../components/docs/DocLayout';
import { PROJECT_CONFIG } from '../../config/project';
import { LockedSourceButton } from '../../components/ui/LockedSourceButton';

export function MLPipeline() {
  return (
    <DocLayout>
      <div className="mb-8 pb-6 border-b border-[#DCE3EA]">
        <div className="flex items-center space-x-2 text-xs font-semibold text-[#5E6E82] mb-3">
          <Link to="/docs" className="hover:text-[#1F3B64]">Documentation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1F3B64]">ML Pipeline</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-2">Machine Learning Pipeline</h1>
        <p className="text-sm text-[#5E6E82]">
          Real-Time Acoustic Analysis
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Real-Time Acoustic Analysis</h2>
          <p className="text-sm text-[#5E6E82] leading-relaxed">
            VOICE SHIELD v1.0 uses a real-time application-level voice analysis pipeline designed to evaluate temporal audio evidence from an active cellular call. The current Demonstrator integrates an external voice authenticity detector with a lightweight temporal evidence aggregation layer.
          </p>
        </div>

        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Visual Pipeline</h2>
          <div className="bg-[#F1F4F8] border border-[#DCE3EA] rounded-xl p-5 font-mono text-xs text-[#1F3B64] overflow-x-auto">
            <pre className="whitespace-pre leading-relaxed font-semibold">{`Cellular Call
      ↓
Android / OEM Recording Artifact
      ↓
Audio Normalization
      ↓
Self-Contained Temporal Windows
      ↓
Secure WSS/TLS Streaming
      ↓
Aurigin.AI Detection
      ↓
Basic TCED
      ↓
Call-Level Risk Assessment
      ↓
Voice Shield UI / History`}</pre>
          </div>
        </div>

        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-base font-bold text-[#13233A] mb-2">Real-Time Audio Acquisition</h3>
            <p className="text-sm text-[#5E6E82] leading-relaxed">
              During an active supported cellular call, the Android application monitors the available device/OEM recording artifact and processes the growing recording stream. The acquisition layer prepares audio for analysis without requiring privileged direct access to the telecom audio path.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#13233A] mb-2">Audio Normalization</h3>
            <p className="text-sm text-[#5E6E82] leading-relaxed">
              Audio is normalized into a consistent analysis representation where supported:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-[#5E6E82]">
              <li>PCM audio</li>
              <li>16 kHz sampling rate</li>
              <li>Mono channel layout</li>
              <li>Linear/uncompressed representation</li>
            </ul>
            <p className="text-sm text-[#5E6E82] leading-relaxed mt-2">
              The normalization layer prepares the captured audio for downstream temporal analysis.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#13233A] mb-2">Temporal Windowing</h3>
            <p className="text-sm text-[#5E6E82] leading-relaxed">
              The Android acquisition layer produces self-contained temporal analysis windows from the call audio. Each window carries its own temporal/sequence metadata. The backend consumes these windows directly.
            </p>
            <p className="text-sm text-[#5E6E82] leading-relaxed mt-2 font-semibold">
              Important: The backend does not perform a second round of temporal windowing on already-windowed Android input. This design keeps temporal boundaries authoritative at the acquisition layer and avoids double-windowing.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-bold text-[#13233A] mb-2">Secure Streaming</h3>
            <p className="text-sm text-[#5E6E82] leading-relaxed">
              Temporal windows are transmitted from the Android application to the backend through a secure WebSocket connection using TLS. The realtime pipeline is designed around incremental window-level processing rather than waiting for the complete call recording.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#13233A] mb-2">Voice Authenticity Detection</h3>
            <p className="text-sm text-[#5E6E82] leading-relaxed">
              For the v1.0 Demonstrator, VOICE SHIELD uses Aurigin.AI as the external voice authenticity detection engine. The detector evaluates incoming audio evidence and provides authenticity/deepfake-related analysis for each processed window.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#13233A] mb-2">Temporal Evidence Aggregation</h3>
            <p className="text-sm text-[#5E6E82] leading-relaxed">
              Individual detector outputs are passed into the Basic TCED (Temporal Consistency &amp; Evidence Decision) layer. TCED aggregates evidence across successive temporal windows instead of treating a single detector response as the complete call-level decision. The layer considers the evolving evidence stream and produces a consolidated risk assessment for the active call.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#13233A] mb-2">Risk Assessment</h3>
            <p className="text-sm text-[#5E6E82] leading-relaxed mb-2">
              The Demonstrator produces a consolidated call-level assessment based on accumulated detector evidence.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-[#5E6E82]">
              <li>Authentic / low-risk evidence</li>
              <li>Suspicious or elevated spoof/deepfake evidence</li>
              <li>Consolidated confidence/risk assessment</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Demonstrator Processing</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#5E6E82]">
            <li><strong className="text-[#13233A]">Input:</strong> Normalized temporal audio windows</li>
            <li><strong className="text-[#13233A]">Transport:</strong> Secure WebSocket over TLS</li>
            <li><strong className="text-[#13233A]">Detection Engine:</strong> Aurigin.AI</li>
            <li><strong className="text-[#13233A]">Temporal Reasoning:</strong> Basic TCED</li>
            <li><strong className="text-[#13233A]">Output:</strong> Consolidated call-level risk assessment</li>
            <li><strong className="text-[#13233A]">Retention:</strong> Analysis/decision metadata rather than raw call audio</li>
          </ul>
        </div>
        
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Current vs Future Architecture</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-[#B4E8D7] bg-[#E8F7F2]">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-[#13233A] text-sm">v1.0 — Demonstrator</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#159570] text-white tracking-wider">CURRENT</span>
              </div>
              <p className="text-sm text-[#1F3B64] font-medium mb-1">Current ML analysis: Aurigin.AI → Basic TCED → Risk Assessment</p>
              <p className="text-xs text-[#159570]">The current Demonstrator does not deploy the Voice Shield-owned AASIST-L model.</p>
            </div>

            <div className="p-4 rounded-xl border border-[#F0D09B] bg-[#FDF5E6]">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-[#13233A] text-sm">v2.0 — SIH Prototype</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#C78316] text-white tracking-wider">UPCOMING</span>
              </div>
              <p className="text-sm text-[#C78316] font-medium mb-1">Planned Voice Shield-owned ML stack: AASIST-L → TCED → DSR → 3-VM Language-Aware Cascading Architecture</p>
              <p className="text-xs text-[#A1670C]">This is an upcoming prototype capability and must not be represented as currently deployed in v1.0.</p>
            </div>

            <div className="p-4 rounded-xl border border-[#DCE3EA] bg-[#F1F4F8]">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-[#13233A] text-sm">v3.0 — Production</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#5E6E82] text-white tracking-wider">#FUTURE</span>
              </div>
              <p className="text-sm text-[#5E6E82] font-medium mb-1">Planned advanced architecture includes: AASIST-L + TCED + DSR + DST + 7-VM Language-Aware Cascading Architecture</p>
              <p className="text-xs text-[#7A8798]">This is future architecture and must not be presented as currently implemented.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Privacy Principles</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#5E6E82]">
            <li>Raw call audio is not retained as backend database/object-storage data.</li>
            <li>The pipeline is designed around transient processing of incoming audio evidence.</li>
            <li>Analysis/decision metadata may be retained for call history.</li>
            <li>Raw audio, Base64 audio payloads, secrets, and sensitive request bodies must not be written to application logs.</li>
            <li>Detector credentials remain server-side.</li>
          </ul>
        </div>

        <div className="flex gap-3 pt-2">
          <LockedSourceButton label="Voice Shield API LOCKED" />
        </div>
      </div>
    </DocLayout>
  );
}


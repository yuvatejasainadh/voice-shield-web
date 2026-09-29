import React from 'react';
import { ChevronRight, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocLayout } from '../../components/docs/DocLayout';
import { PROJECT_CONFIG } from '../../config/project';
import { Button } from '../../components/ui/Button';
import { LockedSourceButton } from '../../components/ui/LockedSourceButton';

export function AndroidApp() {
  return (
    <DocLayout>
      <div className="mb-8 pb-6 border-b border-[#DCE3EA]">
        <div className="flex items-center space-x-2 text-xs font-semibold text-[#5E6E82] mb-3">
          <Link to="/docs" className="hover:text-[#1F3B64]">Documentation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1F3B64]">Android Application</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-2">Android Application Architecture</h1>
        <p className="text-sm text-[#5E6E82]">
          Native client recording, visual waveform streaming, and telemetry handling.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Android Realtime Detection Flow</h2>
          <p className="text-sm text-[#5E6E82] leading-relaxed">
            During an active supported cellular call, the Android application monitors the growing OEM recording artifact via a Foreground Service, extracts and normalizes audio through the <strong className="text-[#13233A]">Android Audio Window Manager</strong>, and streams already-windowed PCM frames over a secure WebSocket connection to the VoiceShield Backend.
          </p>
          <div className="bg-[#F1F4F8] border border-[#DCE3EA] rounded-xl p-5 font-mono text-xs text-[#1F3B64] overflow-x-auto">
            <pre className="whitespace-pre leading-relaxed font-semibold">{`Android App
    │
    │ audio capture
    ▼
Android Audio Window Manager
    │
    │ already-windowed PCM
    ▼
WebSocket
    │
    ▼
VoiceShield Backend
    │
    ▼
Current ML / Aurigin
    │
    ▼
Detection Decision Engine
    │
    ▼
Risk / Evidence / Call Session`}</pre>
          </div>
        </div>

        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Current Android Audio Contract</h2>
          <p className="text-sm text-[#5E6E82]">
            The Android Audio Window Manager enforces the authoritative temporal windowing contract before transmitting PCM payloads over WebSocket:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-4 font-mono text-xs text-[#13233A] space-y-1.5">
              <div><span className="text-[#5E6E82]">Sample Rate:</span>        <strong>16000 Hz</strong></div>
              <div><span className="text-[#5E6E82]">Channels:</span>           <strong>1</strong></div>
              <div><span className="text-[#5E6E82]">Encoding:</span>           <strong>pcm_s16le</strong></div>
              <div><span className="text-[#5E6E82]">Sample Format:</span>      <strong>16-bit signed PCM</strong></div>
              <div><span className="text-[#5E6E82]">Sequence Base:</span>      <strong>1</strong></div>
            </div>
            <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-4 font-mono text-xs text-[#13233A] space-y-1.5">
              <div><span className="text-[#5E6E82]">Maximum Window:</span>     <strong>5000 ms</strong></div>
              <div><span className="text-[#5E6E82]">Initial Step:</span>       <strong>2500 ms</strong></div>
              <div><span className="text-[#5E6E82]">Stride:</span>             <strong>2500 ms</strong></div>
              <div><span className="text-[#5E6E82]">Normal Overlap:</span>     <strong>2500 ms / 50%</strong></div>
              <div><span className="text-[#5E6E82]">Minimum Partial:</span>    <strong>500 ms</strong></div>
            </div>
          </div>

          <div className="pt-2">
            <h3 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-2">Expected Temporal Windows</h3>
            <div className="bg-[#F1F4F8] border border-[#DCE3EA] rounded-xl p-4 font-mono text-xs text-[#1F3B64]">
              <pre className="whitespace-pre leading-relaxed font-semibold">{`W001 → 0 – 2500 ms
W002 → 0 – 5000 ms
W003 → 2500 – 7500 ms
W004 → 5000 – 10000 ms`}</pre>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Platform Requirements &amp; Capabilities</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#5E6E82]">
            <li><strong className="text-[#13233A]">OS Level:</strong> Android 8.0 (API level 26) or newer.</li>
            <li><strong className="text-[#13233A]">Architecture:</strong> Jetpack Compose UI with Kotlin Coroutines, Foreground Service call recording monitor, and Android Audio Window Manager.</li>
            <li><strong className="text-[#13233A]">Authoritative Windowing:</strong> Emits already-windowed 16 kHz mono <code className="text-xs bg-[#F1F4F8] text-[#1F3B64] px-1.5 py-0.5 rounded font-mono">pcm_s16le</code> segments directly to the backend without double-windowing.</li>
            <li><strong className="text-[#13233A]">Transport &amp; Telemetry:</strong> Encrypted bidirectional WebSocket streaming over TLS (WSS) with live risk, evidence, and call session updates.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2 items-center">
          <div className="flex items-center space-x-2 text-sm font-semibold text-[#1F3B64] bg-[#F1F4F8] px-4 py-2 rounded-xl border border-[#DCE3EA]">
            <Smartphone className="w-4 h-4" />
            <span>Available on Google Play Soon</span>
          </div>
          <LockedSourceButton label="Android App LOCKED" />
        </div>
      </div>
    </DocLayout>
  );
}


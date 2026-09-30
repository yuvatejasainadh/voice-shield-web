import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../config/project';
import {
  PhoneCall,
  UploadCloud,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Network,
  Layers,
  Activity,
  Lock,
  CheckCircle2,
} from 'lucide-react';

export function HowItWorks() {
  const contract = PROJECT_CONFIG.AUDIO_WINDOW_CONTRACT;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#DCE3EA] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-[11px] font-bold uppercase tracking-wider mb-2">
                Operational Architecture
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#13233A] tracking-tight">
                How VoiceShield Works
              </h1>
              <p className="text-sm sm:text-base text-[#5E6E82] mt-2 max-w-2xl leading-relaxed">
                VoiceShield operates across two distinct, synchronized ingestion paths: real-time windowed call streaming from the Android client and on-demand audio file evaluation from the Web console.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="primary" size="md" href="/demo">
              <Activity className="w-4 h-4 mr-2" />
              Test Audio Analysis
            </Button>
            <Button variant="outline" size="md" href="/technology">
              Deep Technical Specs
            </Button>
          </div>
        </div>

        {/* End-to-End Visual Summary */}
        <section className="mb-14">
          <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-4">
            Six-Stage Real-Time Protection Lifecycle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepDetailCard
              number="01"
              title="Active Call / Audio Input"
              subtitle="On-Device Capture or File Upload"
              description="During a supported Android cellular call, the Foreground Service monitors the growing call recording artifact. For web evaluation, users upload an audio recording (WAV, MP3, FLAC, M4A)."
            />
            <StepDetailCard
              number="02"
              title="Android Audio Window Manager"
              subtitle="Authoritative Client-Side Windowing"
              description="The Android client normalizes audio to 16 kHz mono 16-bit signed PCM (pcm_s16le) and slices self-contained sliding windows (up to 5000 ms with a 2500 ms stride and 50% overlap)."
            />
            <StepDetailCard
              number="03"
              title="Encrypted Real-Time Streaming"
              subtitle="WSS/TLS Direct Window Transport"
              description="Each sequenced PCM window (W001, W002, W003...) is transmitted over a secure WebSocket (WSS/TLS) connection. The backend ingests each window directly without double-windowing."
            />
            <StepDetailCard
              number="04"
              title="Voice Authenticity Analysis"
              subtitle="Acoustic & Synthetic Signal Inspection"
              description="Each audio window is evaluated by the voice authenticity detector (Aurigin.AI in the current foundation) to identify acoustic artifacts indicative of synthetic or cloned speech."
            />
            <StepDetailCard
              number="05"
              title="Risk & Evidence Engine"
              subtitle="Temporal Aggregation (TCED) & Context"
              description="The Detection Decision Engine applies Basic TCED across sequential windows, combining acoustic authenticity scores with conversational fraud signals when transcripts are evaluated."
            />
            <StepDetailCard
              number="06"
              title="Actionable Risk Guidance"
              subtitle="Human-in-the-Loop Decision Support"
              description="VoiceShield surfaces a consolidated session risk level, confidence score, segment timeline, and clear verification guidance so the user can make a safer decision."
            />
          </div>
        </section>

        {/* Dual Architecture Comparison */}
        <section className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Path A: Android Realtime WebSocket Path */}
          <div className="bg-white border-2 border-[#1F3B64] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#DCE3EA]">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-5 h-5 text-[#1F3B64]" />
                  <h3 className="text-lg font-bold text-[#13233A]">
                    Path A: Android Real-Time Call Flow
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                  WSS STREAMING
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-5">
                Designed for live call protection. The Android client owns audio capture and temporal windowing so the backend can evaluate each window immediately upon arrival.
              </p>

              <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-4 font-mono text-xs text-[#13233A] space-y-2 mb-5">
                <div>Android Call Audio Capture</div>
                <div className="text-[#7A8798]">↓</div>
                <div>Android Audio Window Manager ({contract.sampleRateHz} Hz, {contract.encoding})</div>
                <div className="text-[#7A8798]">↓</div>
                <div>Sequenced Windows: W001 (0–2500 ms), W002 (0–5000 ms), W003 (2500–7500 ms)...</div>
                <div className="text-[#7A8798]">↓</div>
                <div>FastAPI WebSocket (Base64 Decode → Direct PCM Window)</div>
                <div className="text-[#7A8798]">↓</div>
                <div>Voice Authenticity Detector ({PROJECT_CONFIG.MODEL_NAME})</div>
                <div className="text-[#7A8798]">↓</div>
                <div>Detection Decision Engine (Basic TCED) → Live Session Risk</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F1F4F8] border border-[#DCE3EA] text-xs text-[#1F3B64] font-medium">
              <strong>Key Architectural Rule:</strong> Android owns realtime windowing. The backend never re-windows already-windowed Android WebSocket payloads.
            </div>
          </div>

          {/* Path B: Web Upload / Evaluation Path */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#DCE3EA]">
                <div className="flex items-center gap-2.5">
                  <UploadCloud className="w-5 h-5 text-[#1F3B64]" />
                  <h3 className="text-lg font-bold text-[#13233A]">
                    Path B: Web Audio Evaluation Flow
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#F1F4F8] text-[#1F3B64] border border-[#DCE3EA]">
                  REST /ANALYZE
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-5">
                Designed for browser-based inspection, pilot demonstrations, and post-call audio evaluation via the VoiceShield Web Application.
              </p>

              <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-4 font-mono text-xs text-[#13233A] space-y-2 mb-5">
                <div>Web Client Audio File Upload (WAV / MP3 / FLAC / M4A)</div>
                <div className="text-[#7A8798]">↓</div>
                <div>HTTP POST /analyze (multipart/form-data, field: "audio")</div>
                <div className="text-[#7A8798]">↓</div>
                <div>Backend Audio Normalization &amp; Segment Processing</div>
                <div className="text-[#7A8798]">↓</div>
                <div>Voice Authenticity Analysis + Transcript Fraud Signal Inspection</div>
                <div className="text-[#7A8798]">↓</div>
                <div>Normalized JSON Response (Risk Score, Confidence, Segments, Evidence)</div>
                <div className="text-[#7A8798]">↓</div>
                <div>Interactive Web Console Visualization</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <Button variant="primary" size="sm" href="/demo" className="w-full justify-center">
                Open Web Evaluation Console
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

        </section>

        {/* Why Temporal Evidence Matters */}
        <section className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <Layers className="w-5 h-5 text-[#1F3B64]" />
            <h2 className="text-lg font-bold text-[#13233A]">
              Why Temporal Windowing &amp; Evidence Aggregation Matter
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
            In real-world phone calls, background noise, codec compression, brief silence, or network jitter can cause single-frame classifiers to fluctuate. VoiceShield addresses this through two coordinated mechanisms:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#5E6E82]">
            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
              <div className="font-bold text-[#13233A] mb-1">1. Overlapping Sliding Windows (50% Overlap)</div>
              <p className="leading-relaxed">
                After the initial 2500 ms window (<code className="font-mono text-[#1F3B64]">W001</code>), subsequent 5000 ms windows advance by a 2500 ms stride (<code className="font-mono text-[#1F3B64]">W002</code>: 0–5000 ms, <code className="font-mono text-[#1F3B64]">W003</code>: 2500–7500 ms), preserving acoustic continuity across word and phrase boundaries.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
              <div className="font-bold text-[#13233A] mb-1">2. Temporal Consistency &amp; Evidence Decision (TCED)</div>
              <p className="leading-relaxed">
                Rather than triggering an alert on a single anomalous window, the backend aggregates window-level probabilities over the active call session to produce a stable, human-interpretable risk trajectory.
              </p>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}

function StepDetailCard({
  number,
  title,
  subtitle,
  description,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#1F3B64] text-white">
            STAGE {number}
          </span>
          <CheckCircle2 className="w-4 h-4 text-[#159570]" />
        </div>
        <h3 className="text-base font-bold text-[#13233A]">{title}</h3>
        <div className="text-xs font-semibold text-[#1F3B64] mb-2">{subtitle}</div>
        <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

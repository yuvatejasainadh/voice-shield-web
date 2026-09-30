import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../config/project';
import {
  PhoneCall,
  UploadCloud,
  ArrowRight,
  Activity,
  CheckCircle2,
  Shield,
} from 'lucide-react';

export function HowItWorks() {
  const contract = PROJECT_CONFIG.AUDIO_WINDOW_CONTRACT;

  const eightSteps = [
    {
      number: '01',
      stage: 'VOICE INTERACTION',
      title: '1. A call becomes active.',
      description: 'A live voice interaction begins on a supported Android device, or an evaluator submits an audio recording via the web console.',
    },
    {
      number: '02',
      stage: 'REAL-TIME AUDIO CAPTURE',
      title: '2. Audio is captured on the Android device.',
      description: 'The Android Foreground Service monitors the active call recording stream at the application level without requiring privileged carrier hardware modifications.',
    },
    {
      number: '03',
      stage: 'AUDIO WINDOWING',
      title: '3. Audio is divided into controlled windows.',
      description: `The Android Audio Window Manager normalizes speech into ${contract.sampleRateHz} Hz mono ${contract.sampleFormat} (${contract.encoding}) and slices controlled sliding windows (${contract.maxWindowMs} ms max window, ${contract.strideMs} ms stride, ${contract.normalOverlapPercent}% overlap).`,
    },
    {
      number: '04',
      stage: 'SECURE STREAMING',
      title: '4. Windows are securely transmitted to the backend.',
      description: 'Each sequenced window (W001, W002, W003...) is transmitted over an encrypted WebSocket (WSS/TLS) connection to the VOICE SHIELD backend.',
    },
    {
      number: '05',
      stage: 'VOICE IMPERSONATION / AUTHENTICITY ANALYSIS',
      title: '5. AI/ML analysis evaluates voice signals.',
      description: `The backend ingests each window directly (without double-windowing) and evaluates probabilistic voice authenticity and impersonation signals via ${PROJECT_CONFIG.MODEL_NAME}.`,
    },
    {
      number: '06',
      stage: 'TEMPORAL EVIDENCE',
      title: '6. Evidence accumulates across the interaction.',
      description: 'Rather than treating a single window as definitive, Temporal Consistency & Evidence Decision (Basic TCED) tracks how acoustic and conversational signals evolve over the call.',
    },
    {
      number: '07',
      stage: 'RISK ASSESSMENT',
      title: '7. Risk is assessed.',
      description: 'Accumulated window probabilities and fraud risk signals are synthesized into a session-level risk assessment and confidence score.',
    },
    {
      number: '08',
      stage: 'PREVENTION / DECISION SUPPORT',
      title: '8. The user receives decision-support guidance.',
      description: 'VOICE SHIELD surfaces clear risk indicators and recommended verification actions to assist the user in making a safer decision in real time.',
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#DCE3EA] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#F1F4F8] border border-[#DCE3EA] text-[#1F3B64] text-[11px] font-bold uppercase tracking-wider mb-2">
                {PROJECT_CONFIG.PUBLIC_NAME}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#13233A] tracking-tight">
                How VOICE SHIELD Works
              </h1>
              <p className="text-sm sm:text-base text-[#5E6E82] mt-2 max-w-2xl leading-relaxed">
                VOICE SHIELD is designed for real-time assistance during voice interactions—capturing controlled audio windows, evaluating probabilistic voice signals, accumulating temporal evidence, and delivering human-centered decision support.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="primary" size="md" href="/demo">
              <Activity className="w-4 h-4 mr-2" />
              Try Live Demo
            </Button>
            <Button variant="outline" size="md" href="/technology">
              View Technical Architecture
            </Button>
          </div>
        </div>

        {/* Central Conceptual Flow Banner */}
        <section className="mb-12 bg-white border-2 border-[#1F3B64] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="text-xs font-bold text-[#1F3B64] uppercase tracking-wider mb-3">
            Central Product Flow
          </div>
          <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-5 font-mono text-xs text-[#13233A] overflow-x-auto">
            <pre className="whitespace-pre leading-relaxed font-semibold">{`VOICE INTERACTION
        ↓
REAL-TIME AUDIO CAPTURE
        ↓
AUDIO WINDOWING
        ↓
SECURE STREAMING
        ↓
VOICE IMPERSONATION / AUTHENTICITY ANALYSIS
        ↓
TEMPORAL EVIDENCE
        ↓
RISK ASSESSMENT
        ↓
PREVENTION / DECISION SUPPORT`}</pre>
          </div>
        </section>

        {/* 8-Step Real-Time Assistance Walkthrough */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#13233A] tracking-tight">
              Eight-Step Real-Time Assistance Flow
            </h2>
            <p className="text-sm text-[#5E6E82] mt-1">
              How VOICE SHIELD processes an active interaction from initial audio capture to user decision support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {eightSteps.map((item) => (
              <div
                key={item.number}
                className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#1F3B64] text-white">
                      STEP {item.number} • {item.stage}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#159570] shrink-0" />
                  </div>
                  <h3 className="text-base font-bold text-[#13233A] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dual Ingestion Paths */}
        <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Path A: Android Realtime WebSocket Path */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#DCE3EA]">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-5 h-5 text-[#1F3B64]" />
                  <h3 className="text-lg font-bold text-[#13233A]">
                    Android Real-Time WebSocket Path
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                  CURRENT
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                Android owns real-time audio windowing. Each window (<code className="font-mono text-[#1F3B64]">W001</code>: 0–2500 ms, <code className="font-mono text-[#1F3B64]">W002</code>: 0–5000 ms, <code className="font-mono text-[#1F3B64]">W003</code>: 2500–7500 ms...) is sent over WSS/TLS and evaluated directly by the backend without double-windowing.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F1F4F8] border border-[#DCE3EA] text-xs text-[#1F3B64] font-medium">
              Supports incremental session risk updates while a voice interaction is still in progress.
            </div>
          </div>

          {/* Path B: Web Upload / Evaluation Path */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#DCE3EA]">
                <div className="flex items-center gap-2.5">
                  <UploadCloud className="w-5 h-5 text-[#1F3B64]" />
                  <h3 className="text-lg font-bold text-[#13233A]">
                    Web Audio Evaluation Path (<code className="font-mono text-sm">POST /analyze</code>)
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]">
                  CURRENT
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed mb-4">
                Allows evaluators to upload audio files (WAV, MP3, FLAC, M4A) from the browser to inspect voice authenticity scores, segment timelines, and conversational risk indicators.
              </p>
            </div>

            <Button variant="primary" size="sm" href="/demo" className="w-full justify-center">
              Evaluate Audio Sample in Live Demo
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

        </section>

        {/* Responsible Assistance Note */}
        <section className="bg-[#F8FAFC] border border-[#DCE3EA] rounded-2xl p-6 flex items-start gap-3.5">
          <Shield className="w-5 h-5 text-[#1F3B64] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
            <strong className="text-[#13233A]">Real-Time Human Decision Support:</strong> VOICE SHIELD is designed to assist users during high-risk calls by surfacing probabilistic risk signals and verification reminders. AI-generated signals are probabilistic indicators and should not be treated as definitive proof of identity, fraud or malicious intent.
          </p>
        </section>

      </div>
    </Layout>
  );
}

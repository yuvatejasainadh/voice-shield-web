import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Copy, Terminal, Check } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { Button } from '../components/ui/Button';
import { DocLayout } from '../components/docs/DocLayout';

export function ApiDocs() {
  const [copied, setCopied] = React.useState(false);
  const baseUrlDisplay = PROJECT_CONFIG.API_BASE_URL || 'https://api.voiceshield.example.com';
  const curlExample = `curl -X POST ${baseUrlDisplay}/analyze \\
  -H "Accept: application/json" \\
  -F "audio=@/path/to/sample.wav"`;

  const copyCode = () => {
    navigator.clipboard.writeText(curlExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DocLayout>
      <div className="mb-8 flex justify-between items-start flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-[#DCE3EA]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#5E6E82] mb-3">
            <Link to="/docs" className="hover:text-[#1F3B64]">Documentation</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1F3B64]">Backend API</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-2">API Reference</h1>
          <p className="text-sm text-[#5E6E82]">VoiceShield Backend contracts for Web audio upload analysis and Android realtime WebSocket detection.</p>
        </div>
        <Button href="/api" variant="outline" size="sm">
          <Terminal className="w-4 h-4 mr-2 text-[#1F3B64]" />
          API Playground
        </Button>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-base font-bold text-[#13233A] mb-3">Backend Interface</h2>
          <div className="bg-white border border-[#DCE3EA] rounded-xl p-4 text-sm text-[#1F3B64] font-semibold">
            Secure backend interface responsible for realtime session orchestration, direct temporal-window ingestion, Aurigin.AI detector integration, and Detection Decision Engine (Basic TCED) risk aggregation.
          </div>
        </section>

        <section>
          <h2 className="text-base font-bold text-[#13233A] mb-3">1. REST Audio Analysis &amp; Health Endpoints</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-[#DCE3EA] rounded-2xl overflow-hidden shadow-xs">
              <div className="bg-[#F1F4F8] border-b border-[#DCE3EA] p-4 flex items-center space-x-3">
                <span className="bg-[#159570] text-white font-bold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider">GET</span>
                <span className="text-[#13233A] text-sm font-mono font-semibold">/health</span>
              </div>
              <div className="p-5 text-sm text-[#5E6E82]">
                Verifies backend availability and service readiness for the Web Live Demo and API clients.
              </div>
            </div>

            <div className="bg-white border border-[#DCE3EA] rounded-2xl overflow-hidden shadow-xs">
              <div className="bg-[#F1F4F8] border-b border-[#DCE3EA] p-4 flex items-center space-x-3">
                <span className="bg-[#1F3B64] text-white font-bold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider">POST</span>
                <span className="text-[#13233A] text-sm font-mono font-semibold">/analyze</span>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-sm text-[#5E6E82]">Analyzes an uploaded audio file and returns a structured voice authenticity, transcription, diarization, and risk assessment payload.</p>
                
                <div>
                  <h4 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-2">Request Specification</h4>
                  <p className="text-xs text-[#5E6E82] mb-3 font-mono">Content-Type: <code className="text-[#1F3B64] bg-[#F1F4F8] px-2 py-0.5 rounded font-mono">multipart/form-data</code></p>
                  <div className="border border-[#DCE3EA] rounded-xl overflow-hidden">
                    <table className="w-full text-xs text-left">
                      <thead className="text-[#5E6E82] font-semibold bg-[#F1F4F8] border-b border-[#DCE3EA]">
                        <tr>
                          <th className="px-4 py-2.5">Parameter</th>
                          <th className="px-4 py-2.5">Type</th>
                          <th className="px-4 py-2.5">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#DCE3EA]">
                        <tr>
                          <td className="px-4 py-3 font-mono font-bold text-[#13233A]">audio</td>
                          <td className="px-4 py-3 text-[#1F3B64] font-mono">Binary File</td>
                          <td className="px-4 py-3 text-[#5E6E82]">The audio file to analyze (WAV, MP3, M4A, FLAC, OGG, AAC). Max 15MB.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-2">Example cURL Request</h4>
                  <div className="relative group">
                    <pre className="bg-[#F1F4F8] border border-[#DCE3EA] rounded-xl p-4 font-mono text-xs text-[#13233A] overflow-x-auto">
                      {curlExample}
                    </pre>
                    <button 
                      onClick={copyCode}
                      className="absolute top-2.5 right-2.5 px-2.5 py-1 bg-white hover:bg-[#EAEFF6] text-[#1F3B64] text-xs font-medium transition-colors border border-[#DCE3EA] rounded-lg shadow-2xs flex items-center gap-1.5 cursor-pointer"
                    >
                      {copied ? <><Check className="w-3.5 h-3.5 text-[#159570]" /><span className="text-[#159570] font-bold">Copied</span></> : <><Copy className="w-3.5 h-3.5" /><span>Copy</span></>}
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-2">Sample JSON Response</h4>
                  <pre className="bg-[#13233A] border border-[#1F3B64] rounded-xl p-4 font-mono text-xs text-[#52B788] overflow-x-auto">
{`{
  "success": true,
  "transcription": {
    "text": "sample audio transcription...",
    "language": "Telugu",
    "language_probability": 1,
    "duration_seconds": 15.037,
    "provider": "sarvam",
    "model": "saaras:v4",
    "mode": "codemix"
  },
  "transcription_metadata": {
    "provider": "sarvam",
    "model": "saaras:v4",
    "language_detected": "te-IN",
    "quality_status": "good"
  },
  "provider_status": {
    "transcription_provider": "sarvam",
    "transcription_status": "success",
    "voice_analysis_provider": "aurigin",
    "voice_analysis_status": "success"
  },
  "speakers": [
    { "speaker_id": "speaker_0", "label": "Speaker 1" }
  ],
  "speaker_transcript": [
    {
      "speaker_id": "speaker_0",
      "speaker_label": "Speaker 1",
      "start": 0.71,
      "end": 15.13,
      "text": "sample dialogue..."
    }
  ],
  "voice_analysis": {
    "status": "success",
    "classification": "LIKELY_GENUINE",
    "risk_score": 10,
    "risk_level": "LOW",
    "confidence": null,
    "ai_probability": 0.1,
    "duration_seconds": 15.037,
    "reasons": [
      "No significant deepfake or synthetic voice manipulation detected."
    ],
    "detector": "aurigin",
    "processing_time_ms": 6451
  },
  "processing": {
    "transcription_ms": 1289,
    "voice_analysis_ms": 6451,
    "diarization_ms": 0,
    "total_ms": 7740
  }
}`}
                  </pre>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base font-bold text-[#13233A] mb-3">2. Android Realtime WebSocket Stream Contract</h2>
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 space-y-4 shadow-xs">
            <p className="text-sm text-[#5E6E82] leading-relaxed">
              The Android client streams already-windowed PCM frames over WebSocket directly from the <strong className="text-[#13233A]">Android Audio Window Manager</strong> to the VoiceShield Backend. The backend routes each window through <strong className="text-[#13233A]">Current ML / Aurigin</strong> and the <strong className="text-[#13233A]">Detection Decision Engine</strong> (Basic TCED) to emit live Risk, Evidence, and Call Session state.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
              <div className="bg-[#F7F9FC] border border-[#DCE3EA] rounded-xl p-4 text-[#13233A] space-y-1">
                <div className="text-[11px] font-bold text-[#7A8798] uppercase mb-1">PCM Window Specification</div>
                <div>Sample Rate:     16000 Hz</div>
                <div>Channels:        1</div>
                <div>Encoding:        pcm_s16le (16-bit signed PCM)</div>
                <div>Maximum Window:  5000 ms</div>
                <div>Initial Step:    2500 ms</div>
                <div>Stride:          2500 ms</div>
                <div>Normal Overlap:  2500 ms / 50%</div>
                <div>Minimum Partial: 500 ms</div>
                <div>Sequence Base:   1</div>
              </div>
              <div className="bg-[#F1F4F8] border border-[#DCE3EA] rounded-xl p-4 text-[#1F3B64] space-y-1">
                <div className="text-[11px] font-bold text-[#7A8798] uppercase mb-1">Window Sequence Progression</div>
                <div>W001 → 0 – 2500 ms</div>
                <div>W002 → 0 – 5000 ms</div>
                <div>W003 → 2500 – 7500 ms</div>
                <div>W004 → 5000 – 10000 ms</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}


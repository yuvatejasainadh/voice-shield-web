import React, { useState, useEffect, useRef } from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';
import { PROJECT_CONFIG } from '../config/project';
import {
  analyzeAudio,
  checkBackendHealth,
  NormalizedAnalysisResult,
} from '../services/api';
import { formatTimeSeconds } from '../utils/analysisResponse';
import {
  UploadCloud,
  FileAudio,
  Activity,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Code2,
  RefreshCw,
  Info,
  Layers,
} from 'lucide-react';

export function Demo() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<NormalizedAnalysisResult | null>(null);
  const [backendOnline, setBackendOnline] = useState<boolean | null>(null);
  const [showRawJson, setShowRawJson] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let mounted = true;
    checkBackendHealth().then((ok) => {
      if (mounted) setBackendOnline(ok);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    setIsAnalyzing(true);
    setError(null);
    try {
      const res = await analyzeAudio(selectedFile);
      setResult(res);
    } catch (err: any) {
      setError(err?.message || 'Unable to complete audio analysis request.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setResult(null);
    setError(null);
    setShowRawJson(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const riskBadgeStyles: Record<NormalizedAnalysisResult['riskLevel'], string> = {
    CRITICAL: 'bg-[#FDECEE] text-[#C93B4B] border-[#F6B8C0]',
    HIGH: 'bg-[#FDF5E6] text-[#C78316] border-[#F0D09B]',
    MEDIUM: 'bg-[#FDF5E6] text-[#C78316] border-[#F0D09B]',
    LOW: 'bg-[#E8F7F2] text-[#159570] border-[#B4E8D7]',
    UNKNOWN: 'bg-[#F1F4F8] text-[#5E6E82] border-[#DCE3EA]',
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Page Header */}
        <div className="mb-10 pb-8 border-b border-[#DCE3EA] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <VoiceShieldLogo className="h-12 w-12 shrink-0 mt-1" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#E8F7F2] border border-[#B4E8D7] text-[#159570] text-[11px] font-bold uppercase tracking-wider mb-2">
                {PROJECT_CONFIG.PUBLIC_NAME}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#13233A] tracking-tight">
                VOICE SHIELD Audio Evaluation Console
              </h1>
              <p className="text-sm text-[#5E6E82] mt-1 max-w-2xl leading-relaxed">
                Upload a voice recording to evaluate probabilistic voice impersonation / synthetic speech signals, segment-level evidence, and conversational fraud risk indicators via <code className="font-mono text-[#1F3B64]">POST /analyze</code>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3 py-1.5 rounded-xl bg-white border border-[#DCE3EA] text-xs font-semibold flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  backendOnline === true
                    ? 'bg-[#159570]'
                    : backendOnline === false
                    ? 'bg-[#C78316]'
                    : 'bg-[#94A3B8]'
                }`}
              />
              <span className="text-[#13233A]">
                API Status:{' '}
                {backendOnline === true
                  ? 'Connected'
                  : backendOnline === false
                  ? 'Standby / Unconfigured'
                  : 'Checking...'}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Audio Upload Control */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 shadow-xs">
              <h2 className="text-base font-bold text-[#13233A] mb-1">
                1. Select Audio Recording
              </h2>
              <p className="text-xs text-[#5E6E82] mb-4">
                Supported formats: WAV, MP3, FLAC, M4A. Raw uploaded audio is analyzed ephemerally in memory and never retained.
              </p>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-[#B8C5D3] hover:border-[#1F3B64] rounded-xl p-6 cursor-pointer bg-[#F7F9FC] transition-colors text-center">
                <UploadCloud className="w-8 h-8 text-[#1F3B64] mb-2" />
                <span className="text-xs sm:text-sm font-bold text-[#13233A]">
                  {selectedFile ? selectedFile.name : 'Click to select an audio file'}
                </span>
                <span className="text-[11px] text-[#7A8798] mt-1">
                  {selectedFile
                    ? `${(selectedFile.size / 1024).toFixed(1)} KB`
                    : 'WAV, MP3, FLAC, or M4A'}
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".wav,.mp3,.flac,.m4a,audio/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleAnalyze}
                  disabled={!selectedFile || isAnalyzing}
                  className="flex-1 justify-center"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing Audio...
                    </>
                  ) : (
                    <>
                      <Activity className="w-4 h-4 mr-2" />
                      Analyze Voice Signals
                    </>
                  )}
                </Button>

                {(selectedFile || result || error) && (
                  <Button variant="outline" size="md" onClick={handleReset}>
                    Reset
                  </Button>
                )}
              </div>

              {error && (
                <div className="mt-4 p-4 rounded-xl bg-[#FDF5E6] border border-[#F0D09B] text-xs text-[#13233A] flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-[#C78316] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold mb-0.5">Analysis Notice</div>
                    <p className="text-[#5E6E82] leading-relaxed">{error}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Architecture Context Note */}
            <div className="bg-[#F8FAFC] border border-[#DCE3EA] rounded-2xl p-5 text-xs text-[#5E6E82] space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#13233A]">
                <Info className="w-4 h-4 text-[#1F3B64]" />
                <span>Dual Ingestion Context</span>
              </div>
              <p className="leading-relaxed">
                This web console exercises the REST file evaluation path (<code className="font-mono text-[#1F3B64]">POST /analyze</code>). During live calls on Android, the Android Audio Window Manager slices 16 kHz mono PCM windows and streams them over <code className="font-mono text-[#1F3B64]">WSS/TLS</code> for real-time assessment.
              </p>
            </div>
          </div>

          {/* Right Column: Evaluation Results */}
          <div className="lg:col-span-7">
            {result ? (
              <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                
                {/* Top Summary Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#DCE3EA]">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#7A8798] uppercase">
                      SESSION ID: {result.analysisId}
                    </div>
                    <h2 className="text-xl font-extrabold text-[#13233A] mt-0.5">
                      {result.displayClassification}
                    </h2>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold border self-start sm:self-auto ${
                      riskBadgeStyles[result.riskLevel]
                    }`}
                  >
                    RISK LEVEL: {result.riskLevel}
                  </span>
                </div>

                {/* Primary Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                    <div className="text-[10px] font-bold text-[#7A8798] uppercase">Risk Score</div>
                    <div className="text-lg font-extrabold text-[#13233A] mt-1">
                      {result.riskScorePercent !== null ? `${result.riskScorePercent}%` : '—'}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                    <div className="text-[10px] font-bold text-[#7A8798] uppercase">AI / Spoof Prob.</div>
                    <div className="text-lg font-extrabold text-[#13233A] mt-1">
                      {result.aiProbabilityPercent !== null ? `${result.aiProbabilityPercent}%` : '—'}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                    <div className="text-[10px] font-bold text-[#7A8798] uppercase">Confidence</div>
                    <div className="text-lg font-extrabold text-[#13233A] mt-1">
                      {result.confidencePercent !== null ? `${result.confidencePercent}%` : '—'}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                    <div className="text-[10px] font-bold text-[#7A8798] uppercase">Detector</div>
                    <div className="text-sm font-extrabold text-[#1F3B64] mt-1.5">
                      {result.detectorName}
                    </div>
                  </div>
                </div>

                {/* Decision Support Recommendation */}
                <div className="p-4 rounded-xl bg-[#F1F4F8] border border-[#DCE3EA]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#13233A] mb-1">
                    <Shield className="w-4 h-4 text-[#1F3B64]" />
                    <span>Prevention &amp; Decision-Support Guidance</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E6E82] leading-relaxed">
                    {result.recommendation}
                  </p>
                </div>

                {/* Temporal Segment Breakdown */}
                {result.segments.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#13233A] uppercase tracking-wider mb-3">
                      <Layers className="w-4 h-4 text-[#1F3B64]" />
                      <span>Temporal Evidence Segments ({result.segments.length})</span>
                    </div>
                    <div className="space-y-2">
                      {result.segments.map((seg) => (
                        <div
                          key={seg.segmentId}
                          className="p-3 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA] flex flex-wrap items-center justify-between gap-2 text-xs"
                        >
                          <div className="font-mono font-bold text-[#13233A]">
                            Segment #{seg.segmentId}{' '}
                            <span className="text-[#7A8798] font-normal">
                              ({formatTimeSeconds(seg.startSeconds)} – {formatTimeSeconds(seg.endSeconds)})
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-[#1F3B64]">{seg.classification}</span>
                            {seg.aiProbabilityPercent !== null && (
                              <span className="font-mono text-[#5E6E82]">
                                Spoof Prob: {seg.aiProbabilityPercent}%
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Raw Response Inspector */}
                <div className="pt-4 border-t border-[#DCE3EA]">
                  <button
                    type="button"
                    onClick={() => setShowRawJson(!showRawJson)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F3B64] hover:underline"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>{showRawJson ? 'Hide Raw API Payload' : 'Inspect Raw API Payload'}</span>
                  </button>
                  {showRawJson && (
                    <pre className="mt-3 p-4 rounded-xl bg-[#13233A] text-[#E2E8F0] font-mono text-[11px] overflow-x-auto">
                      {JSON.stringify(result.rawResponse, null, 2)}
                    </pre>
                  )}
                </div>

              </div>
            ) : (
              <div className="bg-white border border-[#DCE3EA] rounded-2xl p-8 text-center shadow-xs">
                <FileAudio className="w-10 h-10 text-[#94A3B8] mx-auto mb-3" />
                <h2 className="text-base font-bold text-[#13233A] mb-1">
                  Ready for Voice Signal Evaluation
                </h2>
                <p className="text-xs sm:text-sm text-[#5E6E82] max-w-md mx-auto leading-relaxed mb-6">
                  Select an audio recording on the left to inspect probabilistic voice impersonation indicators, temporal evidence segments, and decision-support guidance.
                </p>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA] text-[11px] text-[#5E6E82]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#159570]" />
                  <span>AI-generated signals are probabilistic indicators for human decision support.</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </Layout>
  );
}

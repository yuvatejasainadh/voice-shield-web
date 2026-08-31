import React, { useState, useRef, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { 
  UploadCloud, 
  FileAudio, 
  Play, 
  Pause, 
  AlertTriangle, 
  ShieldCheck, 
  ShieldAlert, 
  Info, 
  XCircle, 
  Activity, 
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  MessageSquare,
  Users,
  Terminal,
  Copy,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { analyzeAudio, NormalizedAnalysisResult, checkBackendHealth } from '../services/api';
import { formatTimeSeconds } from '../utils/analysisResponse';
import { PROJECT_CONFIG } from '../config/project';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function Demo() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<NormalizedAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [backendOnline, setBackendOnline] = useState<boolean | null>(null);
  const [showRawJson, setShowRawJson] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkBackendHealth().then(setBackendOnline);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
      setError(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if (droppedFile.type.startsWith('audio/') || droppedFile.name.match(/\.(wav|mp3|flac|m4a|aac|ogg)$/i)) {
        setFile(droppedFile);
        setResult(null);
        setError(null);
      } else {
        setError('Please upload a valid audio file (WAV, MP3, FLAC, M4A).');
      }
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsAnalyzing(true);
    setError(null);
    setResult(null);
    
    try {
      const response = await analyzeAudio(file);
      setResult(response);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred during audio analysis.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setError(null);
    setShowRawJson(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCopyJson = () => {
    if (!result) return;
    navigator.clipboard.writeText(JSON.stringify(result.rawResponse, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        
        {/* Header section */}
        <div className="mb-8 pb-6 border-b border-[#DCE3EA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <VoiceShieldLogo className="h-10 w-10" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">Voice Detection Live Demo</h1>
              <p className="text-sm text-[#5E6E82]">Real-time acoustic analysis and deepfake voice detection pipeline</p>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-[#DCE3EA] shadow-xs self-start sm:self-auto">
            <span className="text-[#5E6E82]">API:</span>
            {backendOnline === null ? (
              <span className="text-[#7A8798] animate-pulse">Checking...</span>
            ) : backendOnline ? (
              <span className="text-[#159570] flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#159570]"></span> Ready
              </span>
            ) : (
              <span className="text-[#C63C43] flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#C63C43]"></span> Offline
              </span>
            )}
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-8 p-4 rounded-xl bg-[#FDEBED] border border-[#F8BFC3] flex items-start space-x-3 text-[#C63C43]">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-[#C63C43]">Analysis Failed</h3>
              <p className="text-sm mt-0.5 text-[#8A2127]">{error}</p>
            </div>
          </div>
        )}

        {/* Upload State */}
        {!file && (
          <div 
            className={`border-2 border-dashed rounded-2xl p-10 sm:p-14 text-center transition-all cursor-pointer bg-white ${
              isDragging ? 'border-[#1F3B64] bg-[#F1F4F8]' : 'border-[#DCE3EA] hover:border-[#1F3B64]/60 hover:bg-[#F7F9FC]'
            }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-16 h-16 rounded-full bg-[#F1F4F8] flex items-center justify-center mx-auto mb-4 text-[#1F3B64]">
              <UploadCloud className="w-8 h-8" />
            </div>
            <p className="text-base font-bold text-[#13233A] mb-1">SELECT OR DROP AUDIO FILE</p>
            <p className="text-xs text-[#5E6E82] mb-6">Supports WAV, MP3, FLAC, M4A up to 15MB</p>
            <Button variant="primary" size="md" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>
              Choose Audio File
            </Button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="audio/*,.wav,.mp3,.flac,.m4a,.ogg,.aac"
              onChange={handleFileChange}
            />
          </div>
        )}

        {/* Audio File Loaded & Ready for Analysis */}
        {file && !result && (
          <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DCE3EA]">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 bg-[#F1F4F8] text-[#1F3B64] rounded-xl">
                  <FileAudio className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#13233A] truncate max-w-[200px] sm:max-w-md">{file.name}</h3>
                  <p className="text-xs text-[#5E6E82]">{(file.size / 1024 / 1024).toFixed(2)} MB • Audio Ready</p>
                </div>
              </div>
              <button 
                onClick={reset} 
                className="text-[#7A8798] hover:text-[#C63C43] transition-colors p-1.5 rounded-lg hover:bg-[#FDEBED] cursor-pointer"
                title="Remove file"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <AudioPlayer file={file} />

            <div className="mt-8 flex justify-end">
              <Button 
                variant="primary"
                size="lg"
                onClick={handleAnalyze} 
                disabled={isAnalyzing || backendOnline === false}
                className="w-full sm:w-auto px-8"
              >
                {isAnalyzing ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing Audio...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    START ANALYSIS
                  </span>
                )}
              </Button>
            </div>
            
            {backendOnline === false && (
              <p className="mt-4 text-xs font-semibold text-[#C63C43] text-center">
                Backend API is currently unavailable.
              </p>
            )}
          </div>
        )}

        {/* Results Screen */}
        {result && (
          <div className="space-y-6">
            <div className="bg-white border border-[#DCE3EA] rounded-2xl shadow-xs overflow-hidden">
              
              {/* Header */}
              <div className="border-b border-[#DCE3EA] bg-[#F1F4F8] px-6 py-4 flex flex-wrap justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#1F3B64]" />
                  <h2 className="font-bold text-[#13233A] text-sm uppercase tracking-wider">Voice Authenticity Result</h2>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#5E6E82]">
                  {result.analysisId && (
                    <span className="font-mono text-[11px] bg-white border border-[#DCE3EA] px-2 py-0.5 rounded text-[#7A8798]">
                      ID: {result.analysisId.slice(0, 8)}...
                    </span>
                  )}
                  <span className="font-medium text-[#1F3B64]">Engine: {result.detectorDisplay}</span>
                </div>
              </div>
              
              {/* Main Risk Status Banner */}
              <div className={`p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#DCE3EA] ${
                result.riskLevel === 'HIGH' || result.isSynthetic ? 'bg-[#FDEBED]/40' :
                result.riskLevel === 'MEDIUM' ? 'bg-[#FDF5E6]/40' : 
                result.isGenuine ? 'bg-[#E8F7F2]/40' : 'bg-[#F1F4F8]/40'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 rounded-2xl ${
                    result.riskLevel === 'HIGH' || result.isSynthetic ? 'bg-[#FDEBED] text-[#C63C43] border border-[#F8BFC3]' :
                    result.riskLevel === 'MEDIUM' ? 'bg-[#FDF5E6] text-[#C78316] border border-[#F7E1B5]' :
                    result.isGenuine ? 'bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]' :
                    'bg-[#F1F4F8] text-[#5E6E82] border border-[#DCE3EA]'
                  }`}>
                    {result.riskLevel === 'HIGH' || result.isSynthetic ? (
                      <ShieldAlert className="w-8 h-8" />
                    ) : result.riskLevel === 'MEDIUM' ? (
                      <AlertTriangle className="w-8 h-8" />
                    ) : (
                      <ShieldCheck className="w-8 h-8" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#5E6E82]">Classification</div>
                    <div className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                      result.riskLevel === 'HIGH' || result.isSynthetic ? 'text-[#C63C43]' : 
                      result.riskLevel === 'MEDIUM' ? 'text-[#C78316]' : 
                      result.isGenuine ? 'text-[#159570]' : 'text-[#13233A]'
                    }`}>
                      {result.classificationLabel.toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-xl text-sm font-bold border uppercase tracking-wider ${
                    result.riskLevel === 'HIGH' || result.isSynthetic ? 'bg-[#FDEBED] text-[#C63C43] border-[#F8BFC3]' :
                    result.riskLevel === 'MEDIUM' ? 'bg-[#FDF5E6] text-[#C78316] border-[#F7E1B5]' :
                    result.isGenuine ? 'bg-[#E8F7F2] text-[#159570] border-[#B4E8D7]' :
                    'bg-[#F1F4F8] text-[#5E6E82] border-[#DCE3EA]'
                  }`}>
                    {result.riskLevel} RISK
                  </div>
                </div>
              </div>

              {/* Reasons / Detection Findings */}
              {result.reasons.length > 0 && (
                <div className="px-6 py-4 bg-[#FAFBFD] border-b border-[#DCE3EA] flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    result.isGenuine ? 'text-[#159570]' : result.isSynthetic ? 'text-[#C63C43]' : 'text-[#1F3B64]'
                  }`} />
                  <div>
                    <div className="text-xs font-bold text-[#13233A] uppercase tracking-wider mb-0.5">Detection Finding</div>
                    <ul className="text-sm text-[#5E6E82] space-y-1">
                      {result.reasons.map((reason, idx) => (
                        <li key={idx} className="font-medium text-[#1F3B64]">{reason}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Metrics Grid */}
              <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 bg-white">
                <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                  <p className="text-[11px] font-semibold text-[#5E6E82] mb-1">Risk Score</p>
                  <p className={`text-lg sm:text-xl font-bold ${
                    result.riskLevel === 'HIGH' ? 'text-[#C63C43]' :
                    result.riskLevel === 'MEDIUM' ? 'text-[#C78316]' : 'text-[#159570]'
                  }`}>
                    {result.riskScoreDisplay}
                  </p>
                  <span className="text-[10px] text-[#7A8798] uppercase font-semibold">{result.riskLevel} Level</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                  <p className="text-[11px] font-semibold text-[#5E6E82] mb-1">AI Probability</p>
                  <p className="text-lg sm:text-xl font-bold text-[#13233A]">
                    {result.aiProbabilityDisplay}
                  </p>
                  <span className="text-[10px] text-[#7A8798]">Synthetic Signal</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                  <p className="text-[11px] font-semibold text-[#5E6E82] mb-1">Confidence Score</p>
                  <p className="text-lg sm:text-xl font-bold text-[#13233A]">
                    {result.confidenceDisplay}
                  </p>
                  <span className="text-[10px] text-[#7A8798]">Model Metric</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                  <p className="text-[11px] font-semibold text-[#5E6E82] mb-1">Audio Duration</p>
                  <p className="text-lg sm:text-xl font-bold text-[#13233A]">
                    {result.durationDisplay}
                  </p>
                  <span className="text-[10px] text-[#7A8798]">Sample Length</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                  <p className="text-[11px] font-semibold text-[#5E6E82] mb-1">Inference Time</p>
                  <p className="text-lg sm:text-xl font-bold text-[#13233A]">
                    {result.inferenceTimeDisplay}
                  </p>
                  <span className="text-[10px] text-[#7A8798]">Detector Latency</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DCE3EA]">
                  <p className="text-[11px] font-semibold text-[#5E6E82] mb-1">Model Engine</p>
                  <p className="text-base sm:text-lg font-bold text-[#1F3B64] truncate" title={result.detectorDisplay}>
                    {result.detectorDisplay}
                  </p>
                  <span className="text-[10px] text-[#7A8798]">Acoustic Core</span>
                </div>
              </div>

              {/* Transcription & Diarization Section (if available) */}
              {result.transcription && (
                <div className="border-t border-[#DCE3EA] bg-[#FAFBFD] p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#1F3B64]" />
                      <h3 className="text-xs font-bold text-[#13233A] uppercase tracking-wider">
                        Speech Recognition & Transcription
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {result.transcription.language && (
                        <span className="px-2.5 py-1 rounded-full bg-[#EAEFF6] text-[#1F3B64] font-semibold">
                          Language: {result.transcription.language} 
                          {result.transcriptionMetadata?.languageDetected ? ` (${result.transcriptionMetadata.languageDetected})` : ''}
                        </span>
                      )}
                      {result.transcription.model && (
                        <span className="px-2.5 py-1 rounded-full bg-white border border-[#DCE3EA] text-[#5E6E82]">
                          Model: {result.transcription.model}
                        </span>
                      )}
                      {result.transcriptionMetadata?.qualityStatus && (
                        <span className={`px-2.5 py-1 rounded-full font-semibold ${
                          result.transcriptionMetadata.qualityStatus.toLowerCase() === 'good'
                            ? 'bg-[#E8F7F2] text-[#159570]'
                            : 'bg-[#FDF5E6] text-[#C78316]'
                        }`}>
                          Quality: {result.transcriptionMetadata.qualityStatus}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Transcribed text */}
                  <div className="bg-white p-4 rounded-xl border border-[#DCE3EA] text-sm text-[#13233A] leading-relaxed">
                    <p className="italic">"{result.transcription.text}"</p>
                  </div>

                  {/* Speaker Diarization breakdown if present */}
                  {result.speakerTranscript.length > 0 && (
                    <div className="pt-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-3.5 h-3.5 text-[#5E6E82]" />
                        <h4 className="text-xs font-bold text-[#5E6E82] uppercase tracking-wider">Speaker Segments</h4>
                      </div>
                      <div className="space-y-2">
                        {result.speakerTranscript.map((segment, index) => (
                          <div key={index} className="bg-white p-3 rounded-lg border border-[#DCE3EA] text-xs flex flex-col sm:flex-row sm:items-start gap-2 justify-between">
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="font-bold text-[#1F3B64] px-2 py-0.5 bg-[#F1F4F8] rounded">
                                {segment.speakerLabel}
                              </span>
                              <span className="text-[#7A8798] font-mono">
                                {segment.start.toFixed(2)}s – {segment.end.toFixed(2)}s
                              </span>
                            </div>
                            <p className="text-[#13233A] flex-1 sm:text-right font-medium">
                              "{segment.text}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Processing Telemetry Breakdown */}
              <div className="border-t border-[#DCE3EA] bg-[#F7F9FC] p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1F3B64]" />
                    <h3 className="text-xs font-bold text-[#5E6E82] uppercase tracking-wider">Pipeline Processing Telemetry</h3>
                  </div>
                  <button
                    onClick={() => setShowRawJson(!showRawJson)}
                    className="text-xs font-semibold text-[#1F3B64] hover:text-[#13233A] flex items-center gap-1 cursor-pointer"
                  >
                    {showRawJson ? (
                      <><ChevronUp className="w-3.5 h-3.5" /> Hide Raw JSON</>
                    ) : (
                      <><ChevronDown className="w-3.5 h-3.5" /> View Raw API Payload</>
                    )}
                  </button>
                </div>

                {/* Telemetry Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                  <div className="bg-white p-3 rounded-lg border border-[#DCE3EA]">
                    <div className="text-[11px] text-[#7A8798]">Voice Analysis</div>
                    <div className="text-sm font-bold text-[#13233A]">
                      {formatTimeSeconds(result.processing?.voiceAnalysisMs || result.inferenceTimeMs)}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#DCE3EA]">
                    <div className="text-[11px] text-[#7A8798]">Transcription</div>
                    <div className="text-sm font-bold text-[#13233A]">
                      {formatTimeSeconds(result.processing?.transcriptionMs)}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#DCE3EA]">
                    <div className="text-[11px] text-[#7A8798]">Diarization</div>
                    <div className="text-sm font-bold text-[#13233A]">
                      {formatTimeSeconds(result.processing?.diarizationMs)}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#DCE3EA]">
                    <div className="text-[11px] text-[#7A8798]">Total Latency</div>
                    <div className="text-sm font-bold text-[#1F3B64]">
                      {formatTimeSeconds(result.processing?.totalMs || result.totalProcessingTimeMs)}
                    </div>
                  </div>
                </div>

                {/* Collapsible Raw JSON */}
                {showRawJson && (
                  <div className="relative mt-4">
                    <button
                      onClick={handleCopyJson}
                      className="absolute top-3 right-3 px-2.5 py-1 bg-[#1F3B64] hover:bg-[#13233A] text-white text-xs font-medium rounded-md shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedJson ? (
                        <><Check className="w-3.5 h-3.5 text-[#52B788]" /><span>Copied</span></>
                      ) : (
                        <><Copy className="w-3.5 h-3.5" /><span>Copy JSON</span></>
                      )}
                    </button>
                    <div className="bg-[#13233A] p-4 rounded-xl border border-[#1F3B64] overflow-x-auto max-h-96">
                      <pre className="text-xs font-mono text-[#52B788]">
                        {JSON.stringify(result.rawResponse, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="flex items-start space-x-3 p-4 rounded-xl border border-[#DCE3EA] bg-white text-xs text-[#5E6E82]">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#1F3B64]" />
              <p>
                <strong className="text-[#13233A]">Notice:</strong> Voice Shield provides probabilistic AI assessments for real-time risk mitigation. Results are generated via acoustic embeddings and deepfake detection algorithms to assist authentication procedures.
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap gap-3">
              <Button variant="primary" onClick={reset}>
                Analyze Another Audio File
              </Button>
              <Button variant="outline" href="/download">
                Download Android App
              </Button>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}

function AudioPlayer({ file }: { file: File }) {
  const audioUrl = React.useMemo(() => URL.createObjectURL(file), [file]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    return () => URL.revokeObjectURL(audioUrl);
  }, [audioUrl]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };
  
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#F1F4F8] p-4 rounded-xl flex items-center space-x-4 border border-[#DCE3EA]">
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        onTimeUpdate={onTimeUpdate} 
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={onLoadedMetadata}
      />
      
      <button 
        onClick={togglePlay}
        className="w-10 h-10 flex-shrink-0 bg-white border border-[#DCE3EA] rounded-full hover:bg-[#1F3B64] hover:text-white flex items-center justify-center text-[#1F3B64] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1F3B64] cursor-pointer shadow-xs"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>

      <div className="flex-grow h-2 bg-[#DCE3EA] rounded-full overflow-hidden relative cursor-pointer" onClick={(e) => {
        if (audioRef.current && duration) {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const newTime = (clickX / rect.width) * duration;
          audioRef.current.currentTime = newTime;
        }
      }}>
        <div 
          className="absolute top-0 left-0 h-full bg-[#1F3B64] rounded-full transition-all duration-100 ease-linear" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-xs font-mono text-[#5E6E82] flex-shrink-0 w-24 text-right">
        {formatTime((audioRef.current?.currentTime || 0))} / {formatTime(duration)}
      </div>
    </div>
  );
}



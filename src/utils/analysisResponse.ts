export interface RawVoiceAnalysis {
  analysis_id?: string;
  status?: string;
  classification?: string;
  risk_score?: number | null;
  confidence?: number | null;
  ai_probability?: number | null;
  duration_seconds?: number | null;
  segments_analyzed?: number | null;
  processing_time_ms?: number | null;
  detector_version?: string;
  reasons?: string[];
  created_at?: string;
}

export interface RawTranscription {
  text?: string;
  language?: string;
  language_probability?: number | null;
  duration_seconds?: number | null;
  provider?: string;
  model?: string;
  mode?: string;
}

export interface RawTranscriptionMetadata {
  provider?: string;
  model?: string;
  mode?: string;
  language_requested?: string;
  language_detected?: string;
  quality_score?: number | null;
  quality_status?: string | null;
  quality_reasons?: string[];
  fallback_used?: boolean;
  fallback_reason?: string | null;
}

export interface RawSpeaker {
  id: string;
  label: string;
}

export interface RawSpeakerTranscriptItem {
  speaker: string;
  speaker_label?: string;
  start: number;
  end: number;
  text: string;
  confidence?: number | null;
}

export interface RawProcessingTelemetry {
  transcription_ms?: number | null;
  diarization_ms?: number | null;
  voice_analysis_ms?: number | null;
  alignment_ms?: number | null;
  total_ms?: number | null;
}

export interface RawApiResponse {
  success?: boolean;
  voice_analysis?: RawVoiceAnalysis | null;
  transcription?: RawTranscription | null;
  transcription_metadata?: RawTranscriptionMetadata | null;
  provider_status?: {
    primary?: string;
    used?: string;
    fallback_used?: boolean;
    attempts?: any[];
  } | null;
  speakers?: RawSpeaker[];
  speaker_transcript?: RawSpeakerTranscriptItem[];
  processing_time_ms?: number | null;
  processing?: RawProcessingTelemetry | null;
  
  // Legacy shape fallbacks
  classification?: string;
  confidence?: number | null;
  riskLevel?: 'LOW' | 'MEDIUM' | 'HIGH';
  processingTimeMs?: number | null;
  metadata?: Record<string, any>;
  error?: string;
}

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'UNKNOWN';

export interface NormalizedAnalysisResult {
  analysisId: string | null;
  status: 'completed' | 'processing' | 'failed' | 'unknown';
  
  // Classification
  rawClassification: string;
  classificationLabel: string;
  isGenuine: boolean;
  isSynthetic: boolean;
  isUnknown: boolean;
  
  // Risk
  riskScore: number | null;
  riskScoreDisplay: string;
  riskLevel: RiskLevel;
  
  // Confidence & AI Probability
  confidence: number | null;
  confidenceDisplay: string;
  aiProbability: number | null;
  aiProbabilityDisplay: string;
  
  // Duration & Timing
  durationSeconds: number | null;
  durationDisplay: string;
  inferenceTimeMs: number | null;
  inferenceTimeDisplay: string;
  totalProcessingTimeMs: number | null;
  totalProcessingTimeDisplay: string;
  
  // Detector
  detectorVersion: string | null;
  detectorDisplay: string;
  
  // Reasons
  reasons: string[];
  
  // Transcription & Diarization
  transcription: {
    text: string;
    language: string | null;
    languageProbability: number | null;
    durationSeconds: number | null;
    provider: string | null;
    model: string | null;
  } | null;
  
  transcriptionMetadata: {
    languageDetected: string | null;
    qualityScore: number | null;
    qualityStatus: string | null;
    qualityReasons: string[];
  } | null;
  
  speakers: Array<{ id: string; label: string }>;
  speakerTranscript: Array<{
    speaker: string;
    speakerLabel: string;
    start: number;
    end: number;
    text: string;
    confidence: number | null;
  }>;
  
  // Telemetry breakdown
  processing: {
    transcriptionMs: number | null;
    diarizationMs: number | null;
    voiceAnalysisMs: number | null;
    alignmentMs: number | null;
    totalMs: number | null;
  } | null;
  
  rawResponse: RawApiResponse;
}

export function formatTimeSeconds(ms: number | null | undefined): string {
  if (ms === null || ms === undefined) return 'N/A';
  return `${(ms / 1000).toFixed(2)}s`;
}

export function formatDetectorName(rawDetector?: string | null): string {
  if (!rawDetector) return 'WavLM+ / Reality Defender';
  const lower = rawDetector.toLowerCase().trim();
  if (lower === 'reality-defender' || lower === 'realitydefender') return 'Reality Defender';
  if (lower.includes('wavlm')) return 'WavLM Base+';
  if (lower.includes('saaras')) return 'Sarvam Saaras';
  return rawDetector.charAt(0).toUpperCase() + rawDetector.slice(1);
}

export function normalizeAnalysisResponse(data: RawApiResponse): NormalizedAnalysisResult {
  const va = data.voice_analysis;
  
  // 1. Status
  let status: 'completed' | 'processing' | 'failed' | 'unknown' = 'unknown';
  if (data.success === false || va?.status === 'failed') {
    status = 'failed';
  } else if (va?.status === 'completed') {
    status = 'completed';
  } else if (va?.status === 'processing') {
    status = 'processing';
  } else if (data.classification || va?.classification) {
    status = 'completed';
  }

  // 2. Classification
  const rawClassification = va?.classification || data.classification || 'UNKNOWN';
  const upperClass = rawClassification.toUpperCase().trim();
  
  const isGenuine = upperClass.includes('GENUINE') || upperClass === 'REAL' || upperClass === 'HUMAN' || upperClass === 'VERIFIED_HUMAN';
  const isSynthetic = upperClass.includes('SYNTHETIC') || upperClass.includes('SPOOF') || upperClass.includes('CLONE') || upperClass === 'FAKE';
  const isUnknown = !isGenuine && !isSynthetic;

  let classificationLabel = 'Unknown Voice';
  if (upperClass === 'LIKELY_GENUINE') classificationLabel = 'Likely Genuine';
  else if (upperClass === 'GENUINE' || upperClass === 'VERIFIED_HUMAN') classificationLabel = 'Genuine Voice';
  else if (upperClass === 'LIKELY_SYNTHETIC') classificationLabel = 'Likely Synthetic';
  else if (upperClass === 'SYNTHETIC' || upperClass === 'SPOOF_DETECTED') classificationLabel = 'Synthetic Voice';
  else if (isGenuine) classificationLabel = 'Likely Genuine';
  else if (isSynthetic) classificationLabel = 'Likely Synthetic';

  // 3. Risk Score & Level
  let riskScore: number | null = null;
  if (typeof va?.risk_score === 'number') {
    riskScore = va.risk_score;
  }

  let riskLevel: RiskLevel = 'UNKNOWN';
  if (riskScore !== null) {
    if (riskScore <= 30) riskLevel = 'LOW';
    else if (riskScore <= 70) riskLevel = 'MEDIUM';
    else riskLevel = 'HIGH';
  } else if (data.riskLevel) {
    riskLevel = data.riskLevel;
  } else if (typeof va?.ai_probability === 'number') {
    const prob = va.ai_probability > 1 ? va.ai_probability / 100 : va.ai_probability;
    if (prob <= 0.3) riskLevel = 'LOW';
    else if (prob <= 0.7) riskLevel = 'MEDIUM';
    else riskLevel = 'HIGH';
  } else if (isGenuine) {
    riskLevel = 'LOW';
  } else if (isSynthetic) {
    riskLevel = 'HIGH';
  }

  const riskScoreDisplay = riskScore !== null ? `${riskScore}/100` : 'N/A';

  // 4. Confidence
  let confidence: number | null = null;
  let confidenceDisplay = 'N/A';
  if (va?.confidence !== null && va?.confidence !== undefined) {
    confidence = va.confidence;
    const pct = confidence > 1 ? confidence : confidence * 100;
    confidenceDisplay = `${pct.toFixed(1)}%`;
  } else if (data.confidence !== null && data.confidence !== undefined && data.confidence > 0) {
    confidence = data.confidence;
    const pct = confidence > 1 ? confidence : confidence * 100;
    confidenceDisplay = `${pct.toFixed(1)}%`;
  }

  // 5. AI Probability
  let aiProbability: number | null = null;
  let aiProbabilityDisplay = 'N/A';
  if (va?.ai_probability !== null && va?.ai_probability !== undefined) {
    aiProbability = va.ai_probability;
    const pct = aiProbability > 1 ? aiProbability : aiProbability * 100;
    aiProbabilityDisplay = `${Math.round(pct)}%`;
  }

  // 6. Duration
  let durationSeconds: number | null = null;
  let durationDisplay = 'N/A';
  if (typeof va?.duration_seconds === 'number') {
    durationSeconds = va.duration_seconds;
  } else if (typeof data.transcription?.duration_seconds === 'number') {
    durationSeconds = data.transcription.duration_seconds;
  } else if (typeof data.metadata?.durationSec === 'number') {
    durationSeconds = data.metadata.durationSec;
  }

  if (durationSeconds !== null) {
    durationDisplay = `${durationSeconds.toFixed(2)}s`;
  }

  // 7. Processing Times
  let inferenceTimeMs: number | null = null;
  if (typeof va?.processing_time_ms === 'number') {
    inferenceTimeMs = va.processing_time_ms;
  } else if (typeof data.processing?.voice_analysis_ms === 'number') {
    inferenceTimeMs = data.processing.voice_analysis_ms;
  } else if (typeof data.processingTimeMs === 'number' && data.processingTimeMs > 0) {
    inferenceTimeMs = data.processingTimeMs;
  }

  const inferenceTimeDisplay = formatTimeSeconds(inferenceTimeMs);

  let totalProcessingTimeMs: number | null = null;
  if (typeof data.processing?.total_ms === 'number') {
    totalProcessingTimeMs = data.processing.total_ms;
  } else if (typeof data.processing_time_ms === 'number') {
    totalProcessingTimeMs = data.processing_time_ms;
  } else if (inferenceTimeMs !== null) {
    totalProcessingTimeMs = inferenceTimeMs;
  }

  const totalProcessingTimeDisplay = formatTimeSeconds(totalProcessingTimeMs);

  // 8. Detector Version
  const detectorVersion = va?.detector_version || null;
  const detectorDisplay = formatDetectorName(detectorVersion);

  // 9. Reasons
  const reasons: string[] = [];
  if (Array.isArray(va?.reasons) && va.reasons.length > 0) {
    reasons.push(...va.reasons);
  }

  // 10. Transcription
  let transcription: NormalizedAnalysisResult['transcription'] = null;
  if (data.transcription && data.transcription.text) {
    transcription = {
      text: data.transcription.text,
      language: data.transcription.language || null,
      languageProbability: data.transcription.language_probability ?? null,
      durationSeconds: data.transcription.duration_seconds ?? null,
      provider: data.transcription.provider || null,
      model: data.transcription.model || null,
    };
  }

  // 11. Transcription Metadata
  let transcriptionMetadata: NormalizedAnalysisResult['transcriptionMetadata'] = null;
  if (data.transcription_metadata) {
    transcriptionMetadata = {
      languageDetected: data.transcription_metadata.language_detected || null,
      qualityScore: data.transcription_metadata.quality_score ?? null,
      qualityStatus: data.transcription_metadata.quality_status || null,
      qualityReasons: Array.isArray(data.transcription_metadata.quality_reasons) 
        ? data.transcription_metadata.quality_reasons 
        : [],
    };
  }

  // 12. Speakers & Diarization
  const speakers = Array.isArray(data.speakers) ? data.speakers : [];
  const speakerTranscript = Array.isArray(data.speaker_transcript) 
    ? data.speaker_transcript.map(item => ({
        speaker: item.speaker,
        speakerLabel: item.speaker_label || item.speaker,
        start: item.start,
        end: item.end,
        text: item.text,
        confidence: item.confidence ?? null,
      }))
    : [];

  // 13. Telemetry
  let processing: NormalizedAnalysisResult['processing'] = null;
  if (data.processing) {
    processing = {
      transcriptionMs: data.processing.transcription_ms ?? null,
      diarizationMs: data.processing.diarization_ms ?? null,
      voiceAnalysisMs: data.processing.voice_analysis_ms ?? null,
      alignmentMs: data.processing.alignment_ms ?? null,
      totalMs: data.processing.total_ms ?? null,
    };
  }

  return {
    analysisId: va?.analysis_id || null,
    status,
    rawClassification,
    classificationLabel,
    isGenuine,
    isSynthetic,
    isUnknown,
    riskScore,
    riskScoreDisplay,
    riskLevel,
    confidence,
    confidenceDisplay,
    aiProbability,
    aiProbabilityDisplay,
    durationSeconds,
    durationDisplay,
    inferenceTimeMs,
    inferenceTimeDisplay,
    totalProcessingTimeMs,
    totalProcessingTimeDisplay,
    detectorVersion,
    detectorDisplay,
    reasons,
    transcription,
    transcriptionMetadata,
    speakers,
    speakerTranscript,
    processing,
    rawResponse: data,
  };
}

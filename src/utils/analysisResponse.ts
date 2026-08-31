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
  id?: string;
  speaker_id?: string;
  label?: string;
  name?: string;
}

export interface RawSpeakerTranscriptItem {
  speaker?: string;
  speaker_id?: string;
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
    transcription_provider?: string;
    transcription_status?: string;
    voice_analysis_provider?: string;
    voice_analysis_status?: string;
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
  classificationDisplay: string;
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
  confidenceTooltip: string;
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
    modelDisplay: string;
  } | null;
  
  transcriptionMetadata: {
    languageDetected: string | null;
    qualityScore: number | null;
    qualityStatus: string | null;
    qualityStatusDisplay: string;
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
    transcriptionDisplay: string;
    diarizationMs: number | null;
    diarizationDisplay: string;
    voiceAnalysisMs: number | null;
    voiceAnalysisDisplay: string;
    alignmentMs: number | null;
    alignmentDisplay: string;
    totalMs: number | null;
    totalDisplay: string;
  } | null;
  
  rawResponse: RawApiResponse;
}

// ==========================================
// Centralized Presentation Helpers
// ==========================================

export function formatNullableValue<T>(value: T | null | undefined, fallback = 'Not available'): string {
  if (value === null || value === undefined) return fallback;
  if (typeof value === 'string' && value.trim() === '') return fallback;
  return String(value);
}

export function formatClassification(rawClassification?: string | null): {
  raw: string;
  label: string;
  display: string;
  isGenuine: boolean;
  isSynthetic: boolean;
  isUnknown: boolean;
} {
  if (!rawClassification || rawClassification.trim() === '') {
    return {
      raw: 'UNKNOWN',
      label: 'Unknown',
      display: 'UNKNOWN',
      isGenuine: false,
      isSynthetic: false,
      isUnknown: true,
    };
  }

  const raw = rawClassification.trim();
  const upper = raw.toUpperCase();

  // Explicit mappings
  if (upper === 'LIKELY_GENUINE') {
    return {
      raw,
      label: 'Likely Genuine',
      display: 'LIKELY GENUINE',
      isGenuine: true,
      isSynthetic: false,
      isUnknown: false,
    };
  }

  if (upper === 'LIKELY_AI_GENERATED') {
    return {
      raw,
      label: 'Likely AI-Generated',
      display: 'LIKELY AI-GENERATED',
      isGenuine: false,
      isSynthetic: true,
      isUnknown: false,
    };
  }

  if (upper === 'LIKELY_SYNTHETIC') {
    return {
      raw,
      label: 'Likely Synthetic',
      display: 'LIKELY SYNTHETIC',
      isGenuine: false,
      isSynthetic: true,
      isUnknown: false,
    };
  }

  if (upper === 'GENUINE' || upper === 'REAL' || upper === 'HUMAN' || upper === 'VERIFIED_HUMAN') {
    return {
      raw,
      label: 'Genuine Voice',
      display: 'GENUINE',
      isGenuine: true,
      isSynthetic: false,
      isUnknown: false,
    };
  }

  if (upper === 'SYNTHETIC' || upper === 'AI_GENERATED' || upper === 'SPOOF_DETECTED' || upper === 'CLONE' || upper === 'FAKE') {
    return {
      raw,
      label: 'Synthetic Voice',
      display: 'SYNTHETIC',
      isGenuine: false,
      isSynthetic: true,
      isUnknown: false,
    };
  }

  if (upper === 'UNKNOWN' || upper === 'UNKNOWN_VOICE' || upper === 'UNKNOWN_CLASSIFICATION') {
    return {
      raw,
      label: 'Unknown',
      display: 'UNKNOWN',
      isGenuine: false,
      isSynthetic: false,
      isUnknown: true,
    };
  }

  // Safe fallback for unlisted future enum values
  const isGen = upper.includes('GENUINE') || upper.includes('HUMAN') || upper.includes('REAL');
  const isSyn = upper.includes('AI') || upper.includes('SYNTHETIC') || upper.includes('SPOOF') || upper.includes('FAKE');
  
  if (isGen) {
    return {
      raw,
      label: raw.replace(/_/g, ' '),
      display: upper.replace(/_/g, ' '),
      isGenuine: true,
      isSynthetic: false,
      isUnknown: false,
    };
  }

  if (isSyn) {
    return {
      raw,
      label: raw.replace(/_/g, ' '),
      display: upper.replace(/_/g, ' '),
      isGenuine: false,
      isSynthetic: true,
      isUnknown: false,
    };
  }

  return {
    raw,
    label: 'Unknown',
    display: 'UNKNOWN',
    isGenuine: false,
    isSynthetic: false,
    isUnknown: true,
  };
}

export function formatRiskScore(score: number | null | undefined): string {
  if (score === null || score === undefined) return 'Not available';
  return `${score}/100`;
}

export function determineRiskLevel(
  riskScore: number | null | undefined,
  rawRiskLevel?: string | null,
  aiProbability?: number | null,
  isGenuine?: boolean,
  isSynthetic?: boolean
): RiskLevel {
  if (riskScore !== null && riskScore !== undefined) {
    if (riskScore <= 30) return 'LOW';
    if (riskScore <= 70) return 'MEDIUM';
    return 'HIGH';
  }

  if (rawRiskLevel) {
    const upper = rawRiskLevel.toUpperCase();
    if (upper === 'LOW' || upper === 'MEDIUM' || upper === 'HIGH') {
      return upper as RiskLevel;
    }
  }

  if (aiProbability !== null && aiProbability !== undefined) {
    const prob = aiProbability > 1 ? aiProbability / 100 : aiProbability;
    if (prob <= 0.3) return 'LOW';
    if (prob <= 0.7) return 'MEDIUM';
    return 'HIGH';
  }

  if (isGenuine) return 'LOW';
  if (isSynthetic) return 'HIGH';

  return 'UNKNOWN';
}

export function formatProbability(probability: number | null | undefined): string {
  if (probability === null || probability === undefined) return 'Not available';
  const pct = probability > 1 ? probability : probability * 100;
  return `${Math.round(pct)}%`;
}

export function formatConfidence(confidence: number | null | undefined): string {
  if (confidence === null || confidence === undefined) return 'Not available';
  const pct = confidence > 1 ? confidence : confidence * 100;
  return `${pct.toFixed(1)}%`;
}

export function formatDuration(seconds: number | null | undefined): string {
  if (seconds === null || seconds === undefined) return 'Not available';
  return `${seconds.toFixed(2)} s`;
}

export function formatLatency(ms: number | null | undefined, fallback = 'Timing unavailable'): string {
  if (ms === null || ms === undefined) return fallback;
  return `${(ms / 1000).toFixed(2)} s`;
}

export function formatQualityStatus(status: string | null | undefined): string {
  if (!status || status.trim() === '') return 'Not available';
  const lower = status.toLowerCase().trim();
  if (lower === 'accepted') return 'Accepted';
  if (lower === 'good') return 'Good';
  if (lower === 'degraded') return 'Degraded';
  if (lower === 'failed') return 'Failed';
  if (lower === 'unknown') return 'Not available';
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function formatDetectorName(rawDetector?: string | null): string {
  if (!rawDetector || rawDetector.trim() === '') return 'Reality Defender';
  const lower = rawDetector.toLowerCase().trim();
  if (lower === 'reality-defender' || lower === 'realitydefender' || lower === 'sarvam_reality_defender') {
    return 'Reality Defender';
  }
  if (lower.includes('wavlm')) return 'WavLM Base+';
  if (lower.includes('saaras')) return 'Sarvam Saaras v4';
  return rawDetector
    .replace(/[_-]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function formatModelName(rawModel?: string | null): string {
  if (!rawModel || rawModel.trim() === '') return 'Not available';
  if (rawModel.toLowerCase() === 'saaras:v4') return 'Saaras v4';
  if (rawModel.toLowerCase() === 'saaras') return 'Sarvam Saaras';
  return rawModel;
}

// Backwards-compatible alias for existing imports
export const formatTimeSeconds = formatLatency;

// ==========================================
// Centralized Response Normalizer
// ==========================================

export function normalizeAnalysisResponse(data: RawApiResponse): NormalizedAnalysisResult {
  const va = data.voice_analysis;
  
  // 1. Status
  let status: 'completed' | 'processing' | 'failed' | 'unknown' = 'unknown';
  if (data.success === false || va?.status === 'failed') {
    status = 'failed';
  } else if (va?.status === 'completed' || va?.status === 'success') {
    status = 'completed';
  } else if (va?.status === 'processing') {
    status = 'processing';
  } else if (data.classification || va?.classification) {
    status = 'completed';
  }

  // 2. Classification Mapping
  const rawClassification = va?.classification || data.classification || 'UNKNOWN';
  const classificationInfo = formatClassification(rawClassification);

  // 3. Risk Score & Level
  const riskScore = typeof va?.risk_score === 'number' ? va.risk_score : null;
  const riskScoreDisplay = formatRiskScore(riskScore);
  const riskLevel = determineRiskLevel(
    riskScore,
    data.riskLevel,
    typeof va?.ai_probability === 'number' ? va.ai_probability : null,
    classificationInfo.isGenuine,
    classificationInfo.isSynthetic
  );

  // 4. Confidence
  const confidence = (va?.confidence !== null && va?.confidence !== undefined) 
    ? va.confidence 
    : (data.confidence !== null && data.confidence !== undefined ? data.confidence : null);
  const confidenceDisplay = formatConfidence(confidence);
  const confidenceTooltip = confidence === null 
    ? 'Confidence was not provided by the detector for this analysis.' 
    : `Detector confidence score: ${confidenceDisplay}`;

  // 5. AI Probability
  const aiProbability = typeof va?.ai_probability === 'number' ? va.ai_probability : null;
  const aiProbabilityDisplay = formatProbability(aiProbability);

  // 6. Duration
  let durationSeconds: number | null = null;
  if (typeof va?.duration_seconds === 'number') {
    durationSeconds = va.duration_seconds;
  } else if (typeof data.transcription?.duration_seconds === 'number') {
    durationSeconds = data.transcription.duration_seconds;
  } else if (typeof data.metadata?.durationSec === 'number') {
    durationSeconds = data.metadata.durationSec;
  }
  const durationDisplay = formatDuration(durationSeconds);

  // 7. Inference Time
  let inferenceTimeMs: number | null = null;
  if (typeof va?.processing_time_ms === 'number') {
    inferenceTimeMs = va.processing_time_ms;
  } else if (typeof data.processing?.voice_analysis_ms === 'number') {
    inferenceTimeMs = data.processing.voice_analysis_ms;
  } else if (typeof data.processingTimeMs === 'number') {
    inferenceTimeMs = data.processingTimeMs;
  }
  const inferenceTimeDisplay = formatLatency(inferenceTimeMs, 'Not available');

  // 8. Total Latency
  let totalProcessingTimeMs: number | null = null;
  if (typeof data.processing?.total_ms === 'number') {
    totalProcessingTimeMs = data.processing.total_ms;
  } else if (typeof data.processing_time_ms === 'number') {
    totalProcessingTimeMs = data.processing_time_ms;
  } else if (inferenceTimeMs !== null) {
    totalProcessingTimeMs = inferenceTimeMs;
  }
  const totalProcessingTimeDisplay = formatLatency(totalProcessingTimeMs, 'Not available');

  // 9. Detector Version
  const detectorVersion = va?.detector_version || null;
  const detectorDisplay = formatDetectorName(detectorVersion);

  // 10. Detection Findings / Reasons
  const reasons: string[] = [];
  if (Array.isArray(va?.reasons) && va.reasons.length > 0) {
    reasons.push(...va.reasons);
  }

  // 11. Transcription
  let transcription: NormalizedAnalysisResult['transcription'] = null;
  if (data.transcription && typeof data.transcription.text === 'string') {
    transcription = {
      text: data.transcription.text,
      language: data.transcription.language || null,
      languageProbability: data.transcription.language_probability ?? null,
      durationSeconds: data.transcription.duration_seconds ?? null,
      provider: data.transcription.provider || null,
      model: data.transcription.model || null,
      modelDisplay: formatModelName(data.transcription.model),
    };
  }

  // 12. Transcription Metadata
  let transcriptionMetadata: NormalizedAnalysisResult['transcriptionMetadata'] = null;
  if (data.transcription_metadata) {
    transcriptionMetadata = {
      languageDetected: data.transcription_metadata.language_detected || null,
      qualityScore: data.transcription_metadata.quality_score ?? null,
      qualityStatus: data.transcription_metadata.quality_status || null,
      qualityStatusDisplay: formatQualityStatus(data.transcription_metadata.quality_status),
      qualityReasons: Array.isArray(data.transcription_metadata.quality_reasons) 
        ? data.transcription_metadata.quality_reasons 
        : [],
    };
  }

  // 13. Speakers & Diarization
  const speakers: Array<{ id: string; label: string }> = [];
  if (Array.isArray(data.speakers)) {
    data.speakers.forEach((s, idx) => {
      const id = s.id || s.speaker_id || `speaker_${idx}`;
      const label = s.label || s.name || `Speaker ${idx + 1}`;
      speakers.push({ id, label });
    });
  }

  const speakerTranscript: NormalizedAnalysisResult['speakerTranscript'] = [];
  if (Array.isArray(data.speaker_transcript)) {
    data.speaker_transcript.forEach(item => {
      const speakerId = item.speaker || item.speaker_id || 'speaker_0';
      const speakerLabel = item.speaker_label || item.speaker || 'Speaker 1';
      speakerTranscript.push({
        speaker: speakerId,
        speakerLabel,
        start: typeof item.start === 'number' ? item.start : 0,
        end: typeof item.end === 'number' ? item.end : 0,
        text: item.text || '',
        confidence: item.confidence ?? null,
      });
    });
  }

  // 14. Telemetry
  let processing: NormalizedAnalysisResult['processing'] = null;
  if (data.processing) {
    processing = {
      transcriptionMs: data.processing.transcription_ms ?? null,
      transcriptionDisplay: formatLatency(data.processing.transcription_ms, 'Timing unavailable'),
      diarizationMs: data.processing.diarization_ms ?? null,
      diarizationDisplay: formatLatency(data.processing.diarization_ms, 'Timing unavailable'),
      voiceAnalysisMs: data.processing.voice_analysis_ms ?? null,
      voiceAnalysisDisplay: formatLatency(data.processing.voice_analysis_ms, 'Timing unavailable'),
      alignmentMs: data.processing.alignment_ms ?? null,
      alignmentDisplay: formatLatency(data.processing.alignment_ms, 'Not available'),
      totalMs: data.processing.total_ms ?? null,
      totalDisplay: formatLatency(data.processing.total_ms, 'Timing unavailable'),
    };
  }

  return {
    analysisId: va?.analysis_id || null,
    status,
    rawClassification: classificationInfo.raw,
    classificationLabel: classificationInfo.label,
    classificationDisplay: classificationInfo.display,
    isGenuine: classificationInfo.isGenuine,
    isSynthetic: classificationInfo.isSynthetic,
    isUnknown: classificationInfo.isUnknown,
    riskScore,
    riskScoreDisplay,
    riskLevel,
    confidence,
    confidenceDisplay,
    confidenceTooltip,
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


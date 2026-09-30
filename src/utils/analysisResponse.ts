export interface RawSegmentResult {
  segment_id?: number;
  start_seconds?: number | null;
  end_seconds?: number | null;
  duration_seconds?: number | null;
  classification?: string;
  confidence?: number | null;
  ai_probability?: number | null;
  risk_score?: number | null;
}

export interface RawVoiceAnalysis {
  analysis_id?: string;
  status?: string;
  classification?: string;
  risk_score?: number | null;
  risk_level?: string | null;
  confidence?: number | null;
  ai_probability?: number | null;
  duration_seconds?: number | null;
  segments_analyzed?: number | null;
  detector?: string;
  model_version?: string;
  recommendation?: string;
  segments?: RawSegmentResult[];
  raw_provider_metadata?: Record<string, any>;
}

export interface RawTranscriptFraud {
  transcript?: string | null;
  language?: string | null;
  fraud_risk_score?: number | null;
  fraud_classification?: string | null;
  risk_indicators?: string[];
  summary?: string | null;
}

export interface NormalizedSegment {
  segmentId: number;
  startSeconds: number | null;
  endSeconds: number | null;
  durationSeconds: number | null;
  classification: string;
  confidencePercent: number | null;
  aiProbabilityPercent: number | null;
  riskScorePercent: number | null;
}

export interface NormalizedAnalysisResult {
  analysisId: string;
  status: string;
  classification: 'AI_GENERATED' | 'HUMAN' | 'SUSPICIOUS' | 'UNCERTAIN' | 'UNKNOWN';
  displayClassification: string;
  riskLevel: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'UNKNOWN';
  riskScorePercent: number | null;
  confidencePercent: number | null;
  aiProbabilityPercent: number | null;
  humanProbabilityPercent: number | null;
  durationSeconds: number | null;
  segmentsAnalyzed: number;
  detectorName: string;
  modelVersion: string;
  recommendation: string;
  segments: NormalizedSegment[];
  transcript: string | null;
  transcriptLanguage: string | null;
  fraudRiskScorePercent: number | null;
  fraudClassification: string | null;
  fraudIndicators: string[];
  fraudSummary: string | null;
  rawResponse: any;
}

export function normalizePercentage(val: number | null | undefined): number | null {
  if (val === null || val === undefined || Number.isNaN(Number(val))) return null;
  const num = Number(val);
  if (num <= 1 && num >= 0) {
    return Math.round(num * 1000) / 10;
  }
  return Math.min(100, Math.max(0, Math.round(num * 10) / 10));
}

export function formatTimeSeconds(seconds: number | null | undefined): string {
  if (seconds === null || seconds === undefined || Number.isNaN(Number(seconds))) return '—';
  const s = Math.max(0, Number(seconds));
  const mins = Math.floor(s / 60);
  const secs = (s % 60).toFixed(1);
  return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
}

export function formatDetectorName(rawDetector?: string | null): string {
  if (!rawDetector || rawDetector.trim() === '') return 'Aurigin.AI';
  const lower = rawDetector.toLowerCase().trim();
  if (lower.includes('aurigin')) {
    return 'Aurigin.AI';
  }
  if (lower.includes('aasist')) {
    return 'AASIST-L';
  }
  return rawDetector;
}

export function normalizeAnalysisResponse(raw: any): NormalizedAnalysisResult {
  const va: RawVoiceAnalysis = raw?.voice_analysis || raw || {};
  const tf: RawTranscriptFraud = raw?.transcript_fraud || {};

  const rawClass = String(
    va.classification || raw?.classification || raw?.prediction || 'UNKNOWN'
  )
    .toUpperCase()
    .trim();

  let classification: NormalizedAnalysisResult['classification'] = 'UNKNOWN';
  let displayClassification = 'Unknown';

  if (
    rawClass.includes('AI') ||
    rawClass.includes('SYNTHETIC') ||
    rawClass.includes('SPOOF') ||
    rawClass.includes('DEEPFAKE') ||
    rawClass.includes('FAKE')
  ) {
    classification = 'AI_GENERATED';
    displayClassification = 'Potential Synthetic / Impersonated Voice';
  } else if (
    rawClass.includes('HUMAN') ||
    rawClass.includes('BONAFIDE') ||
    rawClass.includes('AUTHENTIC') ||
    rawClass.includes('REAL')
  ) {
    classification = 'HUMAN';
    displayClassification = 'Authentic Human Voice Signal';
  } else if (rawClass.includes('SUSPICIOUS') || rawClass.includes('HIGH_RISK')) {
    classification = 'SUSPICIOUS';
    displayClassification = 'Suspicious Voice Signal';
  } else if (rawClass.includes('UNCERTAIN') || rawClass.includes('INCONCLUSIVE')) {
    classification = 'UNCERTAIN';
    displayClassification = 'Uncertain / Low Confidence';
  }

  const aiProb = normalizePercentage(
    va.ai_probability ?? raw?.ai_probability ?? raw?.spoof_probability ?? null
  );
  const conf = normalizePercentage(va.confidence ?? raw?.confidence ?? null);
  const riskScore = normalizePercentage(
    va.risk_score ?? raw?.risk_score ?? va.ai_probability ?? null
  );

  const rawRiskLevel = String(va.risk_level ?? raw?.risk_level ?? '').toUpperCase().trim();
  let riskLevel: NormalizedAnalysisResult['riskLevel'] = 'UNKNOWN';
  if (rawRiskLevel === 'CRITICAL') riskLevel = 'CRITICAL';
  else if (rawRiskLevel === 'HIGH') riskLevel = 'HIGH';
  else if (rawRiskLevel === 'MEDIUM' || rawRiskLevel === 'MODERATE') riskLevel = 'MEDIUM';
  else if (rawRiskLevel === 'LOW') riskLevel = 'LOW';
  else if (riskScore !== null) {
    if (riskScore >= 80) riskLevel = 'CRITICAL';
    else if (riskScore >= 60) riskLevel = 'HIGH';
    else if (riskScore >= 35) riskLevel = 'MEDIUM';
    else riskLevel = 'LOW';
  }

  const rawSegments: RawSegmentResult[] = Array.isArray(va.segments)
    ? va.segments
    : Array.isArray(raw?.segments)
    ? raw.segments
    : [];

  const segments: NormalizedSegment[] = rawSegments.map((seg, idx) => ({
    segmentId: seg.segment_id ?? idx + 1,
    startSeconds: seg.start_seconds ?? null,
    endSeconds: seg.end_seconds ?? null,
    durationSeconds: seg.duration_seconds ?? null,
    classification: seg.classification || 'EVALUATED',
    confidencePercent: normalizePercentage(seg.confidence),
    aiProbabilityPercent: normalizePercentage(seg.ai_probability),
    riskScorePercent: normalizePercentage(seg.risk_score),
  }));

  const detectorRaw =
    va.detector ||
    raw?.detector ||
    raw?.provider_status?.voice_analysis_provider ||
    'Aurigin.AI';

  const defaultRecommendation =
    riskLevel === 'CRITICAL' || riskLevel === 'HIGH'
      ? 'Elevated voice impersonation or communication risk indicators detected. Pause any sensitive action and verify the caller independently through a trusted secondary channel.'
      : riskLevel === 'MEDIUM'
      ? 'Moderate risk signals observed. Exercise caution and confirm caller identity if financial or sensitive requests are made.'
      : 'Low acoustic spoofing indicators observed in this sample. Continue standard verification practices for sensitive requests.';

  return {
    analysisId: String(va.analysis_id || raw?.analysis_id || `vs-${Date.now()}`),
    status: String(va.status || raw?.status || 'completed'),
    classification,
    displayClassification,
    riskLevel,
    riskScorePercent: riskScore,
    confidencePercent: conf,
    aiProbabilityPercent: aiProb,
    humanProbabilityPercent: aiProb !== null ? Math.round((100 - aiProb) * 10) / 10 : null,
    durationSeconds: va.duration_seconds ?? raw?.duration_seconds ?? null,
    segmentsAnalyzed: va.segments_analyzed ?? (segments.length || 1),
    detectorName: formatDetectorName(detectorRaw),
    modelVersion: String(va.model_version || raw?.model_version || '1.0'),
    recommendation: String(va.recommendation || raw?.recommendation || defaultRecommendation),
    segments,
    transcript: tf.transcript ?? raw?.transcript ?? null,
    transcriptLanguage: tf.language ?? raw?.language ?? null,
    fraudRiskScorePercent: normalizePercentage(tf.fraud_risk_score),
    fraudClassification: tf.fraud_classification ?? null,
    fraudIndicators: Array.isArray(tf.risk_indicators) ? tf.risk_indicators : [],
    fraudSummary: tf.summary ?? null,
    rawResponse: raw,
  };
}

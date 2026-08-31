import { PROJECT_CONFIG } from '../config/project';
import { 
  RawApiResponse, 
  NormalizedAnalysisResult, 
  normalizeAnalysisResponse 
} from '../utils/analysisResponse';

export type { 
  RawApiResponse, 
  RawVoiceAnalysis, 
  RawTranscription, 
  RawTranscriptionMetadata,
  RawSpeaker,
  RawSpeakerTranscriptItem,
  RawProcessingTelemetry,
  NormalizedAnalysisResult,
  RiskLevel
} from '../utils/analysisResponse';

// Backwards-compatible alias for previous type imports
export type AnalysisResponse = NormalizedAnalysisResult;

export async function analyzeAudio(file: File): Promise<NormalizedAnalysisResult> {
  const formData = new FormData();
  formData.append('audio', file);

  const endpoint = `${PROJECT_CONFIG.API_BASE_URL}${PROJECT_CONFIG.API_ANALYZE_ENDPOINT}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      if (response.status === 413) throw new Error('File too large. Maximum size is 15MB.');
      if (response.status === 415) throw new Error('Unsupported audio format.');
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    const data: RawApiResponse = await response.json();
    
    // Normalize response using centralized adapter
    return normalizeAnalysisResponse(data);
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Network failure or API unavailable. Please ensure the backend is running.');
    }
    throw error;
  }
}

export async function checkBackendHealth(): Promise<boolean> {
  const endpoint = `${PROJECT_CONFIG.API_BASE_URL}${PROJECT_CONFIG.API_HEALTH_ENDPOINT}`;
  try {
    const response = await fetch(endpoint, { method: 'GET', headers: { Accept: 'application/json' }});
    return response.ok;
  } catch {
    return false;
  }
}


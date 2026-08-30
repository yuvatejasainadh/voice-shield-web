import { PROJECT_CONFIG } from '../config/project';

export interface AnalysisResponse {
  classification: string;
  confidence: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  processingTimeMs: number;
  metadata?: Record<string, any>;
}

export async function analyzeAudio(file: File): Promise<AnalysisResponse> {
  const formData = new FormData();
  formData.append('audio', file);

  const endpoint = `${PROJECT_CONFIG.API_BASE_URL}${PROJECT_CONFIG.API_ANALYZE_ENDPOINT}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      if (response.status === 413) throw new Error('File too large.');
      if (response.status === 415) throw new Error('Unsupported audio format.');
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // We expect the backend to return these fields, but we should safely map them
    return {
      classification: data.classification || 'UNKNOWN',
      confidence: data.confidence || 0,
      riskLevel: data.riskLevel || 'UNKNOWN',
      processingTimeMs: data.processingTimeMs || 0,
      metadata: data.metadata || data, // Fallback to entire data object if metadata is not explicitly defined
    };
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

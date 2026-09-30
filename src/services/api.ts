import { PROJECT_CONFIG } from '../config/project';
import {
  normalizeAnalysisResponse,
  NormalizedAnalysisResult,
} from '../utils/analysisResponse';

export type { NormalizedAnalysisResult };

function getApiBaseUrl(): string {
  const configured = PROJECT_CONFIG.API_BASE_URL?.trim();
  if (!configured) return '';
  return configured.replace(/\/+$/, '');
}

export async function checkBackendHealth(): Promise<boolean> {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) return false;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(`${baseUrl}${PROJECT_CONFIG.API_HEALTH_ENDPOINT}`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return res.ok;
  } catch {
    return false;
  }
}

export async function analyzeAudio(file: File): Promise<NormalizedAnalysisResult> {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    throw new Error(
      'Backend API URL (VITE_API_BASE_URL) is not configured in this environment. Set VITE_API_BASE_URL to connect to the live VOICE SHIELD FastAPI backend.'
    );
  }

  const formData = new FormData();
  formData.append('audio', file);

  const response = await fetch(`${baseUrl}${PROJECT_CONFIG.API_ANALYZE_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  });

  if (!response.ok) {
    let errorDetail = `HTTP ${response.status}`;
    try {
      const errJson = await response.json();
      errorDetail = errJson?.detail || errJson?.message || errorDetail;
    } catch {
      // ignore json parse error
    }
    throw new Error(`Audio analysis request failed: ${errorDetail}`);
  }

  const rawData = await response.json();
  return normalizeAnalysisResponse(rawData);
}

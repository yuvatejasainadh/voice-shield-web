import { getLatestApk } from '../utils/releases';

export const PROJECT_CONFIG = {
  PROJECT_NAME: "Voice Shield",
  PROJECT_TAGLINE: "Protecting conversations from synthetic voices.",
  PROJECT_DESCRIPTION: "AI-powered detection of voice cloning and synthetic speech.",
  SIH_PROBLEM_STATEMENT: "26104",

  // @ts-ignore: Vite env not fully typed in this env
  API_BASE_URL: import.meta.env?.VITE_API_BASE_URL || "https://api.voiceshield.example.com",
  API_ANALYZE_ENDPOINT: "/analyze",
  API_HEALTH_ENDPOINT: "/health",

  // Centralized project configuration
  project: {
    name: "Voice Shield",
  },
  get download() {
    const latest = getLatestApk();
    return {
      apk: latest ? latest.url : "",
      filename: latest ? latest.filename : "",
      version: latest ? latest.version : "",
    };
  },
  repositories: {
    android: "https://github.com/yuvatejasainadh/voice-shield-app",
    api: "https://github.com/yuvatejasainadh/voice-shield-api",
    web: "https://github.com/yuvatejasainadh/voice-shield-web",
    docs: "https://github.com/yuvatejasainadh/voice-shield-docs",
  },

  // Dynamic getters for compatibility
  get APK_URL() {
    return getLatestApk()?.url || "";
  },
  get APK_VERSION() {
    return getLatestApk()?.version || "";
  },
  get APK_NAME() {
    return getLatestApk()?.filename || "";
  },

  GITHUB_REPOSITORIES: {
    android: "https://github.com/yuvatejasainadh/voice-shield-app",
    api: "https://github.com/yuvatejasainadh/voice-shield-api",
    backend: "https://github.com/yuvatejasainadh/voice-shield-api",
    web: "https://github.com/yuvatejasainadh/voice-shield-web",
    docs: "https://github.com/yuvatejasainadh/voice-shield-docs",
    documentation: "https://github.com/yuvatejasainadh/voice-shield-docs",
  },

  DOCUMENTATION_URL: "/docs",
  DOCUMENTATION_REPO_URL: "https://github.com/yuvatejasainadh/voice-shield-docs",

  MODEL_NAME: "WavLM Base+ (Fine-tuned)",
  MODEL_VERSION: "1.0",
  
  STATUS: {
    android: "Available",
    webDemo: "Available",
    backendApi: "Available",
    sourceCode: "Available",
    documentation: "Available",
  }
};

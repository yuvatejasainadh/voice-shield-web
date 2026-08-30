export const PROJECT_CONFIG = {
  PROJECT_NAME: "VOICE SHIELD",
  PROJECT_TAGLINE: "Protecting conversations from synthetic voices.",
  PROJECT_DESCRIPTION: "AI-powered detection of voice cloning and synthetic speech.",
  SIH_PROBLEM_STATEMENT: "26104",

  // @ts-ignore: Vite env not fully typed in this env
  API_BASE_URL: import.meta.env?.VITE_API_BASE_URL || "https://api.voiceshield.example.com",
  API_ANALYZE_ENDPOINT: "/analyze",
  API_HEALTH_ENDPOINT: "/health",

  APK_URL: "/voice-shield-v1.0.0.apk", // Placeholder, configure when available
  APK_VERSION: "v1.0.0",
  APK_SIZE: "24.5 MB",
  APK_RELEASE_DATE: "August 2026",
  APK_SHA256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  ANDROID_MIN_VERSION: "Android 8.0 (API 26)",

  GITHUB_REPOSITORIES: {
    android: "https://github.com/example/voice-shield-android",
    backend: "https://github.com/example/voice-shield-backend",
    ml: "https://github.com/example/voice-shield-ml",
    documentation: "https://github.com/example/voice-shield-docs",
  },

  DOCUMENTATION_URL: "/docs",

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

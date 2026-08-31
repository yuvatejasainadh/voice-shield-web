export const PROJECT_CONFIG = {
  PROJECT_NAME: "Voice Shield",
  PROJECT_TAGLINE: "Protecting conversations from synthetic voices.",
  PROJECT_DESCRIPTION: "AI-powered detection of voice cloning and synthetic speech.",
  SIH_PROBLEM_STATEMENT: "26104",

  // @ts-ignore: Vite env not fully typed in this env
  API_BASE_URL: import.meta.env?.VITE_API_BASE_URL || "https://api.voiceshield.example.com",
  API_ANALYZE_ENDPOINT: "/analyze",
  API_HEALTH_ENDPOINT: "/health",

  // Centralized project download and repositories
  project: {
    name: "Voice Shield",
  },
  download: {
    apk: "/releases/Voice%20Shield%20v1.0.apk",
  },
  repositories: {
    android: "https://github.com/yuvatejasainadh/voice-shield-app",
    api: "https://github.com/yuvatejasainadh/voice-shield-api",
    web: "https://github.com/yuvatejasainadh/voice-shield-web",
    docs: "https://github.com/yuvatejasainadh/voice-shield-docs",
  },

  // Aliases for compatibility
  APK_URL: "/releases/Voice%20Shield%20v1.0.apk",
  APK_VERSION: "v1.0",
  APK_NAME: "Voice Shield v1.0.apk",

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

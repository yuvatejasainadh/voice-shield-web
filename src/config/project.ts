import { getLatestApk } from '../utils/releases';

export const PROJECT_CONFIG = {
  PROJECT_NAME: "VoiceShield — Real-Time AI Voice Safety & Fraud Intelligence",
  PROJECT_TAGLINE: "Real-Time AI Voice Safety & Fraud Intelligence",
  PROJECT_DESCRIPTION: "VoiceShield analyzes voice interactions in real time to identify potential voice impersonation, synthetic/deepfake voice signals and conversational risk indicators, helping people and organizations make safer decisions.",

  // Product Roadmap Definitions
  CURRENT_VERSION: "NOW — Real-Time Foundation",
  CURRENT_STATUS: "NOW",
  
  VERSION_STAGES: [
    {
      id: "now",
      version: "NOW — Real-Time Call Protection Foundation",
      shortVersion: "NOW",
      title: "Current Platform Foundation",
      status: "NOW",
      statusBadge: "IMPLEMENTED / ACTIVE",
      isCurrent: true,
      tagline: "Real-time Android call monitoring, window synchronization & risk intelligence",
      summary: "Real-time application-level call monitoring capturing audio windows via the Android Audio Window Manager, streaming over secure WSS/TLS to the VoiceShield Backend, and aggregating temporal evidence (Basic TCED) for live call-level risk assessment.",
      pipeline: [
        "Active Call",
        "Android Audio Window Manager",
        "Already-Windowed PCM (16 kHz Mono)",
        "Secure WebSocket (WSS/TLS)",
        "VoiceShield Backend",
        "Voice Analysis (Aurigin.AI)",
        "Temporal Evidence Aggregation (TCED)",
        "Risk Assessment & Decision Support",
      ],
      capabilities: [
        "Real-time Android call monitoring",
        "Audio window synchronization (16 kHz mono pcm_s16le, 5000 ms max window, 2500 ms stride)",
        "Backend real-time WebSocket processing without double-windowing",
        "Voice authenticity analysis integration",
        "Temporal evidence & call-level risk assessment",
        "Privacy-conscious ephemeral audio processing",
      ],
      scopeBoundaries: [
        "Designed to assist human decision-making — does not replace human judgment",
        "AI-generated risk signals are probabilistic and not definitive proof of fraud or identity",
        "Raw call audio is processed transiently and not retained in backend storage",
      ],
    },
    {
      id: "in-development",
      version: "IN DEVELOPMENT — Expanded Risk & Verification",
      shortVersion: "IN DEVELOPMENT",
      title: "Next-Phase Product Engineering",
      status: "IN DEVELOPMENT",
      statusBadge: "IN DEVELOPMENT",
      isCurrent: false,
      tagline: "PostgreSQL-backed architecture, identity verification & cybercrime intelligence",
      summary: "Planned product expansion introducing persistent PostgreSQL-backed session telemetry via the VoiceShield API boundary, multi-factor identity verification workflows, cybercrime intelligence signals, and dedicated language-aware acoustic models.",
      pipeline: [
        "Voice Interaction",
        "Voice Authenticity Signal",
        "Identity & Conversational Context",
        "Language-Aware Acoustic Routing",
        "Expanded Risk & Fraud Intelligence",
        "Structured Incident Evidence",
        "Human Verification Decision",
      ],
      plannedCapabilities: [
        "PostgreSQL-backed production architecture (via VoiceShield API boundary)",
        "Identity verification workflows combining voice signals and contextual factors",
        "Cybercrime intelligence & social-engineering indicator analysis",
        "Expanded conversational risk intelligence",
        "Improved multilingual & acoustic detection models",
        "Product-grade observability & session telemetry",
      ],
      disclaimer: "In development — capabilities in this stage are actively being engineered and are not claimed as deployed in the current baseline.",
    },
    {
      id: "future",
      version: "FUTURE — Global & Organizational Scale",
      shortVersion: "FUTURE",
      title: "Long-Term Product Roadmap",
      status: "ROADMAP",
      statusBadge: "FUTURE CAPABILITY",
      isCurrent: false,
      tagline: "Organization deployments, enterprise integrations & partner ecosystem",
      summary: "Long-term product roadmap focused on organization-wide call protection, financial and customer-support desk integrations, multi-channel communication coverage, and distributed regional routing.",
      pipeline: [
        "Multi-Channel Voice & Comms",
        "Distributed Regional Routing",
        "Multi-Signal Fraud Intelligence",
        "Enterprise Policy & Alerting",
        "Partner & Workflow Integrations",
        "Human-Assisted Security Operations",
      ],
      plannedCapabilities: [
        "Organization deployments & team policy controls",
        "Enterprise & contact-center workflow integrations",
        "Additional communication channels beyond cellular calls",
        "Global multi-region scalability & language coverage",
        "Expanded fraud intelligence & incident reporting support",
        "Partner & developer ecosystem",
      ],
      disclaimer: "Future roadmap — long-term product direction for global incubation and commercial scale.",
    },
  ],

  // @ts-ignore: Vite env not fully typed in this env
  API_BASE_URL: import.meta.env?.VITE_API_BASE_URL || "",
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

  MODEL_NAME: "Aurigin.AI",
  MODEL_VERSION: "1.0",

  AUDIO_WINDOW_CONTRACT: {
    sampleRateHz: 16000,
    channels: 1,
    encoding: "pcm_s16le",
    sampleFormat: "16-bit signed PCM",
    maxWindowMs: 5000,
    initialStepMs: 2500,
    strideMs: 2500,
    normalOverlapMs: 2500,
    normalOverlapPercent: 50,
    minPartialMs: 500,
    sequenceBase: 1,
    expectedWindows: [
      { id: "W001", range: "0 – 2500 ms" },
      { id: "W002", range: "0 – 5000 ms" },
      { id: "W003", range: "2500 – 7500 ms" },
      { id: "W004", range: "5000 – 10000 ms" },
    ],
  },
  
  STATUS: {
    android: "Available",
    webDemo: "Available",
    backendApi: "Available",
    sourceCode: "Available",
    documentation: "Available",
  }
};

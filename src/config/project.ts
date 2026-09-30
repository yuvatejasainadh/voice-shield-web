import { getLatestApk } from '../utils/releases';

export const PROJECT_CONFIG = {
  PUBLIC_NAME: "VOICE SHIELD - AI for a Safer Tomorrow",
  SHORT_NAME: "VOICE SHIELD",
  TECHNICAL_NAME: "VOICE SHIELD — Real-Time AI-Powered Voice Impersonation Detection, Prevention & Risk Assessment Framework",
  PROJECT_NAME: "VOICE SHIELD — Real-Time AI-Powered Voice Impersonation Detection, Prevention & Risk Assessment Framework",
  PROJECT_TAGLINE: "AI for a Safer Tomorrow",
  PROJECT_DESCRIPTION: "VOICE SHIELD is a real-time AI-powered voice security framework designed to detect potential voice impersonation, identify communication risk signals, support prevention workflows, and assist users in making safer decisions during voice interactions.",

  // Product Roadmap Definitions
  CURRENT_VERSION: "CURRENT — Real-Time Foundation",
  CURRENT_STATUS: "CURRENT",
  
  VERSION_STAGES: [
    {
      id: "now",
      version: "CURRENT — Real-Time Voice Security Foundation",
      shortVersion: "CURRENT",
      title: "Current Implemented Baseline",
      status: "CURRENT",
      statusBadge: "IMPLEMENTED / ACTIVE",
      isCurrent: true,
      tagline: "Android real-time audio capture, windowing & backend risk assessment",
      summary: "Real-time application-level call monitoring capturing audio windows via the Android Audio Window Manager, streaming over secure WSS/TLS to the VOICE SHIELD Backend (V1 Render/SQLite baseline), and aggregating temporal evidence (Basic TCED) for session-level risk assessment and decision support.",
      pipeline: [
        "Voice Interaction",
        "Real-Time Audio Capture",
        "Audio Windowing (16 kHz Mono PCM)",
        "Secure Streaming (WSS/TLS)",
        "Voice Impersonation / Authenticity Analysis",
        "Temporal Evidence (Basic TCED)",
        "Risk Assessment",
        "Prevention / Decision Support",
      ],
      capabilities: [
        "Android real-time audio capture & call monitoring",
        "Controlled audio windowing (16 kHz mono pcm_s16le, 5000 ms max window, 2500 ms stride)",
        "Backend real-time WebSocket processing without double-windowing",
        "Voice impersonation / authenticity analysis pipeline (Aurigin.AI)",
        "Temporal evidence & session-level risk assessment (Basic TCED)",
        "Existing REST (/analyze, /health) & WebSocket API integration",
        "Security & ephemeral audio privacy foundations",
      ],
      scopeBoundaries: [
        "Provides human-in-the-loop decision support — does not replace human judgment",
        "AI-generated signals are probabilistic indicators and should not be treated as definitive proof of identity, fraud or malicious intent",
        "Raw call audio is processed transiently and not retained in backend storage",
      ],
    },
    {
      id: "in-development",
      version: "IN DEVELOPMENT — Expanded Verification & Intelligence",
      shortVersion: "IN DEVELOPMENT",
      title: "V2 Stabilization & Expansion Track",
      status: "IN DEVELOPMENT",
      statusBadge: "IN DEVELOPMENT",
      isCurrent: false,
      tagline: "PostgreSQL / AWS RDS backend track, identity verification & cybercrime intelligence",
      summary: "Ongoing V2 engineering track introducing a separate PostgreSQL-backed production architecture (AWS RDS) accessed strictly via the VOICE SHIELD API boundary, alongside identity verification workflows, cybercrime intelligence signals, expanded conversational risk intelligence, and multilingual detection/routing.",
      pipeline: [
        "Voice Interaction",
        "Voice Impersonation Signal",
        "Identity Verification Context",
        "Multilingual Acoustic Routing",
        "Conversational & Cybercrime Intelligence",
        "Structured Session Evidence (PostgreSQL)",
        "Human Prevention & Verification Decision",
      ],
      plannedCapabilities: [
        "PostgreSQL-backed production architecture (AWS RDS migration/stabilization track via API boundary)",
        "Identity verification workflows",
        "Cybercrime intelligence signals",
        "Expanded conversational risk intelligence",
        "Expanded multilingual detection/routing (LACR / AASIST-L)",
      ],
      disclaimer: "In development — capabilities in this stage are actively being engineered and are not claimed as deployed in the current V1 baseline.",
    },
    {
      id: "future",
      version: "ROADMAP — Organization & Multi-Region Scale",
      shortVersion: "ROADMAP",
      title: "Long-Term Product Direction",
      status: "ROADMAP",
      statusBadge: "ROADMAP",
      isCurrent: false,
      tagline: "Organization-wide deployments, enterprise integrations & partner ecosystem",
      summary: "Long-term roadmap focused on organization-wide call security deployments, enterprise contact-center integrations, additional communication channels, distributed multi-region architecture, and partner ecosystem integrations.",
      pipeline: [
        "Multi-Channel Voice Interactions",
        "Distributed Multi-Region Routing",
        "Multi-Signal Fraud & Risk Intelligence",
        "Enterprise Contact-Center Workflows",
        "Partner Ecosystem Integrations",
        "Coordinated Incident Response Support",
      ],
      plannedCapabilities: [
        "Organization-wide deployments",
        "Enterprise contact-center integrations",
        "Additional communication channels",
        "Distributed multi-region architecture",
        "Partner ecosystem integrations",
      ],
      disclaimer: "Future roadmap — long-term product direction for organizational and global scale.",
    },
  ],

  // @ts-ignore: Vite env not fully typed in this env
  API_BASE_URL: import.meta.env?.VITE_API_BASE_URL || "",
  API_ANALYZE_ENDPOINT: "/analyze",
  API_HEALTH_ENDPOINT: "/health",

  // Centralized project configuration
  project: {
    name: "VOICE SHIELD",
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

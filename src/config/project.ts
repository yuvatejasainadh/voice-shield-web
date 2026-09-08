import { getLatestApk } from '../utils/releases';

export const PROJECT_CONFIG = {
  PROJECT_NAME: "VOICE SHIELD — Real-Time AI-Powered Voice Impersonation Detection, Prevention & Risk Assessment Framework",
  PROJECT_TAGLINE: "Real-Time AI-Powered Voice Impersonation Detection, Prevention & Risk Assessment Framework",
  PROJECT_DESCRIPTION: "VOICE SHIELD — Real-Time AI-Powered Voice Impersonation Detection, Prevention & Risk Assessment Framework engineered for application-level cellular call analysis and risk mitigation.",
  SIH_PROBLEM_STATEMENT: "26104",

  // Version Roadmap Definitions
  CURRENT_VERSION: "v1.0 — Demonstrator",
  CURRENT_STATUS: "CURRENT",
  
  VERSION_STAGES: [
    {
      id: "v1.0",
      version: "v1.0 — Demonstrator",
      shortVersion: "v1.0",
      title: "Demonstrator",
      status: "CURRENT",
      statusBadge: "CURRENT / AVAILABLE",
      isCurrent: true,
      tagline: "Application-level real-time cellular-call analysis pipeline",
      summary: "Demonstrates the working application-level real-time cellular-call analysis pipeline capturing growing OEM call recordings via an Android Foreground Service, streaming temporal PCM analysis windows over secure WSS/TLS, and delivering basic temporal evidence aggregation (TCED) with call-level risk scoring.",
      pipeline: [
        "Cellular Call",
        "OEM Call Recording",
        "Growing Recording File",
        "Android Foreground Service",
        "PCM Extraction / Normalization",
        "Temporal Analysis Windows",
        "WSS / TLS",
        "Backend Direct Window Ingestion",
        "Aurigin.AI API",
        "Basic TCED",
        "Risk / Confidence / Recommendation",
        "Android UI / History",
      ],
      scopeBoundaries: [
        "Detection + temporal evidence aggregation (TCED) + risk assessment",
        "Proves end-to-end cellular-call recording ingestion and windowed streaming",
        "No production prevention capability claim (prevention intelligence planned for v3.0 DST architecture)",
        "Does NOT claim AASIST-L, LACR, DSR, or DST in current demonstrator",
        "Does NOT claim complete multilingual routing or calibrated FAR/FRR/EER",
        "Does NOT claim privileged Android telephony audio access or universal deepfake robustness",
        "Demonstrator baseline — not claimed as production-ready",
      ],
    },
    {
      id: "v2.0",
      version: "v2.0 — SIH Prototype",
      shortVersion: "v2.0",
      title: "SIH Prototype",
      status: "UPCOMING",
      statusBadge: "UPCOMING",
      isCurrent: false,
      tagline: "3-VM Language-Aware Cascading Routing & dedicated AASIST-L inference",
      summary: "Planned SIH prototype introducing Voice Shield-owned AASIST-L inference, 3-VM Language-Aware Cascading Routing (LACR), Dynamic Sensitivity Regulation (DSR), progressive Indian-language fine-tuning, and calibrated risk evaluation. Does not claim production prevention.",
      pipeline: [
        "Android",
        "WSS",
        "3-VM LACR",
        "Language Identification / Language Group Routing",
        "Voice Shield-owned AASIST-L",
        "TCED + DSR",
        "Calibrated Risk",
      ],
      plannedCapabilities: [
        "Voice Shield-owned AASIST-L inference",
        "3-VM Language-Aware Cascading Routing (LACR)",
        "TCED + Dynamic Sensitivity Regulation (DSR)",
        "Progressive Indian-language fine-tuning",
        "Quantitative evaluation (EER, FAR, FRR, latency, throughput, robustness, calibration)",
      ],
      disclaimer: "Planned prototype architecture — not currently deployed. Does not claim production prevention.",
    },
    {
      id: "v3.0",
      version: "v3.0 — Production",
      shortVersion: "v3.0",
      title: "Production",
      status: "#FUTURE",
      statusBadge: "#FUTURE",
      isCurrent: false,
      tagline: "7-VM distributed LACR with language-specific routing clusters & prevention",
      summary: "Planned long-term distributed production architecture featuring 7-VM language-specific routing clusters, Voice Shield-owned AASIST-L, Dynamic Sensitivity Tuning (DST), and advanced risk/prevention architecture.",
      pipeline: [
        "7-VM LACR",
        "Language-Specific AASIST-L",
        "TCED",
        "DSR",
        "DST",
        "Advanced Risk / Prevention",
      ],
      languageRoutingGroups: [
        "VM1 — Language Identification (LID)",
        "VM2 — Telugu / Tamil / Malayalam / Kannada",
        "VM3 — Hindi / Marathi / Sanskrit",
        "VM4 — Bengali / Assamese / Odia / Bishnupriya Manipuri",
        "VM5 — Punjabi / Kashmiri / Sindhi / Urdu",
        "VM6 — Gujarati / Rajasthani / Kutchi",
        "VM7 — English / Azure-hosted AASIST-L",
      ],
      disclaimer: "Future architectural roadmap — not implemented.",
    },
  ],

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

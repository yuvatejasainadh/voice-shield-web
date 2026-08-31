import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Copy, Terminal, Check } from 'lucide-react';
import { PROJECT_CONFIG } from '../config/project';
import { Button } from '../components/ui/Button';
import { DocLayout } from '../components/docs/DocLayout';

export function ApiDocs() {
  const [copied, setCopied] = React.useState(false);
  const curlExample = `curl -X POST ${PROJECT_CONFIG.API_BASE_URL}${PROJECT_CONFIG.API_ANALYZE_ENDPOINT} \\
  -H "Accept: application/json" \\
  -F "audio=@/path/to/sample.wav"`;

  const copyCode = () => {
    navigator.clipboard.writeText(curlExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DocLayout>
      <div className="mb-8 flex justify-between items-start flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-[#DCE3EA]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#5E6E82] mb-3">
            <Link to="/docs" className="hover:text-[#1F3B64]">Documentation</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1F3B64]">Backend API</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-2">API Reference</h1>
          <p className="text-sm text-[#5E6E82]">Integrate Voice Shield voice-clone verification into your backend or clients.</p>
        </div>
        <Button href="/api" variant="outline" size="sm">
          <Terminal className="w-4 h-4 mr-2 text-[#1F3B64]" />
          API Playground
        </Button>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-base font-bold text-[#13233A] mb-3">Base URL</h2>
          <div className="bg-white border border-[#DCE3EA] rounded-xl p-4 font-mono text-xs text-[#1F3B64] font-semibold">
            {PROJECT_CONFIG.API_BASE_URL}
          </div>
        </section>

        <section>
          <h2 className="text-base font-bold text-[#13233A] mb-3">Endpoints</h2>
          
          <div className="bg-white border border-[#DCE3EA] rounded-2xl overflow-hidden shadow-xs">
            <div className="bg-[#F1F4F8] border-b border-[#DCE3EA] p-4 flex items-center space-x-3">
              <span className="bg-[#1F3B64] text-white font-bold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider">POST</span>
              <code className="text-[#13233A] font-mono text-sm font-semibold">{PROJECT_CONFIG.API_ANALYZE_ENDPOINT}</code>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-sm text-[#5E6E82]">Analyzes an uploaded raw audio snippet and returns a synthetic clone risk assessment.</p>
              
              <div>
                <h4 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-2">Request Specification</h4>
                <p className="text-xs text-[#5E6E82] mb-3 font-mono">Content-Type: <code className="text-[#1F3B64] bg-[#F1F4F8] px-2 py-0.5 rounded font-mono">multipart/form-data</code></p>
                <div className="border border-[#DCE3EA] rounded-xl overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <thead className="text-[#5E6E82] font-semibold bg-[#F1F4F8] border-b border-[#DCE3EA]">
                      <tr>
                        <th className="px-4 py-2.5">Parameter</th>
                        <th className="px-4 py-2.5">Type</th>
                        <th className="px-4 py-2.5">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DCE3EA]">
                      <tr>
                        <td className="px-4 py-3 font-mono font-bold text-[#13233A]">audio</td>
                        <td className="px-4 py-3 text-[#1F3B64] font-mono">Binary File</td>
                        <td className="px-4 py-3 text-[#5E6E82]">The audio stream to analyze (WAV, MP3, M4A, FLAC). Max 10MB.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-2">Example cURL Request</h4>
                <div className="relative group">
                  <pre className="bg-[#F1F4F8] border border-[#DCE3EA] rounded-xl p-4 font-mono text-xs text-[#13233A] overflow-x-auto">
                    {curlExample}
                  </pre>
                  <button 
                    onClick={copyCode}
                    className="absolute top-2.5 right-2.5 px-2.5 py-1 bg-white hover:bg-[#EAEFF6] text-[#1F3B64] text-xs font-medium transition-colors border border-[#DCE3EA] rounded-lg shadow-2xs flex items-center gap-1.5"
                  >
                    {copied ? <><Check className="w-3.5 h-3.5 text-[#159570]" /><span className="text-[#159570] font-bold">Copied</span></> : <><Copy className="w-3.5 h-3.5" /><span>Copy</span></>}
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-2">Sample JSON Response</h4>
                <pre className="bg-[#13233A] border border-[#1F3B64] rounded-xl p-4 font-mono text-xs text-[#52B788] overflow-x-auto">
{`{
  "classification": "SYNTHETIC",
  "confidence": 0.937,
  "riskLevel": "HIGH",
  "processingTimeMs": 1840,
  "metadata": {
    "model": "WavLM Base+",
    "durationSec": 4.2
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}


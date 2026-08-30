import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Copy, Terminal } from 'lucide-react';
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
      <div className="mb-10 flex justify-between items-start flex-col sm:flex-row sm:items-center gap-4">
        <div>
          <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-4">
            <Link to="/docs" className="hover:text-slate-300">Docs</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-300">Backend API</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-100 tracking-tighter uppercase mb-2">API Reference</h1>
          <p className="text-slate-400">Integrate Voice Shield detection into your own applications.</p>
        </div>
        <Button href="/api" variant="outline" size="sm">
          <Terminal className="w-4 h-4 mr-2" />
          API PLAYGROUND
        </Button>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-tight mb-4 pb-2 border-b border-slate-800">Base URL</h2>
          <div className="bg-[#0A0D12] border border-slate-800 p-4 font-mono text-sm text-cyan-500">
            {PROJECT_CONFIG.API_BASE_URL}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-tight mb-4 pb-2 border-b border-slate-800">Endpoints</h2>
          
          <div className="bg-slate-900/30 border border-slate-800 mb-8">
            <div className="bg-[#0A0D12] border-b border-slate-800 p-4 flex items-center space-x-4">
              <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold px-3 py-1 text-[10px] uppercase tracking-widest">POST</span>
              <code className="text-slate-200 font-mono text-sm">{PROJECT_CONFIG.API_ANALYZE_ENDPOINT}</code>
            </div>
            <div className="p-6">
              <p className="text-slate-400 mb-6">Analyzes an uploaded audio file and returns a voice authenticity classification.</p>
              
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Request Format</h4>
              <p className="text-sm text-slate-400 mb-2 font-mono">Content-Type: <code className="text-cyan-500 bg-[#0A0D12] border border-slate-800 px-2 py-0.5 ml-1">multipart/form-data</code></p>
              <table className="w-full text-sm text-left mb-6 border-collapse">
                <thead className="text-[10px] text-slate-500 uppercase tracking-widest bg-[#0A0D12] border-y border-slate-800">
                  <tr>
                    <th className="px-4 py-3 font-bold">Parameter</th>
                    <th className="px-4 py-3 font-bold">Type</th>
                    <th className="px-4 py-3 font-bold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800/50 bg-slate-900/20">
                    <td className="px-4 py-3 font-mono text-slate-300">audio</td>
                    <td className="px-4 py-3 text-cyan-500 font-mono">File</td>
                    <td className="px-4 py-3 text-slate-400">The audio file to analyze (WAV, MP3, FLAC). Max 10MB.</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Example Request (cURL)</h4>
              <div className="relative group mb-6">
                <pre className="bg-[#0A0D12] border border-slate-800 p-4 font-mono text-xs text-slate-300 overflow-x-auto">
                  {curlExample}
                </pre>
                <button 
                  onClick={copyCode}
                  className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors border border-slate-700"
                >
                  {copied ? <span className="text-[10px] font-bold tracking-wider text-emerald-400 px-1">COPIED</span> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Response Format (JSON)</h4>
              <pre className="bg-[#0A0D12] border border-slate-800 p-4 font-mono text-xs text-cyan-500 overflow-x-auto">
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
        </section>
      </div>
    </DocLayout>
  );
}

import React, { useState, useRef } from 'react';
import { Layout } from '../components/layout/Layout';
import { Play, Terminal, Code2, AlertCircle, RefreshCw, Upload, Copy, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { analyzeAudio } from '../services/api';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function ApiPlayground() {
  const [file, setFile] = useState<File | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [response, setResponse] = useState<string>('');
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'raw' | 'normalized'>('raw');
  const [lastNormalized, setLastNormalized] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (!file) return;
    setIsRequesting(true);
    setResponse('Sending request to Voice Shield API...');
    setStatusCode(null);
    setTime(null);
    
    const start = performance.now();
    try {
      const res = await analyzeAudio(file);
      setLastNormalized(res);
      setResponse(JSON.stringify(res.rawResponse || res, null, 2));
      setStatusCode(200);
    } catch (err: any) {
      setLastNormalized(null);
      setResponse(JSON.stringify({ error: err.message }, null, 2));
      setStatusCode(500);
    } finally {
      setTime(Math.round(performance.now() - start));
      setIsRequesting(false);
    }
  };

  const handleToggleView = (mode: 'raw' | 'normalized') => {
    setViewMode(mode);
    if (!lastNormalized) return;
    if (mode === 'raw') {
      setResponse(JSON.stringify(lastNormalized.rawResponse || lastNormalized, null, 2));
    } else {
      setResponse(JSON.stringify(lastNormalized, null, 2));
    }
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <div className="mb-10 pb-6 border-b border-[#DCE3EA] flex items-center space-x-4">
          <VoiceShieldLogo className="h-12 w-12" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight">API Interactive Playground</h1>
            <p className="text-sm text-[#5E6E82] mt-0.5">Test the Voice Shield detection API with custom binary payloads.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Request Panel */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl flex flex-col h-full overflow-hidden shadow-xs">
            <div className="bg-[#F1F4F8] border-b border-[#DCE3EA] px-6 py-4 flex items-center justify-between">
              <span className="text-xs font-bold text-[#7A8798] uppercase tracking-wider">Request Configuration</span>
              <span className="text-xs font-mono font-bold bg-[#1F3B64] text-white px-2.5 py-0.5 rounded">POST /analyze</span>
            </div>
            
            <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-3">Payload (multipart/form-data)</label>
                <div className="border-2 border-dashed border-[#DCE3EA] hover:border-[#1F3B64] rounded-xl p-6 text-center transition-colors">
                  <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputRef}
                    accept="audio/*,.wav,.mp3,.flac,.m4a"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  <Upload className="w-8 h-8 text-[#5E6E82] mx-auto mb-2" />
                  <div className="text-sm font-semibold text-[#13233A] mb-1">
                    {file ? file.name : 'Select or drop an audio file'}
                  </div>
                  <p className="text-xs text-[#7A8798] mb-4">
                    Supports WAV, MP3, FLAC, M4A up to 15MB
                  </p>
                  <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                    Browse Local File
                  </Button>
                </div>
              </div>
              
              <div className="pt-4 border-t border-[#DCE3EA] flex justify-end">
                <Button variant="primary" size="md" onClick={handleSend} disabled={!file || isRequesting} className="w-full sm:w-auto px-6">
                  {isRequesting ? (
                    <><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Processing...</>
                  ) : (
                    <><Play className="w-4 h-4 mr-2" /> Send Request</>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Response Panel */}
          <div className="bg-white border border-[#DCE3EA] rounded-2xl flex flex-col h-[520px] overflow-hidden shadow-xs">
            <div className="bg-[#F1F4F8] border-b border-[#DCE3EA] px-6 py-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#7A8798] uppercase tracking-wider">JSON Response</span>
                {lastNormalized && (
                  <div className="inline-flex rounded-lg bg-white border border-[#DCE3EA] p-0.5 text-xs">
                    <button
                      onClick={() => handleToggleView('raw')}
                      className={`px-2 py-0.5 rounded-md font-semibold transition-colors cursor-pointer ${
                        viewMode === 'raw' ? 'bg-[#1F3B64] text-white' : 'text-[#5E6E82] hover:text-[#13233A]'
                      }`}
                    >
                      Raw Schema
                    </button>
                    <button
                      onClick={() => handleToggleView('normalized')}
                      className={`px-2 py-0.5 rounded-md font-semibold transition-colors cursor-pointer ${
                        viewMode === 'normalized' ? 'bg-[#1F3B64] text-white' : 'text-[#5E6E82] hover:text-[#13233A]'
                      }`}
                    >
                      Normalized
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold">
                {statusCode && (
                  <span className={`px-2.5 py-0.5 rounded ${statusCode === 200 ? 'bg-[#E8F7F2] text-[#159570] border border-[#B4E8D7]' : 'bg-[#FDF0F0] text-[#C63C43] border border-[#F4B4B7]'}`}>
                    {statusCode} {statusCode === 200 ? 'OK' : 'ERROR'}
                  </span>
                )}
                {time && (
                  <span className="bg-white border border-[#DCE3EA] text-[#5E6E82] px-2.5 py-0.5 rounded">{time}ms</span>
                )}
                {response && (
                  <button 
                    onClick={handleCopy}
                    className="bg-white border border-[#DCE3EA] text-[#1F3B64] hover:bg-[#EAEFF6] px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer"
                    title="Copy Response"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#159570]" /> : <Copy className="w-3 h-3" />}
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex-grow p-0 relative overflow-hidden bg-[#13233A]">
              {response ? (
                <pre className="p-6 h-full overflow-auto font-mono text-xs text-[#52B788] leading-relaxed">
                  {response}
                </pre>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                  <Code2 className="w-10 h-10 mb-3 opacity-40 text-slate-300" />
                  <p className="text-xs font-medium text-slate-300">Run an analysis request to view output JSON payload</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}



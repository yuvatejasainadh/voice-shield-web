import React, { useState, useRef } from 'react';
import { Layout } from '../components/layout/Layout';
import { Play, Terminal, Code2, AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { analyzeAudio } from '../services/api';

export function ApiPlayground() {
  const [file, setFile] = useState<File | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [response, setResponse] = useState<string>('');
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (!file) return;
    setIsRequesting(true);
    setResponse('Sending request...');
    setStatusCode(null);
    setTime(null);
    
    const start = performance.now();
    try {
      const res = await analyzeAudio(file);
      setResponse(JSON.stringify(res, null, 2));
      setStatusCode(200);
    } catch (err: any) {
      setResponse(JSON.stringify({ error: err.message }, null, 2));
      setStatusCode(500); // generic fallback since our wrapper throws standard errors
    } finally {
      setTime(Math.round(performance.now() - start));
      setIsRequesting(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex items-center space-x-4 border-b border-slate-800 pb-6">
          <Terminal className="w-8 h-8 text-cyan-500" />
          <div>
            <h1 className="text-3xl font-bold text-slate-100 tracking-tighter uppercase">API Playground</h1>
            <p className="text-slate-400">Test the Voice Shield detection API interactively.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Request Panel */}
          <div className="bg-[#0A0D12] border border-slate-800 flex flex-col h-full">
            <div className="bg-slate-900/50 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Request</span>
              <span className="text-[10px] font-mono font-bold tracking-widest bg-cyan-500/10 text-cyan-500 px-2 py-1 border border-cyan-500/30">POST /analyze</span>
            </div>
            
            <div className="p-8 flex-grow flex flex-col justify-center">
              <div className="mb-8">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Payload (multipart/form-data)</label>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputRef}
                    accept="audio/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
                    CHOOSE AUDIO FILE
                  </Button>
                  <span className="text-xs text-slate-500 font-mono truncate max-w-xs">
                    {file ? file.name : 'No file selected'}
                  </span>
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-800 flex justify-end">
                <Button variant="primary" onClick={handleSend} disabled={!file || isRequesting} className="w-full sm:w-auto">
                  {isRequesting ? (
                    <><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> SENDING...</>
                  ) : (
                    <><Play className="w-4 h-4 mr-2" /> SEND REQUEST</>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Response Panel */}
          <div className="bg-[#0A0D12] border border-slate-800 flex flex-col h-[500px]">
            <div className="bg-slate-900/50 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Response</span>
              <div className="flex space-x-3 text-[10px] font-mono font-bold tracking-widest">
                {statusCode && (
                  <span className={`px-2 py-1 border ${statusCode === 200 ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-red-500/10 text-red-400 border-red-500/30'}`}>
                    {statusCode} {statusCode === 200 ? 'OK' : 'ERR'}
                  </span>
                )}
                {time && (
                  <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1">{time}ms</span>
                )}
              </div>
            </div>
            
            <div className="flex-grow p-0 relative overflow-hidden bg-[#0A0D12]">
              {response ? (
                <pre className="p-6 h-full overflow-auto font-mono text-sm text-cyan-500">
                  {response}
                </pre>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700">
                  <Code2 className="w-12 h-12 mb-4 opacity-50 text-slate-600" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Response will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

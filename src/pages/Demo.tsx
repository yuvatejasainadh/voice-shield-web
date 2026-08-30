import React, { useState, useRef, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { UploadCloud, FileAudio, Play, Pause, AlertTriangle, ShieldCheck, Info, XCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { analyzeAudio, AnalysisResponse, checkBackendHealth } from '../services/api';
import { PROJECT_CONFIG } from '../config/project';

export function Demo() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [backendOnline, setBackendOnline] = useState<boolean | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkBackendHealth().then(setBackendOnline);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
      setError(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if (droppedFile.type.startsWith('audio/')) {
        setFile(droppedFile);
        setResult(null);
        setError(null);
      } else {
        setError('Please drop a valid audio file.');
      }
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsAnalyzing(true);
    setError(null);
    setResult(null);
    
    try {
      const response = await analyzeAudio(file);
      setResult(response);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred during analysis.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="mb-8 border-b border-slate-800 pb-6 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-100 mb-2 tracking-tighter uppercase">Voice Detection Demo</h1>
            <p className="text-slate-400">Upload an audio sample to analyze its authenticity.</p>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest bg-slate-900/50 px-3 py-1.5 border border-slate-800">
            <span className="text-slate-500">API Status:</span>
            {backendOnline === null ? (
              <span className="text-slate-500 animate-pulse">Checking...</span>
            ) : backendOnline ? (
              <span className="text-emerald-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online</span>
            ) : (
              <span className="text-red-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Unavailable</span>
            )}
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-950/30 border border-red-900/50 flex items-start space-x-3 text-red-300">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm tracking-wider uppercase text-red-200">Analysis Failed</h3>
              <p className="text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {!file && (
          <div 
            className={`border border-dashed p-12 text-center transition-colors cursor-pointer ${
              isDragging ? 'border-cyan-500 bg-cyan-950/20' : 'border-slate-700 bg-slate-900/20 hover:border-slate-500 hover:bg-slate-900/40'
            }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <UploadCloud className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-sm font-bold tracking-wider uppercase text-slate-200 mb-2">DROP AUDIO FILE HERE</p>
            <p className="text-xs text-slate-500 mb-6 uppercase tracking-widest">or click to browse your files (WAV, MP3, FLAC)</p>
            <Button variant="secondary" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>
              CHOOSE FILE
            </Button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="audio/*"
              onChange={handleFileChange}
            />
          </div>
        )}

        {file && !result && (
          <div className="bg-[#0A0D12] border border-slate-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-slate-900 border border-slate-800 text-cyan-500">
                  <FileAudio className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold tracking-wider uppercase text-slate-200">{file.name}</h3>
                  <p className="text-xs font-mono text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button onClick={reset} className="text-slate-500 hover:text-slate-200 transition-colors">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <AudioPlayer file={file} />

            <div className="mt-8 flex justify-end">
              <Button 
                variant="primary"
                onClick={handleAnalyze} 
                disabled={isAnalyzing || backendOnline === false}
                className="w-full sm:w-auto"
              >
                {isAnalyzing ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0A0D12]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ANALYZING AUDIO...
                  </span>
                ) : 'ANALYZE AUDIO'}
              </Button>
            </div>
            
            {backendOnline === false && (
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-amber-500 text-center">
                Backend API is currently unavailable. Analysis cannot be performed.
              </p>
            )}
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="bg-[#0A0D12] border border-slate-800">
              <div className="border-b border-slate-800 bg-slate-900/50 px-6 py-4 flex justify-between items-center">
                <h2 className="font-bold tracking-widest text-slate-200 uppercase text-sm">VOICE ANALYSIS</h2>
                <span className="text-[10px] font-mono text-cyan-500 uppercase">Model: {PROJECT_CONFIG.MODEL_NAME}</span>
              </div>
              
              <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-[0.2em] font-bold">Classification</p>
                  <p className={`text-xl font-bold tracking-wider ${result.classification.toUpperCase() === 'SYNTHETIC' ? 'text-red-400' : 'text-emerald-400'}`}>
                    {result.classification.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-[0.2em] font-bold">Confidence</p>
                  <p className="text-xl font-mono text-slate-200">
                    {(result.confidence * 100).toFixed(1)}%
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-[0.2em] font-bold">Risk</p>
                  <p className={`text-xl font-bold tracking-wider uppercase ${
                    result.riskLevel === 'HIGH' ? 'text-red-400' : 
                    result.riskLevel === 'MEDIUM' ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {result.riskLevel}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-[0.2em] font-bold">Processing Time</p>
                  <p className="text-xl font-mono text-slate-200">
                    {(result.processingTimeMs / 1000).toFixed(2)} s
                  </p>
                </div>
              </div>

              {result.metadata && Object.keys(result.metadata).length > 0 && (
                <div className="border-t border-slate-800 bg-slate-900/20 p-6">
                  <h3 className="text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-[0.2em]">Analysis details</h3>
                  <div className="bg-[#0A0D12] p-4 border border-slate-800 overflow-x-auto">
                    <pre className="text-xs font-mono text-cyan-500">
                      {JSON.stringify(result.metadata, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-start space-x-3 p-4 border border-slate-800 bg-slate-900/30 text-sm text-slate-400">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-cyan-500" />
              <p>
                <strong className="text-slate-200">Important:</strong> Voice Shield provides an AI-based assessment and should not be treated as absolute proof of authenticity. AI detection is probabilistic and may produce false positives or false negatives.
              </p>
            </div>

            <div className="pt-4">
              <Button variant="outline" onClick={reset}>
                ANALYZE ANOTHER FILE
              </Button>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}

function AudioPlayer({ file }: { file: File }) {
  const audioUrl = React.useMemo(() => URL.createObjectURL(file), [file]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    return () => URL.revokeObjectURL(audioUrl);
  }, [audioUrl]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };
  
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#0A0D12] p-4 flex items-center space-x-4 border border-slate-800">
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        onTimeUpdate={onTimeUpdate} 
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={onLoadedMetadata}
      />
      
      <button 
        onClick={togglePlay}
        className="w-10 h-10 flex-shrink-0 bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-500 flex items-center justify-center text-slate-300 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-500"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
      </button>

      <div className="flex-grow h-1 bg-slate-800 overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 h-full bg-cyan-500 transition-all duration-100 ease-linear" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-[10px] font-mono text-slate-500 flex-shrink-0 w-24 text-right">
        {formatTime((audioRef.current?.currentTime || 0))} / {formatTime(duration)}
      </div>
    </div>
  );
}

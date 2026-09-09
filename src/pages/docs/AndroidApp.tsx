import React from 'react';
import { ChevronRight, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocLayout } from '../../components/docs/DocLayout';
import { PROJECT_CONFIG } from '../../config/project';
import { Button } from '../../components/ui/Button';
import { LockedSourceButton } from '../../components/ui/LockedSourceButton';

export function AndroidApp() {
  return (
    <DocLayout>
      <div className="mb-8 pb-6 border-b border-[#DCE3EA]">
        <div className="flex items-center space-x-2 text-xs font-semibold text-[#5E6E82] mb-3">
          <Link to="/docs" className="hover:text-[#1F3B64]">Documentation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1F3B64]">Android Application</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-2">Android Application Architecture</h1>
        <p className="text-sm text-[#5E6E82]">
          Native client recording, visual waveform streaming, and telemetry handling.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Platform Requirements</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#5E6E82]">
            <li><strong className="text-[#13233A]">OS Level:</strong> Android 8.0 (API level 26) or newer.</li>
            <li><strong className="text-[#13233A]">Permissions:</strong> <code className="text-xs bg-[#F1F4F8] text-[#1F3B64] px-1.5 py-0.5 rounded font-mono">RECORD_AUDIO</code> and <code className="text-xs bg-[#F1F4F8] text-[#1F3B64] px-1.5 py-0.5 rounded font-mono">INTERNET</code>.</li>
            <li><strong className="text-[#13233A]">Architecture:</strong> Jetpack Compose UI with Kotlin Coroutines and MVVM architecture.</li>
          </ul>
        </div>
        
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Key Capabilities</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#5E6E82]">
            <li>Low-latency on-device audio sampling via native AudioRecord.</li>
            <li>Visual real-time frequency distribution analyzer.</li>
            <li>Encrypted bidirectional streaming over TLS 1.3 to inference backends.</li>
            <li>Instant risk scoring with distinct visual warnings.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2 items-center">
          <div className="flex items-center space-x-2 text-sm font-semibold text-[#1F3B64] bg-[#F1F4F8] px-4 py-2 rounded-xl border border-[#DCE3EA]">
            <Smartphone className="w-4 h-4" />
            <span>Available on Google Play Soon</span>
          </div>
          <LockedSourceButton label="Android App LOCKED" />
        </div>
      </div>
    </DocLayout>
  );
}


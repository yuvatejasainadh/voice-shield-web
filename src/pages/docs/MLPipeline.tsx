import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DocLayout } from '../../components/docs/DocLayout';
import { PROJECT_CONFIG } from '../../config/project';
import { LockedSourceButton } from '../../components/ui/LockedSourceButton';

export function MLPipeline() {
  return (
    <DocLayout>
      <div className="mb-8 pb-6 border-b border-[#DCE3EA]">
        <div className="flex items-center space-x-2 text-xs font-semibold text-[#5E6E82] mb-3">
          <Link to="/docs" className="hover:text-[#1F3B64]">Documentation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1F3B64]">ML Pipeline</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#13233A] tracking-tight mb-2">Machine Learning Pipeline</h1>
        <p className="text-sm text-[#5E6E82]">
          Deep representation learning for acoustic feature extraction and synthetic voice classification.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">WavLM Feature Extraction</h2>
          <p className="text-sm text-[#5E6E82] leading-relaxed">
            The detection engine utilizes a fine-tuned <strong className="text-[#13233A]">WavLM Base+</strong> backbone pretrained on 94,000+ hours of clean and noisy audio datasets. The transformer attention heads capture fine-grained phase inconsistencies and vocoder synthesis artifacts.
          </p>
        </div>
        
        <div className="bg-white border border-[#DCE3EA] rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-base font-bold text-[#13233A] pb-2 border-b border-[#DCE3EA]">Inference Specifications</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#5E6E82]">
            <li><strong className="text-[#13233A]">Audio Format:</strong> 16kHz mono PCM linear uncompressed.</li>
            <li><strong className="text-[#13233A]">Window Frame:</strong> 2.0-second sliding temporal chunks with 50% overlap.</li>
            <li><strong className="text-[#13233A]">Classification Head:</strong> Dense feedforward projection layers with batch normalization and sigmoid risk boundary.</li>
            <li><strong className="text-[#13233A]">Thresholding:</strong> Spoof risk &gt; 0.70 flags high probability cloned audio.</li>
          </ul>
        </div>

        <div className="flex gap-3 pt-2">
          <LockedSourceButton label="Voice Shield API LOCKED" />
        </div>
      </div>
    </DocLayout>
  );
}


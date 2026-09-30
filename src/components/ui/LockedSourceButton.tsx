import React from 'react';
import { Lock } from 'lucide-react';

export function LockedSourceButton({ label = 'Repository Access Restricted' }: { label?: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F1F4F8] border border-[#DCE3EA] text-xs font-bold text-[#7A8798] cursor-not-allowed select-none"
      title="Source access is currently restricted."
      aria-disabled="true"
    >
      <Lock className="w-3.5 h-3.5 text-[#7A8798]" />
      <span>{label}</span>
    </div>
  );
}

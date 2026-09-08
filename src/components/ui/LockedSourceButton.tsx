import React from 'react';
import { Lock } from 'lucide-react';

export function LockedSourceButton({
  label = "Source Code LOCKED"
}: {
  label?: string
}) {
  return (
    <div 
      className="inline-flex flex-col items-center justify-center px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center gap-1 cursor-not-allowed group/lock shadow-sm"
      aria-disabled="true"
      title="Source access is currently restricted."
    >
      <div className="flex items-center gap-2 text-sm font-bold text-[#64748B]">
        <Lock className="w-4 h-4 motion-safe:group-hover/lock:animate-pulse transition-transform motion-safe:group-hover/lock:-translate-y-0.5" />
        {label}
      </div>
      <span className="text-[10px] text-[#94A3B8] font-medium leading-tight">Source access is currently restricted.</span>
    </div>
  );
}

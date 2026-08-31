import React from 'react';
import { cn } from '@/src/lib/utils';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

interface StatusBadgeProps {
  status: 'Available' | 'Unavailable' | 'Pending' | string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const isAvailable = status.toLowerCase() === 'available' || status.toLowerCase() === 'online' || status.toLowerCase() === 'loaded';
  const isPending = status.toLowerCase() === 'pending';
  const isUnavailable = status.toLowerCase() === 'unavailable' || (!isAvailable && !isPending);

  return (
    <div className={cn(
      "inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border",
      isAvailable ? "bg-[#E8F7F2] text-[#159570] border-[#B4E8D7]" : 
      isPending ? "bg-[#FDF5E6] text-[#C78316] border-[#F7E1B5]" :
      "bg-[#FDEBED] text-[#C63C43] border-[#F8BFC3]",
      className
    )}>
      {isAvailable && <CheckCircle2 className="w-3.5 h-3.5 text-[#159570]" />}
      {isPending && <Clock className="w-3.5 h-3.5 text-[#C78316]" />}
      {isUnavailable && <XCircle className="w-3.5 h-3.5 text-[#C63C43]" />}
      <span>{status}</span>
    </div>
  );
}


import React from 'react';
import { cn } from '@/src/lib/utils';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

interface StatusBadgeProps {
  status: 'Available' | 'Unavailable' | 'Pending' | string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const isAvailable = status.toLowerCase() === 'available';
  const isPending = status.toLowerCase() === 'pending';
  const isUnavailable = status.toLowerCase() === 'unavailable';

  return (
    <div className={cn(
      "inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border",
      isAvailable ? "bg-green-950/30 text-green-400 border-green-900/50" : 
      isPending ? "bg-amber-950/30 text-amber-400 border-amber-900/50" :
      "bg-red-950/30 text-red-400 border-red-900/50",
      className
    )}>
      {isAvailable && <CheckCircle2 className="w-3 h-3" />}
      {isPending && <Clock className="w-3 h-3" />}
      {(isUnavailable || (!isAvailable && !isPending)) && <XCircle className="w-3 h-3" />}
      <span>{status}</span>
    </div>
  );
}

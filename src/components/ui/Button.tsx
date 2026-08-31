import React from 'react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  asExternal?: boolean;
  download?: boolean | string;
};

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  href, 
  asExternal, 
  download,
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none";
  
  const variants = {
    primary: "bg-cyan-500 text-[#0A0D12] hover:bg-cyan-400",
    secondary: "bg-[#0F172A] text-slate-100 hover:bg-slate-800 border border-slate-700",
    outline: "bg-transparent text-slate-100 border border-slate-700 hover:bg-slate-800",
    ghost: "bg-transparent text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50",
  };

  const sizes = {
    sm: "h-8 px-4 text-[10px]",
    md: "h-10 px-6 text-xs",
    lg: "h-12 px-8 text-sm",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (download || asExternal || href.startsWith('http') || href.startsWith('/releases/')) {
      return (
        <a 
          href={href} 
          className={classes} 
          target={asExternal ? "_blank" : undefined} 
          rel={asExternal ? "noopener noreferrer" : undefined}
          download={download}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

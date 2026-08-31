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
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-[#1F3B64] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer";
  
  const variants = {
    primary: "bg-[#1F3B64] text-white hover:bg-[#173457] shadow-sm active:translate-y-px",
    secondary: "bg-[#F1F4F8] text-[#1F3B64] hover:bg-[#E4EAF2] border border-[#DCE3EA] active:translate-y-px",
    outline: "bg-white text-[#1F3B64] border border-[#DCE3EA] hover:bg-[#F1F4F8] hover:border-[#1F3B64]/30 shadow-sm active:translate-y-px",
    ghost: "bg-transparent text-[#5E6E82] hover:text-[#13233A] hover:bg-[#F1F4F8]",
  };

  const sizes = {
    sm: "min-h-[36px] sm:min-h-[40px] px-3.5 text-xs",
    md: "min-h-[42px] sm:min-h-[44px] px-5 text-sm",
    lg: "min-h-[48px] sm:min-h-[48px] px-7 text-sm sm:text-base",
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


import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  asExternal?: boolean;
  download?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  asExternal,
  download,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center font-bold rounded-xl transition-all cursor-pointer select-none';

  const variantStyles = {
    primary:
      'bg-[#1F3B64] text-white hover:bg-[#162C4E] shadow-xs',
    outline:
      'bg-white text-[#13233A] border border-[#DCE3EA] hover:border-[#1F3B64] hover:text-[#1F3B64] shadow-2xs',
    ghost:
      'text-[#5E6E82] hover:text-[#13233A] hover:bg-[#F1F4F8]',
  };

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-xs',
    md: 'px-4 py-2.5 text-xs sm:text-sm',
    lg: 'px-5 py-3 text-xs sm:text-sm',
  };

  const combined = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (asExternal || download || href.startsWith('http')) {
      return (
        <a
          href={href}
          target={asExternal ? '_blank' : undefined}
          rel={asExternal ? 'noopener noreferrer' : undefined}
          download={download}
          className={combined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={combined} onClick={props.onClick as any}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
}

import React from 'react';

interface VoiceShieldLogoProps {
  className?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
}

const SIZE_CLASSES = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
  custom: '',
};

export function VoiceShieldLogo({ 
  className = '', 
  alt = 'Voice Shield Logo',
  size = 'md'
}: VoiceShieldLogoProps) {
  const sizeClass = size !== 'custom' ? SIZE_CLASSES[size] : '';
  const combinedClass = `${sizeClass} ${className} object-contain shrink-0`.trim();

  return (
    <img
      src="/logos/logo.png"
      alt={alt}
      className={combinedClass}
      loading="eager"
    />
  );
}

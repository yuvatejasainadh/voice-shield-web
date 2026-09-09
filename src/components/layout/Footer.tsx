import React from 'react';
import { PROJECT_CONFIG } from '../../config/project';
import { Link } from 'react-router-dom';
import { VoiceShieldLogo } from '../brand/VoiceShieldLogo';
import { NAVIGATION_LINKS } from '../../config/navigation';

export function Footer() {
  return (
    <footer className="border-t border-[#DCE3EA] bg-white text-xs text-[#5E6E82] mt-auto shrink-0 relative z-10 py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <VoiceShieldLogo className="h-8 w-8" />
          <div>
            <div className="font-bold text-[#13233A] tracking-tight">Voice Shield</div>
            <div className="text-[11px] text-[#7A8798]">AI-Powered Voice Security • SIH {PROJECT_CONFIG.SIH_PROBLEM_STATEMENT}</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium text-[#5E6E82]">
          {NAVIGATION_LINKS.filter(link => link.name !== 'Home').map(link => (
            <Link key={link.name} to={link.path} className="hover:text-[#1F3B64] transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F7F2] text-[#159570] font-semibold border border-[#B4E8D7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#159570] inline-block"></span>
            API Online
          </span>
          <span className="text-[#7A8798]">© Voice Shield</span>
        </div>
      </div>
    </footer>
  );
}


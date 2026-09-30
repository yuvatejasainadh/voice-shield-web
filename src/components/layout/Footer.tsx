import React from 'react';
import { Link } from 'react-router-dom';
import { VoiceShieldLogo } from '../brand/VoiceShieldLogo';
import { FOOTER_NAVIGATION_LINKS } from '../../config/navigation';

export function Footer() {
  return (
    <footer className="border-t border-[#DCE3EA] bg-white text-xs text-[#5E6E82] mt-auto shrink-0 relative z-10 py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <VoiceShieldLogo className="h-9 w-9" />
          <div>
            <div className="font-bold text-sm text-[#13233A] tracking-tight">VOICE SHIELD - AI for a Safer Tomorrow</div>
            <div className="text-[11px] text-[#7A8798]">Real-Time AI-Powered Voice Impersonation Detection, Prevention &amp; Risk Assessment</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-medium text-[#5E6E82]">
          {FOOTER_NAVIGATION_LINKS.map(link => (
            <Link key={link.name} to={link.path} className="hover:text-[#1F3B64] transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs text-[#7A8798]">
          <Link to="/security" className="hover:text-[#1F3B64] transition-colors">
            Security &amp; Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <span>© VOICE SHIELD</span>
        </div>
      </div>
    </footer>
  );
}

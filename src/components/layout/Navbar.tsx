import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { VoiceShieldLogo } from '../brand/VoiceShieldLogo';
import { NAVIGATION_LINKS } from '../../config/navigation';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = NAVIGATION_LINKS;

  return (
    <nav className="border-b border-[#DCE3EA] bg-white/95 backdrop-blur-md z-50 sticky top-0 shadow-xs">
      <div className="h-16 flex items-center justify-between px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <VoiceShieldLogo className="h-9 w-9" />
            <span className="font-bold tracking-tight text-lg sm:text-xl text-[#13233A]">VOICE SHIELD</span>
          </Link>
          
          <div className="hidden md:flex gap-6 text-sm font-semibold text-[#5E6E82] tracking-wide">
            {links.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-1 transition-colors hover:text-[#1F3B64] ${
                    isActive ? 'text-[#1F3B64] font-bold' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1F3B64] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" href="/demo" className="hidden sm:inline-flex">
            Try Demo
          </Button>
          <Button variant="primary" size="sm" href="/download" className="hidden sm:inline-flex">
            Download App
          </Button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#5E6E82] hover:text-[#13233A] border border-[#DCE3EA] bg-[#F7F9FC] rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DCE3EA] bg-white px-4 py-6 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            {links.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#F1F4F8] text-[#1F3B64] font-bold border-l-4 border-[#1F3B64]'
                      : 'text-[#5E6E82] hover:bg-[#F7F9FC] hover:text-[#13233A]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-4 border-t border-[#DCE3EA] flex flex-col gap-2">
            <Button variant="outline" size="md" href="/demo" onClick={() => setMobileMenuOpen(false)} className="w-full justify-center">
              Try Live Demo
            </Button>
            <Button variant="primary" size="md" href="/download" onClick={() => setMobileMenuOpen(false)} className="w-full justify-center">
              Download Android App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}



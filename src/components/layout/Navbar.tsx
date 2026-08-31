import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Demo', path: '/demo' },
    { name: 'Download', path: '/download' },
    { name: 'GitHub', path: '/github' },
    { name: 'Docs', path: '/docs' },
    { name: 'API', path: '/api' },
  ];

  return (
    <nav className="border-b border-slate-800 bg-[#0A0D12]/95 backdrop-blur-md z-50 sticky top-0">
      <div className="h-16 flex items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-6 h-6 bg-cyan-500 rounded-sm flex items-center justify-center shrink-0">
              <div className="w-1 h-3 bg-[#0A0D12]"></div>
            </div>
            <span className="font-bold tracking-tighter text-xl sm:block">VOICE SHIELD</span>
          </Link>
          
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400 uppercase tracking-widest">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-cyan-400 transition-colors ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? 'text-cyan-400 font-bold'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" href="/demo" className="hidden sm:inline-flex rounded-none px-4 py-1.5 border-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100">
            Try Demo
          </Button>
          <Button variant="primary" size="sm" href="/download" className="hidden sm:inline-flex rounded-none px-4 py-1.5 bg-cyan-500 text-[#0A0D12] text-xs font-bold uppercase tracking-wider hover:bg-cyan-400">
            Download App
          </Button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-slate-100 border border-slate-800 bg-slate-900/50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0A0D12] px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm uppercase tracking-widest px-3 py-2 border border-slate-800/60 ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 font-bold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <Button variant="outline" size="sm" href="/demo" onClick={() => setMobileMenuOpen(false)} className="w-full justify-center">
              Try Live Demo
            </Button>
            <Button variant="primary" size="sm" href="/download" onClick={() => setMobileMenuOpen(false)} className="w-full justify-center">
              Download Android App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}


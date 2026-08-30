import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Demo', path: '/demo' },
    { name: 'Download', path: '/download' },
    { name: 'GitHub', path: '/github' },
    { name: 'Docs', path: '/docs' },
    { name: 'API', path: '/api' },
  ];

  return (
    <nav className="h-16 border-b border-slate-800 flex items-center justify-between px-4 sm:px-8 bg-[#0A0D12]/80 backdrop-blur-md z-50 sticky top-0">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-cyan-500 rounded-sm flex items-center justify-center shrink-0">
            <div className="w-1 h-3 bg-[#0A0D12]"></div>
          </div>
          <span className="font-bold tracking-tighter text-xl hidden sm:block">VOICE SHIELD</span>
        </Link>
        
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400 uppercase tracking-widest">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-cyan-400 transition-colors ${
                location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                  ? 'text-cyan-400'
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3">
        <Button variant="outline" size="sm" href="/demo" className="hidden sm:inline-flex rounded-none px-4 py-1.5 border-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 hover:text-slate-100">
          Try Demo
        </Button>
        <Button variant="primary" size="sm" href="/download" className="rounded-none px-4 py-1.5 bg-cyan-500 text-[#0A0D12] text-xs font-bold uppercase tracking-wider hover:bg-cyan-400">
          Download App
        </Button>
      </div>
    </nav>
  );
}

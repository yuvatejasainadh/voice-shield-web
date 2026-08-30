import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  {
    category: 'Overview',
    items: [
      { name: 'Getting Started', path: '/docs' },
      { name: 'Architecture', path: '/docs/architecture' },
    ],
  },
  {
    category: 'System',
    items: [
      { name: 'Backend API', path: '/docs/api' },
      { name: 'Android App', path: '/docs/android' },
      { name: 'ML Pipeline', path: '/docs/ml' },
    ],
  },
  {
    category: 'Reference',
    items: [
      { name: 'Security & Privacy', path: '/security' },
      { name: 'Releases', path: '/releases' },
    ],
  },
];

export function DocSidebar() {
  const location = useLocation();

  return (
    <aside className="w-full md:w-64 flex-shrink-0 border-r border-slate-800 bg-[#0A0D12]/50 p-6 overflow-y-auto">
      {navItems.map((section) => (
        <div key={section.category} className="mb-6">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">
            {section.category}
          </h2>
          <ul className="space-y-2 text-sm uppercase tracking-wider font-bold">
            {section.items.map((item) => {
              const isActive = location.pathname === item.path || 
                (location.pathname.startsWith('/docs') && location.pathname !== '/docs' && item.path === location.pathname);
              // exact match for /docs
              const exactActive = location.pathname === item.path;

              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`transition-colors ${
                      exactActive
                        ? 'text-cyan-500 font-bold'
                        : 'text-slate-400 hover:text-cyan-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}

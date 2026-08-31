import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROJECT_CONFIG } from '../../config/project';
import { ExternalLink, BookOpen, Network, Terminal, Code, Cpu, Lock, Tag } from 'lucide-react';

const navItems = [
  {
    category: 'Overview',
    items: [
      { name: 'Getting Started', path: '/docs' },
      { name: 'Architecture', path: '/docs/architecture' },
    ],
  },
  {
    category: 'System Modules',
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
      { name: 'Android Releases', path: '/releases' },
    ],
  },
];

export function DocSidebar() {
  const location = useLocation();

  return (
    <aside className="w-full md:w-64 flex-shrink-0 border-b md:border-b-0 md:border-r border-[#DCE3EA] bg-[#F7F9FC] p-6 overflow-y-auto">
      {navItems.map((section) => (
        <div key={section.category} className="mb-6">
          <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-2.5">
            {section.category}
          </h2>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const exactActive = location.pathname === item.path;

              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                      exactActive
                        ? 'bg-[#1F3B64] text-white shadow-xs'
                        : 'text-[#5E6E82] hover:bg-[#EAEFF6] hover:text-[#13233A]'
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

      <div className="mb-6 pt-5 border-t border-[#DCE3EA]">
        <h2 className="text-xs font-bold text-[#7A8798] uppercase tracking-wider mb-2.5">
          Source Code
        </h2>
        <ul className="space-y-1.5 text-xs font-medium">
          <li>
            <a
              href={PROJECT_CONFIG.repositories.android}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5E6E82] hover:text-[#1F3B64] transition-colors flex items-center justify-between px-3 py-1.5 rounded-md hover:bg-[#EAEFF6]"
            >
              <span>Android Repo</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </li>
          <li>
            <a
              href={PROJECT_CONFIG.repositories.api}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5E6E82] hover:text-[#1F3B64] transition-colors flex items-center justify-between px-3 py-1.5 rounded-md hover:bg-[#EAEFF6]"
            >
              <span>API Repo</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </li>
          <li>
            <a
              href={PROJECT_CONFIG.repositories.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5E6E82] hover:text-[#1F3B64] transition-colors flex items-center justify-between px-3 py-1.5 rounded-md hover:bg-[#EAEFF6]"
            >
              <span>Docs Repo</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}


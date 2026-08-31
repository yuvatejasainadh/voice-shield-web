import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#13233A] flex flex-col font-sans selection:bg-[#1F3B64]/15 relative">
      <Navbar />
      <main className="flex-grow z-10 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}


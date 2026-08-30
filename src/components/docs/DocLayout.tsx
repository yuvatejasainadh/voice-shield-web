import React from 'react';
import { Layout } from '../layout/Layout';
import { DocSidebar } from './DocSidebar';

export function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
        <DocSidebar />
        <main className="flex-grow p-6 lg:p-12 max-w-4xl">
          {children}
        </main>
      </div>
    </Layout>
  );
}

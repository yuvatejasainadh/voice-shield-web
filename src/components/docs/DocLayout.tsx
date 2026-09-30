import React from 'react';
import { Layout } from '../layout/Layout';
import { DocSidebar } from './DocSidebar';

export function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full">
        <DocSidebar />
        <div className="flex-1 p-6 sm:p-8 lg:p-12 overflow-y-auto">
          <div className="max-w-4xl mx-auto">{children}</div>
        </div>
      </div>
    </Layout>
  );
}

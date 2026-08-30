import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { AlertTriangle, Home, BookOpen, Terminal } from 'lucide-react';

export function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-6 text-center">
        <AlertTriangle className="w-20 h-20 text-cyan-500 mb-8" />
        <h1 className="text-6xl font-bold text-slate-100 tracking-tighter uppercase mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-300 tracking-wider uppercase mb-8">Page Not Found</h2>
        <p className="text-slate-400 max-w-md mb-12">
          The requested Voice Shield page does not exist. It may have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/" variant="primary">
            <Home className="w-4 h-4 mr-2" />
            BACK TO HOME
          </Button>
          <Button href="/docs" variant="outline">
            <BookOpen className="w-4 h-4 mr-2" />
            DOCUMENTATION
          </Button>
          <Button href="/demo" variant="outline">
            <Terminal className="w-4 h-4 mr-2" />
            TRY DEMO
          </Button>
        </div>
      </div>
    </Layout>
  );
}

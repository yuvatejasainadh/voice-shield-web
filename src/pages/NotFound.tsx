import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { AlertCircle, Home, BookOpen, Terminal } from 'lucide-react';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] p-6 text-center">
        <VoiceShieldLogo className="h-16 w-16 mb-4" />
        <h1 className="text-5xl font-bold text-[#13233A] tracking-tight mb-2">404</h1>
        <h2 className="text-xl font-bold text-[#1F3B64] mb-3">Page Not Found</h2>
        <p className="text-sm text-[#5E6E82] max-w-md mb-8">
          The requested Voice Shield portal page does not exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/" variant="primary">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button href="/docs" variant="outline">
            <BookOpen className="w-4 h-4 mr-2" />
            Documentation
          </Button>
          <Button href="/demo" variant="outline">
            <Terminal className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </div>
      </div>
    </Layout>
  );
}


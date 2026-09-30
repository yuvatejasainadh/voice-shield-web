import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { VoiceShieldLogo } from '../components/brand/VoiceShieldLogo';

export function NotFound() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <VoiceShieldLogo className="h-14 w-14 mx-auto mb-4" />
        <div className="text-xs font-bold text-[#1F3B64] uppercase tracking-wider mb-2">
          VOICE SHIELD - AI for a Safer Tomorrow
        </div>
        <h1 className="text-3xl font-extrabold text-[#13233A] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[#5E6E82] mb-8 max-w-md mx-auto">
          The requested route does not exist on the VOICE SHIELD platform. Use the links below to return to the product overview or documentation.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="primary" size="md" href="/">
            Return to Home
          </Button>
          <Button variant="outline" size="md" href="/docs">
            Documentation
          </Button>
        </div>
      </div>
    </Layout>
  );
}

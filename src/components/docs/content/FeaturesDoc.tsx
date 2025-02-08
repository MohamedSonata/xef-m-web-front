'use client';
import React from 'react';
import { Alert } from '@/components/ui/Alert';

export default function FeaturesDoc() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Xefro Mirror Features</h2>
      <Alert variant="info">
        Discover the powerful features that make Xefro Mirror unique
      </Alert>
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Screen Mirroring</h3>
          <p>High-quality, low-latency screen mirroring across devices.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-4">Cross-Platform Support</h3>
          <p>Works seamlessly across iOS, Android, Windows, and macOS.</p>
        </section>
      </div>
    </div>
  );
} 
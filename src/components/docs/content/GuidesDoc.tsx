'use client';
import React from 'react';
import { Alert } from '@/components/ui/Alert';

export default function GuidesDoc() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">User Guides</h2>
      <Alert variant="info">
        Step-by-step guides to help you get the most out of Xefro Mirror
      </Alert>
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Basic Setup</h3>
          <p>Learn how to set up Xefro Mirror for the first time.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-4">Advanced Configuration</h3>
          <p>Discover advanced settings and customization options.</p>
        </section>
      </div>
    </div>
  );
} 
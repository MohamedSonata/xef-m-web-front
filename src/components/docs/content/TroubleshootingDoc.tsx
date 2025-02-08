'use client';
import React from 'react';
import { Alert } from '@/components/ui/Alert';

export default function TroubleshootingDoc() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Troubleshooting Guide</h2>
      <Alert variant="warning">
        Common issues and their solutions
      </Alert>
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Connection Issues</h3>
          <p>Solutions for common connectivity problems.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
          <p>Tips for improving mirroring performance.</p>
        </section>
      </div>
    </div>
  );
} 
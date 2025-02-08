'use client';
import React from 'react';
import { Alert } from '@/components/ui/Alert';

export default function PerformanceDoc() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">PerformanceDoc Guide</h2>
      <Alert variant="info">
        Learn how to PerformanceDoc files between devices using Xefro Mirror
      </Alert>
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Basic PerformanceDoc</h3>
          <p>Simple steps to PerformanceDoc files between your devices.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-4">Advanced Features</h3>
          <p>Discover advanced file PerformanceDoc capabilities.</p>
        </section>
      </div>
    </div>
  );
} 
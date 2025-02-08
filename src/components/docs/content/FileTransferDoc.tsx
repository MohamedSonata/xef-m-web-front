'use client';
import React from 'react';
import { Alert } from '@/components/ui/Alert';

export default function FileTransferDoc() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">File Transfer Guide</h2>
      <Alert variant="info">
        Learn how to transfer files between devices using Xefro Mirror
      </Alert>
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Basic Transfer</h3>
          <p>Simple steps to transfer files between your devices.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-4">Advanced Features</h3>
          <p>Discover advanced file transfer capabilities.</p>
        </section>
      </div>
    </div>
  );
} 
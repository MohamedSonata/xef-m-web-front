'use client';
import React from 'react';
import { Alert } from '@/components/ui/Alert';
import { DocCard } from '@/components/docs/DocCard';


const gettingStartedDocs = [
  {
    title: 'Installation',
    description: 'Learn how to install Xefro Mirror on your devices',
    href: '/documentation/installation'
  },
  {
    title: 'Quick Start',
    description: 'Get up and running with Xefro Mirror in minutes',
    href: '/documentation/quick-start'
  },
  {
    title: 'Basic Configuration',
    description: 'Configure Xefro Mirror for optimal performance',
    href: '/documentation/configuration'
  },
  {
    title: 'System Requirements',
    description: 'Check if your devices meet the requirements',
    href: '/documentation/requirements'
  }
];

export default function GettingStartedDoc() {
  return (
    <>
      <div className="space-y-6">
        <div className="border-b border-white/10 pb-8">
          <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Everything you need to know to get started with Xefro Mirrorfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </p>
        </div>

        <Alert variant="info">
          Welcome to Xefro Mirror! Let&apos;s get you set up with the basics.
        </Alert>

        <div className="grid gap-6 md:grid-cols-2">
          {gettingStartedDocs.map((doc) => (
            <DocCard 
              key={doc.href}
              title={doc.title}
              description={doc.description}
              href={doc.href}
            />
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none mt-12">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p>
            Xefro Mirror allows you to seamlessly mirror and control your devices. 
            Follow our getting started guides to learn about all the features and capabilities.
          </p>
          
          <h3>What&apos;s Next?</h3>
          <p>
            After installation, check out our features section to learn about:
          </p>
          <ul>
            <li>Screen Mirroring</li>
            <li>Device Control</li>
            <li>File Transfer</li>
            <li>Advanced Settings</li>
          </ul>
        </div>
      </div>
    </>
  );
} 
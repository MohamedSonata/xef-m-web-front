import React from 'react';
import { DocLayout } from '../DocLayout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Alert } from '@/components/ui/Alert';

export default function ScreenMirroringDoc() {
  return (
    <>
      title="Screen Mirroring"
      description="Learn how to use Xefro Mirror's screen mirroring features"
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Getting Started with Screen Mirroring</h2>
        
        <Alert variant="info">
          Make sure both devices are connected to the same network.
        </Alert>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Basic Setup</h3>
          <p>Follow these steps to start mirroring your screen:</p>
          
          <CodeBlock language="bash">
            xefro connect --device "iPhone 13"
          </CodeBlock>
        </div>

        {/* Interactive demo component */}
      
      </section>
    </>
  );
} 
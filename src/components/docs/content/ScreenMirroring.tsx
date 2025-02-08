'use client';
import React from 'react';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Alert } from '@/components/ui/Alert';

// Custom component to handle metadata
const Metadata = ({ title, description }: { title: string; description: string }) => {
  React.useEffect(() => {
    document.title = title;
    // You can handle description with a meta tag if needed
  }, [title, description]);

  return null;
};

export default function ScreenMirroringDoc() {
  return (
    <>
      <Metadata
        title="Screen Mirroring"
        description="Learn how to use Xefro Mirror's screen mirroring features"
      />
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Getting Started with Screen Mirroring</h2>

        <Alert variant="info">
          Make sure both devices are connected to the same network.
        </Alert>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Basic Setup</h3>
          <p>Follow these steps to start mirroring your screen:</p>
          
          <CodeBlock language="bash">
            xefro connect --device &quot;iPhone 13&quot;
          </CodeBlock>
        </div>

        {/* Interactive demo component */}
      
      </section>
    </>
  );
} 
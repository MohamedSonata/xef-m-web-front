'use client';

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--background)',
            color: 'var(--text-primary)',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
          success: {
            style: {
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgb(34, 197, 94)',
            },
            icon: '✅',
          },
          error: {
            style: {
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgb(239, 68, 68)',
            },
            icon: '❌',
          },
        }}
      />
    </QueryClientProvider>
  );
} 
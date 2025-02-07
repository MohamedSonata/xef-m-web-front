import { ComponentType } from 'react';

export interface DocSection {
  title: string;
  description: string;
  component: ComponentType;
  metadata: {
    lastUpdated: string;
    author: string;
    tags: string[];
  };
  htmlContent?: string; // For backward compatibility
}

export interface Doc {
  slug: string;
  title: string;
  description: string;
  htmlContent: string;
} 
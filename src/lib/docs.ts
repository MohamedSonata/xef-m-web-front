/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from 'fs';
import path from 'path';



import ScreenMirroringDoc from '@/components/docs/content/ScreenMirroring';
import GettingStartedDoc from '@/components/docs/content/GettingStarted';
import FeaturesDoc from '@/components/docs/content/FeaturesDoc';
import GuidesDoc from '@/components/docs/content/GuidesDoc';
import TroubleshootingDoc from '@/components/docs/content/TroubleshootingDoc';
import PlaceholderDoc from '@/components/docs/content/PlaceholderDoc';
import { ComponentType } from 'react';

// Define base directory for docs
const baseDir = process.cwd();
const docsDirectory = path.join(baseDir, 'src/content/docs');

// Add validation for docs directory
function ensureDocsDirectory() {
  if (!fs.existsSync(docsDirectory)) {
    fs.mkdirSync(docsDirectory, { recursive: true });
  }
}

// Initialize docs directory
ensureDocsDirectory();

// Define valid slugs
const VALID_SLUGS = [
  'getting-started',
  'screen-mirroring',
  'features',
  'guides',
  'troubleshooting',
  'quick-start',
  'installation',
  'configuration',
  'faq'
];

export interface DocType {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  component: ComponentType;
}

export const docs: Record<string, DocType> = {
  'getting-started': {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Learn how to get started with Xefro Mirror',
    lastUpdated: '2024-03-20',
    component: GettingStartedDoc
  },
  'screen-mirroring': {
    slug: 'screen-mirroring',
    title: 'Screen Mirroring',
    description: 'Learn how to mirror your device screen',
    lastUpdated: '2024-03-20',
    component: ScreenMirroringDoc
  },
  'features': {
    slug: 'features',
    title: 'Features',
    description: 'Explore Xefro Mirror features',
    lastUpdated: '2024-03-20',
    component: FeaturesDoc
  },
  'guides': {
    slug: 'guides',
    title: 'Guides',
    description: 'Detailed guides for Xefro Mirror',
    lastUpdated: '2024-03-20',
    component: GuidesDoc
  },
  'troubleshooting': {
    slug: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions',
    lastUpdated: '2024-03-20',
    component: TroubleshootingDoc
  }
};

const docsCache = new Map();

// Add error logging
function logError(error: unknown, context: string) {
  console.error(`[${process.env.NODE_ENV}] Error in ${context}:`, error);
  // You could add production-specific error handling here
}

export const getDocBySlug = async (slug: string): Promise<DocType> => {
  const doc = docs[slug];
  if (!doc) {
    return {
      slug,
      title: slug.charAt(0).toUpperCase() + slug.slice(1),
      description: 'Documentation coming soon',
      lastUpdated: new Date().toISOString(),
      component: PlaceholderDoc
    };
  }
  return doc;
};

export async function getAllDocs(): Promise<DocType[]> {
  return Object.values(docs);
}

// const docsCache = new Map();

// export async function getDocBySlug(slug: string) {
//   if (docsCache.has(slug)) {
//     return docsCache.get(slug);
//   }

//   const docPath = join(process.cwd(), 'content', 'docs', `${slug}.json`);
//   const doc = JSON.parse(readFileSync(docPath, 'utf8'));
//   docsCache.set(slug, doc);
//   return doc;
// } 

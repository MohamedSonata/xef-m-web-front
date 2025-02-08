
import { ComponentType } from 'react';
import ScreenMirroringDoc from '@/components/docs/content/ScreenMirroring';
import GettingStartedDoc from '@/components/docs/content/GettingStarted';
import FeaturesDoc from '@/components/docs/content/FeaturesDoc';
import GuidesDoc from '@/components/docs/content/GuidesDoc';
import TroubleshootingDoc from '@/components/docs/content/TroubleshootingDoc';
import PlaceholderDoc from '@/components/docs/content/PlaceholderDoc';

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

export const getDocBySlug = async (slug: string): Promise<DocType> => {
  const doc = docs[slug];
  if (!doc) {
    console.warn(`[${process.env.NODE_ENV}] Doc not found for slug: ${slug}, using placeholder`);
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

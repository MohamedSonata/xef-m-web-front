import { ComponentType } from 'react';
import { DOC_ROUTES, type DocRoute } from '@/constants/routes';
import ScreenMirroringDoc from '@/components/docs/content/ScreenMirroring';
import GettingStartedDoc from '@/components/docs/content/GettingStarted';
import FeaturesDoc from '@/components/docs/content/FeaturesDoc';
import GuidesDoc from '@/components/docs/content/GuidesDoc';
import TroubleshootingDoc from '@/components/docs/content/TroubleshootingDoc';
import FileTransferDoc from '@/components/docs/content/FileTransferDoc';
import DeviceControlDoc from '@/components/docs/content/DeviceControlDoc';
import PerformanceDoc from '@/components/docs/content/PerformanceDoc';
import PlaceholderDoc from '@/components/docs/content/PlaceholderDoc';

export interface DocType {
  slug: DocRoute;
  title: string;
  description: string;
  lastUpdated: string;
  component: ComponentType;
}

export const docs: Record<DocRoute, DocType> = {
  'getting-started': {
    slug: 'getting-started',
    title: DOC_ROUTES['getting-started'].label,
    description: DOC_ROUTES['getting-started'].description,
    lastUpdated: '2024-03-20',
    component: GettingStartedDoc
  },
  'screen-mirroring': {
    slug: 'screen-mirroring',
    title: DOC_ROUTES['screen-mirroring'].label,
    description: DOC_ROUTES['screen-mirroring'].description,
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
  },
  'file-transfer': {
    slug: 'file-transfer',
    title: 'File Transfer',
    description: 'Learn how to transfer files between devices',
    lastUpdated: '2024-03-20',
    component: FileTransferDoc
  },
  'device-control': {
    slug: 'device-control',
    title: 'Device Control',
    description: 'Learn how to control your devices remotely',
    lastUpdated: '2024-03-20',
    component: DeviceControlDoc
  },
  'performance': {
    slug: 'performance',
    title: 'Performance',
    description: 'Optimize your Xefro Mirror performance',
    lastUpdated: '2024-03-20',
    component: PerformanceDoc
  }
};

export const getDocBySlug = async (slug: string): Promise<DocType> => {
  if (!Object.keys(DOC_ROUTES).includes(slug)) {
    return {
      slug: slug as DocRoute,
      title: '404 - Page Not Found',
      description: 'This documentation page does not exist',
      lastUpdated: new Date().toISOString(),
      component: PlaceholderDoc
    };
  }

  return docs[slug as DocRoute];
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

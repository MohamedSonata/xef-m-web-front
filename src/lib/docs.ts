import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { DocSection, Doc } from './docs/types';
import ScreenMirroringDoc from '@/components/docs/content/ScreenMirroring';
import GettingStartedDoc from '@/components/docs/content/GettingStarted';

const docsDirectory = path.join(process.cwd(), 'src/content/docs');

export interface DocType {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  content: string;
  htmlContent: string;
}

export const docs: Record<string, DocSection> = {
  'getting-started': {
    title: 'Getting Started',
    description: 'Learn how to get started with Xefro Mirror',
    component: GettingStartedDoc,
    metadata: {
      lastUpdated: '2024-03-20',
      author: 'Team Xefro',
      tags: ['basics']
    }
  },
  'screen-mirroring': {
    title: 'Screen Mirroring',
    description: 'Learn how to mirror your device screen',
    component: ScreenMirroringDoc,
    metadata: {
      lastUpdated: '2024-03-20',
      author: 'Team Xefro',
      tags: ['features', 'mirroring']
    }
  }
};

export async function getAllDocs(): Promise<DocType[]> {
  // Read all .md files from the docs directory
  const fileNames = await fs.promises.readdir(docsDirectory);
  
  const allDocs = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(docsDirectory, fileName);
        const fileContents = await fs.promises.readFile(fullPath, 'utf8');
        
        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);
        
        return {
          slug,
          title: data.title || slug,
          description: data.description || '',
          lastUpdated: data.lastUpdated || new Date().toISOString(),
          content,
          htmlContent: marked(content)
        };
      })
  );

  return allDocs;
}

export async function getDocBySlug(slug: string): Promise<DocType> {
  const fullPath = path.join(docsDirectory, `${slug}.md`);
  const fileContents = await fs.promises.readFile(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    lastUpdated: data.lastUpdated || new Date().toISOString(),
    content,
    htmlContent: marked(content)
  };
} 

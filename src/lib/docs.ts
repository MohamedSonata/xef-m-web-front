/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { DocSection } from './docs/types';
import { cache } from 'react';
import ScreenMirroringDoc from '@/components/docs/content/ScreenMirroring';
import GettingStartedDoc from '@/components/docs/content/GettingStarted';

const docsDirectory = path.join(process.cwd(), process.env.DOCS_DIRECTORY || 'src/content/docs');

export interface DocType {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  content: string;
  htmlContent: string;
  component?: React.ComponentType;
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

const docsCache = new Map();

// Add error logging
function logError(error: unknown, context: string) {
  console.error(`[${process.env.NODE_ENV}] Error in ${context}:`, error);
  // You could add production-specific error handling here
}

export const getDocBySlug = cache(async (slug: string): Promise<DocType> => {
  try {
    if (docsCache.has(slug)) {
      return docsCache.get(slug);
    }

    let doc: DocType;
    const staticDoc = docs[slug];
    const mdPath = path.join(docsDirectory, `${slug}.md`);

    // Try to get markdown content if it exists
    let markdownContent = '';
    let markdownHtml = '';
    if (fs.existsSync(mdPath)) {
      const fileContents = await fs.promises.readFile(mdPath, 'utf8');
      const { content } = matter(fileContents);
      markdownContent = content;
      markdownHtml = await marked(content);
    }

    if (staticDoc) {
      // Combine static doc with markdown content if available
      doc = {
        slug,
        title: staticDoc.title,
        description: staticDoc.description,
        lastUpdated: staticDoc.metadata.lastUpdated,
        content: markdownContent || '',
        htmlContent: markdownHtml || '',
        component: staticDoc.component
      };
    } else if (markdownContent) {
      // Markdown-only doc
      const { data } = matter(await fs.promises.readFile(mdPath, 'utf8'));
      doc = {
        slug,
        title: data.title || slug,
        description: data.description || '',
        lastUpdated: data.lastUpdated || new Date().toISOString(),
        content: markdownContent,
        htmlContent: markdownHtml
      };
    } else {
      throw new Error(`Doc not found for slug: ${slug}`);
    }

    docsCache.set(slug, doc);
    return doc;
  } catch (error) {
    logError(error, `getDocBySlug(${slug})`);
    throw error;
  }
});

export async function getAllDocs(): Promise<DocType[]> {
  try {
    const docsMap = new Map<string, DocType>();

    // Process all markdown files
    if (fs.existsSync(docsDirectory)) {
      const mdFiles = await fs.promises.readdir(docsDirectory);
      await Promise.all(
        mdFiles
          .filter(fileName => fileName.endsWith('.md'))
          .map(async fileName => {
            const slug = fileName.replace(/\.md$/, '');
            try {
              const doc = await getDocBySlug(slug);
              docsMap.set(slug, doc);
            } catch (error) {
              console.error(`Error processing markdown file ${fileName}:`, error);
            }
          })
      );
    }

    // Add or update static docs
    for (const [slug, staticDoc] of Object.entries(docs)) {
      const existingDoc = docsMap.get(slug);
      docsMap.set(slug, {
        ...existingDoc,
        slug,
        title: staticDoc.title,
        description: staticDoc.description,
        lastUpdated: staticDoc.metadata.lastUpdated,
        component: staticDoc.component,
        content: existingDoc?.content || '',
        htmlContent: existingDoc?.htmlContent || ''
      });
    }

    return Array.from(docsMap.values());
  } catch (error) {
    console.error('Error getting all docs:', error);
    return Object.entries(docs).map(([slug, doc]) => ({
      slug,
      title: doc.title,
      description: doc.description,
      lastUpdated: doc.metadata.lastUpdated,
      content: '',
      htmlContent: '',
      component: doc.component
    }));
  }
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

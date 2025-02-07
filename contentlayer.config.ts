// import { defineDocumentType, makeSource } from 'contentlayer/source-files';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypeSlug from 'rehype-slug';

// export const Doc = defineDocumentType(() => ({
//   name: 'Doc',
//   filePathPattern: 'docs/**/*.mdx',
//   contentType: 'mdx',
//   fields: {
//     title: { type: 'string', required: true },
//     description: { type: 'string', required: true },
//     lastUpdated: { type: 'date', required: true },
//   },
//   computedFields: {
//     slug: {
//       type: 'string',
//       resolve: (doc: { _raw: { sourceFileName: string; }; }) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
//     },
//   },
// }));

// export default makeSource({
//   contentDirPath: 'src/content',
//   documentTypes: [Doc],
//   mdx: {
//     rehypePlugins: [
//       rehypeSlug,
//       [rehypeAutolinkHeadings, { behavior: 'wrap' }],
//     ],
//   },
// }); 
import createMDX from '@next/mdx'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
  env: {
    DOCS_DIRECTORY: process.env.DOCS_DIRECTORY || 'src/content/docs',
    CACHE_DURATION: process.env.CACHE_DURATION || '3600',
  },
  async headers() {
    return [
      {
        source: '/documentation/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}

export default withMDX(nextConfig) 

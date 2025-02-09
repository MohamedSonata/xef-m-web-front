/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
  generateStaticParams: true,
  env: {
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

export default nextConfig 

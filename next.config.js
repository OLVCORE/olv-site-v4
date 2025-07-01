/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/solucoes',
        destination: '/solucoes',
      }
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          }
        ]
      }
    ];
  },
  experimental: {
    optimizeCss: true
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7 // 7 days
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });

module.exports = withBundleAnalyzer(nextConfig); 
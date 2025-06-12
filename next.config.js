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
};

module.exports = nextConfig; 
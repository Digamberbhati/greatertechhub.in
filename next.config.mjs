/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'greatertechhub.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Add more patterns as needed
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
};

export default nextConfig;

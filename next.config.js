/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'api.unsplash.com'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

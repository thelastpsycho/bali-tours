import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dsf.my',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'radarbanyumas.disway.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'toyotanigeria.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '2024toyota.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

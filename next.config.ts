import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ['http://192.168.1.17:3000', 'http://localhost:3000'], // replace with your IP
  },
};

export default nextConfig;

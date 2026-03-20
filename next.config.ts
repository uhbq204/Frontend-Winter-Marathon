import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:3200/uploads/:path*'
      }
    ]
  },
  images: {
    remotePatterns: []
  }
}

export default nextConfig;

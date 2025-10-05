import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip favicon processing to avoid ICO errors
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;

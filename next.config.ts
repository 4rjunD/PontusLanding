import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Commented out for development server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Static export for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
  },
  basePath: '',  // Empty for root domain, or '/repo-name' for subdirectory
  trailingSlash: true,
};

export default nextConfig;

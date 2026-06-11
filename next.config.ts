import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray lockfile in a parent
  // directory can otherwise make Next infer the wrong root for file tracing.
  turbopack: {
    root: import.meta.dirname,
  },
  // Slightly stronger compression for the optimized image cache.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

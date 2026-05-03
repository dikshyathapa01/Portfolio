import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "docs",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

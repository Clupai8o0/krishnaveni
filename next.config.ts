import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      }
    ]
  }
};

export default nextConfig;

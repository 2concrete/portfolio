import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn2.thecatapi.com/**")],
  },
  async rewrites() {
    return [{ source: "/resume", destination: "/resume/index.html" }];
  },
};

export default nextConfig;

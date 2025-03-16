import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  reactStrictMode: false,
  compiler: {
    reactRemoveProperties: true,
  },
};

export default nextConfig;

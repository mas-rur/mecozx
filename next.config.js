const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
      },
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
      },
    ],
  },
  webpack: (config) => {
    // Ensure the "@/..." path alias resolves during the production build.
    // Some build environments do not honor the tsconfig "paths" aliases, so we
    // define it explicitly here to guarantee module resolution works.
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;

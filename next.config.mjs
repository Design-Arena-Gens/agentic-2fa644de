/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["recharts", "framer-motion", "next-themes"]
  }
};

export default nextConfig;

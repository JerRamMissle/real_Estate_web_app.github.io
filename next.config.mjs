// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
    unoptimized: true, // This disables image optimization (if you still want to optimize images in development or SSR, remove this)
  },
};

export default nextConfig;

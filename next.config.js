/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
    unoptimized: true, // This disables the image optimization for static export
  },
};

// CommonJS export syntax
module.exports = nextConfig;

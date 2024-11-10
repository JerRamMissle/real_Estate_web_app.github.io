/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/real_Estate_web_app.github.io", // Replace with the actual repository name
  assetPrefix: "/real_Estate_web_app.github.io/",
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
    unoptimized: true, // This disables the image optimization for static export
  },
};

// CommonJS export syntax
module.exports = nextConfig;

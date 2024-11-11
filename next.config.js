/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures the app is prepared for static export
  basePath: "/real_Estate_web_app.github.io", // Match this with your GitHub repo name
  assetPrefix: "/real_Estate_web_app.github.io/", // Correct for deployment on GitHub Pages
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
    unoptimized: true, // Disable image optimization for static export
  },
};

module.exports = nextConfig;

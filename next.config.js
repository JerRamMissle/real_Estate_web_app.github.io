/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  reactStrictMode: true,
  basePath: "/real_Estate_web_app.github.io",
  assetPrefix: "/real_Estate_web_app.github.io/",
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
    unoptimized: true,
  },
  // Disable Static Export if you don't need it
  // Remove this if you're not specifically trying to export as static
  output: "standalone",
};

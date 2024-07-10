/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output: "export",
  basePath: "/my-web",
  assetPrefix: "/my-web/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

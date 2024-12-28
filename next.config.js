/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/imshaiknasir.github.io",
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

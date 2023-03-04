/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true

  },
  reactStrictMode: true,
  env: {
    mongodburl: 'mongodb://localhost:/algorithmsdb'
  }
}

module.exports = nextConfig

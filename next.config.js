/** @type {import('next').NextConfig} */
const nextConfig = {

  async redirects () {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      },
      {
        source: '/profile/',
        destination: '/profile/user/me',
        permanent: true
      }
    ]
  },
  experimental: {
    appDir: true

  },
  reactStrictMode: true,
  env: {
    mongodburl: 'mongodb://localhost:/algorithmsdb'
  }
}

module.exports = nextConfig

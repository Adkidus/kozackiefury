/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'api.kozackiefury.pl']
  },
  env: {
    apiURL: 'http://localhost:5001/',
  },
}

module.exports = nextConfig

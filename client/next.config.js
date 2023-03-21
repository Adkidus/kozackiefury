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
    apiURL: 'https://api.kozackiefury.pl/',
  },
}

module.exports = nextConfig

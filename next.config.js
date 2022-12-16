/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    id: '733784038199918683',
    cdnURL: 'https://cdn.discordapp.com'
  },
  images: {
    domains: ['cdn.discordapp.com'],
  }
}

module.exports = nextConfig;

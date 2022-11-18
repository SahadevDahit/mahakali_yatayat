/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experiment: {
    appDir: true,
    trailingSlash: true,
  },
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL
  }

}

module.exports = nextConfig
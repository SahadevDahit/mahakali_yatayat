// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    trailingSlash: true,
    appDir: true,
    allowMiddlewareResponseBody: true,
  },
  env: {
    NEXT_PUBLIC_URL: 'https://backend.mahakaliyatayat.com'
  }

}

module.exports = nextConfig
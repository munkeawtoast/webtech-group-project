/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/category',
        permanent: true
      }
    ]
  },
  reactStrictMode: false, // เราสูญเสียไปแคไหนเพราะบรรทัดนี้ยรรทัดเดียว
  swcMinify: true,
}

module.exports = nextConfig

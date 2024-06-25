/** @type {import('next').NextConfig} */
import withOffline from 'next-offline'

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    return config
  },
}

export default withOffline(nextConfig);

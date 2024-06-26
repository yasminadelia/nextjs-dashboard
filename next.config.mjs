/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA({
  dest: 'public',
  register: true,
  disable: false,
})(nextConfig);
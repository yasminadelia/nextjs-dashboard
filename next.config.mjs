/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,            
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development"
  }
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // disable: false,
  register: true,
  // skipWaiting: true,    
})(nextConfig);
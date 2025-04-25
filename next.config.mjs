/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  
  // Suppress hydration warnings from browser extensions
  reactStrictMode: false,
  suppressHydrationWarning: true,
};

export default nextConfig;

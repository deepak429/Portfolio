/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static HTML export
  output: "export",

  // Disables ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ignores TypeScript errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
       
      },
    ],
  },
};

export default nextConfig;

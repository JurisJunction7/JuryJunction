/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/pages',
        destination: 'http://localhost:3000',
      },
    ]
  },
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages:["mongoose"],
    }
  }
  
  export default nextConfig;
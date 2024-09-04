// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  reactStrictMode: true,
    images: {

      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  
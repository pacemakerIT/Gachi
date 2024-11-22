/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wypnfvytxxfvyxnuicnn.supabase.co',
        pathname: '/storage/v1/object/sign/**',
      },
    ],
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;

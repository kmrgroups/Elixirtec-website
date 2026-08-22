/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' }
    ]
  },
  experimental: {
    serverActions: { bodySizeLimit: '25mb' } // allow RFQ file uploads (drawings, STEP/DXF, etc.)
  }
};

module.exports = nextConfig;

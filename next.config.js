/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  images: {
    // Already unoptimized — required for static export.
    // This means all image caching is handled by your CDN/host, not Next.js.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Force the browser and CDN to always revalidate static assets.
  // Without this, Vercel/Netlify/S3 can serve stale images for hours/days
  // after a new deploy — which is exactly why incognito shows old images.
  async headers() {
    return [
      {
        // Target all files in your /images/ public folder
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            // no-cache  → browser MUST revalidate before using cached copy
            // max-age=0 → treat cached copy as immediately stale
            // must-revalidate → CDN must also revalidate before serving
            value: 'no-cache, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for hosting on Render
  output: 'export',
  
  // Add trailing slash for better static hosting compatibility
  trailingSlash: false,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // App Router configuration
  experimental: {
    typedRoutes: true,
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Security headers (static export compatible)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // SEO and metadata optimization
  generateEtags: true,
};

module.exports = nextConfig;
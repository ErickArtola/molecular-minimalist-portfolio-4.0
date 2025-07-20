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
  
  // Security headers removed as they're not compatible with static exports
  // For static hosting, configure these headers in your hosting platform

  // SEO and metadata optimization
  generateEtags: true,
};

module.exports = nextConfig;
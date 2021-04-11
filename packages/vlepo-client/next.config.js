/* eslint-disable */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    domains: [
      'placeholder.pics',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'lh1.googleusercontent.com',
      'lh2.googleusercontent.com',
      'lh3.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh6.googleusercontent.com',
      'lh7.googleusercontent.com',
      'lh8.googleusercontent.com',
      'lh9.googleusercontent.com',
      'localhost',
    ],
  },
  future: {
    webpack5: true,
  },
  pageExtensions: ['tsx'],
  // Proxy to Backend
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/:path*`,
      },
      {
        source: '/graphql/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql/:path*`,
      },
      {
        source: '/images/user-upload/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/images/user-upload/:path*`,
      },
    ];
  },
});

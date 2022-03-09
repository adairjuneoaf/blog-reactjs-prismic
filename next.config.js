/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['images.prismic.io'],
  },
};

module.exports = nextConfig;

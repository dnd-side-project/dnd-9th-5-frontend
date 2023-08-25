const withPWA = require('next-pwa');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  reactStrictMode: true,
  configurationimages: {
    domains: ['posepicker-image.s3.ap-northeast-2.amazonaws.com'],
  },
};

const nextConfig = withPWA({
  dest: 'public',
  // disable: !isProduction,
  runtimeCaching: [],
})(config);

module.exports = nextConfig;

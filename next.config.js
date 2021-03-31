module.exports = {
  images: {
    domains: ['image.tmdb.org', 'pbs.twimg.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  functions: {
    "api/auth/[...nextauth]": {
      maxDuration: 30,
    },
  },
};

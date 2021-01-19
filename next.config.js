var path = require("path");
const withPWA = require("next-pwa");

const settings = {
  resolve: {
    modules: ["node_modules", "js"],
    alias: {
      "mapbox-gl": path.resolve("./node_modules/mapbox-gl/dist/mapbox-gl.js"),
    },
  },

  functions: {
    "api/auth/[...nextauth]": {
      maxDuration: 30,
    },
  },
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: "public",
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);

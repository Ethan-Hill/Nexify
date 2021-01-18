var path = require("path");
module.exports = {
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
};

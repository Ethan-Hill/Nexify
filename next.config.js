const withProgressBar = require("next-progressbar");

module.exports = withProgressBar({
  functions: {
    "api/auth/[...nextauth]": {
      maxDuration: 30,
    },
  },
});

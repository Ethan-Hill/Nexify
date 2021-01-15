module.exports = {
  functions: {
    "api/auth/[...nextauth]": {
      maxDuration: 30,
    },
  },
};

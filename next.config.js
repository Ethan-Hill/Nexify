const withPWA = require("next-pwa")
const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")

const settings = {
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
    register: true,
    scope: "/",
    publicExcludes: ["!robots.txt", "!sitemap.xml.gz"],
  },

  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(
              __dirname,
              "node_modules/@shoelace-style/shoelace/dist/shoelace/icons"
            ),
            to: path.resolve(__dirname, "static/icons"),
          },
        ],
      })
    )
    return config
  },
}

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings)

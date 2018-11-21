const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./src/index.html",
        to: "index.html"
      },
      {
        from: "./src/manifest.json",
        to: "manifest.json"
      }
    ]),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js"
    })
  ]
};

const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");

const paths = {
  build: path.resolve(__dirname, "build/api"),
  src: path.resolve(__dirname, "api"),
  node_modules: path.resolve(__dirname, "node_modules")
};

const config = {
  target: "node",
  mode: "production",
  externals: [nodeExternals()],
  entry: {
    server: path.resolve(paths.src, "server.ts")
  },
  output: {
    path: paths.build,
    filename: "server.js",
    clean: true
  },
  resolve: {
    modules: [__dirname, paths.node_modules],
    extensions: [".js", ".ts"]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  }
};

module.exports = config;
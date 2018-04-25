const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = dir => path.resolve(__dirname, dir);

const config = {
  entry: resolve("src/main.js"),
  output: {
    filename: "bundle.js",
    path: resolve("dist")
  },
  resolve: {
    alias: {
      "@": resolve("src")
    },
    extensions: [".js", ".vue"]
  },
  devServer: {
    contentBase: resolve("dist"),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("src/public/index.html"),
      inject: true
    })
  ]
};

module.exports = config;

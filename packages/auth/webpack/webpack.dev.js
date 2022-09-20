// merge() to merge common webpack config with dev config
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);

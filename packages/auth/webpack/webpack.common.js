module.exports = {
  module: {
    rules: [
      {
        // for all files that end with .m or .js processed them by babel loader
        // babel loader take any es version => es common to be executed in browser
        test: /\.m?js$/,
        // do it for all but node modules files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};

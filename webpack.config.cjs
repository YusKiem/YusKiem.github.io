// @ts-check
module.exports = {
  mode: "development", // or 'production' or 'none'
  entry: "./src/main.jsx",
  output: {
    // path: "/dist",
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

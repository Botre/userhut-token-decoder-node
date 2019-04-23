const path = require("path");

const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname + "/src/userhut-token-decoder.js"),
  output: {
    path: path.resolve(__dirname + "/dist/"),
    filename: "userhut-token-decoder.js",
    library: "UserhutTokenDecoder"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new PeerDepsExternalsPlugin()]
};

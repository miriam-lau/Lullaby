var webpack = require('webpack');

module.exports = {
  entry: "./lib/lullaby.js",
  output: {
    filename: "./lib/bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devtool: 'source-map',
};

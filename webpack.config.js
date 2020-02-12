const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  plugins: [new CompressionPlugin()],

  entry: './Javascript/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      // test: /\.js$/,
      // exclude: /(node_modules)/,
      // use: {
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['@babel/preset-env']
      //   }
      // }
      // {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      // }
    }
]


},

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development'
};

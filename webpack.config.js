var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var APP = __dirname + '/app/';

module.exports = {
  devtool: 'source-map',

  entry: {
    app: [APP + 'core/bootstrap.js', APP + 'css/reading-list.scss']
  },

  output: {
    path: APP,
    filename: 'bundle.js'
  },

  // what plugins we'll be using
  plugins: [
    // makes a module (JQuery here) available as variable in every module
    // needed for UIkit
    new webpack.ProvidePlugin({ // http://webpack.github.io/docs/shimming-modules.html
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    // we'll also tell the ExtractTextPlugin where the final CSS file should be generated
    // (relative to config.output.path) so in our case `app/style.css`
    new ExtractTextPlugin('styles.css')
  ],

  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: [
      'node_modules'
    ]
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader:  ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=30000&mimetype=application/font-woff2&name=[name]-[hash].[ext]'
      },
      {
        test: /\.woff(\?\S*)?$/,
        loader: 'url-loader?limit=30000&mimetype=application/font-woff&name=[name]-[hash].[ext]'
      },
      {
        test: /\.ttf(\?\S*)?$/,
        loader: 'url-loader?limit=30000&mimetype=application/font-ttf&name=[name]-[hash].[ext]'
      },
    ]
  }

};

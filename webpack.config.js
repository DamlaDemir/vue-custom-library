const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const glob = require('glob');

module.exports = {
    externals: {
      moment: 'moment'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin( {
        minimize : true,
        sourceMap : false,
        mangle: true,
        compress: {
          warnings: false
        }
      } )
    ]
};
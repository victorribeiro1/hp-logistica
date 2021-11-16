const { merge } = require('webpack-merge')
const path = require('path')

const config = require('./webpack.config.common')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(config, {
   mode: 'production',

   output: {
      path: path.join(__dirname, 'public')
   },

   optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
   }
})
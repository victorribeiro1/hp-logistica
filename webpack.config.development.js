const { merge } = require('webpack-merge')
const path = require('path')

const config = require('./webpack.config.common')

module.exports = merge(config, {
   mode: 'development',

   output: {
      path: path.resolve(__dirname, 'public')
   }
})
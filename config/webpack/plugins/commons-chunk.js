const webpack = require( 'webpack' );
const Plugin = require('./plugin');

module.exports = function(options){
  if(!options) options = {};

  const config = {
    name: "commons",
    filename: "js/commons.bundle.js",
    minChunks(module, count){
      var context = module.context;
      return context && context.indexOf('node_modules') >= 0;
    }
  }

  Object.assign(config, options);

  return new Plugin('CommonsChunkPlugin', webpack.optimize.CommonsChunkPlugin, config);
}

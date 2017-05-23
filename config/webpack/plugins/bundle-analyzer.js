const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(options){
  if(!options) options = {};

  var config = {};

  Object.assign(config, options);

  return {
    name: 'BundleAnalyzerPlugin',
    plugin: new BundleAnalyzerPlugin(config),
  }
}

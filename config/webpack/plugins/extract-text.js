const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const Plugin = require('./plugin');

module.exports = function(){
  return new Plugin('ExtractTextPlugin', ExtractTextPlugin, 'css/bundle.css');
}

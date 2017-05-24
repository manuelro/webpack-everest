const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const Plugin = require('../plugin');

module.exports = function(){
  return new Plugin('CopyFirstLevelFiles', CopyWebpackPlugin, [{ from: 'src/*.*', to: '[name].[ext]' }]);
}

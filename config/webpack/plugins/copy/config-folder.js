const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const Plugin = require('../plugin');

module.exports = function(){
  return new Plugin('CopyConfigFolder', CopyWebpackPlugin, [{ from: 'src/config', to: 'config' }]);
}

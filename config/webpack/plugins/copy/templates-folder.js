const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const Plugin = require('../plugin');

module.exports = function(){
  return new Plugin('CopyTemplatesFolder', CopyWebpackPlugin, [{ from: 'src/templates', to: 'templates' }]);
}

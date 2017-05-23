const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = function(){
  return {
    name: 'CopyConfigFolder',
    plugin: new CopyWebpackPlugin([{ from: 'src/config', to: 'config' }]),
  }
}

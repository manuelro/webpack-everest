const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = function(){
  return {
    name: 'CopyTemplatesFolder',
    plugin: new CopyWebpackPlugin([{ from: 'src/templates', to: 'templates' }]),
  }
}

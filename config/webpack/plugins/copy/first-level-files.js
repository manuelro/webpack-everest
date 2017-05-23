const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = function(){
  return {
    name: 'CopyFirstLevelFiles',
    plugin: new CopyWebpackPlugin([{ from: 'src/*.*', to: '[name].[ext]' }]),
  }
}

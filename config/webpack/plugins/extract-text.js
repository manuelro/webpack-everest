const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = function(){
  return {
    name: 'ExtractTextPlugin',
    plugin: new ExtractTextPlugin('css/main.css'),
  }
}

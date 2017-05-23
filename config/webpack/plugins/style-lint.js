const StyleLintPlugin = require( 'stylelint-webpack-plugin' );

module.exports = function(){
  return {
    name: 'StyleLintPlugin',
    plugin: new StyleLintPlugin({}),
  }
}

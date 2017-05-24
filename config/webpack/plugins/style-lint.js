const StyleLintPlugin = require( 'stylelint-webpack-plugin' );
const Plugin = require('./plugin');

module.exports = function(){
  return new Plugin('StyleLintPlugin', StyleLintPlugin, {});
}

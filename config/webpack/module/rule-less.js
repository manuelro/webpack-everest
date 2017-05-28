const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
  test: /\.less$/,
  use: ExtractTextPlugin.extract({
    use: [ 'css-loader', 'postcss-loader', 'less-loader' ]
  })
}

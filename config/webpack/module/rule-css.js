const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    use: [ 'css-loader', 'postcss-loader' ]
  })
}

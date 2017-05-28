const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
  test: /\.(scss|sass)$/,
  use: ExtractTextPlugin.extract({
    use: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
  })
}

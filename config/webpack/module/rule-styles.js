const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
  styles: {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
    })
  }
}

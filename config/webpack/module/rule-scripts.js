module.exports = {
  scripts: {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [ 'env', 'react' ],
        sourceMaps: true,
      }
    }
  }
}

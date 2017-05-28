const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function(){
  const paths = ['**/*']
  const options = {
    root: this.config.output.path,
    verbose: true,
    dry: false,
  }

  return {
    name: 'CleanWebpackPlugin',
    plugin: new CleanWebpackPlugin(paths, options)
  }
}

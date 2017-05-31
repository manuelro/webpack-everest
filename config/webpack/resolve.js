const { webpack } = require('./config');

webpack.setProp('resolve', function () {
  this.config.resolve = {
    extensions: ['.js', '.jsx']
  }
});

module.exports = { webpack };

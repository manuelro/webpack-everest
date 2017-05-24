const { rules } = require('./module/rules');
const { webpack } = require('./config');

webpack.setProp('module', function () {
  this.config.module = { rules: rules };
});

module.exports = { webpack };

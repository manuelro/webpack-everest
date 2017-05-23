const { rules } = require('./module/rules');
const { config } = require('./config');

config.setProp('module', function () {
  this.config.module = { rules: rules };
});

module.exports = { config };

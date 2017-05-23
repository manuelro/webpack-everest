const { config } = require('./config');

config.setProp('externals', {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
});

module.exports = { config };

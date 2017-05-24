const { webpack } = require('./config');

webpack.setProp('externals', {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
});

module.exports = { webpack };

const { config } = require('./config');

config.setProp('entry', {
  js: './src/js/index.js',
  css: './src/css/index.js',
  images: './src/images/index.js'
});

module.exports = { config };

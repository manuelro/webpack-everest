const { config } = require('./config');
const path = require('path');

config.setProp('output', function () {
  if(!this.options.output) this.options.output = {};

  const root = this.options.output.root || __dirname;
  const dest = this.options.output.dest || 'dist';
  const filename = this.options.output.filename || 'bundle.js';

  var destPath = root;
  if(/^([A-z]):.+/.test(dest)) {
    destPath = dest;
  } else {
    destPath = path.join(root, dest);
  }

  this.config.output = { filename: `[name]/${filename}`, path: destPath };
});

module.exports = { config };

const { webpack } = require('./config');

webpack.setProp('entry', function(){
  if(!this.options.entry) this.options.entry = {};

  this.config.entry = {
    js: './src/js/index.js',
    css: './src/css/index.js',
    images: './src/images/index.js'
  }

  Object.assign(this.config.entry, this.options.entry);
});

module.exports = { webpack };

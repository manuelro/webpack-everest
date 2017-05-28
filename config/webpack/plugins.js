const { webpack } = require('./config');
const extractText = require('./plugins/extract-text');
const styleLint = require('./plugins/style-lint');
const copyTemplatesFolder = require('./plugins/copy/templates-folder');
const copyConfigFolder = require('./plugins/copy/config-folder');
const copyFirstLevelFiles = require('./plugins/copy/first-level-files');
const commonsChunk = require('./plugins/commons-chunk');
const clean = require('./plugins/clean');
const hasFlag = require('has-flag');

webpack.setProp('plugins', function () {
  this.addPlugin(styleLint);
  this.addPlugin(copyTemplatesFolder);
  this.addPlugin(copyConfigFolder);
  this.addPlugin(copyFirstLevelFiles);
  this.addPlugin(commonsChunk);
  this.addPlugin(extractText);

  if(hasFlag('-p')) this.addPlugin(clean);
});

module.exports = { webpack };

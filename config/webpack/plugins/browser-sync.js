const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const _ = require('underscore');

module.exports = function(options){
  if(!options) options = {};

  if(!_.isObject(options))
    throw new Error('invalid-prop', 'Passed param should be an object');

  var config = {};

  Object.assign(config, options);

  return {
    name: 'BrowserSyncPlugin',
    plugin: new BrowserSyncPlugin(config),
  }
}

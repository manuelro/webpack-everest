const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = function(options){
  if(!options) options = {};

  var config = {};

  Object.assign(config, options);

  return {
    name: 'BrowserSyncPlugin',
    plugin: new BrowserSyncPlugin(config),
  }
}

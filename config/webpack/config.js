const browserSync = require('./plugins/browser-sync');
const bundleAnalyzer = require('./plugins/bundle-analyzer');
const _ = require('underscore');

class Config{
  constructor(options){
    //Sets the preset configuration

    //It is drupal by default, but in the future
    //the ides is to support WordPress
    //and other popular CMS, that way we can use conventions
    //in order to better organize the generated bundles
    this.preset = 'drupal';

    //Options used by the configuration
    this.options = {
      entry: {},
      plugins: {},
      output: {},
    };

    this.config = {}; //Where the real configuration lives
    this.propsCache = {}; //Caches functions passed to setProp
    this.pluginsCache = []; //Caches the plugin names to avoid repetition
  }

  //Sets the current preset
  //right now the only valid value is 'drupal'
  setPreset(name){
    if(!(name === 'drupal'))
      throw new Error('invalid-prop', 'Unrecognized preset name, use "drupal", more presets will be recognized in the future');

    this.preset = name;

    return this;
  }

  // TODO: Unit test
  //Adds a plugin and keeps track of every plugin added
  addPlugin(pluginFunction){
    if(!_.isFunction(pluginFunction))
      throw new Error('invalid-prop', 'Passed plugin should be a function');

    var plugin = pluginFunction.call(this, {});

    var options;
    try {
      options = this.options.plugins[plugin.name];
    } catch (e) {
      options = {};
    }

    if(!_.isEmpty(options)) plugin = pluginFunction.call(this, options);

    if(!_.property(plugin, 'name'))
      throw new Error('invalid-prop', 'The generated plugin must contain a name property');

    if(!_.property(plugin, 'plugin'))
      throw new Error('invalid-prop', 'The generated plugin must contain a plugin property');

    if(!this.config.plugins) this.config.plugins = [];

    var position = this.config.plugins.length;

    if(this.pluginsCache.indexOf(plugin.name) > -1){
      position = this.pluginsCache.indexOf(plugin.name);
    } else {
      this.pluginsCache[position] = plugin.name;
    }

    this.config.plugins[position] = plugin.plugin;
  }

  //Sets a property in the config object
  setProp(propName, value){
    if(!propName || typeof propName !== 'string')
      throw new Error('invalid-prop', 'Pass a string to map to the config object');

    if(/^\s*$/.test(propName))
      throw new Error('invalid-prop', 'A valid prop name cannot be an empty string');

    if(_.isFunction(value)) {
      value.call(this);
      this.propsCache[propName] = value;
    } else {
      this.config[propName] = value;
    }

    return this;
  }

  //Gets a property from the config object
  getProp(propName){
    if(_.isUndefined(propName))
      throw new Error('invalid-prop', 'Property name cannot be undefined');

    if(!_.isString(propName))
      throw new Error('invalid-prop', 'Property name must be a string');

    if(_.isEmpty(propName))
      throw new Error('invalid-prop', 'Property name cannot be empty');

    return this.config[propName];
  }

  //Refreshes the configuration when options changes
  reload(propName){
    if(_.isUndefined(propName))
      for (let key in this.propsCache) {
        if (this.propsCache.hasOwnProperty(key)) {
          this.setProp(key, this.propsCache[key]);
        }
      }

    if(_.isArray(propName))
      for (let item of propName) {
        if(this.propsCache[item]) this.setProp(item, this.propsCache[item]);
      }

    if(_.isString(propName) && !_.isEmpty(propName))
      this.setProp(propName, this.propsCache[propName]);

    return this;
  }

  // TODO: Unit test
  //Applies modifications to options object
  apply(options){
    Object.assign(this.options, options);
    return this.reload();
  }

  // TODO: Unit test
  //Enables browserSync to proxy a given domain
  sync(config){
    this.options.plugins.BrowserSyncPlugin = config;
    this.addPlugin(browserSync);
    return this;
  }

  // TODO: Unit test
  //Enables visualization of the output bundles
  visualize(config){
    this.options.plugins.BundleAnalyzerPlugin = config;
    this.addPlugin(bundleAnalyzer);
    return this;
  }
}

const instance = new Config;

module.exports = {
  config: instance
}

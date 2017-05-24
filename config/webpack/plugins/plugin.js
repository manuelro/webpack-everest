module.exports = class Plugin{
  constructor(name, pluginConstructor, config){
    if(!config) config = {};

    this.name = name;
    this.plugin = new pluginConstructor(config);
  }
}

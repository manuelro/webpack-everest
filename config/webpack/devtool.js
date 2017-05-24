const { webpack } = require('./config');

webpack.setProp('devtool', 'source-map');

module.exports = { webpack };

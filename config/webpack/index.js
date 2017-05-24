require( './entry.js' );
require( './output.js' );
require( './module.js' );
require( './plugins.js' );
require( './devtool.js' );
require( './externals.js' );

const { webpack } = require('./config');

module.exports = { webpack };

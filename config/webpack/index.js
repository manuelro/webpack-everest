require( './entry.js' );
require( './output.js' );
require( './module.js' );
require( './plugins.js' );
require( './devtool.js' );
require( './externals.js' );
require( './resolve.js' );

const { webpack } = require('./config');

module.exports = { webpack };

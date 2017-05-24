const assert = require('chai').assert;
const _plugins = require('../plugins');
const { webpack } = require('../config');

describe( 'plugins', function() {
  describe( 'props', function ( ) {
    it( 'should define a plugins array', function () {
      assert.isArray( webpack.getProp('plugins') );
    } );
  } );
} );

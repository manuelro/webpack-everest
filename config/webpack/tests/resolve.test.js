const assert = require('chai').assert;
const _resolve = require('../resolve');
const { webpack } = require('../config');

describe( 'resolve', function() {
  describe( 'props', function ( ) {
    it( 'should define a resolve property', function () {
      assert.property( webpack.config, 'resolve' );
    } );

    it( 'should be of type object', function () {
      assert.isObject( webpack.config.resolve );
    } );

    it( 'should contain a extensions array', function () {
      assert.isArray( webpack.config.resolve.extensions );
    } );
  } );
} );

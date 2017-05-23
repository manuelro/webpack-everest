const assert = require( 'chai' ).assert;
const { config } = require( '../module' );

describe( 'module', function() {
  describe( 'props', function ( ) {

    it( 'should define a module object', function () {
      assert.isObject( config.getProp('module') );
    } );

    it( 'should define a rules property of type array', function () {
      assert.isArray( config.getProp('module').rules );
    } );

  } );
} );

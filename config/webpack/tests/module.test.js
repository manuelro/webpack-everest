const assert = require( 'chai' ).assert;
const { webpack } = require( '../module' );

describe( 'module', function() {
  describe( 'props', function ( ) {

    it( 'should define a module object', function () {
      assert.isObject( webpack.getProp('module') );
    } );

    it( 'should define a rules property of type array', function () {
      assert.isArray( webpack.getProp('module').rules );
    } );

  } );
} );

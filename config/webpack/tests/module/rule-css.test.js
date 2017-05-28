const assert = require( 'chai' ).assert;
const css = require( '../../module/rule-css.js' );

describe( 'module : rule : css', function() {
  describe( 'props', function ( ) {

    it( 'should define a rule object', function () {
      assert.isObject( css );
    } );

  } );
} );

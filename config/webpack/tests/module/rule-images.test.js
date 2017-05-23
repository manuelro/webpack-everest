const assert = require( 'chai' ).assert;
const { images } = require( '../../module/rule-images.js' );

describe( 'module : rule : images', function() {
  describe( 'props', function ( ) {

    it( 'should define a rule object', function () {
      assert.isObject( images );
    } );

  } );
} );

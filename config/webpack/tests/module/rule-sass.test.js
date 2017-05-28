const assert = require( 'chai' ).assert;
const sass = require( '../../module/rule-sass.js' );

describe( 'module : rule : sass', function() {
  describe( 'props', function ( ) {

    it( 'should define a rule object', function () {
      assert.isObject( sass );
    } );

  } );
} );

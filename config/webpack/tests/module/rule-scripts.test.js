const assert = require( 'chai' ).assert;
const { scripts } = require( '../../module/rule-scripts.js' );

describe( 'module : rule : scripts', function() {
  describe( 'props', function ( ) {

    it( 'should define a rule object', function () {
      assert.isObject( scripts );
    } );

  } );
} );

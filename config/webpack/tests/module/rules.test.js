const assert = require( 'chai' ).assert;
const { rules } = require( '../../module/rules.js' );

describe( 'module : rule', function() {
  describe( 'props', function ( ) {

    it( 'should define a rule array', function () {
      assert.isArray( rules );
    } );

  } );
} );

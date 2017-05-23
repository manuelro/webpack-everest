const assert = require( 'chai' ).assert;
const { styles } = require( '../../module/rule-styles.js' );

describe( 'module : rule : styles', function() {
  describe( 'props', function ( ) {

    it( 'should define a rule object', function () {
      assert.isObject( styles );
    } );

  } );
} );

const assert = require( 'chai' ).assert;
const styleLint = require( '../../plugins/style-lint' );

var plugin;
describe( 'styleLint', function() {
  beforeEach(function(){
    plugin = styleLint()
  });

  describe( 'return', function ( ) {

    it( 'should return an object', function () {
      assert.isObject( plugin );
    } );

    describe( 'properties', function ( ) {

      it( 'should define a name property', function () {
        assert.isString( plugin.name );
      } );

      it( 'should define a plugin property', function () {
        assert.isObject( plugin.plugin );
      } );

    } );

  } );
} );

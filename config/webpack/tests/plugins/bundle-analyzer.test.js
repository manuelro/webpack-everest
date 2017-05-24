const assert = require( 'chai' ).assert;
const bundleAnalyzer = require( '../../plugins/bundle-analyzer' );

var plugin;
describe( 'bundleAnalyzer', function() {
  beforeEach(function(){
    plugin = bundleAnalyzer()
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

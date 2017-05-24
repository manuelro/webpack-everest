const assert = require( 'chai' ).assert;
const bundleAnalyzer = require( '../../plugins/bundle-analyzer' );

var plugin;
describe( 'bundleAnalyzer', function() {
  beforeEach(function(){
    plugin = bundleAnalyzer()
  });

  describe( 'return', function ( ) {

    describe( 'when no param is passed', function ( ) {

      it( 'should return an object', function () {
        assert.isObject( bundleAnalyzer() );
      } );

    } );

    describe( 'when passed param is an object', function ( ) {

      it( 'should return an object', function () {
        assert.isObject( bundleAnalyzer({}) );
      } );

    } );

    describe( 'when passed param is not an object', function ( ) {

      it( 'should return an object', function () {
        assert.throws( () => bundleAnalyzer(1), Error );
      } );

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

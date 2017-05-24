const assert = require( 'chai' ).assert;
const browserSync = require( '../../plugins/browser-sync' );

var plugin;
describe( 'browserSync', function() {
  beforeEach(function(){
    plugin = browserSync()
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

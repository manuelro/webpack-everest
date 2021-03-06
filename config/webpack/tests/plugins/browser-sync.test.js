const assert = require( 'chai' ).assert;
const browserSync = require( '../../plugins/browser-sync' );

var plugin;
describe( 'browserSync', function() {
  beforeEach(function(){
    plugin = browserSync()
  });

  describe( 'return', function ( ) {

    describe( 'when no param is passed', function ( ) {

      it( 'should return an object', function () {
        assert.isObject( browserSync() );
      } );

    } );

    describe( 'when passed param is an object', function ( ) {

      it( 'should return an object', function () {
        assert.isObject( browserSync({}) );
      } );

    } );

    describe( 'when passed param is not an object', function ( ) {

      it( 'should return an object', function () {
        assert.throws( () => browserSync(1), Error );
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

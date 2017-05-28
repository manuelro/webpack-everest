const assert = require( 'chai' ).assert;
const provide = require( '../../plugins/provide' );

var plugin;
describe( 'provide', function() {
  beforeEach(function(){
    plugin = provide()
  });

  describe( 'return', function ( ) {

    describe( 'when no param is passed', function ( ) {

      it( 'should return an object', function () {
        assert.isObject( provide() );
      } );

    } );

    describe( 'when passed param is an object', function ( ) {

      it( 'should return an object', function () {
        assert.isObject( provide({}) );
      } );

    } );

    describe( 'when passed param is not an object', function ( ) {

      it( 'should return an object', function () {
        assert.throws( () => provide(1), Error );
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

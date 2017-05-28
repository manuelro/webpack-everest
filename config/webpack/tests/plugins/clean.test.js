const assert = require( 'chai' ).assert;
const clean = require( '../../plugins/clean' );

var plugin;
const context = { config: { output: { path: '/path' } } }
describe( 'clean', function() {
  beforeEach(function(){
    plugin = clean.call(context);
  });

  describe( 'return', function ( ) {

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

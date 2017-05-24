const assert = require( 'chai' ).assert;
const commonsChunk = require( '../../plugins/commons-chunk' );

var plugin;
describe( 'commonsChunk', function() {
  beforeEach(function(){
    plugin = commonsChunk()
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

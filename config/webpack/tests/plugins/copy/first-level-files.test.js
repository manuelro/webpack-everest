const assert = require( 'chai' ).assert;
const firstLevelFiles = require( '../../../plugins/copy/first-level-files' );

var plugin;
describe( 'firstLevelFiles', function() {
  beforeEach(function(){
    plugin = firstLevelFiles()
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

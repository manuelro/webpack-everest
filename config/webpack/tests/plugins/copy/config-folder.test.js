const assert = require( 'chai' ).assert;
const configFolder = require( '../../../plugins/copy/config-folder' );

var plugin;
describe( 'configFolder', function() {
  beforeEach(function(){
    plugin = configFolder()
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

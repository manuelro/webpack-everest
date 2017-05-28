const assert = require( 'chai' ).assert;
const templatesFolder = require( '../../../plugins/copy/templates-folder' );
const Plugin = require( '../../../plugins/plugin' );

var plugin;
describe( 'templatesFolder', function() {
  beforeEach(function(){
    plugin = templatesFolder()
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

const assert = require( 'chai' ).assert;
const extractText = require( '../../plugins/extract-text' );

var plugin;
describe( 'extractText', function() {
  beforeEach(function(){
    plugin = extractText()
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

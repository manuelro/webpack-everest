const assert = require( 'chai' ).assert;
const Plugin = require( '../../plugins/plugin' );

class Fake{
  constructor(props){
    this.props = props;
  }
}

var plugin;
describe( 'Plugin', function() {
  beforeEach(function(){
    plugin = new Plugin('Fake', Fake, {});
  });
  describe( 'props', function ( ) {
    it( 'should contain a name prop', function () {
      assert.isString( plugin.name );
    } );

    it( 'should contain a plugin prop', function () {
      assert.isObject( plugin.plugin );
    } );
  } );

  describe( 'when no arg is passed', function ( ) {
    it( 'constructor should be passed an empty object', function () {
      assert.isObject( plugin.plugin.props );
    } );
  } );

  describe( 'when a string is passed passed', function ( ) {
    it( 'constructor should be passed a string', function () {
      plugin = new Plugin('Fake', Fake, 'fake');
      assert.isString( plugin.plugin.props );
    } );
  } );
} );

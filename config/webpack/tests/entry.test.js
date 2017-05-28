const assert = require( 'chai' ).assert;
const _entry = require( '../entry' );
const { webpack } = require( '../config' );

var newEntry;
describe( 'entry', function() {
  describe( 'props', function ( ) {

    it( 'should define an entry object', function () {
      assert.isObject( webpack.getProp('entry') );
    } );

    it( 'should define a js property of type string', function () {
      assert.isString( webpack.getProp('entry').js );
    } );

    it( 'should define a css property of type string', function () {
      assert.isString( webpack.getProp('entry').css );
    } );

    it( 'should define an images property of type string', function () {
      assert.isString( webpack.getProp('entry').images );
    } );

  } );
} );

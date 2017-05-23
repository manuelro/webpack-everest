const assert = require( 'chai' ).assert;
const _entry = require( '../entry' );
const { config } = require( '../config' );

describe( 'entry', function() {
  describe( 'props', function ( ) {

    it( 'should define an entry object', function () {
      assert.isObject( config.getProp('entry') );
    } );

    it( 'should define a js property of type string', function () {
      assert.isString( config.getProp('entry').js );
    } );

    it( 'should define a css property of type string', function () {
      assert.isString( config.getProp('entry').css );
    } );

    it( 'should define an images property of type string', function () {
      assert.isString( config.getProp('entry').images );
    } );

  } );
} );

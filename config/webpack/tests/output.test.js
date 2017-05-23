const assert = require( 'chai' ).assert;
const { config } = require( '../config' );
require( '../output' );

const root = '/root';
const dest = 'dest';
const outputFilename = 'bundle.js';

describe( 'output', function() {
  describe( 'props', function ( ) {
    let options = { __dirname: 'dirname' };

    beforeEach( function () {
      config.options = { root, dest, outputFilename }
      config.reload('output');
    } );

    it( 'should define an output object', function () {
      assert.isObject( config.getProp('output') );
    } );

    it( 'should define a filename property of type string', function () {
      assert.isString( config.getProp('output').filename );
    } );

    it( 'should define a path property of type string', function () {
      assert.isString( config.getProp('output').path );
    } );

  } );
} );

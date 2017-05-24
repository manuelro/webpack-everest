const assert = require( 'chai' ).assert;
const { webpack } = require( '../config' );
require( '../output' );

const root = '/root';
const dest = 'dest';
const outputFilename = 'bundle.js';

describe( 'output', function() {
  describe( 'props', function ( ) {
    let options = { __dirname: 'dirname' };

    beforeEach( function () {
      webpack.options = { root, dest, outputFilename }
      webpack.reload('output');
    } );

    it( 'should define an output object', function () {
      assert.isObject( webpack.getProp('output') );
    } );

    it( 'should define a filename property of type string', function () {
      assert.isString( webpack.getProp('output').filename );
    } );

    it( 'should define a path property of type string', function () {
      assert.isString( webpack.getProp('output').path );
    } );

  } );
} );

const assert = require( 'chai' ).assert;
const { config } = require( '../config' );

describe( 'config', function() {
  describe( 'props', function ( ) {

    it( 'should define an object', function () {
      assert.isObject( config );
    } );

    it( 'should define an getProp method', function () {
      assert.isFunction( config.getProp );
    } );

    it( 'should define an setProp method', function () {
      assert.isFunction( config.setProp );
    } );

    it( 'should define an reload method', function () {
      assert.isFunction( config.reload );
    } );

  } );

  describe( 'method', function ( ) {

    describe( 'preset', function () {
      describe( 'when passed other value than "drupal"', function(){
        it( 'should throw', function () {
          assert.throws( () => config.setPreset('wordpress'), Error );
        } );
      } );
    } );

    describe( 'setProp', function () {
      describe( 'when passed name is undefined', function(){
        it( 'should throw', function () {
          assert.throws( () => config.setProp(null), Error );
        } );
      } );

      describe( 'when passed name is a string', function(){
        it( 'if is empty should throw', function () {
          assert.throws( () => config.setProp(' '), Error );
        } );
      } );

      describe( 'when passed name is not a string', function(){
        it( 'should throw', function () {
          assert.throws( () => config.setProp({}), Error );
        } );
      } );

      describe( 'when passed name is valid', function(){

        describe( 'when passed value is a function', function(){
          it( 'should add it to cache', function () {
            config.setProp('test', () => {});
            assert.isFunction(config.propsCache['test']);
          } );

          it( 'should invoke it', function () {
            config.setProp('test', function () { this.config.foo = 'bar' });
            assert.property(config.config, 'foo');
          } );
        } );

        describe( 'when passed value is not a function', function(){
          it( 'should add it to config object', function () {
            config.setProp('test', { first: 'first' });
            assert.property(config.config, 'test');
          } );
        } );

      } );
    } );

    describe( 'getProp', function () {
      describe( 'when passed name is undefined', function(){
        it( 'should throw', function () {
          assert.throws( () => config.getProp(), Error );
        } );
      } );

      describe( 'when passed name is not a string', function(){
        it( 'should throw', function () {
          assert.throws( () => config.getProp({}), Error );
        } );
      } );

      describe( 'when passed name is a string', function(){
        describe( 'when is empty', function(){
          it( 'should throw', function () {
            assert.throws( () => config.getProp(' '), Error );
          } );
        } );
      } );
    } );

  } );
} );

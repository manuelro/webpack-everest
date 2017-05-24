const sinon = require('sinon')
const { assert, expect } = require( 'chai' );
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
            assert.throws( () => config.getProp(''), Error );
          } );
        } );
      } );
    } );

    describe( 'reload', function () {
      beforeEach(function(){
        for (let key in config.propsCache) {
          if (config.propsCache.hasOwnProperty(key)) {
            sinon.spy(config.propsCache, key);
          }
        }
      });

      afterEach(function(){
        for (let key in config.propsCache) {
          if (config.propsCache.hasOwnProperty(key)) {
            config.propsCache[key].restore();
          }
        }
      });

      describe( 'when passed name is undefined', function(){
        it('should call them all', function(){
          config.reload();
          for (let key in config.propsCache) {
            if (config.propsCache.hasOwnProperty(key)) {
              sinon.assert.calledOnce(config.propsCache[key]);
            }
          }
        });
      } );

      describe( 'when passed name is array', function(){
        it('call the ones in the array', function(){
          config.setProp('test_1', () => 'Test function');
          config.setProp('test_2', () => 'Test function');

          sinon.spy(config.propsCache, 'test_1');
          sinon.spy(config.propsCache, 'test_2');

          config.reload(['test_1', 'test_2']);

          sinon.assert.calledOnce(config.propsCache['test_1']);
          sinon.assert.calledOnce(config.propsCache['test_2']);
        });
      } );

      describe( 'when passed name is string', function(){
        it('call one by name', function(){
          config.reload('test');
          sinon.assert.calledOnce(config.propsCache['test']);
        });
      } );

      describe( 'should return the instance', function(){
        const actual = config.reload();
        assert.equal(actual, config);
      } );
    } );

  } );
} );

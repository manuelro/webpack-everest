const sinon = require('sinon')
const { assert, expect } = require( 'chai' );
const {webpack} = require( '../config' );

describe( 'webpack', function() {
  describe( 'props', function ( ) {

    it( 'should define an object', function () {
      assert.isObject( webpack );
    } );

    it( 'should define an getProp method', function () {
      assert.isFunction( webpack.getProp );
    } );

    it( 'should define an setProp method', function () {
      assert.isFunction( webpack.setProp );
    } );

    it( 'should define an reload method', function () {
      assert.isFunction( webpack.reload );
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
          assert.throws( () => webpack.setProp(null), Error );
        } );
      } );

      describe( 'when passed name is a string', function(){
        it( 'if is empty should throw', function () {
          assert.throws( () => webpack.setProp(' '), Error );
        } );
      } );

      describe( 'when passed name is not a string', function(){
        it( 'should throw', function () {
          assert.throws( () => webpack.setProp({}), Error );
        } );
      } );

      describe( 'when passed name is valid', function(){

        describe( 'when passed value is a function', function(){
          it( 'should add it to cache', function () {
            webpack.setProp('test', () => {});
            assert.isFunction(webpack.propsCache['test']);
          } );

          it( 'should invoke it', function () {
            webpack.setProp('test', function () { this.config.foo = 'bar' });
            assert.property(webpack.config, 'foo');
          } );
        } );

        describe( 'when passed value is not a function', function(){
          it( 'should add it to config object', function () {
            webpack.setProp('test', { first: 'first' });
            assert.property(webpack.config, 'test');
          } );
        } );

      } );
    } );

    describe( 'getProp', function () {
      describe( 'when passed name is undefined', function(){
        it( 'should throw', function () {
          assert.throws( () => webpack.getProp(), Error );
        } );
      } );

      describe( 'when passed name is not a string', function(){
        it( 'should throw', function () {
          assert.throws( () => webpack.getProp({}), Error );
        } );
      } );

      describe( 'when passed name is a string', function(){
        describe( 'when is empty', function(){
          it( 'should throw', function () {
            assert.throws( () => webpack.getProp(''), Error );
          } );
        } );
      } );
    } );

    describe( 'reload', function () {
      beforeEach(function(){
        for (let key in webpack.propsCache) {
          if (webpack.propsCache.hasOwnProperty(key)) {
            sinon.spy(webpack.propsCache, key);
          }
        }
      });

      afterEach(function(){
        for (let key in webpack.propsCache) {
          if (webpack.propsCache.hasOwnProperty(key)) {
            webpack.propsCache[key].restore();
          }
        }
      });

      describe( 'when passed name is undefined', function(){
        it('should call them all', function(){
          webpack.reload();
          for (let key in webpack.propsCache) {
            if (webpack.propsCache.hasOwnProperty(key)) {
              sinon.assert.calledOnce(webpack.propsCache[key]);
            }
          }
        });
      } );

      describe( 'when passed name is array', function(){
        it('call the ones in the array', function(){
          webpack.setProp('test_1', () => 'Test function');
          webpack.setProp('test_2', () => 'Test function');

          sinon.spy(webpack.propsCache, 'test_1');
          sinon.spy(webpack.propsCache, 'test_2');

          webpack.reload(['test_1', 'test_2']);

          sinon.assert.calledOnce(webpack.propsCache['test_1']);
          sinon.assert.calledOnce(webpack.propsCache['test_2']);
        });
      } );

      describe( 'when passed name is string', function(){
        it('call one by name', function(){
          webpack.reload('test');
          sinon.assert.calledOnce(webpack.propsCache['test']);
        });
      } );

      describe( 'should return the instance', function(){
        const actual = webpack.reload();
        assert.equal(actual, webpack);
      } );
    } );

  } );
} );

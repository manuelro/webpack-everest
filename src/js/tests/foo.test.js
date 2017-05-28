import { expect } from 'chai';
import foo from '../foo.js';

describe('Should contain a name', () => {

  it('exposes a value', () => {
    expect(foo).to.equal('Howdy!');
  });

});

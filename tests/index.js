import UniquelyReadable from '../src';
import assert from 'assert';

describe('UniquelyReadable', function() {
  describe('Languages', function() {
    it('Should Only Accept Supported Languages', function() {
      assert.throws(function() {
        new UniquelyReadable({lang: 'zz'});
      }, Error);
    });
    it('Should Load a Language\'s Adjectives and Nouns', function() {
      const ur = new UniquelyReadable();

      assert.notStrictEqual(Object.keys(ur.config.adjectives).indexOf('adorable'), -1);
      assert.notStrictEqual(Object.keys(ur.config.nouns).indexOf('zebra'), -1);
    });
  });
  describe('Strategies', function() {
    it('Should Load a Configured Strategy', function() {
      const ur = new UniquelyReadable({
        strategy: function test() {}
      });

      assert.strictEqual(typeof ur.config.strategy, 'function');
    });
    it('Should Load a Strategy Based on the Configured Language', function() {
      const ur = new UniquelyReadable();

      assert.strictEqual(typeof ur.config.strategy.generate, 'function');
    });
  });
  describe('Methods', function() {
    it('Should Have a Generate Method', function() {
      const ur = new UniquelyReadable();

      assert.strictEqual(typeof ur.generate, 'function');
    });
  });
});

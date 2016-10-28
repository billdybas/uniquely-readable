import { generate } from '../../../lib/strategies/default';
import assert from 'assert';

describe('Default Strategy', function() {
  describe('generate', function() {
    it('Should Generate a String of 0 Adjective(s) and 1 Noun, and Each Word Should be Capitalized', function() {
      const config = {
        adjectiveCount: 0,
        adjectives: {
          happy: 'happy'
        },
        nouns: {
          tree: 'tree'
        }
      };
      const expected = 'Tree';

      assert.strictEqual(generate(config), expected);
    });
    it('Should Generate a String of 1 Adjective(s) and 1 Noun, and Each Word Should be Capitalized', function() {
      const config = {
        adjectiveCount: 1,
        adjectives: {
          happy: 'happy'
        },
        nouns: {
          tree: 'tree'
        }
      };
      const expected = 'HappyTree';

      assert.strictEqual(generate(config), expected);
    });
    it('Should Generate a String of 5 Adjective(s) and 1 Noun, and Each Word Should be Capitalized', function() {
      const config = {
        adjectiveCount: 5,
        adjectives: {
          happy: 'happy'
        },
        nouns: {
          tree: 'tree'
        }
      };
      const expected = 'HappyHappyHappyHappyHappyTree';

      assert.strictEqual(generate(config), expected);
    });
  });
});

import { getRandomArrayElement, getRandomObjectValue, capitalizeFirstLetter } from '../../lib/utils';
import assert from 'assert';

describe('Utils', function() {
  describe('getRandomArrayElement', function() {
    it('Should Return undefined When the List Has No Elements', function() {
      const list = [];
      const expected = undefined;

      assert.strictEqual(getRandomArrayElement(list), expected);
    });
    it('Should Return a Value in the List When the List Has 1 Element', function() {
      const list = [1];
      const expected = 1;

      assert.strictEqual(getRandomArrayElement(list), expected);
    });
    it('Should Return a Value in the List When the List Has More than 1 Element', function() {
      const list = [1, 2, 3, 4, 5];

      const value = getRandomArrayElement(list);

      assert.notStrictEqual(list.indexOf(value), -1);
    });
  });
  describe('getRandomObjectValue', function() {
    it('Should Return undefined When the Object Has No Keys', function() {
      const obj = {};
      const expected = undefined;

      assert.strictEqual(getRandomObjectValue(obj), expected);
    });
    it('Should Return the Value of a Key in the Object when the Object Has 1 Key', function() {
      const obj = {
        one: 1
      };
      const expected = 1;

      assert.strictEqual(getRandomObjectValue(obj), expected);
    });
  });
  describe('capitalizeFirstLetter', function() {
    it('Should Return an Empty String when Provided an Empty String', function() {
      const str = '';
      const expected = '';

      assert.strictEqual(capitalizeFirstLetter(str), expected);
    });
    it('Should Return a Capitalized Character when Provided a 1 Character String', function() {
      const str = 'a';
      const expected = 'A';

      assert.strictEqual(capitalizeFirstLetter(str), expected);
    });
    it('Should Return a Capitalized String when Provided a String of More than Length 1', function() {
      const str = 'happy';
      const expected = 'Happy';

      assert.strictEqual(capitalizeFirstLetter(str), expected);
    });
  });
});

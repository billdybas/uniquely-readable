/**
 * Returns a Random Element from the Provided List
 * @param  {Array} list - Array of at least one Value
 * @return {Mixed|undefined} - undefined if the List is Empty
 */
export function getRandomArrayElement(list) {
  if (!list.length) {
    return undefined;
  }

  return list[Math.floor(Math.random() * list.length)];
}

/**
 * Returns the Value of a Random Key in the Provided Object
 * @param  {Object} obj - Object with at least one Key
 * @return {Mixed|undefined} - undefined if the Object is Empty
 */
export function getRandomObjectValue(obj) {
  const keys = Object.keys(obj);

  if (!keys.length) {
    return undefined;
  }

  return obj[getRandomArrayElement(keys)];
}

/**
 * Capitalizes the First Letter of the Provided String
 * @param  {String} word - a String to Capitalize
 * @return {String} - word with a Capitalized first letter (or an empty string)
 */
export function capitalizeFirstLetter(word) {
  if (!word.length) {
    return '';
  } else if (word.length === 1) {
    return word.charAt(0).toUpperCase();
  }

  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

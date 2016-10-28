export function getRandomArrayElement(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function getRandomObjectValue(obj) {
  return obj[getRandomArrayElement(Object.keys(obj))];
}

export function capitalizeFirstLetter(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

import { getRandomObjectValue, capitalizeFirstLetter } from '../../utils';

function getWord(obj) {
  return capitalizeFirstLetter(getRandomObjectValue(obj));
}

export function generate(config) {
  let string = '';

  for (let i = 0; i < config.adjectiveCount; i++) {
    string += getWord(config.adjectives);
  }
  string += getWord(config.nouns);

  return string;
}

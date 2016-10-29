# uniquely-readable

A handy-dandy library for generating human-readable identifiers

## Usage

`npm install uniquely-readable`

~~~
import UniquelyReadable from 'uniquely-readable';

const generator = new UniquelyReadable({ adjectiveCount: 3 });

console.log(generator.generate()); // CharmingSwankyMysteriousDragon
~~~

### Configuration Options

`adjectiveCount`

A natural number (0, 1, 2, ...) which specifies how many adjectives should be present in the generated identifier.

_Default: 2_

`lang`

A language code which changes the language the identifiers are in.

_Default: 'en'_

`strategy`

A custom strategy function to create identifiers.

_Default: null_

## Contributing

Community contributions are always welcome!

### Translations

If you'd like to translate the adjectives and nouns to other languages, just copy the `template.js` file in `src/i18n` into a folder with the language's code (e.g. 'en'). Then, in `src/index.js`, add into `languageConfig` what strategy that language should use to generate identifiers.

### Strategies

If you'd like to change the ordering of the identifier or how they are generated, consider creating a custom strategy and adding it to the `src/strategies` folder. Strategies must implement and export a `generate` function which takes in a `config` parameter and returns a string.

## Development

### Building

`npm run build`

### Testing

`npm run test`

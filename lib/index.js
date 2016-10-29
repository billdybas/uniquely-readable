class UniquelyReadable {
  constructor(optionalConfig) {
    optionalConfig = optionalConfig || {};

    const defaultConfig = {
      adjectiveCount: 2,
      lang: 'en',
      strategy: null
    };

    const languageConfig = {
      en: {
        strategy: 'default'
      }
    };

    // Merge default and optional configuration
    const config = {...defaultConfig, ...optionalConfig};

    // Make sure the chosen language is in the list of supported languages
    if (Object.keys(languageConfig).indexOf(config.lang) === -1) {
      throw new Error(`Language ${config.lang} is not supported.`);
    }

    // Load the adjectives and nouns
    const lang = require(`../i18n/${config.lang}`).default;
    config.adjectives = lang.adjectives;
    config.nouns = lang.nouns;

    // Use a configured strategy, or the one associated with the configured language
    config.strategy = config.strategy || require(`./strategies/${languageConfig[config.lang].strategy}`);

    this.config = config;
  }

  generate() {
    return this.config.strategy.generate(this.config);
  }
}

export default UniquelyReadable;

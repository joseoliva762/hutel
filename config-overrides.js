const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@hooks': 'src/hooks',
    '@pages': 'src/pages',
    '@components': 'src/components',
  })(config);

  return config;
};
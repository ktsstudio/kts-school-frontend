const { alias, configPaths } = require('../lecture-4/node_modules/react-app-rewire-alias')

module.exports = function override(config) {
  return alias(configPaths('./tsconfig.paths.json'))(config);
}

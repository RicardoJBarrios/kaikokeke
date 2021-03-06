const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  moduleNameMapper: {
    ...nxPreset.moduleNameMapper,
    '^lodash-es$': 'lodash',
  },
  coverageReporters: [...nxPreset.coverageReporters, 'lcovonly', 'text'],
};

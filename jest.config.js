// jest.config.js
module.exports = {
  testEnvironment: 'node',
  verbose: true,
  setupTestFrameworkScriptFile: './setupTest.js',
  testPathIgnorePatterns: ['<rootDir>/(lib|build|docs|node_modules)/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/(node_modules|src/(config|models|utils))/',
    '<rootDir>/(server|index|jest.config|routes|setupTest).js'
  ],
  collectCoverage: true,
  coverageReporters: ['lcov']
};

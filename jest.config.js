// jest.config.js
module.exports = {
  testEnvironment: "node",
  verbose: true,
  setupTestFrameworkScriptFile: "./testConfig.js",
  testPathIgnorePatterns: ["<rootDir>/(lib|build|docs|node_modules|dist)/"],
  coveragePathIgnorePatterns: [
    "<rootDir>/(node_modules|src/(config|models|utils))/",
    "<rootDir>/(index|jest.config|testConfig).js"
  ],
  collectCoverage: true,
  coverageReporters: ["lcov"]
};

module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',
    '!src/js/reader.js',
    '!src/js/parser.js',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
};
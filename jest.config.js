/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.{js,ts}"
  ],
  coveragePathIgnorePatterns: [
    "node_modules",
    "build",
    "jest.config.js",
    "webpack.web.config.js",
    "webpack.api.config.js"
  ]
};
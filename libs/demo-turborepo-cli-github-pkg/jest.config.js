module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc-node/jest"],
  },
  modulePathIgnorePatterns: ["<rootDir>/lib"],
  moduleNameMapper: {
    "^@test-utils$": "<rootDir>/test-utils/test-utils.ts",
    "^@git$": "<rootDir>/src/util/git/git.ts",
  },
  testMatch: ["**/__tests__/**/*.test.[j|t]s?(x)"],
  testTimeout: 20000,
};

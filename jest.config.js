module.exports = {
  roots: ["<rootDir>"],
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
      '^.+\\.(css|sass|scss)$': '<rootDir>/mocks/styleMock.js',
      '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': `<rootDir>/mocks/fileMock.js`,
      '^@/components/(.*)$': '<rootDir>/components/$1',
      '^@/components/tabs/(.*)$': '<rootDir>/components/tabs/$1',
      '^@/lib/(.*)$': '<rootDir>/lib/$1',
      '^@/pages/(.*)$': '<rootDir>/pages/$1',
      '^@/models/(.*)$': '<rootDir>/models/$1',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    transform: {
      // Use babel-jest to transpile tests with the next/babel preset
      // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
      "^.+\\.tsx?$": "ts-jest",
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    setupFilesAfterEnv: [
      '<rootDir>/jest.setup.js',
      "@testing-library/react/dont-cleanup-after-each",
      "@testing-library/jest-dom/extend-expect"
    ],
    testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
  }
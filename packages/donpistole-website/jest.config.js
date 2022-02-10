module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/__mocks__/fileMock.ts',
  },
  testEnvironment: 'jsdom',
};

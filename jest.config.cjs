module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'ts', 'svelte'],
    transform: {
      '^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
      '^.+\\.(js|ts)$': 'babel-jest',
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': 'babel-jest'
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  
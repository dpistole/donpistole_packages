module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {}
    }
  },
  rules: {
    'react/prop-types': 'off',
    'no-console': ['warn'],
    'import/no-extraneous-dependencies': ['error'],
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  overrides: [
    {
      files: ['*.{test,spec,story}.ts{,x}'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
      },
    },
  ],
};

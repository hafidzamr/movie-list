module.exports = {
  extends: ['airbnb-typescript', 'airbnb/hooks', 'plugin:prettier/recommended'],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': [2, { ignore: ['children'] }],
    'linebreak-style': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};

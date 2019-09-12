module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      js: true
    }
  },
  plugins: [
    'react',
  ],
  rules: {
    'indent': 2,
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/require-default-props': [0, { forbidDefaultForRequired: true }],
    'react/no-unused-prop-types': [0],
    'react/state-in-constructor': [0],
    'react/jsx-filename-extension': [0]
  },
};

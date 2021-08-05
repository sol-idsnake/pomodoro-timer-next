module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended', 'next'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto', printWidth: 100 }],
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-console': 0,
  },
};

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'i18next'],
  rules: {
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['to', 'data-testid', 'target', 'className', 'role'],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    // ! deactivated
    'react/react-in-jsx-scope': 'off',
    'no-empty-pattern': 'off',
    'react/prop-types': 'off',
    // ? warnings
    'no-unused-vars': 'warn',
    'react/no-deprecated': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

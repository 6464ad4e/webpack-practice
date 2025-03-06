import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // off
      'react/react-in-jsx-scope': 'off',
      'no-empty-pattern': 'off',
      'react/prop-types': 'off',
      // warn
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      'react/no-deprecated': 'warn',
    },
  },
];

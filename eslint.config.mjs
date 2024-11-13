import { FlatCompat } from '@eslint/eslintrc';
const compat = new FlatCompat();

export default [
  ...compat.config({
    ignorePatterns: [
      'node_modules/',
      'dist/',
      'playwright-report',
      'test-results',
    ],
    env: {
      es2022: true,
      node: true,
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier', // Ensure prettier config is added here
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          tabWidth: 2,
          useTabs: false,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  }),
];

import eslintJs from '@eslint/js';
import eslintImport from 'eslint-plugin-import';
import eslintPrettier from 'eslint-config-prettier';
import eslintVitest from 'eslint-plugin-vitest';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  eslintJs.configs.recommended,
  eslintImport.configs.typescript,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.config({
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }),
  eslintPrettier,
  {
    // 'ignores' needs to be in its own config object
    // https://github.com/eslint/eslint/discussions/18304#discussioncomment-9069706
    // https://github.com/eslint/eslint/discussions/17429
    ignores: [
      'eslint.config.mjs',
      'coverage/**',
      'dev-dist/**',
      'dist/**',
      'node_modules/**',
      'reports/**',
      'vite.config.ts',
    ],
  },
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.node,
      },
      sourceType: 'module',
    },
    plugins: {
      import: eslintImport,
      vitest: eslintVitest,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
      'no-console': ['off'],
      'no-unresolved': 0,
      'no-unused-vars': 'off', // Use @typescript-eslint/no-unused-vars instead
      'require-await': 'error',
      'sort-imports': ['error', {ignoreDeclarationSort: true}],
      'sort-keys': ['error'],
    },
  },
  {
    files: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/__mocks__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
      '**/src/setupTests.ts',
    ],
    languageOptions: {
      globals: {
        ...eslintVitest.environments.env.globals,
      },
    },
    plugins: {
      vitest: eslintVitest,
    },
    rules: {
      ...eslintVitest.configs.recommended.rules,
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
];

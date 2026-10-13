import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores([
    'docs/.vitepress/dist/**',
    'docs/.vitepress/cache/**',
    'docs/.vitepress/.temp/**',
    'dist/**',
    '.astro/**',
    'node_modules/**',
    'test-results/**',
    'playwright-report/**',
  ]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
      globals: { window: 'readonly' },
    },
    rules: { 'vue/multi-word-component-names': 'off' },
  },
  prettier,
]);

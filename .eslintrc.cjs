/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // root: true,
  // 'extends': [
  //   'plugin:vue/vue3-essential',
  //   'eslint:recommended',
  //   '@vue/eslint-config-typescript',
  //   '@vue/eslint-config-prettier/skip-formatting'
  // ],
  // parserOptions: {
  //   ecmaVersion: 'latest'
  // }
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint'],
  rules: {}
}

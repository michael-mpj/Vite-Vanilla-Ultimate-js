module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
}

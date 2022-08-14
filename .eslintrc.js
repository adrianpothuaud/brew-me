module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'ignorePatterns': [
    '**/dist/*',
    'e2e/playwright-report/**/*',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'import',
  ],
  'rules': {
    'camelcase': 'off',
    'import/newline-after-import': ['error', { 'count': 1 }],
    'import/order': ['error', { 'alphabetize': { 'order': 'asc' }, 'groups': ['builtin', 'external', 'internal'], 'newlines-between': 'always' }],
    'indent': ['error', 2],
    'key-spacing': ['error', { 'afterColon': true }],
    'keyword-spacing': ['error', { 'after': true }],
    'linebreak-style': ['error', 'unix'],
    'max-len': 'off',
    'new-cap': 'off',
    'no-invalid-this': 'off',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'require-jsdoc': 'off',
    'semi': ['error', 'never'],
    'react/prop-types': [2],
  },
  'settings': {
    react: {
      version: 'detect',
    },
  },
}

module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['unused-imports'],
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    // 🔧 Code Quality
    'prefer-const': 'error',
    'no-var': 'error',

    // 🧹 Clean Imports & Variables
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // 📏 Formatting & Spacing
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 2],

    // ⚛️ React
    'react-hooks/exhaustive-deps': 'warn',

    // 🔇 Console
    'no-console': 'off',
  },
  ignorePatterns: [
    '.next/',
    'node_modules/',
    'out/',
    'dist/',
    '*.config.js',
    '*.config.cjs',
    'setup-env.js',
  ],
};
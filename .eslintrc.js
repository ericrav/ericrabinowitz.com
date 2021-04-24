module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'consistent-return': 'off',
    'no-return-assign': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
      },
    ],
    'import/no-unused-modules': ['off'],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-param-reassign': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-quotes': ['error', 'prefer-single'],
  },
};

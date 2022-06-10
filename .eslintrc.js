module.exports = {
  extends: 'react-app',
  rules: {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'external',
          'builtin',
          'unknown',
          'index',
          'parent',
          'sibling',
        ],
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'no-shadow': 'off',
  },
};

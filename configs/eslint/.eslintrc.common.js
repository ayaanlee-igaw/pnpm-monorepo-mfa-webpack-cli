module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow Module Federation
    'import/no-unresolved': [2, { ignore: ['^service/.*$'] }],
    // window | mac 환경 고려
    'linebreak-style': 0,
  },
};

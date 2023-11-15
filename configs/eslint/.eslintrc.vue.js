module.exports = {
  extends: [
    './.eslintrc.common.js',
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'max-len': 'off',
  },
};

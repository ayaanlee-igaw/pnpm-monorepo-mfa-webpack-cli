module.exports = {
  extends: [
    './.eslintrc.common.js',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vue/multi-word-component-names': 'off',
    'max-len': 'off',
  },
};

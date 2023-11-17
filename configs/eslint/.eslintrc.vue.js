module.exports = {
  extends: [
    "./.eslintrc.common.js",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "vuejs-accessibility/form-control-has-label": "off",
    "vue/multi-word-component-names": "off",
    // 닫는 브래킷 개행 여부
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        singleQuote: false,
        singleAttributePerLine: true,
        trailingComma: "all",
        bracketSpacing: true,
        bracketSameLine: true,
        arrowParens: "always",
        vueIndentScriptAndStyle: true,
        endOfLine: "auto",
      },
    ],
    // ts ignore 사용 여부
    // '@typescript-eslint/ban-ts-comment': 'off',
    // import 외부 의존성 허용 여부
    // 'import/no-extraneous-dependencies': 'off',
  },
};

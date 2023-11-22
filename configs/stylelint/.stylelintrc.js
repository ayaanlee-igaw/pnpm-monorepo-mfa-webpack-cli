module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugins: [
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
    "stylelint-value-no-unknown-custom-properties",
  ],
  rules: {
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "declaration-block-no-shorthand-property-overrides": null,
    // "Unexpected empty line before $-variable" 규칙을 무시
    "scss/dollar-variable-empty-line-before": null,
    // "Unexpected () used to surround statements for @-rules" 규칙을 무시
    "scss/at-rule-conditional-no-parentheses": null,
    // "Unexpected invalid position @import rule" 규칙을 무시
    "no-invalid-position-at-import-rule": null,
    // "Expected class selector ~~~ to be kebab-case" 규칙을 무시
    "selector-class-pattern": null,

    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "at-rules", // <-- important, `@media` should go before `&:pseudo`
      // "rules",
    ],
    "order/properties-alphabetical-order": null,
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false,
      },
    ],

    // stylelint-value-no-unknown-custom-properties 플러그인 설정
    "csstools/value-no-unknown-custom-properties": [
      false,
      // {
      //   importFrom: [
      //     "./src/design-system/design-tokens/design-token-css/_spacing.scss",
      //   ],
      //   resolver: {
      //     extensions: [".scss"],
      //     paths: [
      //       "./src/design-system/design-tokens/design-token-css/_spacing.scss",
      //     ],
      //     moduleDirectories: ["node_modules"],
      //   },
      // },
    ],
  },
};

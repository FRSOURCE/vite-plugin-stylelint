module.exports = {
    root: true,
    extends: [
      'stylelint-config-standard',
    ],
    rules: {
      'no-empty-source': null,
      "no-descending-specificity": null,
      "number-leading-zero": "never",
      "indentation": [
        2,
        {
          "except": ["value"],
          "severity": "warning"
        }
      ]
    },
  };
  
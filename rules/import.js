import importPlugin from "eslint-plugin-import";

export const importRules = {
  ...importPlugin.configs.recommended.rules,
  "import/first": "error",
  "import/group-exports": "error",
  "import/newline-after-import": "error",
  "import/no-absolute-path": "error",
  "import/no-amd": "warn",
  "import/no-cycle": "error",
  "import/no-deprecated": "warn",
  "import/no-dynamic-require": "error",
  "import/no-named-as-default-member": "off",
  "import/no-namespace": "error",
  "import/no-relative-packages": "warn",
  "import/no-self-import": "error",
  "import/no-unassigned-import": [
    "error",
    {
      allow: ["**/*.css", "**/*.postcss"]
    }
  ],
  "import/no-unresolved": "error",
  "import/no-useless-path-segments": [
    "error",
    {
      noUselessIndex: true
    }
  ],
  "import/no-webpack-loader-syntax": "error",
  "import/order": [
    "error",
    {
      alphabetize: {
        caseInsensitive: true,
        order: "asc"
      },
      "newlines-between": "always",
      warnOnUnassignedImports: true
    }
  ]
};
